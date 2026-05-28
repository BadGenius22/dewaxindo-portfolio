import { getTranslations } from "next-intl/server";
import { PROCESS_STEPS } from "@/data/forge";

export async function Process() {
  const t = await getTranslations("forge.process");
  const tSteps = await getTranslations("forge.process.steps");

  return (
    <section id="process" className="section process">
      <div className="forge-container">
        <header className="sec-head">
          <div className="marker">
            <span className="num">§ 02</span> {t("marker")}
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.raw("title") as string }} />
        </header>

        <ol className="process-stack">
          {PROCESS_STEPS.map((s) => (
            <li key={s.n} className="process-step">
              <div className="ps-head">
                <span className="ps-n">{s.n}</span>
                <span className="ps-meta">{s.meta}</span>
              </div>
              <h3 className="ps-title">{tSteps(`${s.key}.title`)}</h3>
              <ul className="ps-bullets">
                {s.bulletKeys.map((bk) => (
                  <li key={bk}>
                    <span className="ps-tick">▸</span>
                    <span>{tSteps(`${s.key}.bullets.${bk}`)}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
