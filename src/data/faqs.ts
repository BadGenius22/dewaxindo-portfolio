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
    question: "What is Dewangga Praxindo's expertise?",
    answer:
      "Dewangga Praxindo is a DeFi smart contract engineer with 3+ years of experience building secure, scalable protocols on Ethereum, Arbitrum, and Solana. He has deployed over $50M in total value locked (TVL) across various DeFi projects.",
  },
  {
    question: "What services does Dewangga Praxindo offer?",
    answer:
      "Services include smart contract development, DeFi protocol design, security auditing, and Web3 consulting. Specializations include Solidity, Rust, leverage vaults, LP management systems, and passkey wallet infrastructure.",
  },
  {
    question: "What projects has Dewangga Praxindo worked on?",
    answer:
      "Notable projects include Factor Finance (composable DeFi on Arbitrum with $50M+ TVL), RekonGG (esports prediction market), LazorKit SDK (passkey wallet infrastructure on Solana), and Vouch Protocol (ZK identity verification).",
  },
  {
    question: "How can I hire Dewangga Praxindo for a project?",
    answer:
      "You can reach out via Twitter (@dewaxindo), Telegram (@dewaxindo), LinkedIn (@dewaxindo), to discuss project requirements and collaboration opportunities.",
  },
];

// Helper to get FAQs for schema
export const getFAQs = () => faqs;
