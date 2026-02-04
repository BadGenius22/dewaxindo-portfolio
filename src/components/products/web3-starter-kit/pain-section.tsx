"use client";

/**
 * Pain point section with styled quote card
 */

import { useTranslations } from "next-intl";
import { FadeIn } from "./fade-in";

export function PainSection() {
  const t = useTranslations("web3StarterKit");

  return (
    <section
      className="py-12 md:py-20 px-4 relative z-10"
      aria-labelledby="pain-heading"
    >
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="w3-quote-card">
            <p
              id="pain-heading"
              className="text-lg md:text-xl text-[var(--w3-text-secondary)] leading-relaxed italic"
            >
              &ldquo;{t("problem.text")}&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[var(--w3-text-primary)] mt-6">
              {t("problem.familiar")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
