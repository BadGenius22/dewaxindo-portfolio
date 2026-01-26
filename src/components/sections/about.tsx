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
    name: "Smart Contracts",
    description:
      "Expert in Solidity and Rust. Building secure, gas-optimized contracts for DeFi protocols.",
    Icon: Code2,
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
      "Audit-ready code with comprehensive testing. Zero security incidents across $50M+ TVL.",
    Icon: Shield,
    href: "#projects",
    cta: "View Track Record",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "DeFi Protocols",
    description:
      "Leverage vaults, LP management, yield optimization, and prediction markets.",
    Icon: TrendingUp,
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
      "Ethereum, Arbitrum, Solana, and more. Building cross-chain solutions.",
    Icon: Globe,
    href: "#projects",
    cta: "See Chains",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "Full Stack Web3",
    description:
      "From smart contracts to frontend integration. Complete dApp development.",
    Icon: Layers,
    href: "#contact",
    cta: "Let's Talk",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
    ),
  },
  {
    name: "Performance",
    description:
      "Gas optimization, efficient algorithms, and scalable architecture.",
    Icon: Zap,
    href: "#projects",
    cta: "View Results",
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
            title="What I Do"
            subtitle="Specialized in building secure, scalable DeFi infrastructure"
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
