"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MessageCircle, Calendar, Phone, X } from "lucide-react";
import { getTelHref, getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const whatsappUrl = getWhatsAppUrl();

export function FloatingCta() {
  const [expanded, setExpanded] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const track = (event: string) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
        "event",
        event,
        { event_category: "cta" }
      );
    }
  };

  return (
    <>
      {/* Mobile sticky bar */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy-200 bg-white/95 p-3 backdrop-blur-lg transition-transform lg:hidden dark:border-navy-800 dark:bg-navy-950/95",
          showSticky ? "translate-y-0" : "translate-y-full"
        )}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          onClick={() => track("consultation_click")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-700 py-3 text-sm font-semibold text-white"
        >
          <Calendar className="h-5 w-5" />
          Consult
        </Link>
        <a
          href={getTelHref()}
          onClick={() => track("call_click")}
          className="flex items-center justify-center rounded-xl border border-navy-200 px-4 dark:border-navy-700"
          aria-label="Call"
        >
          <Phone className="h-5 w-5 text-navy-700 dark:text-white" />
        </a>
      </div>

      {/* Desktop floating */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 lg:flex">
        {expanded && (
          <div className="flex flex-col gap-2 rounded-2xl border border-navy-100 bg-white p-2 shadow-xl dark:border-navy-800 dark:bg-navy-900">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click")}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-800 hover:bg-emerald-50 dark:text-white dark:hover:bg-emerald-900/20"
            >
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              WhatsApp us
            </a>
            <Link
              href="/contact"
              onClick={() => track("consultation_click")}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-800 hover:bg-navy-50 dark:text-white dark:hover:bg-navy-800"
            >
              <Calendar className="h-5 w-5 text-royal-600" />
              Book consultation
            </Link>
            <a
              href={getTelHref()}
              onClick={() => track("call_click")}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-800 hover:bg-navy-50 dark:text-white dark:hover:bg-navy-800"
            >
              <Phone className="h-5 w-5 text-royal-600" />
              Call {siteConfig.phoneDisplay}
            </a>
            {siteConfig.calendlyUrl && (
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("calendly_click")}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-800 hover:bg-navy-50 dark:text-white"
              >
                <Calendar className="h-5 w-5 text-royal-600" />
                Schedule on Calendly
              </a>
            )}
          </div>
        )}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/40 transition-transform hover:scale-105"
          aria-label={expanded ? "Close menu" : "Contact options"}
        >
          {expanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </>
  );
}
