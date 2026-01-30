"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Lock,
  Globe,
  Code2,
  TrendingUp,
  Layers,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const cardStyles = cn(
  "rounded-xl p-6 flex flex-col cursor-pointer overflow-hidden transition-colors",
  "bg-card",
  "border border-border",
  "hover:border-border/80",
  "hover:bg-accent/50"
);

function TVLCounter() {
  // Initialize with final value - animation will override if motion is allowed
  const [value, setValue] = useState(50);
  const prefersReducedMotionRef = useRef(true);

  useEffect(() => {
    // Check for reduced motion preference
    prefersReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotionRef.current) return;

    // Reset to 0 and start animation
    let animatedValue = 0;
    const interval = setInterval(() => {
      animatedValue = animatedValue >= 50 ? 0 : animatedValue + 1;
      setValue(animatedValue);
    }, 200); // Increased from 100ms for better performance
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div className="text-center">
        <motion.span
          className="font-mono text-5xl md:text-7xl text-foreground font-bold"
          key={value}
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          ${value}M+
        </motion.span>
        <p className="text-muted-foreground text-sm mt-2">Total Value Locked</p>
      </motion.div>
    </div>
  );
}

function SecurityShields() {
  // Initialize with final state for reduced motion users
  const [scanProgress, setScanProgress] = useState(100);
  const [status, setStatus] = useState<"scanning" | "verified">("verified");
  const prefersReducedMotionRef = useRef(true);

  useEffect(() => {
    // Check for reduced motion preference
    prefersReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotionRef.current) return;

    // Reset and start animation
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 100) {
        setStatus("verified");
        setScanProgress(100);
        setTimeout(() => {
          setStatus("scanning");
          setScanProgress(0);
          progress = 0;
        }, 2000);
      } else {
        setScanProgress(progress);
      }
    }, 150); // Increased from 80ms for better performance
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      {/* Lock with scan effect */}
      <div className="relative">
        <motion.div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center",
            status === "verified"
              ? "bg-emerald-500/20"
              : "bg-muted"
          )}
          animate={{ scale: status === "verified" ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Lock
            className={cn(
              "w-6 h-6",
              status === "verified"
                ? "text-emerald-500"
                : "text-muted-foreground"
            )}
          />
        </motion.div>
        {/* Scanning line */}
        {status === "scanning" && (
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-emerald-500"
            style={{ top: `${scanProgress}%` }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </div>
      {/* Progress bar */}
      <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={cn(
            "h-full rounded-full",
            status === "verified" ? "bg-emerald-500" : "bg-muted-foreground/50"
          )}
          animate={{ width: `${scanProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <span className="text-[10px] text-muted-foreground">
        {status === "verified" ? "Audit Passed" : "Scanning..."}
      </span>
    </div>
  );
}

function CodeAnimation() {
  const [language, setLanguage] = useState<"solidity" | "rust">("solidity");

  const solidityCode = [
    { tokens: [{ text: "function", type: "keyword" }, { text: " deposit() ", type: "text" }, { text: "public", type: "keyword" }, { text: " {", type: "text" }] },
    { tokens: [{ text: "  require", type: "function" }, { text: "(msg.value > ", type: "text" }, { text: "0", type: "number" }, { text: ");", type: "text" }] },
    { tokens: [{ text: "  balances[msg.sender] ", type: "text" }, { text: "+=", type: "operator" }, { text: " msg.value;", type: "text" }] },
    { tokens: [{ text: "}", type: "text" }] },
  ];

  const rustCode = [
    { tokens: [{ text: "pub fn", type: "keyword" }, { text: " deposit(ctx: Context) ", type: "text" }, { text: "{", type: "text" }] },
    { tokens: [{ text: "  require!", type: "function" }, { text: "(ctx.amount > ", type: "text" }, { text: "0", type: "number" }, { text: ");", type: "text" }] },
    { tokens: [{ text: "  ctx.accounts.user.", type: "text" }, { text: "balance ", type: "text" }, { text: "+=", type: "operator" }, { text: " amount;", type: "text" }] },
    { tokens: [{ text: "}", type: "text" }] },
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setLanguage((prev) => (prev === "solidity" ? "rust" : "solidity"));
    }, 4000); // Increased from 3000ms for better performance
    return () => clearInterval(interval);
  }, []);

  const currentCode = language === "solidity" ? solidityCode : rustCode;

  const getTokenColor = (type: string) => {
    switch (type) {
      case "keyword":
        return "text-purple-500";
      case "function":
        return "text-blue-500";
      case "number":
        return "text-orange-500";
      case "operator":
        return "text-pink-500";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="flex flex-col justify-center h-full font-mono text-[11px]">
      <div className="bg-muted rounded-lg p-2.5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <motion.span
            className={cn(
              "px-1.5 py-0.5 rounded text-[9px] font-medium",
              language === "solidity"
                ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                : "bg-muted-foreground/20 text-muted-foreground"
            )}
            animate={{ scale: language === "solidity" ? 1.05 : 1 }}
          >
            .sol
          </motion.span>
          <span className="text-muted-foreground text-[9px]">→</span>
          <motion.span
            className={cn(
              "px-1.5 py-0.5 rounded text-[9px] font-medium",
              language === "rust"
                ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                : "bg-muted-foreground/20 text-muted-foreground"
            )}
            animate={{ scale: language === "rust" ? 1.05 : 1 }}
          >
            .rs
          </motion.span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            {currentCode.map((line, i) => (
              <div key={i} className="flex flex-wrap leading-tight">
                {line.tokens.map((token, j) => (
                  <span key={j} className={getTokenColor(token.type)}>
                    {token.text}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ChainNetwork() {
  const chains = [
    { name: "Ethereum", logo: "/images/chains/ethereum.png" },
    { name: "Arbitrum", logo: "/images/chains/arbitrum.png" },
    { name: "Solana", logo: "/images/chains/solana.png" },
    { name: "Polygon", logo: "/images/chains/polygon.png" },
    { name: "Base", logo: "/images/chains/base.png" },
  ];
  const [activeChain, setActiveChain] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveChain((prev) => (prev + 1) % chains.length);
    }, 2500); // Increased from 1500ms for better performance
    return () => clearInterval(interval);
  }, [chains.length]);

  const getPosition = (index: number) => {
    const angle = (index * 2 * Math.PI) / chains.length - Math.PI / 2;
    return {
      x: Math.cos(angle) * 60,
      y: Math.sin(angle) * 60,
    };
  };

  return (
    <div className="flex items-center justify-center h-full relative">
      {/* Connection lines */}
      <svg className="absolute w-[160px] h-[160px]" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
        {chains.map((chain, i) => {
          const pos = getPosition(i);
          return (
            <motion.line
              key={`line-${chain.name}`}
              x1="80"
              y1="80"
              x2={80 + pos.x}
              y2={80 + pos.y}
              className="stroke-border"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: i === activeChain ? 1 : 0.3,
                strokeWidth: i === activeChain ? 2 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
        {/* Data pulse animation on active line */}
        {chains.map((chain, i) => {
          const pos = getPosition(i);
          if (i !== activeChain) return null;
          return (
            <motion.circle
              key={`pulse-${chain.name}`}
              r="3"
              className="fill-blue-500"
              initial={{ cx: 80, cy: 80 }}
              animate={{
                cx: [80, 80 + pos.x],
                cy: [80, 80 + pos.y],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Center globe */}
      <motion.div
        className="relative z-10 w-10 h-10 rounded-full bg-muted flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Globe className="w-6 h-6 text-muted-foreground" />
      </motion.div>

      {/* Chain nodes */}
      {chains.map((chain, i) => {
        const pos = getPosition(i);
        return (
          <motion.div
            key={chain.name}
            className={cn(
              "absolute w-8 h-8 rounded-full flex items-center justify-center overflow-hidden",
              i === activeChain
                ? "bg-card ring-2 ring-blue-500 shadow-lg shadow-blue-500/20"
                : "bg-muted"
            )}
            style={{ left: "50%", top: "50%", marginLeft: -16, marginTop: -16 }}
            animate={{
              x: pos.x,
              y: pos.y,
              scale: i === activeChain ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={chain.logo}
              alt={chain.name}
              width={24}
              height={24}
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function ZKProof() {
  const [phase, setPhase] = useState<"encrypt" | "prove" | "verify">("encrypt");
  const originalText = "SECRET";
  const [displayText, setDisplayText] = useState(originalText);
  const chars = "█▓▒░×◊○●□■";

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setPhase("verify");
      return;
    }

    const phases: ("encrypt" | "prove" | "verify")[] = ["encrypt", "prove", "verify"];
    let phaseIndex = 0;

    const interval = setInterval(() => {
      phaseIndex = (phaseIndex + 1) % phases.length;
      setPhase(phases[phaseIndex]);
    }, 3000); // Increased from 2000ms for better performance

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayText(originalText);
      return;
    }

    if (phase === "encrypt") {
      let iterations = 0;
      const scramble = setInterval(() => {
        setDisplayText(
          originalText
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("")
        );
        iterations++;
        if (iterations > 8) clearInterval(scramble); // Reduced iterations
      }, 100); // Increased from 50ms for better performance
      return () => clearInterval(scramble);
    } else if (phase === "verify") {
      let index = 0;
      const reveal = setInterval(() => {
        setDisplayText(
          originalText
            .split("")
            .map((char, i) =>
              i <= index ? char : chars[Math.floor(Math.random() * chars.length)]
            )
            .join("")
        );
        index++;
        if (index >= originalText.length) clearInterval(reveal);
      }, 150); // Increased from 100ms for better performance
      return () => clearInterval(reveal);
    }
  }, [phase]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      {/* Encrypted text display */}
      <div className="relative">
        <motion.div
          className={cn(
            "px-4 py-2 rounded-lg font-mono text-lg tracking-widest",
            phase === "verify"
              ? "bg-pink-500/20 text-pink-500"
              : "bg-muted text-muted-foreground"
          )}
          animate={{ scale: phase === "verify" ? [1, 1.05, 1] : 1 }}
        >
          {displayText}
        </motion.div>
        {phase === "prove" && (
          <motion.div
            className="absolute inset-0 border-2 border-pink-500 rounded-lg"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>
      {/* Status */}
      <div className="flex items-center gap-2">
        <motion.div
          className={cn(
            "w-2 h-2 rounded-full",
            phase === "verify" ? "bg-pink-500" : "bg-muted-foreground/50"
          )}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        <span className="text-[10px] text-muted-foreground">
          {phase === "encrypt" && "Encrypting..."}
          {phase === "prove" && "Generating Proof..."}
          {phase === "verify" && "ZK Verified ✓"}
        </span>
      </div>
    </div>
  );
}

// Commands array moved to module level to avoid recreation on every render
const TERMINAL_COMMANDS = [
  { cmd: "pnpm build", output: "✓ Built successfully", color: "text-blue-500" },
  { cmd: "forge test", output: "✓ All tests passed", color: "text-green-500" },
  { cmd: "forge deploy", output: "✓ Contract live", color: "text-yellow-500" },
] as const;

function FullStackAnimation() {
  const [currentCmd, setCurrentCmd] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTypedText(TERMINAL_COMMANDS[currentCmd].cmd);
      setShowOutput(true);
      return;
    }

    const cmd = TERMINAL_COMMANDS[currentCmd].cmd;
    let charIndex = 0;
    setTypedText("");
    setShowOutput(false);

    const typeInterval = setInterval(() => {
      if (charIndex < cmd.length) {
        setTypedText(cmd.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowOutput(true), 400);
        setTimeout(() => {
          setCurrentCmd((prev) => (prev + 1) % TERMINAL_COMMANDS.length);
        }, 2500); // Increased from 1800ms for better performance
      }
    }, 120); // Increased from 80ms for better performance

    return () => clearInterval(typeInterval);
  }, [currentCmd]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCursorVisible(true);
      return;
    }

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530); // Slightly offset to avoid synchronization issues
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-2.5 w-full max-w-[180px] font-mono text-[10px]">
        {/* Terminal header */}
        <div className="flex items-center gap-1 mb-2 pb-1.5 border-b border-zinc-700/50">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="ml-2 text-zinc-500 text-[9px]">terminal</span>
        </div>
        {/* Command line */}
        <div className="space-y-1">
          <div className="flex items-center">
            <span className="text-green-400">$</span>
            <span className="text-zinc-300 ml-1">{typedText}</span>
            {!showOutput && (
              <span className={cn("ml-0.5 text-zinc-300", cursorVisible ? "opacity-100" : "opacity-0")}>
                █
              </span>
            )}
          </div>
          <AnimatePresence>
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={TERMINAL_COMMANDS[currentCmd].color}
              >
                {TERMINAL_COMMANDS[currentCmd].output}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function AnimatedBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto md:auto-rows-[220px]">
      {/* 1. DeFi Engineering - Tall (2x2) */}
      <motion.div
        className={cn(cardStyles, "md:col-span-2 md:row-span-2")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex-1">
          <TVLCounter />
        </div>
        <div className="mt-4">
          <h3 className="font-display text-xl text-foreground font-medium flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            DeFi Engineering
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Leverage vaults, LP management, yield strategies. Built protocols
            handling $50M+ TVL on Arbitrum.
          </p>
        </div>
      </motion.div>

      {/* 2. Smart Contracts - Standard (2x1) */}
      <motion.div
        className={cn(cardStyles, "md:col-span-2")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1 min-h-0 flex items-center">
          <CodeAnimation />
        </div>
        <div className="mt-3 flex-shrink-0">
          <h3 className="font-display text-xl text-foreground font-medium flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            Smart Contracts
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Solidity & Rust. Foundry, Hardhat, Anchor.
          </p>
        </div>
      </motion.div>

      {/* 3. Multi-Chain - Tall (2x2) */}
      <motion.div
        className={cn(cardStyles, "md:col-span-2 md:row-span-2 p-6")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex-1 flex items-center justify-center">
          <ChainNetwork />
        </div>
        <div className="mt-auto relative z-20 bg-card/80 backdrop-blur-sm rounded-lg p-2">
          <h3 className="font-display text-xl text-foreground flex items-center gap-2 font-medium">
            <Globe className="w-5 h-5" />
            Multi-Chain
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Ethereum, Arbitrum, Solana, Polygon, Base. AAVE, Compound, Pendle, Uniswap integrations.
          </p>
        </div>
      </motion.div>

      {/* 4. Security First - Standard (2x1) */}
      <motion.div
        className={cn(cardStyles, "md:col-span-2")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1 min-h-0 flex items-center">
          <SecurityShields />
        </div>
        <div className="mt-3 flex-shrink-0">
          <h3 className="font-display text-xl text-foreground font-medium flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Security First
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Fuzz testing, invariant testing. PeckShield audited.
          </p>
        </div>
      </motion.div>

      {/* 5. ZK & Privacy - Wide (3x1) */}
      <motion.div
        className={cn(cardStyles, "md:col-span-3")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <ZKProof />
        </div>
        <div className="mt-3 flex-shrink-0">
          <h3 className="font-display text-xl text-foreground flex items-center gap-2 font-medium">
            <Layers className="w-5 h-5" />
            ZK & Privacy
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Zero-knowledge proofs with Noir circuits. Privacy-preserving verification.
          </p>
        </div>
      </motion.div>

      {/* 6. Full Stack Web3 - Wide (3x1) */}
      <motion.div
        className={cn(cardStyles, "md:col-span-3")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <FullStackAnimation />
        </div>
        <div className="mt-3 flex-shrink-0">
          <h3 className="font-display text-xl text-foreground font-medium flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Full Stack Web3
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            React, Next.js, TypeScript. From contracts to polished frontends.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
