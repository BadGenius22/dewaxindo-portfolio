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
      "Dewangga Praxindo is a Web3 security researcher and smart contract engineer with 3+ years securing and building protocols across Sui, Ethereum, Arbitrum, Base, and Solana. He audits smart contracts in competitive contests on Sherlock and Code4rena, and reviews protocols before launch with threat models, fuzz testing, and invariant testing. He also builds: on Sui he writes Move contracts integrated with Walrus storage and Seal encryption; on EVM he builds DeFi systems including leverage vaults, LP management, and yield strategies; on Solana he works in Rust/Anchor including zero-knowledge circuits with Noir. He has deployed protocols managing $50M+ in TVL and emphasizes security-first development with fuzz testing, invariant testing, and external audits. His flagship TOLDPROOF passed three audits with zero Critical, High, or Medium findings.",
  },
  {
    question: "What smart contract development services does Dewangga offer?",
    answer:
      "Dewangga offers smart contract security review and end-to-end development. Security work covers independent code audits, threat modeling, fuzz and invariant test suites (Foundry, Echidna), and static analysis with Slither and Aderyn. Build work covers DeFi protocol design and implementation, Sui Move development with Walrus storage and Seal encryption, zero-knowledge circuit development with Noir, account abstraction and passkey (WebAuthn) wallets, agentic-payment integrations (x402, MCP), gas optimization, and the AI agents and Next.js products around those contracts. His stack includes Solidity and Rust, Foundry and Hardhat for testing, Anchor for Solana, and integrations with AAVE, Compound, Pendle, and Uniswap.",
  },
  {
    question: "What notable DeFi projects has Dewangga Praxindo built?",
    answer:
      "Dewangga's flagship project is TOLDPROOF, a verifiable-reputation protocol on Sui built with Walrus storage and Seal encryption: sealed predictions with time-locked reveal, multi-agent AI resolution (Claude, GPT, Gemini) attesting outcomes on-chain, and MCP + x402 USDC payments. It passed three security audits with zero Critical, High, or Medium findings and was built for Sui Overflow 2026's Walrus track. Other notable work includes Factor Finance, a $50M+ TVL leverage-vault and yield protocol on Arbitrum (PeckShield-audited, zero criticals); Vouch Protocol, ZK reputation infrastructure on Solana using Noir circuits and Anchor; RekonGG, an AI esports prediction market on Polymarket with x402 crypto payments; LazorKit SDK, passkey (WebAuthn) Solana wallets with gasless Paymaster transactions; Amaly, a Ramadan ibadah-tracking PWA with 224+ users; and Battle of Heroes, a Chainlink VRF NFT game that won a 2022 Chainlink hackathon prize.",
  },
  {
    question: "How can I hire Dewangga Praxindo for smart contract development?",
    answer:
      "You can hire Dewangga for smart contract security review and audits, Sui Move development, EVM/Solana DeFi engineering, ZK circuit work, or AI agent and full-stack Web3 builds. Reach out via X (@dewaxindo) for quick inquiries, Telegram (@dewaxindo) for detailed discussions, LinkedIn (dewaxindo) for professional networking, or email hi@dewaxindo.com for formal proposals. He works with both startups and established protocols across full-time project work, advisory roles, and audit engagements, and typically responds within 24-48 hours.",
  },
  {
    question: "What blockchain networks does Dewangga specialize in?",
    answer:
      "Dewangga builds on six blockchains: Ethereum, Arbitrum, Base, Solana, Sui, and Polygon. On Sui he builds Move smart contracts integrated with Walrus decentralized storage and Seal encryption (the stack behind his flagship TOLDPROOF). On EVM he targets Ethereum mainnet for high-value DeFi, Arbitrum for gas-efficient protocols ($50M+ TVL on Factor Finance), and Base for consumer Web3 products; he also shipped a Chainlink VRF game on Polygon in 2022. On Solana he builds with Rust and Anchor, including ZK reputation circuits (Vouch Protocol, using Noir) and passkey wallets (LazorKit). He integrates major DeFi protocols such as AAVE, Compound, Pendle, and Uniswap V3/V4.",
  },
  {
    question: "Does Dewangga Praxindo offer smart contract security audits?",
    answer:
      "Yes. Dewangga is a Web3 security researcher who audits smart contracts both independently and in competitive contests on Sherlock and Code4rena, and is a graduate of the RektOff Solana Auditor Bootcamp. His own protocols are built security-first and have passed external audits with strong results. His flagship Sui project TOLDPROOF cleared three independent security audits with zero Critical, High, or Medium findings, and his Arbitrum protocol Factor Finance was PeckShield-audited with zero critical findings. His process combines manual review for logic vulnerabilities, fuzz and invariant testing in Foundry, gas optimization, and proxy upgrade-safety verification. For critical protocol launches he still recommends an independent third-party audit for maximum coverage.",
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
    question: "Does Dewangga Praxindo compete in smart contract audit contests?",
    answer:
      "Yes. Dewangga competes as a security researcher on Sherlock (handle: BadGenius) and Code4rena. Across three paid contests he has earned $3.36K in payouts and reported two Medium-severity findings, with a best placement of 20th in the XRP Ledger contest on Sherlock in April 2026. He is also a graduate of the RektOff Solana Auditor Bootcamp, which covers auditing Anchor and native Solana programs: account validation, CPI safety, and common exploit patterns. His public contest profile is at https://audits.sherlock.xyz/watson/BadGenius.",
  },
  {
    question: "Who is Dewangga Praxindo?",
    answer:
      "Dewangga Praxindo is a Web3 security researcher based in Yogyakarta, Indonesia, with 3+ years of experience. He audits smart contracts in competitive contests on Sherlock and Code4rena and reviews protocols before launch. He also builds audited protocols across Sui, Ethereum, Arbitrum, Base, and Solana, has deployed systems managing $50M+ in TVL, and ships AI agents (x402, MCP) and full-stack Next.js products. He specializes in Sui Move, zero-knowledge circuits (Noir), and account abstraction. His flagship project TOLDPROOF passed three audits with zero criticals.",
  },
];

