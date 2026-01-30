# 🚀 Dewaxindo Portfolio

Personal portfolio website for **Dewangga Praxindo**, a DeFi Smart Contract Engineer with $50M+ TVL deployed across Ethereum, Arbitrum, and Base.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BadGenius22/dewaxindo-portfolio)

## ✨ Features

- ⚡ **Next.js 16** with App Router & Turbopack
- 🎨 **Tailwind CSS v4** with CSS variables theming
- 🌙 **Dark/Light Mode** with system preference detection
- 🔗 **Interactive Blockchain Animation** - Canvas-based blocks with mouse repel effect
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant, reduced motion support
- 🔍 **SEO Optimized** - JSON-LD schemas, dynamic OG images, sitemap
- 📊 **Analytics Ready** - GA4, Meta Pixel, Conversions API
- 🎭 **Smooth Animations** - Framer Motion throughout

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4, shadcn/ui |
| Animation | Framer Motion, Canvas API |
| Language | TypeScript |
| Package Manager | pnpm |
| Deployment | Vercel |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (all sections)
│   ├── layout.tsx         # Root layout with SEO
│   ├── not-found.tsx      # Custom 404 page
│   ├── opengraph-image.tsx # Dynamic OG image
│   └── products/          # Product pages
├── components/
│   ├── layout/            # Header, Footer, ThemeProvider
│   ├── sections/          # Hero, About, Projects, Contact
│   └── ui/                # shadcn/ui components
├── data/                  # Static content (projects, products, site config)
├── lib/                   # Utilities (SEO, analytics, helpers)
└── types/                 # TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/BadGenius22/dewaxindo-portfolio.git
cd dewaxindo-portfolio

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (Turbopack) |
| `pnpm build` | Create production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run unit tests (Vitest) |
| `pnpm test:e2e` | Run E2E tests (Playwright) |

## 🔐 Environment Variables

Create `.env.local` with these variables:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789
META_CAPI_ACCESS_TOKEN=your_token

# SEO
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code

# Contact Form
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Site URL
NEXT_PUBLIC_SITE_URL=https://dewaxindo.com
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables
4. Deploy!

Auto-deploys on every push to `main` branch.

### Manual Build

```bash
pnpm build
pnpm start
```

## 📄 Adding Content

### New Project

Edit `src/data/projects.ts`:

```typescript
{
  title: "Project Name",
  description: "Short description",
  tags: ["Solidity", "DeFi"],
  github: "https://github.com/...",
  live: "https://...",
  featured: true
}
```

### New Product

Edit `src/data/products.ts`:

```typescript
{
  slug: "product-slug",
  title: "Product Name",
  description: "Description",
  price: 49,
  gumroadUrl: "https://dewaxindo.gumroad.com/l/..."
}
```

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ☕ by [Dewangga Praxindo](https://dewaxindo.com)
