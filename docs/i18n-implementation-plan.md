# i18n Implementation Plan: English & Indonesian

## Overview
Add URL-based internationalization (`/en/...` and `/id/...`) with a language toggle in the header using `next-intl`.

**Requirements:**
- English as default language
- URL-based routing for SEO
- Language toggle dropdown in header (next to theme toggle)
- Full SEO support (hreflang, localized sitemap)

---

## Implementation Steps

### Step 1: Install next-intl
```bash
pnpm add next-intl
```

### Step 2: Create i18n Configuration

**Create `src/i18n/config.ts`:**
```typescript
export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
};
```

**Create `src/i18n/request.ts`:**
```typescript
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'en';
  }
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

**Create `src/i18n/routing.ts`:**
```typescript
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
```

### Step 3: Update next.config.ts
```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = { /* existing config */ };

export default withNextIntl(nextConfig);
```

### Step 4: Create Middleware
**Create `src/middleware.ts`:**
```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### Step 5: Create Translation Files

**Create `messages/en.json`** and **`messages/id.json`** with structure:
```json
{
  "metadata": { "title": "...", "description": "..." },
  "navigation": { "about": "About", "projects": "Projects", "contact": "Contact" },
  "hero": { "greeting": "...", "cta": { "work": "See my work", "collaborate": "Let's collaborate" } },
  "about": { "label": "What I Build", "title": "...", "description": "..." },
  "projects": { "label": "Selected Work" },
  "contact": { "label": "Get In Touch", "title": "Let's Build" },
  "languageSwitcher": { "label": "Language" }
}
```

### Step 6: Restructure App Directory

**Move files into `[locale]` folder:**
```
src/app/
├── [locale]/
│   ├── layout.tsx      ← move & modify from src/app/layout.tsx
│   ├── page.tsx        ← move from src/app/page.tsx
│   ├── not-found.tsx   ← move from src/app/not-found.tsx
│   └── products/       ← move entire folder
├── layout.tsx          ← NEW minimal root (just returns children)
├── globals.css         ← stays
├── sitemap.ts          ← stays (update for multi-locale)
├── robots.ts           ← stays
└── api/                ← stays
```

### Step 7: Update Root Layout
**New `src/app/layout.tsx`** (minimal):
```typescript
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

### Step 8: Update Locale Layout
**`src/app/[locale]/layout.tsx`** - key changes:
- Add `NextIntlClientProvider` wrapper
- Dynamic `lang` attribute: `<html lang={locale}>`
- Dynamic metadata with `generateMetadata()`
- Add hreflang links in `<head>`
- Update `generateStaticParams()` to return all locales

### Step 9: Create Language Switcher
**Create `src/components/layout/language-switcher.tsx`:**
- Uses dropdown-menu component (already exists)
- Globe icon trigger button
- Lists English and Bahasa Indonesia options
- Uses `useRouter` from `@/i18n/routing` to switch locales

### Step 10: Update Header
**Modify `src/components/layout/header.tsx`:**
- Import `Link` from `@/i18n/routing` (not `next/link`)
- Import `useTranslations` for nav labels
- Add `<LanguageSwitcher />` next to `<ThemeToggle />`

### Step 11: Update Section Components
Update each component to use translations:
- `src/components/sections/hero.tsx`
- `src/components/sections/about.tsx`
- `src/components/sections/projects.tsx`
- `src/components/sections/contact.tsx`
- `src/components/layout/footer.tsx`

**Pattern for each:**
```typescript
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function Hero() {
  const t = useTranslations('hero');
  return <h1>{t('greeting')}</h1>;
}
```

### Step 12: Update Sitemap for Multi-Locale
**Modify `src/app/sitemap.ts`:**
- Generate entries for each locale
- Add `alternates.languages` for hreflang

---

## Files to Create (New)
| File | Purpose |
|------|---------|
| `src/i18n/config.ts` | Locale configuration |
| `src/i18n/request.ts` | next-intl server config |
| `src/i18n/routing.ts` | Navigation utilities |
| `src/middleware.ts` | Locale detection & routing |
| `messages/en.json` | English translations |
| `messages/id.json` | Indonesian translations |
| `src/components/layout/language-switcher.tsx` | Language toggle |

## Files to Modify
| File | Changes |
|------|---------|
| `next.config.ts` | Wrap with `createNextIntlPlugin` |
| `src/app/layout.tsx` | Simplify to minimal root |
| `src/app/[locale]/layout.tsx` | Move content here, add i18n provider |
| `src/app/[locale]/page.tsx` | Add locale param |
| `src/app/sitemap.ts` | Multi-locale entries |
| `src/components/layout/header.tsx` | Add language switcher, use i18n Link |
| `src/components/sections/*.tsx` | Use `useTranslations` |
| `src/data/navigation.ts` | Add translation keys |

## Files to Move
- `src/app/page.tsx` → `src/app/[locale]/page.tsx`
- `src/app/not-found.tsx` → `src/app/[locale]/not-found.tsx`
- `src/app/products/` → `src/app/[locale]/products/`

---

## Verification Steps

1. **Build check:** `pnpm build` - no errors
2. **URL routing:**
   - `/` redirects to `/en`
   - `/en` and `/id` both load homepage
   - `/en/products` and `/id/products` work
3. **Language toggle:**
   - Clicking toggle switches URL and content
   - Current path is preserved when switching
4. **SEO check:**
   - View source: `<html lang="en">` or `<html lang="id">`
   - Check hreflang tags in `<head>`
   - Visit `/sitemap.xml` - has all locale URLs
5. **Content:**
   - All text displays in selected language
   - Navigation labels translate correctly

---

## Estimated Effort
- ~80-100 translation strings
- ~15 files to create/modify
- Straightforward implementation with `next-intl`
