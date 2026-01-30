"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  FileText,
  DollarSign,
  Shield,
  Fingerprint,
  Brain,
  Dices,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  Solidity: "bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20",
  Rust: "bg-orange-500/10 text-orange-500 dark:text-orange-400 border-orange-500/20",
  DeFi: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/20",
  ZK: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/20",
  Arbitrum: "bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20",
  Solana: "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20",
  Gaming: "bg-pink-500/10 text-pink-500 dark:text-pink-400 border-pink-500/20",
  SDK: "bg-yellow-500/10 text-yellow-500 dark:text-yellow-400 border-yellow-500/20",
  Wallet: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/20",
  Identity: "bg-teal-500/10 text-teal-500 dark:text-teal-400 border-teal-500/20",
  Yield: "bg-green-500/10 text-green-500 dark:text-green-400 border-green-500/20",
  "Prediction Market": "bg-rose-500/10 text-rose-500 dark:text-rose-400 border-rose-500/20",
  Foundry: "bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/20",
  "ZK Proofs": "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/20",
  Noir: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  Anchor: "bg-violet-500/10 text-violet-500 dark:text-violet-400 border-violet-500/20",
  Privacy: "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
  WebAuthn: "bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20",
  Passkeys: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/20",
  "Next.js": "bg-black/10 dark:bg-white/10 text-black dark:text-white border-black/20 dark:border-white/20",
  TypeScript: "bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20",
  Polymarket: "bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20",
  AI: "bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20",
  x402: "bg-green-500/10 text-green-500 dark:text-green-400 border-green-500/20",
  Predictions: "bg-rose-500/10 text-rose-500 dark:text-rose-400 border-rose-500/20",
  Esports: "bg-red-500/10 text-red-500 dark:text-red-400 border-red-500/20",
  "Chainlink VRF": "bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20",
  "NFT Gaming": "bg-pink-500/10 text-pink-500 dark:text-pink-400 border-pink-500/20",
  Polygon: "bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20",
};

// Grid layout: 2 wide top + 3 equal bottom
const gridConfig = [
  "md:col-span-3", // Card 1 - wide
  "md:col-span-3", // Card 2 - wide
  "md:col-span-2", // Card 3 - standard
  "md:col-span-2", // Card 4 - standard
  "md:col-span-2", // Card 5 - standard
];

// Animated icon for Factor Finance - Money/Dollar
function MoneyIcon() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 3000); // Increased from 2000ms for better performance
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
        pulse ? "bg-emerald-500/20" : "bg-emerald-500/10"
      )}
      animate={{ scale: pulse ? [1, 1.2, 1] : 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        animate={{ y: pulse ? [0, -3, 0] : 0 }}
        transition={{ duration: 0.4 }}
      >
        <DollarSign className={cn("w-4 h-4", pulse ? "text-emerald-400" : "text-emerald-500")} />
      </motion.div>
    </motion.div>
  );
}

// Animated icon for Vouch Protocol - ZK Shield
function ShieldIcon() {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setVerified(true);
      setTimeout(() => setVerified(false), 1500);
    }, 4000); // Increased from 3000ms for better performance
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
        verified ? "bg-cyan-500/20" : "bg-cyan-500/10"
      )}
      animate={{ scale: verified ? [1, 1.15, 1] : 1 }}
      transition={{ duration: 0.3 }}
    >
      <Shield className={cn("w-4 h-4", verified ? "text-cyan-400" : "text-cyan-500")} />
    </motion.div>
  );
}

// Animated icon for LazorKit - Fingerprint
function FingerprintIcon() {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setScanning(false);
      setTimeout(() => setScanning(true), 1000);
    }, 3500); // Increased from 2500ms for better performance
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center relative overflow-hidden">
      <Fingerprint className={cn("w-4 h-4 z-10", scanning ? "text-indigo-500/70" : "text-indigo-500")} />
      {scanning && (
        <motion.div
          className="absolute inset-x-0 h-0.5 bg-indigo-500"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.div>
  );
}

// Animated icon for RekonGG - AI Brain
function BrainIcon() {
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setThinking(true);
      setTimeout(() => setThinking(false), 1000);
    }, 3500); // Increased from 2500ms for better performance
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
        thinking ? "bg-purple-500/20" : "bg-purple-500/10"
      )}
    >
      <motion.div
        animate={{ rotate: thinking ? 360 : 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
      >
        <Brain className={cn("w-4 h-4", thinking ? "text-purple-400" : "text-purple-500")} />
      </motion.div>
    </motion.div>
  );
}

// Animated icon for Battle of Heroes - VRF Dice
function DiceIcon() {
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setRolling(true);
      setTimeout(() => setRolling(false), 800);
    }, 4000); // Increased from 3000ms for better performance
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
        rolling ? "bg-pink-500/20" : "bg-pink-500/10"
      )}
    >
      <motion.div
        animate={{ rotate: rolling ? [0, 90, 180, 270, 360] : 0 }}
        transition={{ duration: 0.4, repeat: rolling ? 2 : 0 }}
      >
        <Dices className={cn("w-4 h-4", rolling ? "text-pink-400" : "text-pink-500")} />
      </motion.div>
    </motion.div>
  );
}

// Map project IDs to their animated icons
const projectIcons: Record<string, React.ComponentType> = {
  "factor-finance": MoneyIcon,
  "vouch-protocol": ShieldIcon,
  "lazorkit-sdk": FingerprintIcon,
  "rekon-gg": BrainIcon,
  "battle-of-heroes": DiceIcon,
};

export function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="bg-background px-6 py-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.p
          className="text-muted-foreground font-display text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto md:auto-rows-[220px]">
          {projects.map((project, index) => {
            const isWide = index < 2;
            const AnimatedIcon = projectIcons[project.id];

            return (
              <motion.div
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border bg-card",
                  "transition-colors hover:border-border/80 hover:bg-accent/50",
                  "flex flex-col cursor-pointer",
                  gridConfig[index] || "md:col-span-2"
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: isWide ? 1.02 : 0.98 }}
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.year}
                    </span>
                    {project.metrics && (
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary font-mono text-xs"
                      >
                        {project.metrics}
                      </Badge>
                    )}
                  </div>

                  {/* Title with animated icon */}
                  <div className="flex items-center gap-3 mb-1">
                    {AnimatedIcon && <AnimatedIcon />}
                    <h3 className="font-display text-xl text-foreground font-medium">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {project.tagline}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, isWide ? 4 : 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={cn(
                          "text-[10px] font-medium",
                          tagColors[tag] ||
                            "bg-muted text-muted-foreground border-border"
                        )}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 flex gap-2">
                    {project.links.live && (
                      <Button size="sm" variant="default" className="h-8" asChild>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1.5 h-3 w-3" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" className="h-8" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1.5 h-3 w-3" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.docs && (
                      <Button size="sm" variant="outline" className="h-8" asChild>
                        <a
                          href={project.links.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-1.5 h-3 w-3" />
                          Docs
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
