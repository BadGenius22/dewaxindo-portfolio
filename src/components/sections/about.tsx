"use client";

import { motion } from "motion/react";
import { AnimatedBentoGrid } from "@/components/ui/bento-grid-animated";

export function About() {
  return (
    <section
      id="about"
      className="bg-background px-6 py-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.p
          className="text-muted-foreground font-display text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I Build
        </motion.p>

        <AnimatedBentoGrid />
      </div>
    </section>
  );
}
