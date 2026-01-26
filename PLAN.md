# Dewaxindo Portfolio Website - Implementation Plan

## Overview
Single-page portfolio website with digital product storefront for a DeFi Smart Contract Engineer.

**Tech Stack:** Next.js 16 (App Router + Turbopack), TypeScript, Tailwind CSS v4, Motion, pnpm, Vercel

---

## 1. Project Structure

```
Dewaxindo-Portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png                 # 1200x630 OpenGraph image
│   └── images/
│       ├── profile.jpg              # 400x400 professional headshot
│       ├── projects/
│       │   ├── factor-finance.png   # 800x450 screenshot/mockup
│       │   ├── rekon-gg.png
│       │   ├── lazorkit-sdk.png
│       │   └── vouch-protocol.png
│       └── products/
│           └── web3-starter-kit.png # 600x800 product cover
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout + metadata + theme
│   │   ├── page.tsx                 # Main single-page app
│   │   └── globals.css              # Tailwind v4 + custom styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Fixed nav with smooth scroll
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx      # Dark/light mode switch
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Products.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionHeading.tsx
│   │       └── AnimatedSection.tsx  # Motion wrapper for scroll reveal
│   ├── data/
│   │   ├── projects.ts
│   │   ├── products.ts
│   │   └── socials.ts
│   ├── lib/
│   │   └── utils.ts                 # cn() helper
│   └── types/
│       └── index.ts
├── tailwind.config.ts
├── next.config.ts
├── pnpm-lock.yaml
└── package.json
```

---

## 2. Tech Stack Details (Latest Versions)

### Next.js 16 with Turbopack
```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Next.js 16: turbopack at top-level (not experimental)
  turbopack: {
    // Turbopack options
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
```

### Tailwind CSS v4 with Dark Mode
```css
/* globals.css - Tailwind v4 syntax */
@import "tailwindcss";

/* Custom dark mode variant using class selector */
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
}
```

### Motion (Latest Framer Motion)
```typescript
// AnimatedSection.tsx - Modern Motion API
import { motion } from "motion/react"

export function AnimatedSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## 3. Vercel React Best Practices Integration

### Critical: Bundle Optimization
```typescript
// Direct imports instead of barrel files
import Check from 'lucide-react/dist/esm/icons/check'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'

// OR use optimizePackageImports in next.config.ts
```

### Critical: Parallel Data Fetching
```tsx
// Correct: sibling components fetch in parallel
export default function Page() {
  return (
    <div>
      <Header />   {/* fetches in parallel */}
      <Projects /> {/* fetches in parallel */}
    </div>
  )
}
```

### High: Strategic Suspense Boundaries
```tsx
function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Products />
      <Contact />
    </div>
  )
}
```

### Medium: Re-render Optimization
```typescript
// Functional setState for stable callbacks
const [items, setItems] = useState(initialItems)

const addItem = useCallback((newItem: Item) => {
  setItems(curr => [...curr, newItem])
}, []) // No dependencies needed

// Use toSorted() for immutability
const sortedProjects = projects.toSorted((a, b) => b.year - a.year)
```

---

## 4. Web Interface Guidelines Compliance

### Accessibility Requirements
```tsx
// Button component with proper accessibility
<button
  aria-label={ariaLabel}
  className="focus-visible:ring-2 focus-visible:ring-brand-500"
>
  {icon && <span aria-hidden="true">{icon}</span>}
  {children}
</button>

// Icon-only buttons MUST have aria-label
<button aria-label="Open menu">
  <MenuIcon aria-hidden="true" />
</button>
```

### Animation with Motion Preferences
```tsx
// Respect prefers-reduced-motion
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  // Motion automatically respects prefers-reduced-motion
/>

// CSS fallback
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Images with Layout Shift Prevention
```tsx
// Always include width/height
<Image
  src="/images/profile.jpg"
  alt="Dewangga Praxindo"
  width={400}
  height={400}
  priority // Above-fold image
/>

// Below-fold images
<Image
  src="/images/projects/factor-finance.png"
  alt="Factor Finance dashboard"
  width={800}
  height={450}
  loading="lazy"
/>
```

### Dark Mode Setup
```tsx
// layout.tsx
<html lang="en" className="dark" suppressHydrationWarning>
  <head>
    <meta name="color-scheme" content="dark light" />
    <meta name="theme-color" content="#09090b" />
  </head>
  <body>
    <script dangerouslySetInnerHTML={{
      __html: `
        (function() {
          try {
            var theme = localStorage.getItem('theme');
            if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
              document.documentElement.classList.remove('dark');
            }
          } catch (e) {}
        })();
      `
    }} />
    {children}
  </body>
</html>
```

