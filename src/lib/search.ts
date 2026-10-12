import { getAllPosts } from "@/lib/blog";
import { getAllSeoPages } from "@/lib/programmatic-seo";
import { services } from "@/lib/services-data";

export type SearchHit = {
  href: string;
  title: string;
  excerpt: string;
  type: "Page" | "Service" | "Article" | "Guide";
};

const staticPages: SearchHit[] = [
  { href: "/", title: "Home", excerpt: "Chartered accountant in Delhi, Pitampura and NSP.", type: "Page" },
  { href: "/about", title: "About", excerpt: "ICAI firm led by CA Sumit Bansal and CA Vineeta Bansal.", type: "Page" },
  { href: "/services", title: "Services", excerpt: "GST, ITR, ROC, audit, Virtual CFO and payroll.", type: "Page" },
  { href: "/locations", title: "Locations", excerpt: "Offices in Pitampura, Delhi NCR and Punjab.", type: "Page" },
  { href: "/contact", title: "Contact", excerpt: "Book a consultation or WhatsApp the firm.", type: "Page" },
  { href: "/careers", title: "Careers", excerpt: "Join V S bansal & associates.", type: "Page" },
  { href: "/guides", title: "Guides", excerpt: "GST, income tax and startup compliance guides.", type: "Guide" },
  { href: "/expertise", title: "Expertise", excerpt: "Partner profiles and practice areas.", type: "Page" },
  { href: "/blog", title: "Blog", excerpt: "Tax, GST and startup insights.", type: "Article" },
];

export function searchSite(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const hits: SearchHit[] = [
    ...staticPages,
    ...services.map((s) => ({
      href: `/services/${s.slug}`,
      title: s.title,
      excerpt: s.shortDescription,
      type: "Service" as const,
    })),
    ...getAllPosts().map((p) => ({
      href: `/blog/${p.slug}`,
      title: p.title,
      excerpt: p.excerpt,
      type: "Article" as const,
    })),
    ...getAllSeoPages().map((p) => ({
      href: `/${p.slug}`,
      title: p.title,
      excerpt: p.intro.slice(0, 180),
      type: p.type === "guide" ? ("Guide" as const) : ("Page" as const),
    })),
  ];

  return hits.filter(
    (hit) =>
      hit.title.toLowerCase().includes(q) ||
      hit.excerpt.toLowerCase().includes(q) ||
      hit.href.toLowerCase().includes(q.replace(/\s+/g, "-"))
  );
}
