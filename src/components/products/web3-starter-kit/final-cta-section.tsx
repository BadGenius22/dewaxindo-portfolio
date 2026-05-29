"use client";

/**
 * Final CTA - dark band with duplicate lead form (Forge)
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
    <section className="pk-final" aria-labelledby="final-cta-heading">
      <div className="pk-wrap">
        <FadeIn>
          <div className="pk-eyebrow">
            <span className="tick">§</span> {t("ebook.pages")} · {t("ebook.subtitle")}
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 id="final-cta-heading">{t("finalCta.title")}</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="sub">{t("finalCta.subtitle")}</p>
        </FadeIn>
        <FadeIn delay={300} className="pk-final-form">
          <LeadMagnetForm
            formId={formId}
            productId={productId}
            productTitle="Web3 Starter Kit"
            buttonText={t("finalCta.cta")}
            showTrustText
          />
        </FadeIn>
      </div>
    </section>
  );
}
