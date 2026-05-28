# Handoff: Dewangga Praxindo Portfolio — v3 "Forge Edition"

## Overview

A single-page personal portfolio for a DeFi smart contract engineer based in Yogyakarta, Indonesia. The page reads as **one long printed deploy receipt** — tape-printer header, perforated tear-line dividers between sections, a "ROLL №003" gutter running down the left edge, a cycling block-explorer-style receipt as the hero object, and a dense monospace deploy log near the bottom.

Six sections, top to bottom: **Hero → Services → Process → Selected Work → Deploy Log → Contact**.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. They use Babel-standalone JSX with `window.X = X` global exports for component sharing, which is fine for a one-file prototype but **not how the production app should be built**.

The task is to **recreate these HTML designs in your target codebase's existing environment** (Next.js App Router / TypeScript recommended) using its established patterns. If no codebase exists yet, choose the most appropriate framework — Next.js 15 + Tailwind + TypeScript is the suggested default.

## Fidelity

**High-fidelity (hifi).** Final colors, typography, spacing, motion, and copy are all locked in. Recreate pixel-perfect.

---

## Design Tokens

All values live in `styles.css :root`. Copy these verbatim into your token system (Tailwind config, CSS variables, or token JSON).

### Colors
| Token | Value | Use |
|---|---|---|
| `--paper` | `#F8F7F4` | Page background, near-white with faint warmth |
| `--paper-2` | `#F1F0EC` | One step deeper (work-card bg, instruments strip) |
| `--paper-3` | `#E6E5E0` | Surface for image-slot placeholders |
| `--ink` | `#0E0E0D` | Primary text, near-black |
| `--ink-2` | `#2A2A28` | Secondary text |
| `--ink-3` | `#6B6B66` | Tertiary text (eyebrows, meta) |
| `--ink-faint` | `#A8A8A2` | Quietest text (timestamps, decorative) |
| `--clay` | `#0F6B3F` | **Single accent — on-chain green.** Used for: LIVE dots, $50M+ highlight, DEPLOYED stamp, audit-stamp circles, section §numbers, hover states, focus-visible outlines, CTA hover, all "alive" signals |
| `--acid` | `#ECEAE2` | Near-paper highlight pad (subtle, used in contact section) |
| `--line` | `rgba(14,14,13,0.08)` | Hairline borders |
| `--line-strong` | `rgba(14,14,13,0.22)` | Visible dashed/dotted borders |

### Typography
3-font system loaded from Google Fonts:

| Token | Family | Use |
|---|---|---|
| `--display` | `"Boldonse", "Anton", "Arial Black", sans-serif` | All h1/h2/h3 headlines, large numbers, hero CTA |
| `--sans` | `"Funnel Sans", system-ui, sans-serif` | Body text, lede, descriptions, weights 300–700 |
| `--mono` | `"IBM Plex Mono", "SFMono-Regular", monospace` | All UI chrome: tape header, nav links, eyebrows, stamps, meta, log table, CTAs, audit-stamp text |

Load via `next/font/google`:
```ts
import { Boldonse, Funnel_Sans, IBM_Plex_Mono } from "next/font/google"
```

Anton is the explicit fallback for Boldonse — pin it so the layout doesn't reflow if Boldonse fails to load.

### Type sizes
- Hero headline: `clamp(48px, 9vw, 144px)` · line-height `0.92` · letter-spacing `-0.04em`
- Section h2: `clamp(40px, 6vw, 112px)` · line-height `1.0` · letter-spacing `-0.035em`
- Display numbers (audit tally, process step numbers, work-card titles): `clamp(40px, 5vw, 80px)`
- Work-card titles: `clamp(36px, 4vw, 64px)`
- Body lede: `clamp(18px, 2vw, 24px)` · line-height `1.4`
- Body p: `16px` · line-height `1.5`
- Mono UI: `10–12px` · letter-spacing `0.06–0.12em` · uppercase

### Spacing
- Container max-width: `1480px`
- Container horizontal padding: `28px` (desktop), `16px` (mobile)
- Section vertical padding: `96px 0` (desktop), `64px 0` (mobile)
- Section internal gap: `64px` between section header and content
- Card padding: `32px`
- Card gap: `24px`

### Borders & radius
- All corners: `0` (no rounded corners anywhere except `2px` on `<mark>` and focus rings)
- Border weights: `1px` (hairlines), `2px` (strong borders: receipt, log frame, audit stamps, CTAs)
- Receipt + log frame: `2px solid var(--ink)` with `8px 8px 0 var(--ink)` hard shadow

