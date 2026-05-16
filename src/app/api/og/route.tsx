import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? siteConfig.shortName;
  const subtitle =
    searchParams.get("subtitle") ?? "Chartered Accountants · Delhi NCR · Pan India";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #0a1220 0%, #1e2d45 50%, #2563a8 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85, marginBottom: 16 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          {title}
        </div>
        <div style={{ fontSize: 24, marginTop: 24, opacity: 0.9 }}>{subtitle}</div>
        <div style={{ marginTop: 40, fontSize: 18, opacity: 0.75 }}>
          GST · Income Tax · ROC · Company Registration · Virtual CFO
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
