import { getTranslations } from "next-intl/server";
import { SOCIALS_V3, FORGE_EMAIL } from "@/data/forge";

export async function Contact() {
  const t = await getTranslations("forge.contact");

  return (
    <section id="contact" className="contact-wrap">
      <div className="contact-ghost" aria-hidden="true">
        RECEIPTS
      </div>
      <div className="contact-inner">
        <div className="contact-eyebrow">§ 05 — {t("eyebrow")}</div>

        <h2 className="contact-pitch">
          {t("pitchPre")}
          <br />
          {t("pitchMid")}
          <br />
          {t("pitchTail")}{" "}
          <span className="forest-pad">{t("pitchHighlight")}</span>.
        </h2>

        <div className="contact-line">
          <div>
            <a className="email-btn" href={`mailto:${FORGE_EMAIL}`}>
              {FORGE_EMAIL} <span className="arrow">→</span>
            </a>
            <button className="email-copy copy-btn" data-copy={FORGE_EMAIL} title={t("copyTitle")}>
              <span className="ec-label">{t("orCopy")}</span>
              <span className="ec-ico">⎘</span>
            </button>
            <p
              className="lede"
              style={{ marginTop: 24 }}
              dangerouslySetInnerHTML={{ __html: t.raw("lede") as string }}
            />
          </div>

          <div className="contact-meta">
            {SOCIALS_V3.map((s) => (
              <a key={s.pl} className="row" href={s.url} target="_blank" rel="noreferrer">
                <span className="pl">{s.pl}</span>
                <span className="hd">{s.hd}</span>
                <span className="ar">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