### Motion
- All transitions: `0.2–0.25s ease` (background, transform, color)
- Marquee scroll: `24s linear infinite` (desktop) / `60s` (mobile)
- Receipt cycle: `8000ms` interval
- Live block height tick: `12000ms`
- Live tape clock tick: `1000ms`
- LIVE dot pulse: `2s ease-in-out infinite` (opacity 1→0.5, shadow 8px→16px)
- Receipt rotation: `1.2deg` baseline, `0deg` on hover (translate -2/-4)
- Honor `prefers-reduced-motion: reduce` — kill all animations.

---

## Screens / Views

The site is a single scrollable page with 6 sections.

### 1. Tape header (sticky? no — scrolls away)
Top strip. 40px tall. Black background (`--ink`), paper text.
- Left: `№ 003 / FORGE EDITION` (ink-faint mono)
- Center: `AVAILABLE — Q2 2026` with pulsing green dot (`--clay`)
- Right: live WIB time `HH:MM:SS WIB · UTC+7 · Yogyakarta, ID` (updates every 1s)

### 2. Instruments strip (sticky at top: 0, z-index: 60)
Thin instrument-panel strip directly under the tape. 28px tall. `--paper-2` background.
- Left: `SCROLL` label + 4px progress bar (fills with `--clay`) + `XXX%` value
- Right: `CURSOR` label + `X:XXXX · Y:XXXX` live mouse position
- Mobile: cursor readout hides, bar only

### 3. Nav (sticky at top: 28px, z-index: 50)
Logo + 5 section links + HIRE ME CTA.
- Logo: `Praxindo/003` (display + mono superscript)
- Links: `01. Services / 02. Process / 03. Work / 04. Log / 05. Contact` (mono uppercase 12px)
- CTA: `HIRE ME` boxed button, ink bg, hovers to `--clay` with `rotate(-1deg)`
- Mobile: links hide, just logo + CTA

### 4. Hero
- **Eyebrow row:** `DEWANGGA PRAXINDO — DEFI SMART CONTRACT ENGINEER — EST. 2022` (mono uppercase 12px, ink-3)
- **Headline (h1):** 4 stacked rows
  - `SHIPPING`
  - `SMART CONTRACTS` (SMART in `--clay`)
  - `REAL MONEY` (outline-only — `-webkit-text-stroke: 2px var(--ink)`, fill paper)
  - `TRUSTS.` (the period is `--clay`)
- **Hero stage (2-column grid: 1fr 360px, align-end):**
  - Left column (`hero-left`, flex column gap 32px):
    - Lede paragraph with `<mark>$50M+ TVL deployed</mark>` highlight pad (green bg, paper text)
    - Two CTAs: `HIRE ME ↗` (primary ink box) and `SEE SELECTED WORK →` (ghost underline)
  - Right column: **Deploy Receipt card** (see below)
- **Audit row** (below stage): 3 PeckShield rubber-stamp circles (132px green-bordered, slightly rotated `-7deg / +4deg / -3deg`) + "3 / 3 audits passed" tally on the right
- **Marquee tape:** ink-bg horizontal scroll of `SOLIDITY ✦ RUST ✦ FOUNDRY ✦ ANCHOR ✦ SUI MOVE ✦ NOIR · ZK ✦ NEXT.JS ✦ PECKSHIELD AUDITED` repeated twice, paper text, green stars, subtle green text-shadow

#### Deploy Receipt card
The signature object. Looks like a printed block-explorer receipt.
- 2px ink border, `8px 8px 0 var(--ink)` hard shadow, rotated `1.2deg`
- Perforated edges top + bottom (CSS radial-gradient circles)
- "DEPLOYED" stamp pinned top-right, rotated `8deg`, clay bg
- Header: `Deploy Receipt` (left) · `LIVE` with pulsing dot (right, clay)
- Rows: `Project / Chain / TVL / Audit / Block / Hash` (label-value pairs in mono)
- TVL value is rendered in display font, 32px ("`$50M+`")
- Block row shows live ETH block height ticking up every 12s
- Hash row is click-to-copy — button with hash + `⎘` icon, fires the global copy delegate
- Bottom: barcode (12+ vertical ink bars of varying heights) + "DWX·MMXXVI" id
- **Cycles every 8 seconds** through 3 projects (Factor Finance, Toldproof, Vouch Protocol). Indicator dots below the card show position.
- Fade-in animation on each cycle (`rcpt-fade 0.45s ease-out`)

