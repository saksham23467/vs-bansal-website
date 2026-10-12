import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Office = (typeof siteConfig.offices)[number];

export function OfficeLocation({
  office,
  className,
}: {
  office?: Office;
  className?: string;
}) {
  const place = office ?? siteConfig.offices[0];
  return (
    <address className={className ?? "not-italic"}>
      <p className="font-semibold text-navy-900 dark:text-white">
        {place.label} — {place.region}
      </p>
      <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
        {place.line1}
        <br />
        {place.line2}
        <br />
        {place.city}, {place.state} {place.postalCode}
        <br />
        {place.country}
      </p>
      {place.region === "Delhi NCR" && (
        <p className="mt-3 text-sm text-navy-600 dark:text-navy-300">
          Landmark: PP Trade Centre / District Centre, a short walk from Netaji
          Subhash Place metro (Red and Pink lines).
        </p>
      )}
      <a
        href={place.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-royal-600 hover:underline"
      >
        <MapPin className="h-4 w-4" />
        Get directions on Google Maps
      </a>
    </address>
  );
}
