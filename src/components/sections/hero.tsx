"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-border">
            <Image
              src="/images/profile.png"
              alt="Dewangga Praxindo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Heading - Serif style */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-relaxed tracking-tight text-foreground"
        >
          Hello, I&apos;m Dewangga, a DeFi smart contract engineer building
          secure protocols with{" "}
          <span className="text-muted-foreground">$50M+ TVL deployed</span>{" "}
          across Ethereum, Arbitrum, and Solana.
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="#projects">See my work</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#contact">Let&apos;s collaborate</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
