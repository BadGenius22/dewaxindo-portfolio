# Handoff: Dewaxindo Portfolio — v4 "Ledger Edition" redesign

## Overview
A refinement pass on the live portfolio at https://dewaxindo.com/ (v3 "Forge Edition"). Same personality — bone paper, warm ink, on-chain green, receipt/ledger motif — but quieter and more premium, targeted at recruiters at tech companies. Key changes vs v3:

- Display face changed from **Boldonse** (all-caps, hero lines overlapped) to **Archivo 700**, sentence case, no text-stroke overlap tricks.
- Removed gimmick chrome: left "roll" gutter, cursor/scroll instruments strip, perforated "CUT HERE" dividers, giant display marquee, rotated circular audit stamps, chromatic-offset print effect in Contact.
- New section **§04 Security record**: audit-record table + RektOff credential card.
- Works cards restructured: bordered card with header strip, visual, padded body.

## About the Design Files
The files in this bundle are **design references created in HTML** (React 18 + Babel-in-browser prototypes). They are not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** — dewaxindo.com's actual stack (e.g. Next.js/React with a proper build) — using its established patterns. If no codebase exists yet, a static Next.js or Astro site is a fine choice. `image-slot.js` and `tweaks-panel.jsx` are prototype-only tooling (drag-drop image placeholders, design-tweak panel) — replace slots with real `<img>` assets and drop the tweaks panel entirely.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy and interactions are final. Recreate pixel-perfectly.

## Design Tokens
```css
--paper:   #F8F7F4;  /* page background, near-white warm */
--paper-2: #F1F0EC;  /* hover fills, visual placeholders */
--paper-3: #E6E5E0;  /* deepest surface */
--ink:     #131311;  /* near-black; dark sections & text */
--ink-2:   #2A2A28;  /* body text */
--ink-3:   #6B6B66;  /* secondary text */
--ink-faint: #A8A8A2;/* tertiary/labels */
--clay:    #0F6B3F;  /* single accent, "on-chain green" */
--clay-lite: #6FBF95;/* accent used ON dark ink backgrounds */
--line:        rgba(19,19,17,0.08);  /* hairlines */
--line-strong: rgba(19,19,17,0.22);  /* dashed rules, chips */
```

Fonts (Google Fonts):
- Display: **Archivo**, weight 700, letter-spacing −0.035em to −0.045em, line-height 1.0–1.05, sentence case.
- Body: **Funnel Sans** 300–700.
- Mono (labels, tables, receipts): **IBM Plex Mono** 300–600, uppercase with 0.06–0.14em tracking for labels.

Spacing / shape:
- No border radius anywhere (radius 0). Rectangles + 1px borders.
- Hard offset shadows instead of blur: `6px 6px 0 var(--ink)` (8px 8px on hover).
- Container: max-width 1480px, 32px side padding (16px mobile).
- Section padding: 112px vertical (72px mobile), 1px `--line` top border.
- Selection: ink background, paper text. Faint SVG noise overlay at 2.5% opacity, multiply.

Type scale (desktop → uses clamp):
- Hero h1: clamp(46px, 7.2vw, 118px)
- Section h2: clamp(34px, 4.6vw, 76px)
- Card h3: clamp(24px, 2.4vw, 36px)
- Mono labels: 10–12px

## Screens / Views (single page, top to bottom)

