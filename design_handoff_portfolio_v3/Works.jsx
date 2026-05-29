// v3 — Works — asymmetric grid of project cards with image-slots for screenshots.

const WORKS_V3 = [
  { id: "toldproof", year: 2026, span: "span-7", name: "TOLDPROOF",       host: "toldproof.xyz",            url: "https://toldproof.xyz",
    tagline: "A way for AI agents and people to prove their predictions are honest. Sealed on Sui, revealed on time.",
    tags: ["Sui Move", "Walrus", "x402"], metric: "61/61 · 0 critical", acid: true },
  { id: "amaly",     year: 2026, span: "span-5", name: "Amaly",           host: "amaly.app",                url: "https://amaly.app",
    tagline: "A mobile app for tracking prayers during Ramadan. Quran reader, streaks, leaderboard.",
    tags: ["Next.js", "PWA"],            metric: "224+ users" },
  { id: "factor",    year: 2025, span: "span-12", name: "Factor Finance", host: "pro.factor.fi",            url: "https://pro.factor.fi/strategies", featured: true,
    tagline: "DeFi yield strategies on Arbitrum. I am a core engineer — leverage vaults, LP management, the contracts that hold $50M+ TVL.",
    tags: ["Solidity", "Foundry", "Arbitrum"], metric: "$50M+ TVL",
    study: {
      role: "Core protocol engineer",
      window: "2024 — present",
      stack: ["Solidity 0.8.24", "Foundry", "Echidna", "Slither", "Aderyn", "Defender"],
      challenge: "Hold real user capital across volatile L2 liquidity venues without ever losing the principal. Withstand price shocks, MEV reorgs, and partner-protocol failures.",
      contributions: [
        "Built leveraged LP vaults for ETH, USDC.e, and PT-GMX across Camelot V3 and Uniswap V3.",
        "Wrote the rebalancer that keeps each pool within its target health band — saved ~$200k in gas vs the first design via assembly optimizations.",
        "Authored the invariant suite — 12 properties checked on every PR with 100k+ Echidna runs.",
        "Ran the deploy pipeline end-to-end: timelock, multisig, Defender monitors, on-call rotation for the first 30 days post-launch.",
      ],
      results: [
        { k: "TVL held",       v: "$50M+" },
        { k: "Contracts live", v: "14" },
        { k: "Critical bugs",  v: "0" },
        { k: "Line coverage",  v: "100%" },
      ],
    },
  },
  { id: "rekon",     year: 2026, span: "span-6", name: "RekonGG",         host: "app.rekon.gg",             url: "https://app.rekon.gg",
    tagline: "Esports predictions powered by AI on Polymarket. Pay in USDC with one click.",
    tags: ["Polymarket", "AI"],          metric: "Live" },
  { id: "lazor",     year: 2026, span: "span-6", name: "LazorKit SDK",    host: "lazorkit-lovat.vercel.app", url: "https://lazorkit-lovat.vercel.app",
    tagline: "A Solana wallet template with Face ID and Touch ID. No seed phrases.",
    tags: ["Solana", "WebAuthn"],        metric: "Dev template" },
  { id: "vouch",     year: 2026, span: "span-7", name: "Vouch Protocol",  host: "vouch-protocol.vercel.app", url: "https://vouch-protocol.vercel.app",
    tagline: "Prove things about your Solana wallet without revealing who you are. Built with Noir zero-knowledge circuits.",
    tags: ["Solana", "Noir", "Privacy"], metric: "Hackathon" },
  { id: "boh",       year: 2022, span: "span-5", name: "Battle of Heroes", host: "devpost.com",             url: "https://devpost.com/software/battle-of-heroes",
    tagline: "NFT battle game with fair, verifiable randomness. Chainlink hackathon winner in 2022.",
    tags: ["Solidity", "Chainlink VRF"], metric: "$500 prize" },
];

