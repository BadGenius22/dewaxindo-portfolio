import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AUDIT_RECORDS, CREDENTIAL } from "@/data/forge";

export async function Audits() {
  const t = await getTranslations("forge.audits");

  const passed = AUDIT_RECORDS.filter((a) => a.status === "pass").length;
  const total = AUDIT_RECORDS.length;

  return (
    <section id="audits" className="section">
      <div className="forge-container">
        <header className="sec-head">
          <div className="marker">
            <span className="num">§ 04</span> {t("marker")}
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.raw("title") as string }} />
        </header>

        <div className="aud-layout">
          <div className="aud-frame">
            <div className="aud-frame-head">
              <span>AUDIT · RECORD</span>
              <span className="ok">
                {passed} {t("passed")} / {total} {t("total")}
              </span>
            </div>
            <div role="table">
              <div className="aud-row2 head" role="row">
                <span>{t("col.date")}</span>
                <span>{t("col.scope")}</span>
                <span>{t("col.firm")}</span>
                <span className="a-result">{t("col.result")}</span>
              </div>
              {AUDIT_RECORDS.map((a, i) => (
                <div key={i} className="aud-row2" role="row">
                  <span className="a-date">{a.date}</span>
                  <span className="a-scope">{a.scope}</span>
                  <span className="a-firm">{a.firm}</span>
                  <span className="a-result">
                    <span className={"aud-badge " + a.status}>{t(`results.${a.resultKey}`)}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="cred-card">
            <div className="cred-head">
              <span>
                {t("credLabel")} · № {CREDENTIAL.no}
              </span>
              <span className="clay">{t("credStatus")}</span>
            </div>
            <div className="cred-visual">
              {CREDENTIAL.image ? (
                <Image
                  src={CREDENTIAL.image}
                  alt={t("credName")}
                  fill
                  sizes="(max-width: 980px) 92vw, 420px"
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
          </aside>
        </div>
      </div>
    </section>
  );
}
