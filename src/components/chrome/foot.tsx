import { getTranslations } from "next-intl/server";

export async function Foot() {
  const t = await getTranslations("forge.foot");

  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="l">
          <span style={{ color: "var(--ink-faint)" }}>{t("signed")} ·</span>{" "}
          <span style={{ fontWeight: 500, color: "var(--ink-2)", letterSpacing: "0.04em" }}>
            DEWANGGA PRAXINDO
          </span>
        </div>
        <div className="r">{t("copyright")}</div>
      </div>
    </footer>
  );
}
