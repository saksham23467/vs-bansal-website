# VS Bansal & Associates — Website

Production marketing site for **VS Bansal & Associates** (CA Sumit Bansal & CA Vineeta Bansal), Pitampura, Delhi. Includes programmatic local SEO (83+ city/service pages), blog, contact API (Prisma + Resend), client portal, and admin area — Next.js 16 + Auth.js v5.

## Prerequisites

- Node.js 20+
- PostgreSQL database

## Setup

1. **Clone and install**

   ```bash
   npm install
   ```

   `postinstall` runs `prisma generate` automatically.

2. **Environment**

   ```bash
   cp .env.example .env.local
   ```

   Set `DATABASE_URL` and `AUTH_SECRET` (e.g. `openssl rand -base64 32`). For local auth callbacks, set `NEXTAUTH_URL` / `NEXT_PUBLIC_SITE_URL` to `http://localhost:3000`.

3. **Database schema**

   ```bash
   npm run db:push
   ```

   Or use migrations if you prefer:

   ```bash
   npx prisma migrate dev
   ```

4. **Seed demo users**

   ```bash
   npm run db:seed
   ```

   - Admin: `admin@vsbansalassociates.com` / `Admin@123`
   - Client: `client@vsbansalassociates.com` / `Client@123`

## SEO architecture

- **Programmatic pages**: `/chartered-accountant-delhi`, `/gst-consultant-noida`, etc. (10 cities × 7 services + guides)
- **Schema**: Organization, LocalBusiness/AccountingService, FAQ, Article, Review, Breadcrumb, Service
- **Sitemap & robots**: Auto-generated at `/sitemap.xml` and `/robots.txt`
- **Dynamic OG**: `/api/og?title=...`
- **Blog SEO**: Category/tag archives, TOC, related posts
- **Analytics**: Set `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GSC_VERIFICATION` in `.env.local`

Update `src/lib/site-config.ts` with your real phone number and Google Maps embed URL before launch.

5. **Develop**

   ```bash
   npm run dev
   ```

6. **Production build**

   ```bash
   npm run build
   npm start
   ```

## Scripts

| Script        | Description                |
| ------------- | -------------------------- |
| `db:generate` | `prisma generate`         |
| `db:push`     | Push schema to the database |
| `db:seed`     | Run `prisma/seed.ts`      |

## Content

Blog posts live in `content/blog/` as Markdown with YAML front matter (`title`, `excerpt`, `category`, `tags`, `date`, `author`, `featured`, optional `coverImage`).

## Contact

`POST /api/contact` validates input, stores a `Lead` in Prisma, and—if `RESEND_API_KEY` is set—sends a notification to `CONTACT_NOTIFY_EMAIL`.

## Licence

Private / All rights reserved unless otherwise stated.
