"use client";

/**
 * Final CTA section with full-width layout and duplicate form
 */

import { useTranslations } from "next-intl";

import { LeadMagnetForm } from "@/components/products/lead-magnet-form";
import { FadeIn } from "./fade-in";

interface FinalCtaSectionProps {
  formId: string;
  productId: string;
}

export function FinalCtaSection({ formId, productId }: FinalCtaSectionProps) {
  const t = useTranslations("web3StarterKit");

  return (
    <section
      className="py-20 md:py-28 px-4 bg-[var(--w3-bg-secondary)] relative z-10"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-xl mx-auto text-center">
        <FadeIn>
          <h2
            id="final-cta-heading"
            className="font-[family-name:var(--font-space-grotesk)] text-[24px] md:text-[32px] font-semibold mb-4 text-[var(--w3-text-primary)]"
          >
            {t("finalCta.title")}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-[var(--w3-text-secondary)] mb-8">
            {t("finalCta.subtitle")}
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <LeadMagnetForm
            formId={formId}
            productId={productId}
            productTitle="Web3 Starter Kit"
            buttonText={t("finalCta.cta")}
            variant="gradient"
            showTrustText
            glass
          />
        </FadeIn>
      </div>
    </section>
  );
}
