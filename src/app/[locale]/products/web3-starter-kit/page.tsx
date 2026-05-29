/**
 * Web3 Starter Kit - Lead Magnet Landing Page
 * Free 22-page ebook download page with new design system
 */

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/data/site";
import { locales, defaultLocale } from "@/i18n/config";
import { getFeaturedProduct } from "@/data/products";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";
import {
  HeroSection,
  PainSection,
  BenefitsSection,
  PreviewSection,
  AuthorSection,
  FinalCtaSection,
} from "@/components/products/web3-starter-kit";

const CONVERTKIT_FORM_ID =
  process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || "YOUR_FORM_ID";
const PRODUCT_ID = "web3-starter-kit";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("web3StarterKit.meta");
  const path = "/products/web3-starter-kit";
  const localeUrl = (loc: string) =>
    loc === defaultLocale ? `${siteConfig.url}${path}` : `${siteConfig.url}/${loc}${path}`;
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = localeUrl(loc);
  });
  languages["x-default"] = localeUrl(defaultLocale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: localeUrl(locale), languages },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl(locale),
      type: "website",
      images: [
        {
          url: "/og-web3-starter-kit.png",
          width: 1200,
          height: 630,
          alt: "Web3 Starter Kit",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-web3-starter-kit.png"],
    },
  };
}

export default async function Web3StarterKitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const base = locale === defaultLocale ? siteConfig.url : `${siteConfig.url}/${locale}`;
  const pageUrl = `${base}/products/web3-starter-kit`;
  const product = getFeaturedProduct();
  const schemas = [
    generateProductSchema({ ...product, purchaseUrl: pageUrl }),
    generateBreadcrumbSchema([
      { name: "Home", url: base },
      { name: "Products", url: `${base}/products` },
      { name: product.title, url: pageUrl },
    ]),
  ];

  return (
    <main id="main-content" className="pk">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Hero - eyebrow, display headline, ebook mockup, lead form (2-col on desktop) */}
      <HeroSection formId={CONVERTKIT_FORM_ID} productId={PRODUCT_ID} />

      {/* Pain Point - clay-bordered quote card */}
      <PainSection />

      {/* Benefits - numbered ledger rows */}
      <BenefitsSection />

      {/* Preview - accordion with ebook contents */}
      <PreviewSection />

      {/* Author - photo + credentials card */}
      <AuthorSection />

      {/* Final CTA - dark band with duplicate form */}
      <FinalCtaSection formId={CONVERTKIT_FORM_ID} productId={PRODUCT_ID} />
    </main>
  );
}
