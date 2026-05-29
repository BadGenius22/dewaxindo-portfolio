/**
 * v3 Forge Edition - data module
 * All hard-coded content for the receipt/forge portfolio.
 * Translatable copy goes through next-intl; this file holds the
 * structural data (IDs, URLs, technical labels, metrics).
 */

export interface ReceiptCycleItem {
  id: string;
  project: string;
  chain: string;
  tvl: string;
  audit: string;
  /** Truncated display label for the contract / package / program address. */
  addr: string;
  /** Block-explorer URL pointing at the address above. If omitted, addr renders as plain text. */
  explorerUrl?: string;
}

export const RECEIPT_CYCLE: ReceiptCycleItem[] = [
  {
    id: "factor",
    project: "Factor Finance",
    chain: "Arbitrum One",
    tvl: "$50M+",
    audit: "PeckShield · 0 Critical",
    addr: "0x1b3c…ae47",
    // TODO: explorerUrl: "https://arbiscan.io/address/0x..."
  },
  {
    id: "toldproof",
    project: "Toldproof",
    chain: "Sui Testnet",
    tvl: "61/61 tests",
    audit: "Internal · 0 Critical",
    addr: "0x3450…22e4",
    explorerUrl:
      "https://suiscan.xyz/testnet/object/0x34504260083297947936564fb6f70476db3b17d7dce32aa038d27ad6a47b22e4/tx-blocks",
  },
  {
    id: "vouch",
    project: "Vouch Protocol",
    chain: "Solana · Noir",
    tvl: "ZK proofs",
    audit: "Self-reviewed",
    addr: "EhSk…LuaD",
    explorerUrl:
      "https://solscan.io/account/EhSkCuohWP8Sdfq6yHoKih6r2rsNoYYPZZSfpnyELuaD?cluster=devnet",
  },
];

export interface AuditStamp {
  date: string;
  label: string;
}

export const AUDIT_STAMPS: AuditStamp[] = [
  { date: "Q3 · 25", label: "0 CRITICAL · 0 HIGH" },
  { date: "Q1 · 25", label: "0 CRITICAL · 1 INFO" },
  { date: "Q3 · 24", label: "0 CRITICAL · 2 LOW" },
];

export const MARQUEE_TERMS = [
  "SOLIDITY",
  "RUST",
  "FOUNDRY",
  "ANCHOR",
  "SUI MOVE",
  "NOIR · ZK",
  "NEXT.JS",
  "PECKSHIELD AUDITED",
];

export interface CapabilityV3 {
  n: string;
  key: string;
  sk: string;
  sv: string;
  em?: boolean;
}

export const CAPABILITIES_V3: CapabilityV3[] = [
  { n: "01", key: "defi", sk: "TVL", sv: "$50M+", em: true },
  { n: "02", key: "contracts", sk: "STACK", sv: ".sol · .rs" },
  { n: "03", key: "multichain", sk: "CHAINS", sv: "06" },
  { n: "04", key: "security", sk: "CRITICAL", sv: "0/0/0", em: true },
  { n: "05", key: "zk", sk: "TOOLS", sv: "Noir · Walrus" },
  { n: "06", key: "fullstack", sk: "SHIPPED", sv: "Cx ↔ UI" },
];

export interface ProcessStep {
  n: string;
  key: string;
  meta: string;
  bulletKeys: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  { n: "01", key: "scope", meta: "DAYS 01—03", bulletKeys: ["0", "1", "2"] },
  { n: "02", key: "build", meta: "WEEKS 01—04", bulletKeys: ["0", "1", "2"] },
  { n: "03", key: "deploy", meta: "FINAL WEEK", bulletKeys: ["0", "1", "2"] },
];

export interface WorkStudy {
  role: string;
  window: string;
  stack: string[];
  challenge: string;
  contributions: string[];
  results: { k: string; v: string }[];
}

