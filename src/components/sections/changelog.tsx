import { getTranslations } from "next-intl/server";
import { LOG_ENTRIES } from "@/data/forge";

export async function Changelog() {
  const t = await getTranslations("forge.log");
  const tNotes = await getTranslations("forge.log.notes");

  const liveCount = LOG_ENTRIES.filter((e) => e.live).length;
  const totalCount = LOG_ENTRIES.length;

  return (
    <section id="log" className="section log">
      <div className="forge-container">
        <header className="sec-head">
          <div className="marker">
            <span className="num">§ 04</span> {t("marker")}
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.raw("title") as string }} />
        </header>

        <div className="log-frame">
          <div className="log-frame-head">
            <span>DEPLOY · LOG</span>
            <span className="log-cnt">
              <span className="log-dot" /> {liveCount} {t("live")} / {totalCount} {t("total")}
            </span>
            <span>SIGNED · DWX</span>
          </div>

          <div className="log-table" role="table">
            <div className="log-row log-row-head" role="row">
              <span>{t("col.date")}</span>
              <span>{t("col.project")}</span>
              <span>{t("col.chain")}</span>
              <span>{t("col.address")}</span>
              <span>{t("col.note")}</span>
            </div>

            {LOG_ENTRIES.map((e, i) => (
              <div key={i} className="log-row" role="row">
                <span className="lg-date">{e.date}</span>
                <span className="lg-project">
                  {e.live && <span className="lg-live" title="Live on mainnet" />}
                  {e.project}
                </span>
                <span className="lg-chain">{e.chain}</span>
                <span className="lg-hash">
                  {e.addr === "—" ? (
                    <span style={{ color: "var(--ink-faint)" }}>{e.addr}</span>
                  ) : e.explorerUrl ? (
                    <a
                      className="copy-btn"
                      href={e.explorerUrl}
                      target="_blank"
                      rel="noreferrer"
                      title={t("openExplorer")}
                    >
                      {e.addr} <span className="copy-ico">↗</span>
                    </a>
                  ) : (
                    <span>{e.addr}</span>
                  )}
                </span>
                <span className="lg-note">{tNotes(e.noteKey)}</span>
              </div>
            ))}
          </div>

          <div className="log-frame-foot">
            <span>END · OF · ROLL</span>
            <span>— · — · —</span>
          </div>
        </div>
      </div>
    </section>
  );
}
