"use client";

import {
  Code2,
  Shield,
  Zap,
  Globe,
  Layers,
  TrendingUp,
} from "lucide-react";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

const skills = [
  {
    name: "DeFi Engineering",
    description:
      "Leverage vaults, LP management, yield optimization. Built protocols handling $50M+ TVL on Arbitrum.",
    Icon: TrendingUp,
    href: "#projects",
    cta: "See Projects",
    className: "md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "Security First",
    description:
      "Fuzz testing, invariant testing, Slither. All contracts PeckShield audited. Zero critical findings.",
    Icon: Shield,
    href: "#projects",
    cta: "View Track Record",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "Smart Contracts",
    description:
      "Solidity & Rust expert. Foundry, Hardhat, Anchor. Gas-optimized, audit-ready code.",
    Icon: Code2,
    href: "#projects",
    cta: "Explore Work",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "Multi-Chain",
    description:
      "Ethereum, Arbitrum, Solana, Polygon. Integrations with AAVE, Compound, Pendle, Uniswap.",
    Icon: Globe,
    href: "#projects",
    cta: "See Chains",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "ZK & Privacy",
    description:
      "Zero-knowledge proofs with Noir circuits. Building privacy-preserving verification systems.",
    Icon: Layers,
    href: "#projects",
    cta: "View ZK Work",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "Full Stack Web3",
    description:
      "React, Next.js, TypeScript. From smart contracts to polished frontends.",
    Icon: Zap,
    href: "#contact",
    cta: "Let's Build",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />
    ),
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="What I Build"
            subtitle="Secure, battle-tested DeFi infrastructure that moves millions"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <BentoGrid className="md:grid-cols-3 auto-rows-[18rem]">
            {skills.map((skill) => (
              <BentoCard
                key={skill.name}
                name={skill.name}
                description={skill.description}
                Icon={skill.Icon}
                href={skill.href}
                cta={skill.cta}
                className={skill.className}
                background={skill.background}
              />
            ))}
          </BentoGrid>
        </AnimatedSection>
      </div>
    </section>
  );
}
