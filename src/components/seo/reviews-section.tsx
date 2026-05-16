import { JsonLd } from "@/components/seo/json-ld";
import { reviewJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Star } from "lucide-react";

const reviews = [
  {
    author: "Rahul Mehta",
    rating: 5,
    text: "CA Sumit Bansal and team handled our GST and ROC filings flawlessly. Highly professional and responsive.",
    date: "2025-11-12",
  },
  {
    author: "Priya Sharma",
    rating: 5,
    text: "Best CA firm in Pitampura for startups. CA Vineeta guided us through incorporation and first-year compliance.",
    date: "2025-10-03",
  },
  {
    author: "Ankit Verma",
    rating: 5,
    text: "Transparent fees, clear communication, and zero missed deadlines for our tax and payroll work.",
    date: "2025-09-18",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-50/50 dark:bg-navy-900/30">
      <JsonLd data={reviewJsonLd(reviews)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-royal-600">Google Reviews</p>
          <h2 className="mt-2 text-3xl font-bold text-navy-900 dark:text-white">
            Trusted by {siteConfig.rating.count}+ clients
          </h2>
          <p className="mt-2 flex items-center justify-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-navy-700 dark:text-navy-200">{siteConfig.rating.value} average rating</span>
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote
              key={r.author}
              className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm dark:border-navy-800 dark:bg-navy-900"
            >
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-navy-700 dark:text-navy-300">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-navy-900 dark:text-white">— {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
