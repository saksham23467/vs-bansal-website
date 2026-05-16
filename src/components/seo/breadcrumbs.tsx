import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

export type BreadcrumbItem = { name: string; href: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all.map((i) => ({ name: i.name, url: i.href })))} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-500">
          {all.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />}
              {index === all.length - 1 ? (
                <span className="font-medium text-navy-800 dark:text-navy-200" aria-current="page">
                  {index === 0 ? <Home className="h-4 w-4" aria-label="Home" /> : item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-royal-600 transition-colors"
                >
                  {index === 0 ? <Home className="h-4 w-4" aria-label="Home" /> : item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
