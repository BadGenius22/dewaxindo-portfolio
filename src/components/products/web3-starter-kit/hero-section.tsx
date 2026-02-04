"use client";

/**
 * Hero section for Web3 Starter Kit landing page
 * Features gradient headline, large ebook mockup, and lead capture form
 */

import { useTranslations } from "next-intl";

import { EbookMockup } from "@/components/products/ebook-mockup";
import { LeadMagnetForm } from "@/components/products/lead-magnet-form";
import { SocialProof } from "./social-proof";
import { FadeIn } from "./fade-in";

interface HeroSectionProps {
  formId: string;
  productId: string;
}

export function HeroSection({ formId, productId }: HeroSectionProps) {
  const t = useTranslations("web3StarterKit");

  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative z-10"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[1100px] mx-auto text-center">
        <FadeIn>
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[48px] font-bold tracking-tight mb-6 w3-gradient-text"
            style={{ textWrap: "balance" }}
          >
            {t("hero.headline")}
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-lg md:text-xl text-[var(--w3-text-secondary)] mb-4 max-w-2xl mx-auto">
            {t("hero.subheadline")}
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--w3-bg-secondary)] border border-[var(--w3-border)] text-sm text-[var(--w3-text-muted)]">
              <span className="text-base">🇮🇩</span>
              {t("hero.languageNote")}
            </span>
          </div>
        </FadeIn>

        {/* 3D Mockup - Tablet, Phone, Book */}
        <FadeIn delay={300}>
          <div className="mb-10">
            <EbookMockup
              src="/images/ebook/3dMockup.png"
              alt="Web3 Starter Kit - 5 Langkah Pertama Masuk Dunia Web3"
              size="large"
              glow
              variant="device"
            />
          </div>
        </FadeIn>

        {/* Lead Form with Glassmorphism Card */}
        <FadeIn delay={400}>
          <div className="max-w-md mx-auto">
            <LeadMagnetForm
              formId={formId}
              productId={productId}
              productTitle="Web3 Starter Kit"
              buttonText={t("hero.cta")}
              inline
              variant="gradient"
              showTrustText
              glass
              socialProof={<SocialProof text={t("hero.socialProof")} />}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
