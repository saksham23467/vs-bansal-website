import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-royal-600">404</p>
      <h1 className="mt-3 text-4xl font-bold text-navy-900 dark:text-white">
        This page does not exist
      </h1>
      <p className="mt-4 text-navy-600 dark:text-navy-300">
        The URL is not a published page on {siteConfig.name}. Use search or return home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/search">Search the site</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