### 1. Tape header
Full-width ink (#131311) strip, 3-column mono 11px: left "№ 004 / LEDGER EDITION", center "AVAILABLE — Q2 2026" in `--clay-lite` with pulsing 6px dot (opacity 1→0.4, 2.4s loop), right live clock "HH:MM:SS WIB · UTC+7 · Yogyakarta, ID" (ticks every second).

### 2. Nav (sticky, top 0)
Paper at 92% opacity + backdrop blur 8px, 1px bottom hairline, 18px/32px padding. Left: "Praxindo" Archivo 800 20px + mono "/004" superscript-style suffix in ink-faint. Center: mono uppercase links "01. Services / 02. Process / 03. Work / 04. Audits / 05. Log / 06. Contact" (numbers ink-faint, hover → clay). Right: "HIRE ME ↗" button — ink background, paper mono 11px text, 11×18px padding, hover → clay background. Links hidden below 700px.

### 3. Hero
- Eyebrow: mono 12px uppercase ink-3, "Dewangga Praxindo ✦ AI · Full-Stack · Smart Contract Engineer ✦ Est. 2022" (✦ in clay).
- H1 (sentence case, max-width 15ch, balanced): "Shipping AI, full-stack & onchain systems." — "AI" and the final period in clay.
- Two-column stage (1fr / 380px, 72px gap): left lede paragraph (17–21px, "$50M+ TVL deployed" in clay bold) + CTAs: "HIRE ME ↗" (ink fill, mailto:hi@dewaxindo.com) and "SELECTED WORK →" (underlined ghost, anchor #works). Right: **ship receipt card** (see Components).
- **Disciplines strip**: 4-column grid (3×1fr + auto), 1px ink top border. Each cell: clay mono "A —", Archivo title (AI Systems / Full-Stack / Smart Contracts), mono ink-3 sub (Agents · RAG · Evals / Next · TypeScript · Cloud / Audited · 0 Critical). Last cell right-aligned tally: "1 / 3" Archivo ~52px + "One engineer. Three disciplines."
- **Stack ticker**: thin strip, 1px bottom hairline, mono 11.5px uppercase ink-3, infinite leftward marquee 48s linear (content duplicated 2×, translateX 0→−50%): TypeScript ✦ Next.js ✦ Python ✦ LLM Agents ✦ RAG ✦ React ✦ Postgres ✦ Solidity ✦ Rust ✦ Foundry ✦ Sui Move ✦ Noir · ZK. Disabled under prefers-reduced-motion.

### 4. §01 Capabilities (#capabilities)
Section header pattern (used everywhere): 240px/1fr grid — left mono marker with 1px ink top border ("§ 01 What I build", § number in clay), right big h2 "Six things I can build for you, end-to-end." ("build" clay, "end-to-end." ink-faint).
2-column grid, 1px ink top border. Each row: 1fr/170px, 34px vertical padding, 1px hairline bottom; odd rows get right border + 40px right padding, even rows 40px left padding. Row content: h3 Archivo ~30px with clay mono number prefix ("01" …), 14.5px description (max 480px), right stat block (mono 10px uppercase label + Archivo 21px value, some values clay). Six rows: AI Engineering (MODELS / GPT · Claude), Full-Stack Apps (SHIPPED / Next · TS), Smart Contracts (STACK / .sol · .rs), DeFi & Onchain (TVL / $50M+ clay), Infra & Ship (UPTIME / 24/7), Security First (CRITICAL / 0/0/0 clay). Collapses to 1 column below 900px.

### 5. §02 Process (#process)
Header: "Three phases. Same every time." ("Same" clay). 3-column strip with 1px ink top border: each step has large outlined number (Archivo ~56px, paper-3 fill + 1px ink-3 text-stroke), mono meta right ("DAYS 01—03" / "WEEKS 01—04" / "FINAL WEEK"), Archivo title (Scope & design / Build & test / Ship & watch), then dashed-rule-topped bullet list (14px, clay "▸" markers). Copy is in `Process.jsx`.

### 6. §03 Works (#works)
Header: "Seven projects. All live or in production." ("Seven" clay, "in production." faint).
12-column grid, 28px gap. Card spans: TOLDPROOF 7, Amaly 5, Factor Finance 12 (featured), RekonGG 6, LazorKit 6, Vouch 7, Battle of Heroes 5. All span-12 below 900px.

**Work card**: paper background, 1px `--line-strong` border. Hover: border → ink, shadow `6px 6px 0` ink, translate(−2px,−2px), .25s. Structure:
1. Header strip: mono 10.5px uppercase, 14px/24px padding, hairline bottom — "№ TOLDPROOF · 2026" left, right label in clay ("MARQUEE" for featured, "CASE STUDY" if it has one, else "SHIPPED").
2. Visual: flex-1 min 200px, paper-2 fill, hairline bottom; project screenshot fills it; ghost project name (Archivo, ink-faint 35% opacity) as placeholder; bottom-left URL pill — ink fill, paper mono 11px, "host ↗", hover → clay.
3. Body (22–24px padding): h3 Archivo; tagline 14.5px; meta row — tags as mono 10.5px uppercase ink-3 separated by "·", metric right in clay mono 12px semibold.
Factor Finance card opens a **case-study overlay** on click (whole card is a button; "OPEN CASE STUDY →" mono chip fades in top-right on hover). Project data/copy: see `Works.jsx`.

**Case-study overlay**: fixed, rgba(19,19,17,0.72) + 4px blur backdrop, click-outside or ESC closes, body scroll locked. Panel max-width 920px, paper, 1px ink border, shadow `10px 10px 0` in clay @90%. Ink tape header: "CASE STUDY · FACTOR · 2025" / "— FILE OPENED —" (clay-lite) / "[ ESC ]" close button. Body: 4-col meta grid (Project/Role/Window/Live at) over 1px ink rule, huge Archivo title, numbered sections (clay mono "01" etc.): The challenge (prose), What I built (▸ list), Outcomes (4-col stat band, first stat clay), Stack (bordered mono chips). Footer rule: "END · OF · FILE" + "Visit pro.factor.fi ↗" ink button.

### 7. §04 Security record (#audits) — NEW
Header: "Audited code. Zero critical findings, so far." ("Zero" clay, ", so far." faint).
Two-column layout 1.35fr/1fr (stacks below 980px):

**Audit record frame** (left): 1px ink border. Ink header bar: "AUDIT · RECORD" left, right "3 PASSED / 4 TOTAL" in clay-lite with pulsing dot. Table rows (mono 12px, dashed separators, hover paper-2), columns 96px/1.4fr/1fr/130px (Date/Scope/Firm/Result):
- 2025.Q3 · Factor PT-GMX Leverage v2 · PeckShield · badge "0 CRITICAL"
- 2025.Q2 · Factor LP-USDC.e Vaults · PeckShield · badge "0 CRITICAL"
- 2025.Q1 · Factor LP-ETH Core · PeckShield · badge "0 CRITICAL"
- 2026 · TOLDPROOF · Sui Move · TBA · badge "REPORT PENDING"
Badges: mono 10px uppercase, 3×9px padding; pass = 1px solid clay border, clay text; pending = 1px dashed ink-faint border, ink-3 text. Add more pending rows the same way as new audits queue up.

**Credential card** (right): 1px ink border + `6px 6px 0` ink shadow. Dashed-rule header: "CREDENTIAL · № 001" / "GRADUATE" (clay). 4:3 visual area for the **RektOff certificate image**. Body: h3 "RektOff Solana Auditor Bootcamp", short description (auditing Anchor & native programs: account validation, CPI safety, exploit patterns), dashed-rule meta footer "SOLANA · SECURITY" / "CERTIFIED · 2026" (clay). *(Year/description may need correcting with real cert details.)*

### 8. §05 Deploy log (#log)
Header: "Nine commits to production." ("Nine" clay, "production." faint). Framed table like the audit frame: ink header bar ("DEPLOY · LOG" / "3 LIVE / 9 TOTAL" clay-lite pulsing dot / "SIGNED · DWX"), mono rows 100px/1.3fr/1.1fr/150px/1.4fr (Date/Project/Chain/Tx·Hash/Note), dashed separators, hover paper-2, live entries get pulsing clay dot before name, hashes are copy-to-clipboard buttons (⎘). Footer strip paper-2: "END · OF · ROLL". Data in `Changelog.jsx`.

### 9. §06 Contact (#contact)
Full-bleed ink section, 128px padding. Ghost word "RECEIPTS" bottom-right (transparent fill, 1px white @6% stroke, ~380px). Eyebrow "§ 06 — Get in touch" in clay-lite. Pitch (Archivo, up to 110px, paper): "Let's build something worth shipping." — "shipping" in clay-lite. Below a white @14% rule, 1.4fr/1fr grid:
- Left: email link "hi@dewaxindo.com →" Archivo ~44px, hover → clay-lite with 2px underline growing scaleX 0→1 (.35s) and arrow shifting +8px; beneath it, on its own line, mono "OR COPY ADDRESS ⎘" copy-to-clipboard button; then lede: reply "under 24 hours" / available "starting Q2 2026" (bold phrases clay-lite).
- Right: 3 social rows (X @dewaxindo, GitHub BadGenius22, LinkedIn in/dewaxindo) — mono 12px uppercase, white @14% bottom rules, grid auto/1fr/auto (platform/handle/→), hover → everything clay-lite, arrow +4px.

### 10. Footer
Paper, hairline top, mono 10px uppercase ink-3, 3 columns: "SIGNED · DEWANGGA PRAXINDO" / "© MMXXVI · Yogyakarta, ID · v4 Ledger Edition" / "SET IN ARCHIVO · FUNNEL SANS · IBM PLEX MONO".

## Components
**Ship receipt card** (hero, signature object): paper, 1px ink border, `6px 6px 0` ink shadow, 26px padding, mono 11.5px. "DEPLOYED" clay stamp overlapping the top edge (top −11px, right 18px). Dashed-rule header "SHIP RECEIPT" / "LIVE" (clay + pulsing dot). Key-value rows (90px/1fr): Project, Stack, Scale (Archivo 30px "bigmoney"), Status (clay), Build (auto-incrementing "#1,287" every 12s), Commit (copyable hash). Dashed-rule barcode footer (2px ink bars, varying heights 13–20px) + "DWX·MMXXVI". Card cycles through 3 datasets every 8s (RekonGG / Factor Finance / Amaly — see `Hero.jsx`), fading in (opacity 0→1 + 6px rise, .45s); 3 small square progress dots centered 26px below the card, active dot clay. Hover: translate(−2px,−3px), shadow grows to 8px.

**Copy-to-clipboard**: any `[data-copy]` button writes its value to clipboard and shows a fixed bottom-center toast — ink pill, clay-lite mono 11px "COPIED · <value>", 1.4s, slide-up entrance.

## Interactions & Behavior summary
- Smooth scroll for anchor nav.
- All hover transitions ~0.2–0.25s ease; color-only on most; cards lift with hard shadows.
- Receipt cycle (8s), build counter (12s), clock (1s), ticker marquee (48s).
- Case-study modal: ESC / backdrop click close, scroll lock.
- `prefers-reduced-motion: reduce`: kill all animations incl. ticker.
- Focus-visible: 2px clay outline, 3px offset.
- Breakpoints: 980px (hero stage + audits stack), 900px (grids collapse), 700px (mobile paddings, nav links hidden, tape stacks, disciplines stack).

## State Management
Purely presentational. Local state only: clock tick, receipt cycle index, build counter, case-study open/closed, copy-toast message. No data fetching.

## Assets
- `favicon-32x32.png` (bundled).
- Project screenshots + RektOff certificate image: supplied by owner; prototype uses drag-drop placeholders.
- Fonts via Google Fonts: Archivo (500–800), Funnel Sans (300–700), IBM Plex Mono (300–600).

## Files
Design reference implementation (React 18 + in-browser Babel):
- `index.html` — app shell, section order, tweaks defaults (accent #0F6B3F confirmed by owner)
- `styles.css` — **all** styling; single source of truth for tokens & measurements
- `Chrome.jsx` (tape/nav/footer), `Hero.jsx`, `Capabilities.jsx`, `Process.jsx`, `Works.jsx` (incl. case study), `Audits.jsx`, `Changelog.jsx`, `Contact.jsx`, `Frame.jsx` (copy toast)
- Prototype-only, do not port: `image-slot.js`, `tweaks-panel.jsx`, `Icon.jsx` (if unused)
