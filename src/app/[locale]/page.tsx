import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Works } from "@/components/sections/works";
import { Audits } from "@/components/sections/audits";
import { Changelog } from "@/components/sections/changelog";
import { Contact } from "@/components/sections/contact";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content">
      <Hero />
      <Capabilities />
      <Process />
      <Works />
      <Audits />
      <Changelog />
      <Contact />
    </main>
  );
}