### 5. Capabilities / Services (`§ 01 What I build`)
6 capability rows in a 2-column grid with border-between.
- Each row: number (mono superscript clay) + display title (clamp 28–44px) + body paragraph (sans 14px) + right-aligned stat (mono label + display value)
- Stat colors: most are ink, two are `--clay` (the standout TVL and Critical metrics)
- Hover: row background fades to `--paper-2`
- Borders: 1px hairlines between rows, 1px vertical between columns
- 6 capabilities: DeFi Engineering, Smart Contracts, Multi-Chain, Security First, ZK & Privacy, Full-Stack Web3

### 6. Process (`§ 02 How I work`)
3-column equal-width grid, 2px ink top + bottom borders.
- Each column: big display step number (clay), mono meta label (`DAYS 01—03`, `WEEKS 01—04`, `FINAL WEEK`), display title, dashed-top-border bulleted list with `▸` clay ticks
- 3 steps: "Scope & threat model", "Write, fuzz, invariants", "Audit & deploy"
- Mobile: stacks to single column

### 7. Selected Work (`§ 03`)
7 project cards in a 12-column grid with mixed spans (`span-7 / span-5 / span-12 / span-6 / span-6 / span-7 / span-5`).
- Each card has:
  - Stamp row (top): `№ {ID} · {YEAR}` left, `RECEIPT` or `MARQUEE` (featured) or `CASE STUDY →` (has-study) right in clay
  - Visual area: `<image-slot>` drop zone with a giant ghost word (the project name first part) as placeholder. URL pill bottom-left links to live site.
  - Title (display 36–64px)
  - Tagline (sans 15px)
  - Meta footer: tag chips + clay metric (e.g. `$50M+ TVL`)
- Card hover: `translateY(-6px)`, bg fades to `--paper`
- **Featured project (Factor Finance) has a `study` data object** — clicking the card opens an inline **Case Study drawer modal** (see Interactions)

### 8. Deploy Log / Changelog (`§ 04`)
Block-explorer-style monospace table inside a 2px-bordered frame.
- Frame header (ink bg, paper text): `DEPLOY · LOG | ● 4 LIVE / 9 TOTAL (clay) | SIGNED · DWX`
- Table columns: Date · Project · Chain · Tx · Hash · Note
- Each row: date (ink-3), project (clay live dot + uppercase name in ink), chain (mono uppercase ink-3), hash (copy button — pulses clay on hover), italic note
- Hash entries with `—` are non-onchain (no copy)
- Frame footer (ink bg, ink-faint text): `END · OF · ROLL · — · — · —`
- Mobile: row layout collapses to 2-column

### 9. Contact (`§ 05`)
Black-background section. `padding: 120px 28px`.
- Eyebrow: `§ 05 — GET IN TOUCH` (clay mono)
- Pitch (`contact-pitch`, h2, clamp 56–144px line-height 1.02):
  - `Let's`
  - `build something`
  - `worth ` + green-pad `auditing` (with offset-print ghosts: clay shifted +5/+5, cyan shifted -5/-3, both mix-blend `screen` at 0.6 opacity)
  - `.`
- Big "RECEIPTS" ghost word (`contact-ghost`) absolutely positioned far right, 480px outline-stroke at 6% opacity, decorative
- Email button (`hi@dewaxindo.com →` in display 32–56px) + ↗ arrow that slides right on hover
- Small `OR COPY ADDRESS ⎘` link below — fires copy delegate
- Lede paragraph with bold clay callouts
- Right column: 3 social rows (X / GitHub / LinkedIn) in mono uppercase with arrow

### 10. Footer
Single row with 3 cells: `SIGNED · DEWANGGA PRAXINDO` / `© MMXXVI · Yogyakarta, ID · v3 Forge Edition` / `SET IN BOLDONSE · FUNNEL SANS · IBM PLEX MONO`.

### 11. Left "Roll" gutter (decorative)
18px-wide fixed strip on the left edge of the viewport, full page height. Contains repeating vertical-text "ROLL №003 · DEWAXINDO · MMXXVI · FORGE EDITION" rotated 180deg with `writing-mode: vertical-rl`. Body has `padding-left: 18px` to make room. Hides on mobile.

### 12. Perforation dividers
Between every section, a `<Perforation>` component renders:
- Dotted top edge (`radial-gradient` circles repeating at `16px 14px`)
- Centered label: `✂ — — — CUT HERE · § N — — — ✂`
- Dotted bottom edge

---

## Interactions & Behavior

### Live counters (client-only)
| What | Cadence | State |
|---|---|---|
| Tape header WIB clock | `setInterval(1000)` | `Date` |
| Hero receipt ETH block | `setInterval(12000)` | number starting at 22049837 |
| Hero receipt project cycle | `setInterval(8000)` | index 0..2 of `RECEIPT_CYCLE` array |
| Instruments scroll % | `scroll` event | computed from `scrollingElement.scrollTop / (scrollHeight - clientHeight)` |
| Instruments cursor X/Y | `mousemove` event | clientX, clientY |

