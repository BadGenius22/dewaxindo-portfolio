import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "factor-finance",
    title: "Factor Finance",
    tagline: "Composable DeFi on Arbitrum",
    description:
      "Led smart contract development for leverage vaults and LP management systems. Built core protocol infrastructure handling $50M+ in TVL with zero security incidents.",
    image: "/images/projects/factor-finance.svg",
    tags: ["Solidity", "DeFi", "Arbitrum", "Yield"],
    metrics: "$50M+ TVL",
    links: {
      live: "https://factor.fi",
      github: "https://github.com/FactorDAO",
    },
    featured: true,
    role: "Smart Contract Engineer",
    year: 2024,
  },
  {
    id: "rekon-gg",
    title: "RekonGG",
    tagline: "Esports Prediction Market",
    description:
      "Building a decentralized prediction market for esports outcomes. Developing smart contracts for betting pools, oracle integration, and reward distribution.",
    image: "/images/projects/rekon-gg.svg",
    tags: ["Solidity", "Gaming", "Prediction Market"],
    links: {
      live: "https://rekon.gg",
    },
    featured: true,
    role: "Blockchain Developer",
    year: 2024,
  },
  {
    id: "lazorkit-sdk",
    title: "LazorKit SDK",
    tagline: "Passkey Wallet Infrastructure",
    description:
      "Developer toolkit enabling passkey-based wallet authentication on Solana. Simplified onboarding with Web3Auth-style UX without custodial tradeoffs.",
    image: "/images/projects/lazorkit-sdk.svg",
    tags: ["Rust", "Solana", "SDK", "Wallet"],
    links: {
      docs: "https://docs.lazorkit.dev",
      github: "https://github.com/paxinterra/lazorkit",
    },
    featured: true,
    role: "Lead Developer",
    year: 2024,
  },
  {
    id: "vouch-protocol",
    title: "Vouch Protocol",
    tagline: "ZK Identity Verification",
    description:
      "Decentralized reputation and identity verification using zero-knowledge proofs. Enabling privacy-preserving credential verification on-chain.",
    image: "/images/projects/vouch-protocol.svg",
    tags: ["Solidity", "ZK", "Identity"],
    links: {
      live: "https://vouch.id",
    },
    featured: true,
    role: "Protocol Engineer",
    year: 2023,
  },
];

// Helper to get featured projects sorted by year
export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).toSorted((a, b) => b.year - a.year);

// Helper to get all unique tags
export const getAllTags = () =>
  [...new Set(projects.flatMap((p) => p.tags))].toSorted();
