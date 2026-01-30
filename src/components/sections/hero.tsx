"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/ui/particle-network";

// Hydration-safe client detection using useSyncExternalStore
const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}

export function Hero() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  // Theme-aware colors
  const isDark = resolvedTheme === "dark";
  const particleColor = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)";
  const lineColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background color */}
      <div className="absolute inset-0 bg-background -z-20" />

      {/* Particle Network - interactive layer */}
      {mounted && (
        <ParticleNetwork
          key={resolvedTheme}
          particleCount={60}
          particleColor={particleColor}
          lineColor={lineColor}
          maxDistance={120}
          speed={0.3}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-border shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Dewangga Praxindo - DeFi Smart Contract Engineer"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANF09qG3XiBHnQnN7D7YcQSOxkdH8qvSlRLK7UmwPoif/9k="
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-relaxed tracking-tight text-foreground"
        >
          Hello, I&apos;m Dewangga, a DeFi smart contract engineer building
          secure protocols with{" "}
          <span className="text-muted-foreground">$50M+ TVL deployed</span>{" "}
          across Ethereum, Arbitrum, and Base.
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
