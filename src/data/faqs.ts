/**
 * FAQ data for structured data (Google SEO & AI Overviews)
 * These appear in search results and help AI understand the site.
 * Answer-engine optimized: each answer leads with a direct, self-contained
 * statement and re-states the subject so it is citable out of context.
 *
 * Bilingual: `faqs` (en) and `faqsId` (id) are kept 1:1 so the FAQPage JSON-LD
 * matches the page's <html lang>. Proper nouns and technical terms
 * (TOLDPROOF, Sui, Move, Walrus, Seal, Noir, PeckShield, ...) stay in English.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is Dewangga Praxindo's expertise in blockchain development?",
    answer:
      "Dewangga Praxindo is a smart contract engineer with 3+ years building secure protocols across Sui, Ethereum, Arbitrum, Base, and Solana. On Sui he writes Move contracts integrated with Walrus storage and Seal encryption; on EVM he builds DeFi systems including leverage vaults, LP management, and yield strategies; on Solana he works in Rust/Anchor including zero-knowledge circuits with Noir. He has deployed protocols managing $50M+ in TVL and emphasizes security-first development with fuzz testing, invariant testing, and external audits. His flagship TOLDPROOF passed three audits with zero Critical, High, or Medium findings.",
  },
  {
    question: "What smart contract development services does Dewangga offer?",
    answer:
      "Dewangga offers end-to-end smart contract development and review: DeFi protocol design and implementation, Sui Move development with Walrus storage and Seal encryption, zero-knowledge circuit development with Noir, account abstraction and passkey (WebAuthn) wallets, agentic-payment integrations (x402, MCP), security review and code audit, and gas optimization. His stack includes Solidity and Rust, Foundry and Hardhat for testing, Anchor for Solana, and integrations with AAVE, Compound, Pendle, and Uniswap.",
  },
  {
    question: "What notable DeFi projects has Dewangga Praxindo built?",
    answer:
      "Dewangga's flagship project is TOLDPROOF, a verifiable-reputation protocol on Sui built with Walrus storage and Seal encryption: sealed predictions with time-locked reveal, multi-agent AI resolution (Claude, GPT, Gemini) attesting outcomes on-chain, and MCP + x402 USDC payments. It passed three security audits with zero Critical, High, or Medium findings and was built for Sui Overflow 2026's Walrus track. Other notable work includes Factor Finance, a $50M+ TVL leverage-vault and yield protocol on Arbitrum (PeckShield-audited, zero criticals); Vouch Protocol, ZK reputation infrastructure on Solana using Noir circuits and Anchor; RekonGG, an AI esports prediction market on Polymarket with x402 crypto payments; LazorKit SDK, passkey (WebAuthn) Solana wallets with gasless Paymaster transactions; Amaly, a Ramadan ibadah-tracking PWA with 224+ users; and Battle of Heroes, a Chainlink VRF NFT game that won a 2022 Chainlink hackathon prize.",
  },
  {
    question: "How can I hire Dewangga Praxindo for smart contract development?",
    answer:
      "You can hire Dewangga for Sui Move development, EVM/Solana DeFi engineering, ZK circuit work, or independent smart contract security review. Reach out via X (@dewaxindo) for quick inquiries, Telegram (@dewaxindo) for detailed discussions, LinkedIn (dewaxindo) for professional networking, or email hi@dewaxindo.com for formal proposals. He works with both startups and established protocols across full-time project work, advisory roles, and audit engagements, and typically responds within 24-48 hours.",
  },
  {
    question: "What blockchain networks does Dewangga specialize in?",
    answer:
      "Dewangga builds on six blockchains: Ethereum, Arbitrum, Base, Solana, Sui, and Polygon. On Sui he builds Move smart contracts integrated with Walrus decentralized storage and Seal encryption (the stack behind his flagship TOLDPROOF). On EVM he targets Ethereum mainnet for high-value DeFi, Arbitrum for gas-efficient protocols ($50M+ TVL on Factor Finance), and Base for consumer Web3 products; he also shipped a Chainlink VRF game on Polygon in 2022. On Solana he builds with Rust and Anchor, including ZK reputation circuits (Vouch Protocol, using Noir) and passkey wallets (LazorKit). He integrates major DeFi protocols such as AAVE, Compound, Pendle, and Uniswap V3/V4.",
  },
  {
    question: "Does Dewangga Praxindo offer smart contract security audits?",
    answer:
      "Yes. Dewangga's protocols are built security-first and have passed external audits with strong results. His flagship Sui project TOLDPROOF cleared three independent security audits with zero Critical, High, or Medium findings, and his Arbitrum protocol Factor Finance was PeckShield-audited with zero critical findings. His process combines manual review for logic vulnerabilities, fuzz and invariant testing in Foundry, gas optimization, and proxy upgrade-safety verification. For critical protocol launches he still recommends an independent third-party audit for maximum coverage.",
  },
  {
    question: "What is TOLDPROOF?",
    answer:
      "TOLDPROOF is a verifiable-reputation protocol for AI agents and humans, built by Dewangga Praxindo on the Sui blockchain. It lets users commit sealed predictions using Walrus decentralized storage and Seal encryption with a time-locked reveal, then resolves outcomes on-chain via multi-agent AI attestation (Claude, GPT, and Gemini). It supports MCP and x402 USDC payments and was built for Sui Overflow 2026's Walrus track. TOLDPROOF passed three security audits with zero Critical, High, or Medium findings and 61 of 61 tests passing.",
  },
  {
    question: "Does Dewangga Praxindo build on Sui and Move?",
    answer:
      "Yes. Dewangga builds Sui Move smart contracts and integrates Sui-native infrastructure including Walrus decentralized storage and Seal encryption with access policies and time-lock. His flagship project, TOLDPROOF, is a Sui Move protocol built for Sui Overflow 2026's Walrus track that passed three audits with zero Critical, High, or Medium findings. He is available for Sui Move development and security review engagements.",
  },
  {
    question: "Can I hire Dewangga Praxindo for a Sui Move audit or development?",
    answer:
      "Yes. Dewangga takes on Sui Move development and security review engagements in addition to EVM and Solana work. His Sui experience includes building TOLDPROOF (Sui + Walrus + Seal + MCP + x402), which cleared three security audits with zero Critical, High, or Medium findings. To discuss a Sui audit or build, contact him via email (hi@dewaxindo.com), X (@dewaxindo), or Telegram (@dewaxindo); he typically responds within 24-48 hours.",
  },
  {
    question: "Who is Dewangga Praxindo?",
    answer:
      "Dewangga Praxindo is a DeFi and Sui Move smart contract engineer based in Yogyakarta, Indonesia, with 3+ years of experience. He builds audited protocols across Sui, Ethereum, Arbitrum, Base, and Solana, has deployed systems managing $50M+ in TVL, and specializes in Sui Move, zero-knowledge circuits (Noir), account abstraction, and agentic payments (x402, MCP). His flagship project TOLDPROOF passed three audits with zero criticals.",
  },
];

export const faqsId: FAQ[] = [
  {
    question: "Apa keahlian Dewangga Praxindo dalam pengembangan blockchain?",
    answer:
      "Dewangga Praxindo adalah smart contract engineer dengan pengalaman 3+ tahun membangun protokol yang aman di Sui, Ethereum, Arbitrum, Base, dan Solana. Di Sui ia menulis kontrak Move yang terintegrasi dengan penyimpanan Walrus dan enkripsi Seal; di EVM ia membangun sistem DeFi termasuk leverage vault, manajemen LP, dan strategi yield; di Solana ia bekerja dengan Rust/Anchor termasuk sirkuit zero-knowledge menggunakan Noir. Ia telah men-deploy protokol yang mengelola TVL lebih dari $50M dan mengutamakan pengembangan yang berfokus pada keamanan dengan fuzz testing, invariant testing, dan audit eksternal. Proyek andalannya, TOLDPROOF, lolos tiga audit tanpa temuan Critical, High, atau Medium.",
  },
  {
    question: "Layanan pengembangan smart contract apa yang ditawarkan Dewangga?",
    answer:
      "Dewangga menawarkan pengembangan dan review smart contract secara menyeluruh: desain dan implementasi protokol DeFi, pengembangan Sui Move dengan penyimpanan Walrus dan enkripsi Seal, pengembangan sirkuit zero-knowledge dengan Noir, account abstraction dan dompet passkey (WebAuthn), integrasi pembayaran agentic (x402, MCP), security review dan audit kode, serta optimasi gas. Stack-nya mencakup Solidity dan Rust, Foundry dan Hardhat untuk testing, Anchor untuk Solana, serta integrasi dengan AAVE, Compound, Pendle, dan Uniswap.",
  },
  {
    question: "Proyek DeFi penting apa saja yang telah dibangun Dewangga Praxindo?",
    answer:
      "Proyek andalan Dewangga adalah TOLDPROOF, protokol reputasi terverifikasi di Sui yang dibangun dengan penyimpanan Walrus dan enkripsi Seal: prediksi tersegel dengan pengungkapan time-locked, resolusi AI multi-agen (Claude, GPT, Gemini) yang mengesahkan hasil on-chain, serta pembayaran MCP + x402 USDC. Proyek ini lolos tiga audit keamanan tanpa temuan Critical, High, atau Medium dan dibangun untuk Walrus track Sui Overflow 2026. Karya penting lainnya termasuk Factor Finance, protokol leverage vault dan yield dengan TVL $50M+ di Arbitrum (diaudit PeckShield, nol critical); Vouch Protocol, infrastruktur reputasi ZK di Solana yang menggunakan sirkuit Noir dan Anchor; RekonGG, pasar prediksi esports berbasis AI di Polymarket dengan pembayaran crypto x402; LazorKit SDK, dompet passkey (WebAuthn) Solana dengan transaksi gasless via Paymaster; Amaly, PWA pelacak ibadah Ramadan dengan 224+ pengguna; dan Battle of Heroes, game NFT berbasis Chainlink VRF yang memenangkan hadiah di hackathon Chainlink 2022.",
  },
  {
    question: "Bagaimana cara hire Dewangga Praxindo untuk pengembangan smart contract?",
    answer:
      "Anda bisa hire Dewangga untuk pengembangan Sui Move, engineering DeFi di EVM/Solana, pekerjaan sirkuit ZK, atau security review smart contract independen. Hubungi via X (@dewaxindo) untuk pertanyaan singkat, Telegram (@dewaxindo) untuk diskusi mendetail, LinkedIn (dewaxindo) untuk jejaring profesional, atau email hi@dewaxindo.com untuk proposal formal. Ia bekerja dengan startup maupun protokol mapan, baik proyek penuh waktu, peran advisory, maupun engagement audit, dan biasanya merespons dalam 24-48 jam.",
  },
  {
    question: "Jaringan blockchain apa yang menjadi spesialisasi Dewangga?",
    answer:
      "Dewangga membangun di enam blockchain: Ethereum, Arbitrum, Base, Solana, Sui, dan Polygon. Di Sui ia membangun smart contract Move yang terintegrasi dengan penyimpanan terdesentralisasi Walrus dan enkripsi Seal (stack di balik proyek andalannya, TOLDPROOF). Di EVM ia menyasar Ethereum mainnet untuk DeFi bernilai tinggi, Arbitrum untuk protokol hemat gas (TVL $50M+ di Factor Finance), dan Base untuk produk Web3 konsumen; ia juga merilis game Chainlink VRF di Polygon pada 2022. Di Solana ia membangun dengan Rust dan Anchor, termasuk sirkuit reputasi ZK (Vouch Protocol, menggunakan Noir) dan dompet passkey (LazorKit). Ia mengintegrasikan protokol DeFi besar seperti AAVE, Compound, Pendle, dan Uniswap V3/V4.",
  },
  {
    question: "Apakah Dewangga Praxindo menyediakan audit keamanan smart contract?",
    answer:
      "Ya. Protokol Dewangga dibangun dengan mengutamakan keamanan dan telah lolos audit eksternal dengan hasil yang kuat. Proyek Sui andalannya, TOLDPROOF, lolos tiga audit keamanan independen tanpa temuan Critical, High, atau Medium, dan protokol Arbitrum-nya, Factor Finance, diaudit PeckShield tanpa temuan critical. Prosesnya memadukan review manual untuk kerentanan logika, fuzz dan invariant testing di Foundry, optimasi gas, dan verifikasi keamanan upgrade proxy. Untuk peluncuran protokol yang kritis, ia tetap menyarankan audit pihak ketiga independen demi cakupan maksimal.",
  },
  {
    question: "Apa itu TOLDPROOF?",
    answer:
      "TOLDPROOF adalah protokol reputasi terverifikasi untuk AI agent dan manusia, dibangun oleh Dewangga Praxindo di blockchain Sui. Protokol ini memungkinkan pengguna membuat prediksi tersegel menggunakan penyimpanan terdesentralisasi Walrus dan enkripsi Seal dengan pengungkapan time-locked, lalu menyelesaikan hasilnya on-chain melalui atestasi AI multi-agen (Claude, GPT, dan Gemini). TOLDPROOF mendukung pembayaran MCP dan x402 USDC dan dibangun untuk Walrus track Sui Overflow 2026. Proyek ini lolos tiga audit keamanan tanpa temuan Critical, High, atau Medium dengan 61 dari 61 tes lulus.",
  },
  {
    question: "Apakah Dewangga Praxindo membangun di Sui dan Move?",
    answer:
      "Ya. Dewangga membangun smart contract Sui Move dan mengintegrasikan infrastruktur native Sui termasuk penyimpanan terdesentralisasi Walrus dan enkripsi Seal dengan kebijakan akses dan time-lock. Proyek andalannya, TOLDPROOF, adalah protokol Sui Move yang dibangun untuk Walrus track Sui Overflow 2026 dan lolos tiga audit tanpa temuan Critical, High, atau Medium. Ia tersedia untuk engagement pengembangan dan security review Sui Move.",
  },
  {
    question: "Bisakah saya hire Dewangga Praxindo untuk audit atau pengembangan Sui Move?",
    answer:
      "Ya. Dewangga menerima engagement pengembangan dan security review Sui Move, selain pekerjaan EVM dan Solana. Pengalaman Sui-nya mencakup membangun TOLDPROOF (Sui + Walrus + Seal + MCP + x402), yang lolos tiga audit keamanan tanpa temuan Critical, High, atau Medium. Untuk mendiskusikan audit atau pembangunan di Sui, hubungi via email (hi@dewaxindo.com), X (@dewaxindo), atau Telegram (@dewaxindo); ia biasanya merespons dalam 24-48 jam.",
  },
  {
    question: "Siapa Dewangga Praxindo?",
    answer:
      "Dewangga Praxindo adalah DeFi dan Sui Move smart contract engineer yang berbasis di Yogyakarta, Indonesia, dengan pengalaman 3+ tahun. Ia membangun protokol teraudit di Sui, Ethereum, Arbitrum, Base, dan Solana, telah men-deploy sistem yang mengelola TVL $50M+, dan berspesialisasi dalam Sui Move, sirkuit zero-knowledge (Noir), account abstraction, dan pembayaran agentic (x402, MCP). Proyek andalannya, TOLDPROOF, lolos tiga audit tanpa temuan critical.",
  },
];

// Helper to get FAQs for schema, matched to the page locale
export const getFAQs = (locale: string = "en") => (locale === "id" ? faqsId : faqs);
