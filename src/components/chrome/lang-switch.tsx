"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
];

export function LangSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LOCALES.map((l, i) => (
        <span key={l.code} className="lang-switch-item">
          {i > 0 && <span className="sep" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => switchTo(l.code)}
            className={l.code === locale ? "active" : ""}
            aria-current={l.code === locale ? "true" : undefined}
            aria-label={l.code === "en" ? "English" : "Bahasa Indonesia"}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
