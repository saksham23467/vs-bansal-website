import Link from "next/link";
import { localSearchLinks } from "@/lib/local-search-links";

const links = localSearchLinks.slice(0, 8);

export function LocalSeoStrip() {
  return (
    <nav
      aria-label="Popular CA searches"
      className="border-y border-navy-100 bg-white py-4 dark:border-navy-800 dark:bg-navy-900/40"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
          Find us:
        </span>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-navy-200 bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-800 transition-colors hover:border-royal-300 hover:bg-royal-50 hover:text-royal-700 dark:border-navy-700 dark:bg-navy-800 dark:text-navy-100 dark:hover:border-royal-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