---

## 5. Data Structures

```typescript
// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  metrics?: string;
  links: { live?: string; github?: string; docs?: string; };
  featured: boolean;
  role: string;
  year: number;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  type: "pdf" | "course" | "template";
  purchaseUrl: string;
  features: string[];
  badge?: "New" | "Popular" | "Best Seller";
}

export interface SocialLink {
  platform: "twitter" | "github" | "linkedin" | "telegram" | "email";
  url: string;
  label: string;
  username: string;
}
```

---

## 6. Component Specifications

### Button.tsx (Accessible)
```typescript
interface ButtonProps {
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
}

// Variants
// primary: bg-brand-600 hover:bg-brand-700 text-white
// secondary: bg-zinc-800 hover:bg-zinc-700 text-zinc-100
// outline: border border-zinc-700 hover:bg-zinc-800/50
// ghost: hover:bg-zinc-800/50 text-zinc-300

// Focus states (required)
// focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
```

### Card.tsx (with Motion hover)
```tsx
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.2 }}
  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6
             hover:border-zinc-700 transition-colors"
>
  {children}
</motion.div>
```

### Badge.tsx (Tech-specific colors)
```typescript
// Auto-detect tech and apply colors
const techColors: Record<string, string> = {
  Solidity: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Rust: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  DeFi: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  ZK: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
}
```

---

## 7. Section Layouts

### Hero Section
```
┌─────────────────────────────────────────────────────┐
│              [Badge: "DeFi Engineer"]               │
│                                                     │
│              Dewangga Praxindo                      │
│                                                     │
│     Building the Financial Infrastructure           │
│              of Tomorrow                            │
│                                                     │
│     Smart contract engineer with $50M+ TVL          │
│     deployed across Ethereum and Arbitrum.          │
│                                                     │
│     [View My Work]  [Get in Touch]                 │
│                                                     │
│              ↓ Scroll indicator                     │
└─────────────────────────────────────────────────────┘
```

### Projects Section (2-col grid)
```
┌─────────────────────────────────────────────────────┐
│                    Projects                         │
│     A selection of my recent work                   │
│                                                     │
│  ┌─────────────────┐  ┌─────────────────┐          │
│  │ [Image]         │  │ [Image]         │          │
│  │ Factor Finance  │  │ RekonGG         │          │
│  │ $50M+ TVL       │  │ Esports Predict │          │
│  │ [Live] [GitHub] │  │ [Live]          │          │
│  └─────────────────┘  └─────────────────┘          │
│                                                     │
│  ┌─────────────────┐  ┌─────────────────┐          │
│  │ LazorKit SDK    │  │ Vouch Protocol  │          │
│  │ Passkey Wallets │  │ ZK Identity     │          │
│  │ [Docs] [GitHub] │  │ [Live]          │          │
│  └─────────────────┘  └─────────────────┘          │
└─────────────────────────────────────────────────────┘
```

### Products Section (Featured card)
```
┌─────────────────────────────────────────────────────┐
│                    Products                         │
│     Resources to accelerate your Web3 journey       │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  ┌────────┐   Web3 Starter Kit             │   │
│  │  │ Cover  │   The Complete Guide            │   │
│  │  │ Image  │                                 │   │
│  │  │        │   Everything you need to        │   │
│  │  └────────┘   start building in Web3...    │   │
│  │                                             │   │
│  │  ✓ 50+ pages of content                    │   │
│  │  ✓ Smart contract templates                │   │
│  │  ✓ Security checklist                      │   │
│  │  ✓ Lifetime updates                        │   │
│  │                                             │   │
│  │  $29 USD        [Buy Now →]                │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Contact Section (4-col social grid)
```
┌─────────────────────────────────────────────────────┐
│                  Let's Connect                      │
│     Have a project in mind? Let's talk.            │
│                                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │ Twitter │ │ GitHub  │ │LinkedIn │ │Telegram │  │
│  │@dewaxin │ │dewaxind │ │dewaxind │ │@dewaxin │  │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘  │
└─────────────────────────────────────────────────────┘
```

---

## 8. SEO & Metadata (Next.js 16)

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dewaxindo.dev'),
  title: {
    default: 'Dewangga Praxindo | DeFi Smart Contract Engineer',
    template: '%s | Dewangga Praxindo',
  },
  description: 'DeFi smart contract engineer with 3+ years experience. Building secure, scalable protocols on Ethereum, Arbitrum, and Solana. $50M+ TVL deployed.',
  keywords: [
    'DeFi developer', 'Smart contract engineer', 'Solidity developer',
    'Web3 developer', 'Blockchain engineer', 'Arbitrum', 'Ethereum', 'Solana',
  ],
  authors: [{ name: 'Dewangga Praxindo', url: 'https://dewaxindo.dev' }],
  creator: 'Dewangga Praxindo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dewaxindo.dev',
    title: 'Dewangga Praxindo | DeFi Smart Contract Engineer',
    description: 'DeFi smart contract engineer with 3+ years experience.',
    siteName: 'Dewangga Praxindo',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dewangga Praxindo | DeFi Smart Contract Engineer',
    description: 'DeFi smart contract engineer with 3+ years experience.',
    creator: '@dewaxindo',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}
```

