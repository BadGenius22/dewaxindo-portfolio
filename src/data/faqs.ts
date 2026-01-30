/**
 * FAQ data for structured data (Google SEO & AI Overviews)
 * These appear in search results and help AI understand the site
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is Dewangga Praxindo's expertise in blockchain development?",
    answer:
      "Dewangga Praxindo is a DeFi smart contract engineer with over 3 years of hands-on experience building secure, scalable protocols on Ethereum, Arbitrum, Solana, Base, and Polygon. His expertise spans the full DeFi stack including leverage vaults, liquidity pool management, yield optimization strategies, and cross-chain integrations. He has successfully deployed protocols managing over $50M in total value locked (TVL), with a strong focus on security-first development practices including comprehensive fuzz testing, invariant testing, and external security audits.",
  },
  {
    question: "What smart contract development services does Dewangga offer?",
    answer:
      "Dewangga offers end-to-end smart contract development services including DeFi protocol design and implementation, security auditing and code review, gas optimization, and full-stack Web3 dApp development. His technical stack includes Solidity and Rust programming, Foundry and Hardhat for testing, Anchor framework for Solana development, and integrations with major DeFi protocols like AAVE, Compound, Pendle, and Uniswap. He also specializes in zero-knowledge proof circuits using Noir and passkey-based wallet infrastructure using WebAuthn standards.",
  },
  {
    question: "What notable DeFi projects has Dewangga Praxindo built?",
    answer:
      "Dewangga has contributed to several high-impact DeFi projects. Factor Finance is a composable DeFi platform on Arbitrum that achieved $50M+ TVL, featuring leverage vaults and yield optimization strategies. RekonGG is an AI-powered esports prediction market with real-time odds generation. LazorKit SDK enables passkey-based wallet creation on Solana using WebAuthn technology. Vouch Protocol implements zero-knowledge identity verification using Noir circuits for privacy-preserving credential verification. Battle of Heroes is an NFT gaming platform utilizing Chainlink VRF for provably fair randomness.",
  },
  {
    question: "How can I hire Dewangga Praxindo for smart contract development?",
    answer:
      "To discuss project requirements and collaboration opportunities, you can reach out through multiple channels. Connect via Twitter/X (@dewaxindo) for quick inquiries, Telegram (@dewaxindo) for detailed discussions, LinkedIn (dewaxindo) for professional networking, or email at hi@dewaxindo.com for formal proposals. Dewangga works with both startups and established protocols, offering flexible engagement models including full-time project work, advisory roles, and security auditing services. Response time is typically within 24-48 hours for serious inquiries.",
  },
  {
    question: "What blockchain networks does Dewangga specialize in?",
    answer:
      "Dewangga has deep expertise across multiple EVM-compatible chains and Solana. His primary focus includes Ethereum mainnet for high-value DeFi protocols, Arbitrum for gas-efficient DeFi applications, Base for consumer-focused Web3 products, Polygon for scalable applications, and Solana for high-performance trading systems. He maintains proficiency in cross-chain development patterns and has experience integrating with major DeFi protocols including AAVE, Compound, Pendle, and Uniswap V3/V4 across these networks.",
  },
  {
    question: "Does Dewangga Praxindo offer smart contract security audits?",
    answer:
      "Yes, Dewangga provides comprehensive smart contract security review services. His approach includes manual code review for logic vulnerabilities, automated testing with fuzz testing and invariant testing using Foundry, gas optimization analysis, and upgrade safety verification for proxy contracts. His protocols have undergone external audits by firms like PeckShield. While he offers thorough security reviews, for critical protocol launches he recommends combining his review with an independent third-party audit for maximum coverage.",
  },
];

// Helper to get FAQs for schema
export const getFAQs = () => faqs;
