import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin",
  description: "VS Bansal & Associates internal dashboard",
  path: "/admin",
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [leadCount, userCount] = await Promise.all([
    prisma.lead.count(),
    prisma.user.count(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Operations overview</h1>
        <p className="mt-2 text-sm text-navy-300">High-level counters from Prisma—wire CRM views as you scale.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Card id="leads" className="scroll-mt-28 border-navy-800 bg-navy-900/60">
          <CardHeader>
            <CardTitle className="text-lg text-white">Website leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-royal-400">{leadCount}</p>
            <p className="mt-2 text-sm text-navy-400">Total submissions from /api/contact</p>
            <Button asChild variant="secondary" className="mt-4" size="sm">
              <Link href="/contact">View contact page</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-navy-800 bg-navy-900/60">
          <CardHeader>
            <CardTitle className="text-lg text-white">Portal users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-royal-400">{userCount}</p>
            <p className="mt-2 text-sm text-navy-400">Clients, staff, and admins in User table</p>
          </CardContent>
        </Card>
      </div>
      <Card id="reports" className="border-navy-800 bg-navy-900/60 scroll-mt-28">
        <CardHeader>
          <CardTitle className="text-lg text-white">Reports</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-navy-300">
          Export pipelines, ageing analysis, and partner workload can plug in here. For now this page validates admin
          access, database connectivity, and layout.
        </CardContent>
      </Card>
      <Button asChild variant="outline" className="border-navy-600 text-white hover:bg-navy-800">
        <Link href="/portal">Back to portal</Link>
      </Button>
    </div>
  );
}
