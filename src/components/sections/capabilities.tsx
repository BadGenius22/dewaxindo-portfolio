import { getTranslations } from "next-intl/server";
import { CAPABILITIES_V3 } from "@/data/forge";

export async function Capabilities() {
  const t = await getTranslations("forge.capabilities");
  const tItems = await getTranslations("forge.capabilities.items");

  return (
    <section id="capabilities" className="section">
      <div className="forge-container">
        <header className="sec-head">
          <div className="marker">
            <span className="num">§ 01</span> {t("marker")}
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.raw("title") as string }} />
        </header>

        <div className="cap-grid">
          {CAPABILITIES_V3.map((c) => (
            <div key={c.n} className="cap-row">
              <div className="body">
                <h3>
                  <span className="n">{c.n}</span>
                  {tItems(`${c.key}.title`)}
                </h3>
                <p>{tItems(`${c.key}.desc`)}</p>
              </div>
              <div className="stat">
                <span className="k">{c.sk}</span>
                <span className={"v" + (c.em ? " clay" : "")}>{c.sv}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
