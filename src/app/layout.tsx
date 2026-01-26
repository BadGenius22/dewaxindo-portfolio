import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { generateHomepageSchemas, generateFAQSchema } from "@/lib/seo";
import { getGAScript, getMetaPixelScript } from "@/lib/analytics";
import { getFeaturedProduct } from "@/data/products";
import { getFAQs } from "@/data/faqs";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Performance: prevent FOIT
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO Metadata (Google SEO optimization)
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - DeFi Smart Contract Engineer`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.social.x,
    images: [siteConfig.ogImage],
  },

  // Robots directives (SEO)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your IDs)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  // Canonical URL
  alternates: {
    canonical: siteConfig.url,
  },

  // App manifest
  manifest: "/manifest.json",

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// Viewport configuration (Core Web Vitals - mobile optimization)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data for SEO
  const schemas = [
    ...generateHomepageSchemas(getFeaturedProduct()),
    generateFAQSchema(getFAQs()),
  ];

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Structured Data (JSON-LD) for Google SEO and AI Overviews */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Theme initialization script (prevents flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preconnect to Gumroad for product checkout */}
        <link rel="preconnect" href="https://gumroad.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip link for accessibility (Web Interface Guidelines) */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <Header />
          {children}
          <Footer />

        {/* Google Analytics 4 */}
        {siteConfig.analytics.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: getGAScript(siteConfig.analytics.gaId),
              }}
            />
          </>
        )}

        {/* Meta Pixel for Meta Ads tracking */}
        {siteConfig.analytics.metaPixelId && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: getMetaPixelScript(siteConfig.analytics.metaPixelId),
              }}
            />
            {/* Meta Pixel noscript fallback - img intentional for 1x1 tracking pixel */}
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${siteConfig.analytics.metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        </ThemeProvider>
      </body>
    </html>
  );
}
