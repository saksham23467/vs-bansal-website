import type { JobStatus, JobType } from "@prisma/client";

export type CareerJob = {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: JobType;
  duration: string | null;
  experience: string | null;
  compensation: string | null;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  benefits: string[];
  exposureAreas: string[];
  status: JobStatus;
  order: number;
};

export const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB

export const JOB_TYPE_LABELS: Record<JobType, string> = {
  INTERNSHIP: "Internship",
  ARTICLESHIP: "Articleship",
  FULL_TIME: "Full Time",
  PART_TIME: "Part Time",
  CONTRACT: "Contract",
};

export const JOB_TYPES: { value: JobType; label: string }[] = (
  Object.keys(JOB_TYPE_LABELS) as JobType[]
).map((value) => ({ value, label: JOB_TYPE_LABELS[value] }));

export const JOB_STATUSES: { value: JobStatus; label: string }[] = [
  { value: "OPEN", label: "Open" },
  { value: "CLOSED", label: "Closed" },
  { value: "DRAFT", label: "Draft" },
];

export const APPLICATION_STATUSES = [
  "NEW",
  "REVIEWING",
  "SHORTLISTED",
  "REJECTED",
  "HIRED",
] as const;

export const QUALIFICATION_OPTIONS = [
  "B.Com / BBA Student",
  "B.Com / BBA Graduate",
  "CA Foundation",
  "CA Intermediate",
  "CA Final (Pursuing)",
  "Qualified Chartered Accountant",
  "M.Com / MBA",
  "Other",
] as const;

/**
 * Fallback listings when the careers table is empty or unavailable.
 * Live openings are managed from /portal/admin/careers.
 */
export const defaultJobs: CareerJob[] = [];

export function jobCompensationLabel(job: CareerJob): string | null {
  return job.compensation ?? null;
}

export function jobMetaLine(job: CareerJob): string {
  const parts = [JOB_TYPE_LABELS[job.type], job.location];
  if (job.duration) parts.push(job.duration);
  if (job.experience) parts.push(job.experience);
  return parts.filter(Boolean).join(" · ");
}
