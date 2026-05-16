import { defineConfig } from "prisma/config";

/**
 * Placeholder URL for `prisma generate` on CI/Vercel when DATABASE_URL is not set yet.
 * Runtime still requires a real DATABASE_URL in production.
 */
const databaseUrl =
  process.env.DATABASE_URL ??
  "postgresql://build:build@localhost:5432/build?schema=public";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: databaseUrl,
  },
});
