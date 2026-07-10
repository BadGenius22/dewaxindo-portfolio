/**
 * Site-wide constants and configuration
 * Centralized for easy updates and SEO consistency
 */

export const siteConfig = {
  name: "Dewangga Praxindo",
  title: "Dewangga Praxindo | Web3 Security Researcher",
  description:
    "Web3 security researcher (3+ yrs). Audit contests on Sherlock & Code4rena, audited Solidity & Sui Move protocols, plus AI agents and Next.js products. $50M+ TVL · 3 audits · 0 criticals.",
  url: "https://dewaxindo.com",
  ogImage: "/og-image.png",
  favicon: "/favicon.ico",

  // SEO keywords for Google (including long-tail variations)
  keywords: [
    // Core identity (security-led)
    "Web3 security researcher",
    "smart contract auditor",
    "smart contract security researcher",
    "blockchain security researcher",
    "DeFi security researcher",
    "Solidity auditor",
    "Sui Move auditor",
    "Solana program auditor",
    // Competitive auditing
    "Sherlock watson",
    "Code4rena warden",
    "audit contest researcher",
    "competitive smart contract auditing",
    // Retained: AI / agentic
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
    "smart contract security review",
    "threat modeling smart contracts",
    "invariant testing Foundry",
    "fuzz testing smart contracts",
    "Echidna invariant testing",
    "Slither static analysis",
    "DeFi protocol engineering",
    "Foundry smart contract testing",
    "Anchor Solana developer",
    "Rust Solana developer",
    // Service-oriented
    "hire smart contract auditor",
    "hire Web3 security researcher",
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
    jobTitle: "Web3 Security Researcher",
    email: "hi@dewaxindo.com",
    location: "Yogyakarta, Indonesia",
    experience: "3+ years",
    tvlDeployed: "$50M+",
    specialties: [
      "smart contract security research",
      "smart contract auditing",
      "competitive audit contests",
      "threat modeling",
      "fuzz testing",
      "invariant testing",
      "Solidity",
      "Sui Move",
      "Rust",
      "Anchor",
      "Foundry",
      "Echidna",
      "Slither",
      "Noir zero-knowledge circuits",
      "DeFi protocol engineering",
      "AI agents",
      "x402 payments",
      "MCP",
      "prediction markets",
      "Next.js",
      "TypeScript",
      "React",
      "PWA",
      "Walrus",
      "Seal",
      "account abstraction",
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

  // Verifiable external credential profiles (surfaced in Person JSON-LD sameAs)
  credentials: {
    sherlock: "https://audits.sherlock.xyz/watson/BadGenius",
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
