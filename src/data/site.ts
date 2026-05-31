/**
 * Site-wide constants and configuration
 * Centralized for easy updates and SEO consistency
 */

export const siteConfig = {
  name: "Dewangga Praxindo",
  title: "Dewangga Praxindo | AI · Smart Contract · Full-Stack Engineer",
  description:
    "AI, smart contract & full-stack engineer (3+ yrs). Ship AI agents on x402/MCP, audited Sui Move & Solidity protocols, and Next.js products. $50M+ TVL · 3 audits · 0 criticals.",
  url: "https://dewaxindo.com",
  ogImage: "/og-image.png",
  favicon: "/favicon.ico",

  // SEO keywords for Google (including long-tail variations)
  keywords: [
    // Core identity (new framing)
    "AI engineer",
    "AI agent engineer",
    "Full-stack engineer",
    "Full-stack Web3 engineer",
    "DeFi smart contract engineer",
    "Smart contract engineer",
    // AI / agentic
    "x402 developer",
    "MCP developer",
    "MCP server developer",
    "AI agent infrastructure",
    "agentic payments developer",
    "prediction market developer",
    "AI prediction market",
    // Full-stack
    "Next.js developer",
    "TypeScript developer",
    "React developer",
    "PWA developer",
    "Tailwind developer",
    // Smart contract
    "Solidity developer",
    "Web3 developer",
    "Blockchain engineer",
    // Sui / Move (flagship stack)
    "Sui developer",
    "Sui Move developer",
    "Move developer",
    "Walrus developer",
    "Seal Sui developer",
    "Sui smart contract developer",
    // ZK / privacy
    "Noir developer",
    "zero-knowledge developer",
    "ZK circuit developer",
    "ZK proof Solana",
    // Wallet infra
    "passkey wallet developer",
    "account abstraction Solana",
    "WebAuthn wallet",
    // Chains
    "Arbitrum developer",
    "Ethereum developer",
    "Solana developer",
    "Base developer",
    "Polygon developer",
    // Practice
    "smart contract security audit",
    "DeFi protocol engineering",
    "Foundry smart contract testing",
    "Anchor Solana developer",
    "Rust Solana developer",
    // Service-oriented
    "hire AI engineer",
    "hire full-stack engineer",
    "hire Sui developer",
    "hire DeFi developer",
    "Web3 consultant Indonesia",
    "smart contract freelancer",
  ],

  // Author info for structured data
  author: {
    name: "Dewangga Praxindo",
    jobTitle: "AI, Smart Contract & Full-Stack Engineer",
    email: "hi@dewaxindo.com",
    location: "Yogyakarta, Indonesia",
    experience: "3+ years",
    tvlDeployed: "$50M+",
    specialties: [
      "AI agents",
      "x402 payments",
      "MCP",
      "prediction markets",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "PWA",
      "Sui Move",
      "Walrus",
      "Seal",
      "Solidity",
      "Rust",
      "Anchor",
      "Noir zero-knowledge circuits",
      "account abstraction",
      "DeFi protocol engineering",
      "smart contract security",
    ],
  },

  // Social handles for Meta Ads tracking and Open Graph
  social: {
    x: "@dewaxindo",
    github: "BadGenius22",
    linkedin: "dewaxindo",
    telegram: "@dewaxindo",
    instagram: "@dewaxindo",
    youtube: "@dewaxindo",
  },

  // Theme configuration
  theme: {
    defaultMode: "dark" as const,
    accentColor: "#3b82f6", // blue-500
  },

  // Analytics IDs (add when ready)
  analytics: {
    // Google Analytics 4
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    // Meta Pixel for Meta Ads
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
    // Google Tag Manager
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  },
} as const;

// Type for site config
export type SiteConfig = typeof siteConfig;