---

## 9. Implementation Order

### Phase 1: Project Setup
```bash
# 1. Create Next.js 16 project with pnpm
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"

# 2. Install dependencies
pnpm add clsx tailwind-merge lucide-react motion

# 3. Install dev dependencies (if needed)
pnpm add -D @types/node
```

### Phase 2: Foundation Files
1. `src/types/index.ts` - TypeScript interfaces
2. `src/lib/utils.ts` - cn() helper function
3. `tailwind.config.ts` - Extended theme config
4. `src/app/globals.css` - Tailwind v4 setup
5. `next.config.ts` - Turbopack config

### Phase 3: Data Files
1. `src/data/projects.ts` - Project portfolio data
2. `src/data/products.ts` - Digital products data
3. `src/data/socials.ts` - Social links data

### Phase 4: UI Components
1. `src/components/ui/Button.tsx`
2. `src/components/ui/Card.tsx`
3. `src/components/ui/Badge.tsx`
4. `src/components/ui/SectionHeading.tsx`
5. `src/components/ui/AnimatedSection.tsx`

### Phase 5: Layout Components
1. `src/components/layout/ThemeToggle.tsx`
2. `src/components/layout/Header.tsx`
3. `src/components/layout/Footer.tsx`

### Phase 6: Section Components
1. `src/components/sections/Hero.tsx`
2. `src/components/sections/About.tsx`
3. `src/components/sections/Projects.tsx`
4. `src/components/sections/Products.tsx`
5. `src/components/sections/Contact.tsx`

### Phase 7: Assembly & Polish
1. `src/app/layout.tsx` - Metadata, fonts, theme
2. `src/app/page.tsx` - Assemble all sections
3. Add placeholder images
4. Test responsive breakpoints
5. Run Lighthouse audit

### Phase 8: Deployment
```bash
# Initialize git
git init && git add . && git commit -m "Initial commit"

# Deploy to Vercel
pnpm vercel --prod
```

---

## 10. Content Data

### Projects
```typescript
export const projects: Project[] = [
  {
    id: "factor-finance",
    title: "Factor Finance",
    tagline: "Composable DeFi on Arbitrum",
    description: "Led smart contract development for leverage vaults and LP management systems. Built core protocol infrastructure handling $50M+ in TVL with zero security incidents.",
    image: "/images/projects/factor-finance.png",
    tags: ["Solidity", "DeFi", "Arbitrum", "Yield"],
    metrics: "$50M+ TVL",
    links: { live: "https://factor.fi", github: "https://github.com/FactorDAO" },
    featured: true,
    role: "Smart Contract Engineer",
    year: 2024,
  },
  {
    id: "rekon-gg",
    title: "RekonGG",
    tagline: "Esports Prediction Market",
    description: "Building a decentralized prediction market for esports outcomes. Developing smart contracts for betting pools, oracle integration, and reward distribution.",
    image: "/images/projects/rekon-gg.png",
    tags: ["Solidity", "Gaming", "Prediction Market"],
    links: { live: "https://rekon.gg" },
    featured: true,
    role: "Blockchain Developer",
    year: 2024,
  },
  {
    id: "lazorkit-sdk",
    title: "LazorKit SDK",
    tagline: "Passkey Wallet Infrastructure",
    description: "Developer toolkit enabling passkey-based wallet authentication on Solana. Simplified onboarding with Web3Auth-style UX without custodial tradeoffs.",
    image: "/images/projects/lazorkit-sdk.png",
    tags: ["Rust", "Solana", "SDK", "Wallet"],
    links: { docs: "https://docs.lazorkit.dev", github: "https://github.com/paxinterra/lazorkit" },
    featured: true,
    role: "Lead Developer",
    year: 2024,
  },
  {
    id: "vouch-protocol",
    title: "Vouch Protocol",
    tagline: "ZK Identity Verification",
    description: "Decentralized reputation and identity verification using zero-knowledge proofs. Enabling privacy-preserving credential verification on-chain.",
    image: "/images/projects/vouch-protocol.png",
    tags: ["Solidity", "ZK", "Identity"],
    links: { live: "https://vouch.id" },
    featured: true,
    role: "Protocol Engineer",
    year: 2023,
  },
]
```

