"use client";

/**
 * Pain point section - clay-bordered quote card (Forge)
 */

import { useTranslations } from "next-intl";
import { FadeIn } from "./fade-in";

export function PainSection() {
  const t = useTranslations("web3StarterKit");

  return (
    <section className="pk-sec" aria-labelledby="pain-heading">
      <div className="pk-wrap">
        <FadeIn>
          <div className="pk-quote">
            <h2 id="pain-heading" className="sr-only">
              {t("problem.familiar")}
            </h2>
            <p className="q">&ldquo;{t("problem.text")}&rdquo;</p>
            <p className="a">{t("problem.familiar")}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
