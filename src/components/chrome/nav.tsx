import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

const NAV_KEYS = [
  { n: "01.", key: "services", anchor: "capabilities" },
  { n: "02.", key: "process", anchor: "process" },
  { n: "03.", key: "work", anchor: "works" },
  { n: "04.", key: "log", anchor: "log" },
  { n: "05.", key: "contact", anchor: "contact" },
];

export async function Nav() {
  const t = await getTranslations("forge.nav");

  return (
    <header className="nav">
      <Link href="/#top" className="mark">
        Praxindo<span className="num">/003</span>
      </Link>
      <nav className="links" aria-label="Primary">
        {NAV_KEYS.map((item) => (
          <Link key={item.key} href={`/#${item.anchor}`}>
            <span className="n">{item.n}</span>
            {t(item.key)}
          </Link>
        ))}
        <Link href="/products">
          <span className="n">06.</span>
          {t("products")}
        </Link>
      </nav>
      <Link className="cta" href="/#contact">
        {t("hire")}
      </Link>
    </header>
  );
}