export interface WorkV3 {
  id: string;
  year: number;
  span: "span-5" | "span-6" | "span-7" | "span-12";
  name: string;
  host: string;
  url: string;
  featured?: boolean;
  taglineKey: string;
  tags: string[];
  metric: string;
  acid?: boolean;
  study?: WorkStudy;
  /** Public path to the screenshot, e.g. "/works/toldproof.png". If absent, falls back to the ghost-text placeholder. */
  image?: string;
}

/**
 * Work card screenshots
 *
 * Drop files into `/public/works/{id}.{png|jpg|webp}` and set the `image`
 * field on the matching entry below. When `image` is absent the card falls
 * back to the giant ghost-text placeholder.
 *
 * Recommended export: ~1600x1000 (16:10), under 400KB. PNG for UI shots,
 * JPG/WebP for photo-heavy captures.
 */
export const WORKS_V3: WorkV3[] = [
  {
    id: "toldproof",
    year: 2026,
    span: "span-7",
    name: "TOLDPROOF",
    host: "toldproof.xyz",
    url: "https://toldproof.xyz",
    taglineKey: "toldproof",
    tags: ["Sui Move", "Walrus", "x402"],
    metric: "61/61 · 0 critical",
    acid: true,
    image: "/images/projects/ToldProof.png",
  },
  {
    id: "amaly",
    year: 2026,
    span: "span-5",
    name: "Amaly",
    host: "amaly.app",
    url: "https://amaly.app",
    taglineKey: "amaly",
    tags: ["Next.js", "PWA"],
    metric: "224+ users",
    image: "/images/projects/Amaly.jpeg",
  },
  {
    id: "factor",
    year: 2025,
    span: "span-12",
    name: "Factor Finance",
    host: "pro.factor.fi",
    url: "https://pro.factor.fi/strategies",
    featured: true,
    taglineKey: "factor",
    tags: ["Solidity", "Foundry", "Arbitrum"],
    metric: "$50M+ TVL",
    image: "/images/projects/Factor.png",
    study: {
      role: "Core protocol engineer",
      window: "2024 — present",
      stack: ["Solidity 0.8.24", "Foundry", "Echidna", "Slither", "Aderyn", "Defender"],
      challenge:
        "Hold real user capital across volatile L2 liquidity venues without ever losing the principal. Withstand price shocks, MEV reorgs, and partner-protocol failures.",
      contributions: [
        "Built leveraged LP vaults for ETH, USDC.e, and PT-GMX across Camelot V3 and Uniswap V3.",
        "Wrote the rebalancer that keeps each pool within its target health band — saved ~$200k in gas vs the first design via assembly optimizations.",
        "Authored the invariant suite — 12 properties checked on every PR with 100k+ Echidna runs.",
        "Ran the deploy pipeline end-to-end: timelock, multisig, Defender monitors, on-call rotation for the first 30 days post-launch.",
      ],
      results: [
        { k: "TVL held", v: "$50M+" },
        { k: "Contracts live", v: "14" },
        { k: "Critical bugs", v: "0" },
        { k: "Line coverage", v: "100%" },
      ],
    },
  },
  {
    id: "rekon",
    year: 2026,
    span: "span-6",
    name: "RekonGG",
    host: "app.rekon.gg",
    url: "https://app.rekon.gg",
    taglineKey: "rekon",
    tags: ["Polymarket", "AI"],
    metric: "Live",
    image: "/images/projects/HomeRekon.png",
  },
  {
    id: "lazor",
    year: 2026,
    span: "span-6",
    name: "LazorKit SDK",
    host: "lazorkit-lovat.vercel.app",
    url: "https://lazorkit-lovat.vercel.app",
    taglineKey: "lazor",
    tags: ["Solana", "WebAuthn"],
    metric: "Dev template",
    image: "/images/projects/LazorKit.png",
  },
  {
    id: "vouch",
    year: 2026,
    span: "span-7",
    name: "Vouch Protocol",
    host: "vouch-protocol.vercel.app",
    url: "https://vouch-protocol.vercel.app",
    taglineKey: "vouch",
    tags: ["Solana", "Noir", "Privacy"],
    metric: "Hackathon",
    image: "/images/projects/Vouch.png",
  },
  {
    id: "boh",
    year: 2022,
    span: "span-5",
    name: "Battle of Heroes",
    host: "devpost.com",
    url: "https://devpost.com/software/battle-of-heroes",
    taglineKey: "boh",
    tags: ["Solidity", "Chainlink VRF"],
    metric: "$500 prize",
    image: "/images/projects/BattleOfHeroes.png",
  },
];

