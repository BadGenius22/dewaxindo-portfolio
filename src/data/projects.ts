import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "factor-finance",
    title: "Factor Finance",
    tagline: "DeFi Yield Optimization on Arbitrum",
    description:
      "Core smart contract engineer building leverage vaults, LP management systems, and yield strategies. All contracts PeckShield audited with zero critical findings.",
    image: "/images/projects/factor-finance.svg",
    tags: ["Solidity", "Foundry", "Arbitrum", "DeFi", "Yield"],
    metrics: "$50M+ TVL",
    links: {
      live: "https://pro.factor.fi/strategies",
    },
    featured: true,
    role: "Smart Contract Engineer",
    year: 2025,
  },
  {
    id: "vouch-protocol",
    title: "Vouch Protocol",
    tagline: "ZK Reputation Infrastructure for Solana",
    description:
      "Privacy-preserving credential verification using Noir ZK circuits and Anchor programs. Proves wallet thresholds without revealing identity. Solana Privacy Hackathon submission.",
    image: "/images/projects/vouch-protocol.svg",
    tags: ["Solana", "ZK Proofs", "Noir", "Anchor", "Privacy"],
    links: {
      live: "https://vouch-protocol.vercel.app",
      github: "https://github.com/BadGenius22/vouch-protocol",
    },
    featured: true,
    role: "Lead Developer",
    year: 2026,
  },
  {
    id: "lazorkit-sdk",
    title: "LazorKit SDK",
    tagline: "Passkey-Based Solana Wallet",
    description:
      "Developer template for passkey wallets on Solana. WebAuthn authentication (Face ID/Touch ID), gasless transactions via Paymaster. Built with Next.js 16 and TypeScript.",
    image: "/images/projects/lazorkit-sdk.svg",
    tags: ["Solana", "WebAuthn", "Passkeys", "Next.js", "TypeScript"],
    links: {
      live: "https://lazorkit-lovat.vercel.app",
      github: "https://github.com/BadGenius22/Lazorkit",
    },
    featured: true,
    role: "Lead Developer",
    year: 2026,
  },
  {
    id: "rekon-gg",
    title: "RekonGG",
    tagline: "AI-Powered Esports Predictions",
    description:
      "Esports prediction market on Polymarket with AI match analysis. Integrated x402 protocol for seamless crypto payments.",
    image: "/images/projects/rekon-gg.svg",
    tags: ["Polymarket", "AI", "x402", "Predictions", "Esports"],
    links: {
      live: "https://app.rekon.gg",
      github: "https://github.com/BadGenius22/Rekon",
    },
    featured: true,
    role: "Blockchain Developer",
    year: 2026,
  },
  {
    id: "battle-of-heroes",
    title: "Battle of Heroes",
    tagline: "🏆 Chainlink Fall 2022 Hackathon Winner",
    description:
      "NFT battle game with verifiable randomness. Won $500 Top Quality Project prize using Chainlink VRF V2 and Automation on Polygon.",
    image: "/images/logos/chainlink.svg",
    tags: ["Solidity", "Chainlink VRF", "NFT Gaming", "Polygon"],
    metrics: "$500 Prize",
    links: {
      live: "https://devpost.com/software/battle-of-heroes",
      github: "https://github.com/BadGenius22/BoH-BackEnd",
    },
    featured: true,
    role: "Hackathon Winner",
    year: 2022,
  },
];

// Helper to get featured projects sorted by year
export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).toSorted((a, b) => b.year - a.year);

// Helper to get all unique tags
export const getAllTags = () =>
  [...new Set(projects.flatMap((p) => p.tags))].toSorted();
