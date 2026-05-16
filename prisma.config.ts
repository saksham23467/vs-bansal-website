import "dotenv/config";
import { defineConfig } from "prisma/config";

/**
 * Loads DATABASE_URL from .env / .env.local.
 * Placeholder only used for `prisma generate` on CI when unset.
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
