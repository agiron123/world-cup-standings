# World Cup Standings

Live World Cup standings tracker — groups, match results, and live scores.

## Stack

- **Web:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui
- **API:** Hono (Cloudflare Workers)
- **DB:** Drizzle ORM + SQLite (local) / Neon (production)
- **Monorepo:** Turborepo + pnpm

## Structure

```
apps/
  web/     Next.js frontend
  api/     Hono API (Cloudflare Workers)
packages/
  db/      Drizzle schema and client
```

## Setup

```bash
pnpm install
pnpm dev
```

## Database

```bash
# Generate migrations
pnpm --filter @repo/db generate

# Apply migrations
pnpm --filter @repo/db migrate
```

## Deploy

Web app deploys automatically to Vercel on push to `main`.