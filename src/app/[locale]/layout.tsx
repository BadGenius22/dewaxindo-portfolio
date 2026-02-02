import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";

import { locales, type Locale } from "@/i18n/config";
import { siteConfig } from "@/data/site";
import { generateHomepageSchemas, generateFAQSchema } from "@/lib/seo";
import { getGAScript, getMetaPixelScript } from "@/lib/analytics";
import { getFAQs } from "@/data/faqs";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata with alternates for hreflang
export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  // Import translations for metadata
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const alternateLanguages: Record<string, string> = {};
  locales.forEach((loc) => {
    alternateLanguages[loc] = `${siteConfig.url}/${loc}`;
  });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: messages.metadata.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: messages.metadata.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,

    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      title: messages.metadata.title,
      description: messages.metadata.description,
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

    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
      creator: siteConfig.social.x,
      images: [siteConfig.ogImage],
    },

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

    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },

    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: alternateLanguages,
    },

    manifest: "/manifest.json",

    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
        { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
      ],
    },
  };
}

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for this locale
  const messages = await getMessages();

  // Generate structured data
  const schemas = [
    ...generateHomepageSchemas(),
    generateFAQSchema(getFAQs()),
  ];

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        {/* hreflang tags for SEO */}
        {locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`${siteConfig.url}/${loc}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteConfig.url}/en`}
        />

        {/* Structured Data */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Theme initialization script */}
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

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://gumroad.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <a href="#main-content" className="skip-link">
              {(messages as Record<string, Record<string, string>>).common?.skipToContent || "Skip to main content"}
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

            {/* Meta Pixel */}
            {siteConfig.analytics.metaPixelId && (
              <>
                <Script
                  id="meta-pixel"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: getMetaPixelScript(siteConfig.analytics.metaPixelId),
                  }}
                />
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