All listeners use `{ passive: true }` and clean up on unmount.

### Click-to-copy (global delegate)
- A document-level `click` listener watches for `[data-copy]` attributes.
- On match: `navigator.clipboard.writeText(btn.dataset.copy)` then dispatches a `CustomEvent('dwx:copied', { detail: 'COPIED · ' + text })`.
- `CopyToast` component listens for that event, shows a fixed-position toast at bottom center for 1.4s, then clears.
- Wired on: receipt hash, every changelog hash button, contact email copy button.

### Case Study modal
- Click any work card whose data has a `study` object → opens fullscreen overlay modal.
- Implementation: `useState(null)` for the open card; controlled in `Works` component; renders `<CaseStudy w={open} onClose={...} />` conditionally.
- ESC key closes (window listener added when open).
- Click on `.cs-overlay` (outside `.cs-panel`) closes.
- `body { overflow: hidden }` while open.
- Slide-up entry animation (`cs-up 0.25s`).
- Modal content: tape header strip · 4-cell meta grid · big title · 4 sections (challenge / what I built / outcomes / stack) · "Visit {host} ↗" CTA footer.

### Animations / hover states
- Receipt: hover `rotate(0) translate(-2px, -4px)`, shadow grows to `12px 12px`
- Audit stamp: hover `rotate(0) scale(1.05)`
- Work card: hover `translateY(-6px)`
- Email button: hover translateX(+8) + clay color, underline grows from left
- Nav CTA: hover `rotate(-1deg)`, bg clay
- Marquee: 24s linear infinite scroll (60s on mobile)
- Star rotate in eyebrow: **removed** in final pass — don't reimplement
- All animations honor `@media (prefers-reduced-motion: reduce)` — disable

### Sticky behavior
- `.instruments` `position: sticky; top: 0; z-index: 60`
- `.nav` `position: sticky; top: 28px; z-index: 50` (just below instruments)
- Tape header is NOT sticky — it scrolls away

### Scroll
- HTML element is the scroll container. **Do NOT set `html, body { height: 100% }`** — that breaks sticky positioning. The original prototype had this bug; the final version removed it.
- Body uses `overflow-x: clip` and `min-height: 100vh`.

---

## State Management

Component-local state only. No global store needed.

| Component | State |
|---|---|
| `TapeTop` | `time: Date` |
| `Hero.LiveBlock` | `block: number` |
| `Hero (useReceipt)` | `idx: 0..2` |
| `Instruments` | `pct: 0..100`, `xy: {x, y}` |
| `CopyToast` | `msg: string \| null` |
| `Works` | `open: WorkData \| null` (the case study currently open) |

If using Next.js: mark only these components as `"use client"`:
- `Instruments`
- `TapeTop` (live clock)
- `Hero` (useReceipt + LiveBlock are client hooks)
- `CopyToast`
- `Works` (case study modal state) — or split out `WorksGrid` (RSC) + `CaseStudyModal` (client)

Everything else (Nav, Frame.Perforation, Frame.RollGutter, Capabilities, Process, Changelog static rows, Contact, Footer) can be Server Components.

---

## Data

All content is hardcoded — there's no CMS. Surface these arrays as exported constants from a `data/` module so they're easy to edit:

- `RECEIPT_CYCLE` (3 items: project, chain, tvl, audit, hash) — `Hero.jsx`
- `CAPS_V3` (6 items: n, title, desc, sk, sv, em?) — `Capabilities.jsx`
- `PROCESS_STEPS` (3 items: n, title, meta, bullets[]) — `Process.jsx`
- `WORKS_V3` (7 items: id, year, span, name, host, url, featured?, tagline, tags[], metric, acid?, study?) — `Works.jsx`
- `LOG_ENTRIES` (9 items: date, project, chain, hash, note, live?) — `Changelog.jsx`
- `SOCIALS_V3` (3 items: pl, hd, url) — `Contact.jsx`

The `study` field on a work item is what makes a card open the case-study modal. Currently only Factor Finance has one — extend by adding `study: { role, window, stack[], challenge, contributions[], results[] }` to any other work item.

---

## Assets

