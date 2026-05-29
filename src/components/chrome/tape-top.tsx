"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { LangSwitch } from "@/components/chrome/lang-switch";

export function TapeTop() {
  const t = useTranslations("forge.tape");
  const [time, setTime] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // WIB is UTC+7
  const ts = time
    ? new Date(time.getTime() + 7 * 3600 * 1000).toISOString().slice(11, 19)
    : "--:--:--";

  return (
    <div className="tape-top">
      <div className="l">№ 003 / FORGE EDITION</div>
      <div className="c">{t("available")}</div>
      <div className="r">
        <LangSwitch />
        <span className="sep" aria-hidden="true">·</span>
        <span suppressHydrationWarning>{ts}</span> WIB · UTC+7 · Yogyakarta, ID
      </div>
    </div>
  );
}
