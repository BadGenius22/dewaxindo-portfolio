import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CREDENTIAL, CONTEST_PROFILE } from "@/data/forge";

export async function Audits() {
  const t = await getTranslations("forge.audits");

  return (
    <section id="audits" className="section">
      <div className="forge-container">
        <header className="sec-head">
          <div className="marker">
            <span className="num">§ 04</span> {t("marker")}
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.raw("title") as string }} />
        </header>

        <div className="cred-grid">
          <article className="cred-card">
            <div className="cred-head">
              <span>
                {t("credLabel")} · № {CREDENTIAL.no}
              </span>
              <span className="clay">{t("credStatus")}</span>
            </div>
            <div className={CREDENTIAL.image ? "cred-visual doc" : "cred-visual"}>
              {CREDENTIAL.image ? (
                <Image
                  src={CREDENTIAL.image}
                  alt={t("credName")}
                  fill
                  sizes="(max-width: 980px) 92vw, 700px"
                  className="cred-img"
                />
              ) : (
                <span className="placeholder-mark">{t("credPlaceholder")}</span>
              )}
            </div>
            <div className="cred-body">
              <h3>{t("credName")}</h3>
              <p>{t("credDesc")}</p>
              <div className="cred-meta">
                <span>{t("credMetaLeft")}</span>
                <span className="clay">{t("credMetaRight")}</span>
              </div>
            </div>
          </article>

          <a className="cred-card" href={CONTEST_PROFILE.url} target="_blank" rel="noreferrer">
            <div className="cred-head">
              <span>
                {t("credLabel")} · № {CONTEST_PROFILE.no}
              </span>
              <span className="clay">{t("contestStatus")}</span>
            </div>
            <div className="cred-visual">
              {CONTEST_PROFILE.image ? (
                <Image
                  src={CONTEST_PROFILE.image}
                  alt={t("contestImageAlt", { handle: CONTEST_PROFILE.handle })}
                  fill
                  sizes="(max-width: 980px) 92vw, 700px"
                  className="cred-shot"
                />
              ) : (
                <span className="placeholder-mark">{t("contestName")}</span>
              )}
            </div>
            <div className="cred-body">
              <h3>{t("contestName")}</h3>
              <p>{t("contestDesc")}</p>

              <div className="cred-stats">
                {CONTEST_PROFILE.stats.map((s) => (
                  <div key={s.k} className="cred-stat">
                    <span className="cred-stat-k">{t(`contestStats.${s.k}`)}</span>
                    <span className="cred-stat-v">{s.v}</span>
                  </div>
                ))}
              </div>

              <div className="cred-meta">
                <span>{t("contestMetaLeft")}</span>
                <span className="clay">{t("contestCta")} ↗</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
