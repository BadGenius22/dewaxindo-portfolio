/**
 * Web3 Starter Kit - Lead Magnet Landing Page
 * Free 22-page ebook download page with new design system
 */

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import {
  HeroSection,
  PainSection,
  BenefitsSection,
  PreviewSection,
  AuthorSection,
  FinalCtaSection,
  AnimatedBlobs,
} from "@/components/products/web3-starter-kit";

const CONVERTKIT_FORM_ID =
  process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || "YOUR_FORM_ID";
const PRODUCT_ID = "web3-starter-kit";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("web3StarterKit.meta");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/products/web3-starter-kit`,
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

export default function Web3StarterKitPage() {
  return (
    <main className="min-h-screen w3-landing-bg w3-noise-overlay relative">
      {/* Animated Blob Background */}
      <AnimatedBlobs />

      {/* Hero Section - Gradient headline, large mockup with glow, form with social proof */}
      <HeroSection formId={CONVERTKIT_FORM_ID} productId={PRODUCT_ID} />

      {/* Pain Point - Styled quote card with left border accent */}
      <PainSection />

      {/* Benefits - Icon cards with subtle backgrounds */}
      <BenefitsSection />

      {/* Preview - Accordion with ebook contents */}
      <PreviewSection />

      {/* Author - Card style with photo, moved up */}
      <AuthorSection />

      {/* Final CTA - Full-width section with duplicate form */}
      <FinalCtaSection formId={CONVERTKIT_FORM_ID} productId={PRODUCT_ID} />
    </main>
  );
}
