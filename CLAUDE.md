# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server (Turbopack enabled)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
pnpm test         # Run unit tests (Vitest)
pnpm test:watch   # Watch mode for unit tests
pnpm test:ui      # Vitest UI
pnpm test:e2e     # Run Playwright E2E tests
pnpm test:all     # Run unit + E2E tests
pnpm check        # Lint + Build + Test
```

## Architecture

This is a personal portfolio website for a DeFi smart contract engineer, built with Next.js 16 (App Router) using a single-page application structure with internationalization support.

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Tailwind v4 + CSS variables
│   ├── robots.ts               # SEO robots.txt generation
│   ├── sitemap.ts              # SEO sitemap generation
│   ├── api/meta-capi/route.ts  # Meta Conversions API endpoint
│   └── [locale]/               # Locale-aware routing (en, id)
│       ├── layout.tsx          # Locale layout with metadata & scripts
│       ├── page.tsx            # Main SPA (Hero, About, Projects, Products, Contact)
│       ├── not-found.tsx       # 404 page
│       └── products/           # Product pages
├── components/
│   ├── layout/                 # Header, Footer, ThemeProvider, LanguageSwitcher
│   ├── sections/               # Hero, About, Projects, Products, Contact
│   ├── products/               # EbookMockup, LeadMagnetForm
│   └── ui/                     # shadcn/ui components (new-york style)
├── data/
│   ├── site.ts                 # Site config (SEO, author, analytics IDs)
│   ├── projects.ts             # Portfolio projects with getFeaturedProjects()
│   ├── products.ts             # Digital products with formatPrice()
│   ├── socials.ts              # Social links with getSocialUrls()
│   ├── navigation.ts           # Nav items and external links
│   └── faqs.ts                 # FAQ items for SEO
├── lib/
│   ├── utils.ts                # cn() className helper
│   ├── seo.ts                  # JSON-LD schema generators (8 types)
│   └── analytics.ts            # GA4, Meta Pixel, CAPI tracking
├── types/index.ts              # TypeScript interfaces
├── i18n/                       # next-intl configuration
│   ├── config.ts               # Locale definitions (en, id)
│   ├── routing.ts              # Routing setup
│   └── request.ts              # Server-side locale resolution
└── test/                       # Test configuration
messages/
├── en.json                     # English translations
└── id.json                     # Indonesian translations
```

### Key Technical Decisions

- **Next.js 16** with Turbopack for fast development
- **Tailwind CSS v4** with OKLCH color space variables
- **shadcn/ui** components (new-york style, Lucide icons)
- **next-intl** for i18n with locale-prefixed routing (`/en/`, `/id/`)
- **Dark mode default** with next-themes
- **Motion** (Framer Motion) for animations
- **SEO-first** - 8 JSON-LD schema types, robots.ts, sitemap.ts, hreflang tags
- **Analytics** - GA4, Meta Pixel, Meta Conversions API with event deduplication
- **Testing** - Vitest for unit tests, Playwright for E2E

### Adding Content

To add a new project, edit `src/data/projects.ts` following the `Project` interface.

To add a new product, edit `src/data/products.ts` following the `Product` interface.

To add translations, update both `messages/en.json` and `messages/id.json`.

### Environment Variables

```
NEXT_PUBLIC_GA_ID                     # Google Analytics 4 ID
NEXT_PUBLIC_META_PIXEL_ID             # Meta Pixel ID
NEXT_PUBLIC_GTM_ID                    # Google Tag Manager ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION  # Google Search Console verification
```