function WorkCard({ w, onOpen }) {
  const hasStudy = Boolean(w.study);
  const handleClick = (e) => {
    if (e.target.closest('a')) return;
    if (hasStudy && onOpen) onOpen(w);
  };
  return (
    <article
      className={"work-card " + w.span + (hasStudy ? " has-study" : "")}
      onClick={handleClick}
      role={hasStudy ? "button" : undefined}
      tabIndex={hasStudy ? 0 : undefined}
      onKeyDown={(e) => { if (hasStudy && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); onOpen(w); } }}
    >
      <div className="stamp">
        <span>№ {w.id.toUpperCase()} · {w.year}</span>
        <span className="clay">{w.featured ? "MARQUEE" : (hasStudy ? "CASE STUDY →" : "RECEIPT")}</span>
      </div>

      <div className="visual">
        <image-slot
          id={`work-${w.id}`}
          shape="rect"
          placeholder={`Drop a screenshot of ${w.host}`}
        ></image-slot>
        <span className="placeholder-mark">{w.name.split(" ")[0]}</span>
        <a className="url-pill" href={w.url} target="_blank" rel="noreferrer">{w.host}</a>
      </div>

      <h3>{w.name}</h3>
      <p className="tagline">{w.tagline}</p>
      <div className="meta">
        <div className="tags">
          {w.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <span className={"metric" + (w.acid ? " acid" : "")}>{w.metric}</span>
      </div>
    </article>
  );
}

function Works() {
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <section id="works" className="section" data-screen-label="04 Work">
      <div className="container">
        <header className="sec-head">
          <div className="marker"><span className="num">§ 03</span> Selected works</div>
          <h2>
            <span className="clay">7</span> projects.<br/>
            All <span className="outline">live</span><br/>
            or in production.
          </h2>
        </header>

        <div className="works-grid">
          {WORKS_V3.map(w => <WorkCard key={w.id} w={w} onOpen={setOpen} />)}
        </div>
      </div>

      {open && <CaseStudy w={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

window.Works = Works;

function CaseStudy({ w, onClose }) {
  const s = w.study;
  return (
    <div className="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-title" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="cs-panel">
        <div className="cs-tape">
          <span>CASE STUDY · {w.id.toUpperCase()} · {w.year}</span>
          <span className="cs-tape-mid">— FILE OPENED —</span>
          <button className="cs-close" onClick={onClose} aria-label="Close case study">[ ESC ]</button>
        </div>

        <div className="cs-body">
          <header className="cs-head">
            <div className="cs-meta">
              <div><span className="cs-k">Project</span><span className="cs-v">{w.name}</span></div>
              <div><span className="cs-k">Role</span><span className="cs-v">{s.role}</span></div>
              <div><span className="cs-k">Window</span><span className="cs-v">{s.window}</span></div>
              <div><span className="cs-k">Live at</span><span className="cs-v"><a href={w.url} target="_blank" rel="noreferrer">{w.host} ↗</a></span></div>
            </div>
            <h2 id="cs-title" className="cs-title">{w.name}</h2>
          </header>

          <section className="cs-section">
            <h3 className="cs-h3"><span className="cs-h3-n">01</span> The challenge</h3>
            <p className="cs-prose">{s.challenge}</p>
          </section>

          <section className="cs-section">
            <h3 className="cs-h3"><span className="cs-h3-n">02</span> What I built</h3>
            <ul className="cs-list">
              {s.contributions.map((c, i) => (
                <li key={i}><span className="cs-tick">▸</span><span>{c}</span></li>
              ))}
            </ul>
          </section>

          <section className="cs-section">
            <h3 className="cs-h3"><span className="cs-h3-n">03</span> Outcomes</h3>
            <div className="cs-results">
              {s.results.map((r, i) => (
                <div key={i} className="cs-stat">
                  <span className="cs-stat-k">{r.k}</span>
                  <span className="cs-stat-v">{r.v}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="cs-section cs-stack-section">
            <h3 className="cs-h3"><span className="cs-h3-n">04</span> Stack</h3>
            <div className="cs-stack">
              {s.stack.map(t => <span key={t} className="cs-chip">{t}</span>)}
            </div>
          </section>

          <footer className="cs-foot">
            <span>END · OF · FILE</span>
            <a className="cs-cta" href={w.url} target="_blank" rel="noreferrer">Visit {w.host} ↗</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

window.CaseStudy = CaseStudy;
