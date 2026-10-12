import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image,
  noIndex = false,
  keywords,
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const url = `${siteConfig.url}${path}`;
  const ogImage =
    image ??
    `${siteConfig.url}/api/og?title=${encodeURIComponent(title ?? siteConfig.shortName)}`;

  return {
    title: pageTitle,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    authors: siteConfig.partners.map((p) => ({ name: p.name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: { "en-IN": url },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    icons: {
      icon: [{ url: "/ca-india-logo.png", type: "image/png" }],
      apple: [{ url: "/ca-india-logo.png", type: "image/png" }],
    },
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  };
}

function logoImage() {
  return {
    "@type": "ImageObject" as const,
    url: `${siteConfig.url}/ca-india-logo.png`,
    width: 512,
    height: 512,
    caption: siteConfig.name,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["VS Bansal & Associates", "V S Bansal Associates"],
    url: siteConfig.url,
    logo: logoImage(),
    image: logoImage(),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: String(siteConfig.founded),
    foundingLocation: {
      "@type": "Place",
      name: "Pitampura, Delhi, India",
      address: postalAddress(),
    },
    address: postalAddress(),
    naics: siteConfig.naics,
    isicV4: siteConfig.isic,
    knowsAbout: [
      "Chartered accountancy",
      "GST filing",
      "Income tax return",
      "ROC compliance",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Institute of Chartered Accountants of India",
      url: siteConfig.icaiUrl,
      sameAs: siteConfig.icaiWikidata,
    },
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "NAICS",
        value: siteConfig.naics,
      },
      {
        "@type": "PropertyValue",
        propertyID: "ISIC",
        value: siteConfig.isic,
      },
    ],
    sameAs: [
      ...Object.values(siteConfig.social),
      siteConfig.googleMapsUrl,
      siteConfig.icaiUrl,
      siteConfig.icaiWikidata,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    employee: siteConfig.partners.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.role,
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      knowsAbout: p.expertise,
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: logoImage(),
    url: siteConfig.url,
    additionalType: "https://schema.org/AccountingService",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹",
    hasMap: siteConfig.googleMapsUrl,
    slogan: siteConfig.tagline,
    knowsAbout: [
      "GST filing",
      "Income tax return",
      "ITR filing",
      "ROC compliance",
      "Company registration",
      "Chartered accountancy",
      "Accountant",
      "Tax consultant",
      "Virtual CFO",
      "Tax planning India",
    ],
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.businessHours
      .filter((b) => b.hours !== "Closed")
      .map((b) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: b.day,
        opens: "10:00",
        closes: b.day === "Saturday" ? "15:00" : "19:00",
      })),
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
    },
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    memberOf: {
      "@type": "Organization",
      name: "Institute of Chartered Accountants of India",
      sameAs: siteConfig.icaiWikidata,
    },
    sameAs: [
      ...Object.values(siteConfig.social),
      siteConfig.googleMapsUrl,
      siteConfig.icaiWikidata,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd(params: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    provider: { "@id": `${siteConfig.url}/#localbusiness` },
    areaServed: {
      "@type": "Country",
      name: params.areaServed ?? "India",
    },
    serviceType: params.name,
    category: "Accounting and Tax Services",
    audience: { "@type": "BusinessAudience", name: "SMEs and professionals in India" },
    termsOfService: `${siteConfig.url}/contact`,
    offers: {
      "@type": "Offer",
      url: params.url,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: params.price ?? "Custom quote after a short scoping call",
      seller: { "@id": `${siteConfig.url}/#localbusiness` },
    },
  };
}

export function articleJsonLd(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  wordCount?: number;
  articleSection?: string;
  keywords?: string[];
}) {
  const image =
    params.image ??
    `${siteConfig.url}/api/og?title=${encodeURIComponent(params.title)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    inLanguage: "en-IN",
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    wordCount: params.wordCount,
    articleSection: params.articleSection,
    keywords: params.keywords?.join(", "),
    author: {
      "@type": "Organization",
      name: params.author,
      url: siteConfig.url,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

export function reviewJsonLd(
  reviews: { author: string; rating: number; text: string; date?: string }[]
) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    datePublished: r.date,
    itemReviewed: { "@id": `${siteConfig.url}/#localbusiness` },
  }));
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  INTERNSHIP: "INTERN",
  ARTICLESHIP: "INTERN",
  FULL_TIME: "FULL_TIME",
  PART_TIME: "PART_TIME",
  CONTRACT: "CONTRACTOR",
};

export function jobPostingJsonLd(job: {
  title: string;
  slug: string;
  type: string;
  location: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  datePosted: string;
}) {
  const descriptionParts = [
    `<p>${job.overview}</p>`,
    job.responsibilities.length
      ? `<p><strong>Responsibilities:</strong></p><ul>${job.responsibilities
          .map((r) => `<li>${r}</li>`)
          .join("")}</ul>`
      : "",
    job.requirements.length
      ? `<p><strong>Requirements:</strong></p><ul>${job.requirements
          .map((r) => `<li>${r}</li>`)
          .join("")}</ul>`
      : "",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: descriptionParts.join(""),
    datePosted: job.datePosted,
    employmentType: EMPLOYMENT_TYPE_MAP[job.type] ?? "OTHER",
    url: `${siteConfig.url}/careers#${job.slug}`,
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
      logo: `${siteConfig.url}/ca-india-logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function combineJsonLd(...schemas: object[]) {
  return schemas;
}
