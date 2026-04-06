# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Eduardo Pico Designs (`artifacts/eduardo-pico-designs`)
- **Type**: react-vite, presentation-first, no backend
- **Preview Path**: `/`
- **Description**: Full luxury e-commerce homepage for Eduardo Pico Designs — a custom crafted decor brand
- **Tech**: React + Vite, Tailwind CSS, Framer Motion, react-hook-form + zod, lucide-react, react-icons
- **Fonts**: Playfair Display (serif), DM Sans (sans)
- **Color Palette**: Warm luxury — creamy off-whites, deep warm taupes, rich bronze/gold accents (#primary ~35° bronze), dark charcoal text
- **Sections**: AnnouncementBar, Navbar, Hero, Collections, About, HowItWorks, Business, Testimonials, GivingBack, Contact, Footer
- **Components**: All in `artifacts/eduardo-pico-designs/src/components/`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/eduardo-pico-designs run dev` — run the website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
