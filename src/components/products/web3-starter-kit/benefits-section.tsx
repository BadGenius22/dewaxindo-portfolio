"use client";

/**
 * Benefits section with icon cards
 */

import { useTranslations } from "next-intl";
import {
  Rocket,
  BookOpen,
  Wrench,
  TrendingUp,
  Users,
} from "lucide-react";
import { FadeIn } from "./fade-in";

const benefitIcons = [Rocket, BookOpen, Wrench, TrendingUp, Users];

export function BenefitsSection() {
  const t = useTranslations("web3StarterKit");

  const benefits = [0, 1, 2, 3, 4];

  return (
    <section
      className="py-12 md:py-20 px-4 relative z-10"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <h2
            id="benefits-heading"
            className="font-[family-name:var(--font-space-grotesk)] text-[24px] md:text-[32px] font-semibold text-center mb-10 text-[var(--w3-text-primary)]"
          >
            {t("whatsInside.title")}
          </h2>
        </FadeIn>
        <div className="space-y-4">
          {benefits.map((index) => {
            const Icon = benefitIcons[index];
            return (
              <FadeIn key={index} delay={index * 100}>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--w3-bg-secondary)] border border-[var(--w3-border)] hover:border-emerald-500/30 transition-colors motion-safe:transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="text-base md:text-lg text-[var(--w3-text-secondary)] pt-2">
                    {t(`whatsInside.benefits.${index}`)}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
