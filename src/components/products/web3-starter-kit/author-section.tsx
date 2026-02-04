"use client";

/**
 * Author section with photo and credentials card
 */

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FadeIn } from "./fade-in";

export function AuthorSection() {
  const t = useTranslations("web3StarterKit");

  const credentials = [0, 1, 2];

  return (
    <section
      className="py-12 md:py-20 px-4 relative z-10"
      aria-labelledby="author-heading"
    >
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <h2
            id="author-heading"
            className="font-[family-name:var(--font-space-grotesk)] text-[24px] md:text-[32px] font-semibold text-center mb-10 text-[var(--w3-text-primary)]"
          >
            {t("author.title")}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="w3-glass-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Author Photo */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-emerald-500/20 ring-4 ring-emerald-500/10">
                <Image
                  src="/images/profile.jpg"
                  alt={t("author.name")}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Author Info */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-[var(--w3-text-primary)]">
                {t("author.name")}
              </h3>
              <p className="text-[var(--w3-text-muted)] mb-4">
                {t("author.role")}
              </p>
              <ul className="space-y-2">
                {credentials.map((index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-[var(--w3-text-secondary)] justify-center md:justify-start"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {t(`author.credentials.${index}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
