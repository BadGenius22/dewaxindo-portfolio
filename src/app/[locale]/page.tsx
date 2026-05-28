import { setRequestLocale, getTranslations } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Works } from "@/components/sections/works";
import { Changelog } from "@/components/sections/changelog";
import { Contact } from "@/components/sections/contact";
import { Perforation } from "@/components/chrome/perforation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("forge.perforation");

  return (
    <main id="main-content">
      <Hero />
      <Perforation label={t("s02")} />
      <Capabilities />
      <Perforation label={t("s03")} />
      <Process />
      <Perforation label={t("s04")} />
      <Works />
      <Perforation label={t("s05")} />
      <Changelog />
      <Perforation label={t("end")} />
      <Contact />
    </main>
  );
}
