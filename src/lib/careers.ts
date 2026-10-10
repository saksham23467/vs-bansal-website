import "server-only";
import { prisma } from "@/lib/prisma";
import { defaultJobs, type CareerJob } from "@/lib/careers-data";

type DbJob = Awaited<ReturnType<typeof prisma.job.findMany>>[number];

function mapJob(job: DbJob): CareerJob {
  return {
    id: job.id,
    slug: job.slug,
    title: job.title,
    location: job.location,
    type: job.type,
    duration: job.duration,
    experience: job.experience,
    compensation: job.compensation,
    overview: job.overview,
    responsibilities: job.responsibilities,
    requirements: job.requirements,
    preferred: job.preferred,
    benefits: job.benefits,
    exposureAreas: job.exposureAreas,
    status: job.status,
    order: job.order,
  };
}

const hiddenPublicSlugs = ["ca-intern", "chartered-accountant"];

/**
 * Public job listing for the careers page. Returns OPEN jobs from the database,
 * excluding the former CA Intern and Chartered Accountant postings.
 */
export async function getPublicJobs(): Promise<CareerJob[]> {
  try {
    const jobs = await prisma.job.findMany({
      where: {
        status: "OPEN",
        slug: { notIn: hiddenPublicSlugs },
      },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
    return jobs.map(mapJob);
  } catch {
    return defaultJobs.filter((j) => j.status === "OPEN");
  }
}
