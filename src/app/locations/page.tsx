import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { OfficeLocation } from "@/components/seo/office-location";
import { Card, CardContent } from "@/components/ui/card";
import { localSearchLinks } from "@/lib/local-search-links";
import { getTelHref, siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Our offices",
  description:
    "Visit V S bansal & associates in Pitampura (Netaji Subhash Place / NSP) and Punjab. CA near me, ITR filing, GST, and accountant services for Delhi NCR and India.",
  path: "/locations",
  keywords: [
    "CA firm Delhi NCR",
    "CA firm Punjab",
    "chartered accountant Pitampura",
    "CA in NSP",
    "CA in Netaji Subhash Place",
    "CA near me Pitampura",
    "chartered accountant Baltana Punjab",
    "GST consultant Delhi NCR",
  ],
});

export default function LocationsPage() {
  return (
    <div className="pb-24">
      <section className="gradient-hero border-b border-navy-100 pb-12 pt-28 dark:border-navy-800 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />
          <h1 className="mt-4 text-4xl font-bold text-navy-900 dark:text-white">
            Our offices
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-600 dark:text-navy-300">
            Visit us at our offices in Delhi NCR and Punjab. We support clients
            across India with GST, income tax, ROC, audit, and Virtual CFO
            services—in person and remotely.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {siteConfig.offices.map((office) => (
              <Card key={office.region} className="overflow-hidden">
                <CardContent className="space-y-5 p-6 sm:p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-royal-600">
                      {office.label}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-navy-900 dark:text-white">
                      {office.region}
                    </h2>
                  </div>

                  <div className="flex gap-3 text-sm text-navy-600 dark:text-navy-300">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-royal-600" />
                    <div>
                      <p>{office.line1}</p>
                      <p>{office.line2}</p>
                      <p>
                        {office.city}, {office.state} {office.postalCode}
                      </p>
                      <p>{office.country}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <a
                      href={getTelHref()}
                      className="inline-flex items-center gap-2 font-medium text-royal-600 hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-2 text-royal-600 hover:underline"
                    >
                      <Mail className="h-4 w-4" />
                      {siteConfig.email}
                    </a>
                  </div>

                  <div className="rounded-xl border border-navy-100 p-4 dark:border-navy-800">
                    <OfficeLocation office={office} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
              Popular searches
            </h2>
            <p className="mt-2 max-w-2xl text-navy-600 dark:text-navy-300">
              People looking for a CA near Pitampura and Netaji Subhash Place often search these terms.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {localSearchLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-royal-300 hover:bg-royal-50 hover:text-royal-700 dark:border-navy-700 dark:bg-navy-900 dark:text-navy-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
