import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

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
        <div className="c">{t("copyright")}</div>
        <div className="r">
          <span style={{ color: "var(--ink-faint)" }}>{t("setIn")}</span>{" "}
          ARCHIVO · FUNNEL SANS · IBM PLEX MONO
        </div>
      </div>
      <nav className="foot-nav" aria-label="Footer">
        <Link href="/products">{t("products")}</Link>
        {" · "}
        <Link href="/products/web3-starter-kit">{t("starterKit")}</Link>
      </nav>
    </footer>
  );
}
