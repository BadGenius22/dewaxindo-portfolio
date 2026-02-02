"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import {
  SiSolidity,
  SiRust,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { Anvil, Anchor } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/ui/particle-network";
import { Link } from "@/i18n/routing";

// Tech stack data grouped by category
type TechItem = { name: string; icon: IconType | LucideIcon };
type TechStack = { label: string; items: TechItem[] };

const techStack: TechStack[] = [
  {
    label: "Languages",
    items: [
      { name: "Solidity", icon: SiSolidity },
      { name: "Rust", icon: SiRust },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Foundry", icon: Anvil },
      { name: "Anchor", icon: Anchor },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
];

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
  const t = useTranslations("hero");

  // Theme-aware colors
  const isDark = resolvedTheme === "dark";
  const particleColor = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)";
  const lineColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
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
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEQ/ANF09qG3XiBHnQnN7D7YcQSOxkdH8qvSlRLK7UmwPoif/9k="
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
          {t("greeting")}{" "}
          <span className="text-muted-foreground">{t("tvl")}</span>{" "}
          {t("chains")}
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/#projects">{t("cta.work")}</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/#contact">{t("cta.collaborate")}</Link>
          </Button>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          {techStack.map((group, groupIndex) => (
            <div key={group.label} className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 w-20 text-right hidden sm:block">
                {group.label}
              </span>
              <div className="flex items-center gap-2">
                {group.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.4 + groupIndex * 0.1 + index * 0.05,
                    }}
                    className="group relative"
                  >
                    <div className="p-2 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-card transition-all cursor-default">
                      <tech.icon className="w-5 h-5" />
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-mono bg-popover text-popover-foreground rounded border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
