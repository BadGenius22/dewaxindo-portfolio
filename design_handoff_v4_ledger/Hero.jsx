// v4 — Hero
// Refined display type, sentence case, no overlap. Receipt kept as the
// signature tactile object. Disciplines strip replaces rotated stamps.

function LiveBlock() {
  const [build, setBuild] = React.useState(1287);
  React.useEffect(() => {
    const id = setInterval(() => setBuild(b => b + 1), 12000);
    return () => clearInterval(id);
  }, []);
  return <React.Fragment>#{build.toLocaleString()}</React.Fragment>;
}

const RECEIPT_CYCLE = [
  { project: "RekonGG",        stack: "Next.js · AI",        scale: "LIVE",   status: "Polymarket · USDC",       hash: "a3f9c1e" },
  { project: "Factor Finance", stack: "Solidity · Arbitrum", scale: "$50M+",  status: "PeckShield · 0 Critical", hash: "0x1b3c…ae47" },
  { project: "Amaly",          stack: "Next.js · PWA",       scale: "224+",   status: "Shipped · in prod",       hash: "7d20b4f" },
];

function useReceipt() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI(x => (x + 1) % RECEIPT_CYCLE.length), 8000);
    return () => clearInterval(id);
  }, []);
  return { ...RECEIPT_CYCLE[i], idx: i };
}

function Hero() {
  const r = useReceipt();
  return (
    <section id="top" className="hero" data-screen-label="01 Hero">
      <div className="hero-eyebrow">
        <span>Dewangga Praxindo</span>
        <span className="star">✦</span>
        <span>AI · Full-Stack · Smart Contract Engineer</span>
        <span className="star">✦</span>
        <span>Est. 2022</span>
      </div>

      <h1 className="hero-headline">
        Shipping <span className="clay">AI</span>, full-stack &amp; onchain systems<span className="clay">.</span>
      </h1>

      <div className="hero-stage">
        <div className="hero-left">
          <p className="hero-lede">
            I'm an <strong>AI &amp; full-stack engineer</strong> based in Yogyakarta, Indonesia —
            I also write the smart contracts that move money. LLM agents, production web apps,
            and <mark>$50M+ TVL deployed</mark> onchain. I build the whole stack: the model, the
            interface, and the contract underneath.
          </p>
          <div className="hero-ctas">
            <a className="hero-cta primary" href="mailto:hi@dewaxindo.com">
              Hire me <span className="hc-ico">↗</span>
            </a>
            <a className="hero-cta ghost" href="#works">
              Selected work <span className="hc-ico">→</span>
            </a>
          </div>
        </div>

        <aside className="receipt" key={r.idx}>
          <div className="stamp">Deployed</div>
          <div className="rcpt-head">
            <span className="t">Ship Receipt</span>
            <span className="l">LIVE</span>
          </div>
          <div className="row"><span className="k">Project</span><span className="v">{r.project}</span></div>
          <div className="row"><span className="k">Stack</span><span className="v">{r.stack}</span></div>
          <div className="row"><span className="k">Scale</span><span className="v bigmoney">{r.scale}</span></div>
          <div className="row"><span className="k">Status</span><span className="v em">{r.status}</span></div>
          <div className="row"><span className="k">Build</span><span className="v"><LiveBlock /></span></div>
          <div className="row"><span className="k">Commit</span><span className="v">
            <button className="copy-btn" data-copy={r.hash} title="Copy commit">
              {r.hash} <span className="copy-ico">⎘</span>
            </button>
          </span></div>
          <div className="barcode">
            <div className="bars">
              <span style={{ height: 16 }}></span><span style={{ height: 20 }}></span><span style={{ height: 13, width: 4 }}></span>
              <span style={{ height: 20 }}></span><span style={{ height: 15 }}></span><span style={{ height: 20, width: 3 }}></span>
              <span style={{ height: 13 }}></span><span style={{ height: 20 }}></span><span style={{ height: 16, width: 2 }}></span>
              <span style={{ height: 20 }}></span><span style={{ height: 13 }}></span><span style={{ height: 16 }}></span>
              <span style={{ height: 20, width: 4 }}></span><span style={{ height: 13 }}></span><span style={{ height: 20 }}></span>
            </div>
            <span style={{ color: "var(--ink-3)" }}>DWX·MMXXVI</span>
          </div>
          <div className="rcpt-cycle" aria-hidden="true">
            {RECEIPT_CYCLE.map((_, i) => (
              <span key={i} className={"rc-dot" + (i === r.idx ? " on" : "")}></span>
            ))}
          </div>
        </aside>
      </div>

      <div className="disc-strip" aria-label="Three disciplines, one engineer">
        <div className="disc">
          <span className="d-n">A —</span>
          <span className="d-t">AI Systems</span>
          <span className="d-s">Agents · RAG · Evals</span>
        </div>
        <div className="disc">
          <span className="d-n">B —</span>
          <span className="d-t">Full-Stack</span>
          <span className="d-s">Next · TypeScript · Cloud</span>
        </div>
        <div className="disc">
          <span className="d-n">C —</span>
          <span className="d-t">Smart Contracts</span>
          <span className="d-s">Audited · 0 Critical</span>
        </div>
        <div className="disc-tally">
          <span className="at-num">1 / 3</span>
          <span className="at-lbl">One engineer.<br />Three disciplines.</span>
        </div>
      </div>

      <div className="stackline" aria-hidden="true">
        <div className="track">
          {[...Array(2)].map((_, dup) => (
            <React.Fragment key={dup}>
              <span>TypeScript</span><span className="star">✦</span>
              <span>Next.js</span><span className="star">✦</span>
              <span>Python</span><span className="star">✦</span>
              <span>LLM Agents</span><span className="star">✦</span>
              <span>RAG</span><span className="star">✦</span>
              <span>React</span><span className="star">✦</span>
              <span>Postgres</span><span className="star">✦</span>
              <span>Solidity</span><span className="star">✦</span>
              <span>Rust</span><span className="star">✦</span>
              <span>Foundry</span><span className="star">✦</span>
              <span>Sui Move</span><span className="star">✦</span>
              <span>Noir · ZK</span><span className="star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
