import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { searchSite } from "@/lib/search";

type Props = { searchParams: Promise<{ q?: string }> };

export async function generateMetadata({ searchParams }: Props) {
  const { q } = await searchParams;
  return buildMetadata({
    title: q ? `Search results for “${q}”` : "Search",
    description: "Search services, guides and articles from V S bansal & associates.",
    path: q ? `/search?q=${encodeURIComponent(q)}` : "/search",
    noIndex: true,
  });
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const results = q ? searchSite(q) : [];

  return (
    <div className="pb-24">
      <section className="gradient-hero border-b border-navy-100 pb-14 pt-28 dark:border-navy-800 lg:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Search", href: "/search" }]} />
          <h1 className="text-4xl font-bold text-navy-900 dark:text-white">Search</h1>
          <form action="/search" method="get" className="mt-6 flex gap-3">
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search GST, ITR, ROC, Pitampura…"
              className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none ring-royal-500 focus:ring-2 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
              aria-label="Search the website"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </section>
      <div className="mx-auto max-w-3xl space-y-4 px-4 pt-10 sm:px-6 lg:px-8">
        {q && (
          <p className="text-sm text-navy-600 dark:text-navy-300">
            {results.length} result{results.length === 1 ? "" : "s"} for “{q}”
          </p>
        )}
        {results.map((hit) => (
          <Card key={hit.href}>
            <CardHeader>
              <p className="text-xs font-semibold uppercase tracking-wider text-royal-600">{hit.type}</p>
              <CardTitle className="text-lg">
                <Link href={hit.href} className="hover:text-royal-600">
                  {hit.title}
                </Link>
              </CardTitle>
              <CardDescription>{hit.excerpt}</CardDescription>
            </CardHeader>
          </Card>
        ))}
        {q && results.length === 0 && (
          <p className="text-navy-600 dark:text-navy-300">
            No matches. Try “GST”, “ITR”, or a city name, or{" "}
            <Link href="/contact" className="text-royal-600 hover:underline">
              contact the firm
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
