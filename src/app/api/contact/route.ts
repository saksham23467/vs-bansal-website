import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { siteConfig } from "@/lib/site-config";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please add a short message (10+ characters)"),
});

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const limit = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const honeypot = req.headers.get("x-company-url");
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, phone, service, message } = parsed.data;

  const lead = await prisma.lead.create({
    data: {
      name,
      email,
      phone: phone || null,
      service: service || null,
      message,
      source: "website",
    },
  });

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL ?? siteConfig.email;

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM ?? "VS Bansal & Associates <onboarding@resend.dev>",
        to: [notifyTo],
        replyTo: email,
        subject: `New lead: ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone ?? "—"}`,
          `Service: ${service ?? "—"}`,
          "",
          message,
        ].join("\n"),
      });
    } catch (e) {
      console.error("Resend error", e);
    }
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
