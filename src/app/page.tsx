/**
 * Main page - Portfolio single-page application
 * All sections assembled for the complete portfolio experience
 */

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Products } from "@/components/sections/products";
import { Contact } from "@/components/sections/contact";

export default function Home() {
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
