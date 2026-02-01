"use client";

import * as React from "react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "@/i18n/routing";
import { type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "id" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" disabled className="font-mono text-xs px-2">
        EN
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="font-mono text-xs px-2"
      aria-label={`Switch to ${locale === "en" ? "Indonesian" : "English"}`}
    >
      {locale.toUpperCase()}
    </Button>
  );
}