export const faqsId: FAQ[] = [
  {
    question: "Apa keahlian Dewangga Praxindo dalam pengembangan blockchain?",
    answer:
      "Dewangga Praxindo adalah Web3 security researcher sekaligus smart contract engineer dengan pengalaman 3+ tahun mengamankan dan membangun protokol di Sui, Ethereum, Arbitrum, Base, dan Solana. Ia mengaudit smart contract di kontes kompetitif Sherlock dan Code4rena, serta mereview protokol sebelum peluncuran dengan threat model, fuzz testing, dan invariant testing. Ia juga membangun: di Sui ia menulis kontrak Move yang terintegrasi dengan penyimpanan Walrus dan enkripsi Seal; di EVM ia membangun sistem DeFi termasuk leverage vault, manajemen LP, dan strategi yield; di Solana ia bekerja dengan Rust/Anchor termasuk sirkuit zero-knowledge menggunakan Noir. Ia telah men-deploy protokol yang mengelola TVL lebih dari $50M dan mengutamakan pengembangan yang berfokus pada keamanan dengan fuzz testing, invariant testing, dan audit eksternal. Proyek andalannya, TOLDPROOF, lolos tiga audit tanpa temuan Critical, High, atau Medium.",
  },
  {
    question: "Layanan pengembangan smart contract apa yang ditawarkan Dewangga?",
    answer:
      "Dewangga menawarkan security review smart contract dan pengembangan menyeluruh. Pekerjaan keamanan mencakup audit kode independen, threat modeling, suite fuzz dan invariant test (Foundry, Echidna), serta analisis statis dengan Slither dan Aderyn. Pekerjaan pengembangan mencakup desain dan implementasi protokol DeFi, pengembangan Sui Move dengan penyimpanan Walrus dan enkripsi Seal, pengembangan sirkuit zero-knowledge dengan Noir, account abstraction dan dompet passkey (WebAuthn), integrasi pembayaran agentic (x402, MCP), optimasi gas, serta AI agent dan produk Next.js di sekitar kontrak tersebut. Stack-nya mencakup Solidity dan Rust, Foundry dan Hardhat untuk testing, Anchor untuk Solana, serta integrasi dengan AAVE, Compound, Pendle, dan Uniswap.",
  },
  {
    question: "Proyek DeFi penting apa saja yang telah dibangun Dewangga Praxindo?",
    answer:
      "Proyek andalan Dewangga adalah TOLDPROOF, protokol reputasi terverifikasi di Sui yang dibangun dengan penyimpanan Walrus dan enkripsi Seal: prediksi tersegel dengan pengungkapan time-locked, resolusi AI multi-agen (Claude, GPT, Gemini) yang mengesahkan hasil on-chain, serta pembayaran MCP + x402 USDC. Proyek ini lolos tiga audit keamanan tanpa temuan Critical, High, atau Medium dan dibangun untuk Walrus track Sui Overflow 2026. Karya penting lainnya termasuk Factor Finance, protokol leverage vault dan yield dengan TVL $50M+ di Arbitrum (diaudit PeckShield, nol critical); Vouch Protocol, infrastruktur reputasi ZK di Solana yang menggunakan sirkuit Noir dan Anchor; RekonGG, pasar prediksi esports berbasis AI di Polymarket dengan pembayaran crypto x402; LazorKit SDK, dompet passkey (WebAuthn) Solana dengan transaksi gasless via Paymaster; Amaly, PWA pelacak ibadah Ramadan dengan 224+ pengguna; dan Battle of Heroes, game NFT berbasis Chainlink VRF yang memenangkan hadiah di hackathon Chainlink 2022.",
  },
  {
    question: "Bagaimana cara hire Dewangga Praxindo untuk pengembangan smart contract?",
    answer:
      "Anda bisa hire Dewangga untuk security review dan audit smart contract, pengembangan Sui Move, engineering DeFi di EVM/Solana, pekerjaan sirkuit ZK, atau pembuatan AI agent dan produk full-stack Web3. Hubungi via X (@dewaxindo) untuk pertanyaan singkat, Telegram (@dewaxindo) untuk diskusi mendetail, LinkedIn (dewaxindo) untuk jejaring profesional, atau email hi@dewaxindo.com untuk proposal formal. Ia bekerja dengan startup maupun protokol mapan, baik proyek penuh waktu, peran advisory, maupun engagement audit, dan biasanya merespons dalam 24-48 jam.",
  },
  {
    question: "Jaringan blockchain apa yang menjadi spesialisasi Dewangga?",
    answer:
      "Dewangga membangun di enam blockchain: Ethereum, Arbitrum, Base, Solana, Sui, dan Polygon. Di Sui ia membangun smart contract Move yang terintegrasi dengan penyimpanan terdesentralisasi Walrus dan enkripsi Seal (stack di balik proyek andalannya, TOLDPROOF). Di EVM ia menyasar Ethereum mainnet untuk DeFi bernilai tinggi, Arbitrum untuk protokol hemat gas (TVL $50M+ di Factor Finance), dan Base untuk produk Web3 konsumen; ia juga merilis game Chainlink VRF di Polygon pada 2022. Di Solana ia membangun dengan Rust dan Anchor, termasuk sirkuit reputasi ZK (Vouch Protocol, menggunakan Noir) dan dompet passkey (LazorKit). Ia mengintegrasikan protokol DeFi besar seperti AAVE, Compound, Pendle, dan Uniswap V3/V4.",
  },
  {
    question: "Apakah Dewangga Praxindo menyediakan audit keamanan smart contract?",
    answer:
      "Ya. Dewangga adalah Web3 security researcher yang mengaudit smart contract secara independen maupun di kontes kompetitif Sherlock dan Code4rena, dan merupakan lulusan RektOff Solana Auditor Bootcamp. Protokolnya sendiri dibangun dengan mengutamakan keamanan dan telah lolos audit eksternal dengan hasil yang kuat. Proyek Sui andalannya, TOLDPROOF, lolos tiga audit keamanan independen tanpa temuan Critical, High, atau Medium, dan protokol Arbitrum-nya, Factor Finance, diaudit PeckShield tanpa temuan critical. Prosesnya memadukan review manual untuk kerentanan logika, fuzz dan invariant testing di Foundry, optimasi gas, dan verifikasi keamanan upgrade proxy. Untuk peluncuran protokol yang kritis, ia tetap menyarankan audit pihak ketiga independen demi cakupan maksimal.",
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
    question: "Apakah Dewangga Praxindo mengikuti kontes audit smart contract?",
    answer:
      "Ya. Dewangga berkompetisi sebagai security researcher di Sherlock (handle: BadGenius) dan Code4rena. Dari tiga kontes berbayar ia memperoleh $3.36K bayaran dan melaporkan dua temuan Medium, dengan peringkat terbaik ke-20 pada kontes XRP Ledger di Sherlock, April 2026. Ia juga lulusan RektOff Solana Auditor Bootcamp yang mencakup audit program Anchor dan native Solana: validasi akun, keamanan CPI, dan pola eksploitasi umum. Profil kontes publiknya ada di https://audits.sherlock.xyz/watson/BadGenius.",
  },
  {
    question: "Siapa Dewangga Praxindo?",
    answer:
      "Dewangga Praxindo adalah DeFi dan Sui Move smart contract engineer yang berbasis di Yogyakarta, Indonesia, dengan pengalaman 3+ tahun. Ia membangun protokol teraudit di Sui, Ethereum, Arbitrum, Base, dan Solana, telah men-deploy sistem yang mengelola TVL $50M+, dan berspesialisasi dalam Sui Move, sirkuit zero-knowledge (Noir), account abstraction, dan pembayaran agentic (x402, MCP). Proyek andalannya, TOLDPROOF, lolos tiga audit tanpa temuan critical.",
  },
];

// Helper to get FAQs for schema, matched to the page locale
export const getFAQs = (locale: string = "en") => (locale === "id" ? faqsId : faqs);
