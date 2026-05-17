import { execSync } from "node:child_process";

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL =
    "postgresql://build:build@localhost:5432/build?schema=public";
}

execSync("npx prisma generate", { stdio: "inherit", env: process.env });