export interface LogEntry {
  date: string;
  project: string;
  chain: string;
  /** Truncated display label for the contract / package / program address. `"—"` means no on-chain address (web-only release). */
  addr: string;
  /** Block-explorer URL pointing at the address above. If absent, addr renders as plain text. */
  explorerUrl?: string;
  noteKey: string;
  live?: boolean;
}

export const LOG_ENTRIES: LogEntry[] = [
  {
    date: "2026.04.12",
    project: "TOLDPROOF",
    chain: "SUI TESTNET",
    addr: "0x3450…22e4",
    explorerUrl:
      "https://suiscan.xyz/testnet/object/0x34504260083297947936564fb6f70476db3b17d7dce32aa038d27ad6a47b22e4/tx-blocks",
    noteKey: "toldproof",
    live: true,
  },
  { date: "2026.03.05", project: "AMALY v2", chain: "WEB · PWA", addr: "—", noteKey: "amaly" },
  { date: "2026.02.18", project: "REKON.GG", chain: "POLYMARKET", addr: "—", noteKey: "rekon", live: true },
  { date: "2026.01.30", project: "LAZORKIT SDK", chain: "SOLANA", addr: "—", noteKey: "lazor" },
  { date: "2026.01.12", project: "VOUCH PROTOCOL", chain: "SOLANA · NOIR", addr: "EhSk…LuaD", explorerUrl: "https://solscan.io/account/EhSkCuohWP8Sdfq6yHoKih6r2rsNoYYPZZSfpnyELuaD?cluster=devnet", noteKey: "vouch" },
  { date: "2025.11.22", project: "FACTOR LEV WETH/USDC", chain: "ARBITRUM ONE", addr: "0xcB31…D28f", explorerUrl: "https://arbiscan.io/address/0xcB3104Ee2D1132346E137DdFC7CE68da9dFAD28f", noteKey: "factorWethUsdc", live: true },
  { date: "2025.09.04", project: "FACTOR MULTILEND USDC", chain: "ARBITRUM ONE", addr: "0xf19c…6cd2", explorerUrl: "https://arbiscan.io/address/0xf19cc43987838c975f2ba0e5cfe4c78580b86cd2", noteKey: "factorMultilend", live: true },
  { date: "2025.06.18", project: "FACTOR cbETH LENDING", chain: "BASE", addr: "0xee65…40f6", explorerUrl: "https://basescan.org/address/0xee65d18cdc1c879822214a878660b13e8fa440f6", noteKey: "factorCbeth", live: true },
  { date: "2022.10.09", project: "BATTLE OF HEROES", chain: "ETHEREUM", addr: "—", noteKey: "boh" },
];

export interface SocialV3 {
  pl: string;
  hd: string;
  url: string;
}

export const SOCIALS_V3: SocialV3[] = [
  { pl: "X / Twitter", hd: "@dewaxindo", url: "https://x.com/dewaxindo" },
  { pl: "GitHub", hd: "BadGenius22", url: "https://github.com/BadGenius22" },
  { pl: "LinkedIn", hd: "in/dewaxindo", url: "https://linkedin.com/in/dewaxindo" },
];

export const FORGE_EMAIL = "hi@dewaxindo.com";