### Product
```typescript
export const products: Product[] = [
  {
    id: "web3-starter-kit",
    title: "Web3 Starter Kit",
    subtitle: "The Complete Guide",
    description: "Everything you need to start building in Web3. A comprehensive PDF guide covering smart contract development, DeFi concepts, security best practices, and career advice.",
    image: "/images/products/web3-starter-kit.png",
    price: 29,
    currency: "USD",
    type: "pdf",
    purchaseUrl: "https://dewaxindo.gumroad.com/l/web3-starter-kit",
    features: [
      "50+ pages of curated content",
      "Smart contract templates (ERC20, ERC721, Staking)",
      "Security checklist & audit preparation guide",
      "DeFi protocol architecture patterns",
      "Resource links to best tools & docs",
      "Lifetime updates included",
    ],
    badge: "New",
  },
]
```

### Social Links
```typescript
export const socialLinks: SocialLink[] = [
  { platform: "twitter", url: "https://twitter.com/dewaxindo", label: "Twitter / X", username: "@dewaxindo" },
  { platform: "github", url: "https://github.com/dewaxindo", label: "GitHub", username: "dewaxindo" },
  { platform: "linkedin", url: "https://linkedin.com/in/dewaxindo", label: "LinkedIn", username: "dewaxindo" },
  { platform: "telegram", url: "https://t.me/dewaxindo", label: "Telegram", username: "@dewaxindo" },
]
```

---

## 11. Verification Checklist

### Development
```bash
pnpm dev      # Runs with Turbopack on localhost:3000
pnpm build    # TypeScript compiles without errors
pnpm lint     # ESLint passes
```

### Accessibility (Required)
- [ ] All buttons have visible focus states (focus-visible:ring-*)
- [ ] Icon-only buttons have aria-label
- [ ] Images have alt text
- [ ] Semantic HTML (button for actions, a for navigation)
- [ ] Keyboard navigation works

### Performance
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] No layout shift (images have width/height)
- [ ] Above-fold images have priority
- [ ] Direct imports for lucide-react

### Responsive Testing
- [ ] Mobile (375px) - no horizontal scroll
- [ ] Tablet (768px) - proper grid layouts
- [ ] Desktop (1440px) - full layout

### Visual Testing
- [ ] Dark mode works correctly
- [ ] Light mode works correctly
- [ ] Theme toggle persists preference
- [ ] Animations respect prefers-reduced-motion
- [ ] All external links open in new tab

---

## 12. Dependencies

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.6.0",
    "lucide-react": "^0.468.0",
    "motion": "^11.15.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.5.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.0.0"
  },
  "packageManager": "pnpm@9.15.0"
}
```

---

## Quick Start

```bash
# 1. Create project with pnpm and Turbopack
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"

# 2. Install dependencies
pnpm add clsx tailwind-merge lucide-react motion

# 3. Start development (with Turbopack)
pnpm dev

# 4. Build for production
pnpm build

# 5. Deploy to Vercel
pnpm vercel --prod
```

---

## Assets Needed

| Asset | Dimensions | Format | Notes |
|-------|------------|--------|-------|
| Profile photo | 400x400px | JPG/WebP | Professional headshot |
| OG image | 1200x630px | PNG | Site preview for social |
| Favicon | 32x32px | ICO/PNG | Site icon |
| Project images | 800x450px | PNG/WebP | Screenshots or mockups |
| Product cover | 600x800px | PNG | Web3 Starter Kit cover |

**Placeholder strategy:** Use gradient/blur placeholders initially, replace with real assets before launch.
