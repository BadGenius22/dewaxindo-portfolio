# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server (Turbopack enabled)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
```

## Architecture

This is a personal portfolio website for a DeFi smart contract engineer, built with Next.js 16 (App Router) using a single-page application structure.

### Project Structure

- **`src/app/`** - Next.js App Router pages. `page.tsx` contains all portfolio sections (Hero, About, Projects, Products, Contact) as a single-page layout.
- **`src/data/`** - Static content files that power the site:
  - `site.ts` - Centralized site config (SEO metadata, author info, social handles, analytics IDs)
  - `projects.ts` - Portfolio project entries with type `Project`
  - `products.ts` - Digital products for sale (Gumroad integration) with type `Product`
  - `socials.ts` - Social media links
  - `navigation.ts` - Nav items
- **`src/types/index.ts`** - TypeScript interfaces for all data structures
- **`src/lib/`** - Utility functions:
  - `seo.ts` - JSON-LD structured data generators (Schema.org markup)
  - `analytics.ts` - GA4 and Meta Pixel tracking utilities
  - `utils.ts` - shadcn/ui className helper
- **`src/components/ui/`** - shadcn/ui components (new-york style)

### Key Technical Decisions

- **Tailwind CSS v4** with CSS variables for theming (oklch color space)
- **shadcn/ui** components configured via `components.json` (new-york style, lucide icons)
- **Dark mode default** with theme stored in localStorage
- **Analytics ready** - GA4 and Meta Pixel scripts load conditionally based on env vars
- **SEO-first** - Extensive structured data (Person, Website, ProfessionalService, Product schemas), robots.ts, sitemap.ts

### Adding Content

To add a new project, edit `src/data/projects.ts` and follow the `Project` interface from `src/types/index.ts`.

To add a new product, edit `src/data/products.ts` and follow the `Product` interface.

### Environment Variables

```
NEXT_PUBLIC_GA_ID           # Google Analytics 4 ID
NEXT_PUBLIC_META_PIXEL_ID   # Meta Pixel ID
NEXT_PUBLIC_GTM_ID          # Google Tag Manager ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION  # Google Search Console verification
```