- **Fonts:** Google Fonts via `next/font/google` — `Boldonse`, `Anton` (fallback), `Funnel Sans` (300/400/500/600/700), `IBM Plex Mono` (300/400/500/600)
- **Favicon:** existing 32×32 PNG at `assets/favicon-32x32.png`
- **Image slots:** Each work card has a drag-and-drop image placeholder (`<image-slot>` web component in prototype). In production, replace with a proper `<Image>` component (Next.js) backed by static asset files. The user should supply screenshots for: `toldproof.xyz`, `amaly.app`, `pro.factor.fi`, `app.rekon.gg`, `lazorkit-lovat.vercel.app`, `vouch-protocol.vercel.app`, the Battle of Heroes Devpost page.
- **No SVG icons used** — the design intentionally avoids icon-pack iconography. The only glyphs are typographic: `↗ → ✦ ✂ ▸ ⎘ § №`.

---

## Files in this bundle

| File | Purpose |
|---|---|
| `README.md` | This document |
| `index.html` | Entry point — wires React/Babel and renders `<App>` |
| `styles.css` | Complete stylesheet with all tokens and component CSS |
| `Chrome.jsx` | TapeTop, Nav, FootV3 |
| `Frame.jsx` | Perforation, RollGutter, Instruments, CopyToast |
| `Hero.jsx` | Hero section, LiveBlock, useReceipt cycle, audit stamps, marquee |
| `Capabilities.jsx` | Services section (§01) |
| `Process.jsx` | Process section (§02) |
| `Works.jsx` | Works grid + CaseStudy modal |
| `Changelog.jsx` | Deploy log table (§04) |
| `Contact.jsx` | Contact section (§05) |
| `Icon.jsx` | Currently empty — placeholder, no SVG icons in final design |
| `image-slot.js` | Drag-drop image placeholder web component — replace with framework-native image component |

---

## What NOT to reproduce

- The `<script type="text/babel" src="...">` Babel-standalone loading pattern. Use proper ES modules + a build step.
- The `window.X = X` global component exports. Use ESM imports/exports.
- The `body::before` SVG noise overlay. It's `position: fixed; inset: 0; mix-blend-mode: multiply; opacity: 0.03`. It's tooling-hostile (breaks print, html-to-image screenshots, sometimes Lighthouse) and the visual benefit is marginal. Skip until v2 if needed.
- The `image-slot.js` web component. Use the framework's native image solution.

## What MUST be reproduced exactly

- The cycling receipt (8s interval, fade animation, indicator dots)
- The live block height tick (12s)
- The live WIB clock (1s)
- The sticky instruments strip + nav stack at `top: 0` and `top: 28px`
- The perforation tear-line dividers between every section
- The left ROLL gutter
- The click-to-copy delegate + toast
- The case study modal (ESC + click-outside close)
- The PeckShield audit stamps (rotation, sizing, content)
- All copy verbatim — every label, every headline, every bullet point
- All color tokens exactly as specified

---

## Suggested project structure (Next.js App Router)

```
app/
  layout.tsx                 # fonts, global CSS, RollGutter, CopyToast portal
  page.tsx                   # composes all sections
  globals.css                # CSS variables (the :root block)
components/
  chrome/
    TapeTop.tsx              # "use client" — live clock
    Nav.tsx                  # Server Component
    Foot.tsx                 # Server Component
    Instruments.tsx          # "use client" — scroll + cursor
    RollGutter.tsx           # Server Component
    Perforation.tsx          # Server Component
    CopyToast.tsx            # "use client" — global toast
  hero/
    Hero.tsx                 # "use client" — useReceipt hook
    Receipt.tsx              # rendered receipt card
    LiveBlock.tsx            # "use client" — block tick
    AuditRow.tsx             # Server Component
    Marquee.tsx              # Server Component
  sections/
    Capabilities.tsx
    Process.tsx
    Works.tsx                # imports CaseStudyModal as client
    CaseStudyModal.tsx       # "use client" — open state, ESC
    Changelog.tsx
    Contact.tsx
data/
  receipts.ts
  capabilities.ts
  process.ts
  works.ts
  changelog.ts
  socials.ts
lib/
  copy.ts                    # click-to-copy hook + event dispatch
```

---

## Open questions / decisions for the developer

- **Form on the contact section?** Currently just `mailto:` + copy email. Adding a contact form would be net-positive but the user hasn't asked for it.
- **CMS integration?** All copy is hardcoded. If the user wants to edit projects/log without redeploying, hook to Contentful, Sanity, or a simple GitHub-backed MDX flow.
- **Analytics?** Not in the prototype. Plausible or Fathom would fit the minimalist aesthetic.
- **Actual data feed for the receipt's block height?** Currently fake (starts at 22M and increments). Hooking to Etherscan or a public RPC for real block height is a 10-line change but adds an API dependency.
- **Image fallbacks for the work cards?** What should render when no screenshot is provided? Currently the prototype shows a big ghost text of the project name — a fine default.
