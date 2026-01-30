/**
 * Site-wide constants and configuration
 * Centralized for easy updates and SEO consistency
 */

export const siteConfig = {
  name: "Dewangga Praxindo",
  title: "Dewangga Praxindo | DeFi Smart Contract Engineer",
  description:
    "DeFi smart contract engineer with 3+ years experience. Building secure, scalable protocols on Ethereum, Arbitrum, and Solana. $50M+ TVL deployed.",
  url: "https://dewaxindo.com",
  ogImage: "/og-image.png",
  favicon: "/favicon.ico",

  // SEO keywords for Google (including long-tail variations)
  keywords: [
    // Core keywords
    "DeFi developer",
    "Smart contract engineer",
    "Solidity developer",
    "Web3 developer",
    "Blockchain engineer",
    // Platform-specific
    "Arbitrum developer",
    "Ethereum developer",
    "Solana developer",
    "Base developer",
    "Polygon developer",
    // Long-tail variations
    "DeFi smart contract audit",
    "Web3 dApp development",
    "DeFi protocol engineering",
    "Smart contract security audit",
    "Yield farming protocol development",
    "Liquidity pool smart contracts",
    "EVM smart contract developer",
    "Rust Solana developer",
    "Foundry smart contract testing",
    "TVL protocol development",
    // Service-oriented
    "hire DeFi developer",
    "Web3 consultant Indonesia",
    "smart contract freelancer",
    "blockchain development services",
  ],

  // Author info for structured data
  author: {
    name: "Dewangga Praxindo",
    jobTitle: "DeFi Smart Contract Engineer",
    email: "hi@dewaxindo.com",
    location: "Yogyakarta, Indonesia",
    experience: "3+ years",
    tvlDeployed: "$50M+",
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
