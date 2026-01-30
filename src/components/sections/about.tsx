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
          className="text-muted-foreground font-display text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I Build
        </motion.p>

        {/* SEO-friendly introduction text */}
        <motion.div
          className="mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium mb-3">
            Full-Stack DeFi Engineering
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in building secure, production-ready smart contracts and DeFi protocols.
            From Solidity on Ethereum and Arbitrum to Rust on Solana, I deliver battle-tested code
            with comprehensive security practices including fuzz testing, invariant testing, and
            audit preparation.
          </p>
        </motion.div>

        <AnimatedBentoGrid />
      </div>
    </section>
  );
}
