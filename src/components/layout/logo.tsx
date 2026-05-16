import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-royal-600 shadow-lg shadow-navy-600/30 transition-transform group-hover:scale-105">
        <span className="text-lg font-bold text-white">A</span>
        <div className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-royal-400 ring-2 ring-white" />
      </div>
      <div className="hidden sm:block">
        <p className="text-base font-bold leading-tight text-navy-900 dark:text-slate-50">
          {siteConfig.shortName}
        </p>
        <p className="text-xs font-medium text-navy-600 dark:text-slate-400">Chartered Accountants</p>
      </div>
    </Link>
  );
}
