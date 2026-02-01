/**
 * Main page - Portfolio single-page application
 * All sections assembled for the complete portfolio experience
 */

import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Products } from "@/components/sections/products";
import { Contact } from "@/components/sections/contact";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content" className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Products />
      <Contact />
    </main>
  );
}
