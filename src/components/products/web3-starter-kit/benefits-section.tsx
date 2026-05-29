"use client";

/**
 * Benefits section - numbered ledger rows (Forge)
 */

import { useTranslations } from "next-intl";
import { FadeIn } from "./fade-in";

export function BenefitsSection() {
  const t = useTranslations("web3StarterKit");

  const benefits = [0, 1, 2, 3, 4];

  return (
    <section className="pk-sec" aria-labelledby="benefits-heading">
      <div className="pk-wrap">
        <FadeIn>
          <div className="pk-sec-head">
            <h2 id="benefits-heading" className="pk-h2">
              {t("whatsInside.title")}
            </h2>
          </div>
        </FadeIn>
        <div className="pk-rows">
          {benefits.map((index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="pk-rowi">
                <span className="nx">0{index + 1}</span>
                <span className="tx">{t(`whatsInside.benefits.${index}`)}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
