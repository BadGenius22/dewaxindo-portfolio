"use client";

/**
 * Author section - photo + credentials card (Forge)
 */

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FadeIn } from "./fade-in";

export function AuthorSection() {
  const t = useTranslations("web3StarterKit");

  const credentials = [0, 1, 2];

  return (
    <section className="pk-sec" aria-labelledby="author-heading">
      <div className="pk-wrap">
        <FadeIn>
          <div className="pk-sec-head">
            <h2 id="author-heading" className="pk-h2">
              {t("author.title")}
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="pk-author">
            <div className="pk-author-photo">
              <Image
                src="/images/profile.jpg"
                alt={t("author.name")}
                fill
                className="pk-img"
                sizes="120px"
              />
            </div>
            <div className="pk-author-info">
              <h3>{t("author.name")}</h3>
              <p className="role">{t("author.role")}</p>
              <ul>
                {credentials.map((index) => (
                  <li key={index}>{t(`author.credentials.${index}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
