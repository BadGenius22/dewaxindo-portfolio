# Off-Site SEO / Entity Consistency Kit

> **Goal:** strengthen knowledge-panel eligibility and AI-engine citation accuracy by making your identity **byte-for-byte consistent** everywhere off-site. Google and LLMs build a single "entity" for you by corroborating signals across your profiles. Inconsistent names/titles/links split that entity and weaken it.
>
> **Rule of thumb:** same name, same handle, same one-line title, same canonical URL, on every platform — and every profile links back to `https://dewaxindo.com`.

---

## 1. Canonical identity (single source of truth)

| Field | Value (use verbatim everywhere) |
|-------|--------------------------------|
| Name | **Dewangga Praxindo** |
| Handle | **dewaxindo** (and **@dewaxindo** where @ applies) |
| Title | **DeFi & Sui Move Smart Contract Engineer** |
| Location | **Yogyakarta, Indonesia** |
| Primary URL | **https://dewaxindo.com** |
| Email | **hi@dewaxindo.com** |
| Tagline facts | $50M+ TVL · 0 critical findings across 3 audits · Creator of TOLDPROOF (Sui · Walrus · Seal) |

These match the on-site `siteConfig` (`src/data/site.ts`), JSON-LD `Person`/`Organization`, `public/llms.txt`, and `public/about.txt`. **If you change one, change all** (see the project memory note "GEO/SEO sync surfaces").

---

## 2. `sameAs` URL set (must match the schema exactly)

These are the URLs emitted in the `Person.sameAs` / `Organization.sameAs` JSON-LD (`src/data/socials.ts` → `getSocialUrls()`). Every one of these profiles should link **back** to `https://dewaxindo.com` to close the loop:

- https://x.com/dewaxindo
- https://github.com/BadGenius22
- https://linkedin.com/in/dewaxindo
- https://t.me/dewaxindo
- https://instagram.com/dewaxindo
- https://www.youtube.com/@dewaxindo

> ⚠️ **Handle mismatch to be aware of:** your GitHub username is `BadGenius22`, but your handle everywhere else is `dewaxindo`. That's fine for entity resolution as long as your GitHub **profile name** is "Dewangga Praxindo" and its bio/website link points to dewaxindo.com. (Renaming GitHub to `dewaxindo` would be ideal for consistency but breaks existing repo links — not recommended.)

**To add a profile to the entity graph:** add its URL to `socialLinks` in `src/data/socials.ts`; it automatically flows into `sameAs`. Strong candidates to add once live: **Devpost** profile, **Sui/ecosystem builder directory**, and (if you publish audits) **Code4rena / Sherlock / Cantina** profiles.

---

## 3. Ready-to-paste bios

**X / Twitter bio** (≤160 chars):
```
DeFi & Sui Move smart contract engineer. Solidity · Rust · Move. $50M+ TVL, 0 criticals across 3 audits. Building TOLDPROOF on Sui. 🇮🇩 dewaxindo.com
```

**GitHub bio** (≤160 chars) + set the "Website" field to `https://dewaxindo.com`:
```
DeFi & Sui Move smart contract engineer · Solidity/Rust/Move · $50M+ TVL · creator of TOLDPROOF (Sui+Walrus+Seal) · hi@dewaxindo.com
```

**LinkedIn headline** (≤220 chars):
```
DeFi & Sui Move Smart Contract Engineer | Solidity, Rust, Move | $50M+ TVL deployed, 0 critical findings across 3 audits | Creator of TOLDPROOF (Sui · Walrus · Seal) | ZK (Noir) · Account Abstraction · x402/MCP
```

**LinkedIn / Devpost / directory "About"** (medium):
```
Dewangga Praxindo is a DeFi and Sui Move smart contract engineer based in Yogyakarta, Indonesia, with 3+ years of experience building secure, audited protocols. He writes contracts in Solidity, Rust, and Move (Sui) and has deployed protocols holding $50M+ in total value locked across Ethereum, Arbitrum, Base, Solana, and Sui — passing three security audits with zero critical findings.

His flagship project, TOLDPROOF, is a verifiable-reputation protocol on Sui (Walrus + Seal) with multi-agent AI resolution and x402 USDC payments. Other work spans Factor Finance (Arbitrum leverage vaults, $50M+ TVL), Vouch Protocol (Noir ZK on Solana), LazorKit SDK (passkey wallets), and a Chainlink hackathon-winning NFT game.

He specializes in DeFi protocol engineering, smart contract security (fuzz/invariant/mutation testing, Slither, Aderyn), zero-knowledge privacy (Noir), and full-stack Web3.

Website: https://dewaxindo.com · Email: hi@dewaxindo.com
```

---

## 4. Per-platform checklist

For each profile: ✅ display name = "Dewangga Praxindo" · ✅ bio from §3 · ✅ website/link = `https://dewaxindo.com` · ✅ location = Yogyakarta, Indonesia (where supported).

- [ ] **X/Twitter** — bio + `dewaxindo.com` in website field + location. Pin a post linking the site.
- [ ] **GitHub** — profile name "Dewangga Praxindo", bio, Website = dewaxindo.com. Create/update a profile README (`BadGenius22/BadGenius22`) repeating the §3 About + project links — GitHub profile READMEs are indexed and AI-readable.
- [ ] **LinkedIn** — headline + About + Featured section linking dewaxindo.com, TOLDPROOF, Factor Finance. Custom public URL `/in/dewaxindo`.
- [ ] **Telegram** — bio with site link.
- [ ] **Instagram / YouTube** — bio + link in profile.
- [ ] **Devpost** — complete profile (you have Battle of Heroes there); add bio + dewaxindo.com, then add the profile URL to `socials.ts`.
- [ ] **Sui ecosystem** — get listed in any Sui builder/developer directory (Sui Overflow participant pages, ecosystem maps). High-authority topical corroboration for "Sui developer".
- [ ] **Audit platforms (if applicable)** — Code4rena / Sherlock / Cantina / Immunefi profiles; link back to dewaxindo.com.
- [ ] **rel="me"** — where a platform supports it, the on-site social links already act as outbound confirmation; ensure the off-site profile links back (bidirectional = strongest signal).

---

## 5. Knowledge-panel / GEO accelerators (optional, higher effort)

- **Consistent authorship:** publish technical write-ups (TOLDPROOF architecture, a Sui Move security post) on your own domain and/or dev.to/Mirror, bylined "Dewangga Praxindo" linking back. Repeated bylined, linked content is what tips Google into building a Person knowledge panel.
- **Corroborating mentions:** hackathon result pages (Sui Overflow 2026, Chainlink 2022), grant pages, podcast/interview appearances — each one that names you + links the site reinforces the entity.
- **Wikidata (advanced):** if you accumulate independent press/notability, a Wikidata item is the strongest knowledge-graph anchor. Don't force this prematurely.

---

## 6. Verify the entity is connected

After updating profiles, sanity-check:
- Google: search `"Dewangga Praxindo"` — your site + profiles should cluster; over time a knowledge panel may appear.
- Rich Results Test (https://search.google.com/test/rich-results) on `https://dewaxindo.com` — confirm `Person`, `ProfilePage`, `Organization`, `FAQPage`, `BreadcrumbList` parse with no errors and the `sameAs` list is present.
- Ask an AI engine (ChatGPT/Perplexity) "Who is Dewangga Praxindo?" and check it cites dewaxindo.com and gets the facts right — that confirms `llms.txt` + schema are doing their job.
