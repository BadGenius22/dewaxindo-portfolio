"use client";

/**
 * Hero section for Web3 Starter Kit landing page (Forge style)
 * Two-column: display headline + lead form on the left, ebook mockup on the right.
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
    <section id="hero" className="pk-hero" aria-labelledby="hero-heading">
      <div className="pk-hero-grid">
        <div className="pk-hero-copy">
          <FadeIn>
            <div className="pk-eyebrow">
              <span className="tick">§</span> {t("ebook.pages")} · {t("ebook.subtitle")}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 id="hero-heading" className="pk-h1">
              {t("hero.headline")}
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="pk-hero-sub">{t("hero.subheadline")}</p>
          </FadeIn>

          <FadeIn delay={300}>
            <span className="pk-langnote">
              <span aria-hidden="true">🇮🇩</span>
              {t("hero.languageNote")}
            </span>
          </FadeIn>

          <FadeIn delay={400} className="pk-hero-form">
            <LeadMagnetForm
              formId={formId}
              productId={productId}
              productTitle="Web3 Starter Kit"
              buttonText={t("hero.cta")}
              inline
              showTrustText
              socialProof={<SocialProof text={t("hero.socialProof")} />}
            />
          </FadeIn>
        </div>

        <FadeIn delay={200} className="pk-hero-media">
          <div className="pk-hero-media-inner">
            <EbookMockup
              src="/images/ebook/3dMockup.png"
              alt="Web3 Starter Kit: 5 Langkah Pertama Masuk Dunia Web3"
              size="large"
              variant="device"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
