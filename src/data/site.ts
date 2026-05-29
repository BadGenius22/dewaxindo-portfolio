/**
 * Site-wide constants and configuration
 * Centralized for easy updates and SEO consistency
 */

export const siteConfig = {
  name: "Dewangga Praxindo",
  title: "Dewangga Praxindo | DeFi Smart Contract Engineer",
  description:
    "Smart contract engineer (3+ yrs) building audited DeFi & Sui Move protocols — Sui, Arbitrum, Base, Solana. Creator of TOLDPROOF. $50M+ TVL, 0 criticals.",
  url: "https://dewaxindo.com",
  ogImage: "/og-image.png",
  favicon: "/favicon.ico",

  // SEO keywords for Google (including long-tail variations)
  keywords: [
    // Core
    "DeFi smart contract engineer",
    "Smart contract engineer",
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
    // AI / agentic payments
    "x402 developer",
    "AI agent infrastructure",
    "MCP developer",
    "prediction market developer",
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
    "hire Sui developer",
    "hire DeFi developer",
    "Web3 consultant Indonesia",
    "smart contract freelancer",
  ],

  // Author info for structured data
  author: {
    name: "Dewangga Praxindo",
    jobTitle: "DeFi & Sui Move Smart Contract Engineer",
    email: "hi@dewaxindo.com",
    location: "Yogyakarta, Indonesia",
    experience: "3+ years",
    tvlDeployed: "$50M+",
    specialties: [
      "Sui Move",
      "Walrus",
      "Seal",
      "Solidity",
      "Rust",
      "Anchor",
      "Noir zero-knowledge circuits",
      "x402 payments",
      "MCP",
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
