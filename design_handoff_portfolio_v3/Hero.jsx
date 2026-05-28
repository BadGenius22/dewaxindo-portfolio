// v3 — Hero
// Giant Boldonse display + asymmetric deploy receipt as the tactile object.

function LiveBlock() {
  const [block, setBlock] = React.useState(22049837);
  React.useEffect(() => {
    const id = setInterval(() => setBlock(b => b + 1), 12000);
    return () => clearInterval(id);
  }, []);
  return <>#{block.toLocaleString()}</>;
}

const RECEIPT_CYCLE = [
  { project: "Factor Finance",  chain: "Arbitrum One",  tvl: "$50M+",        audit: "PeckShield · 0 Critical", hash: "0x1b3c…ae47" },
  { project: "Toldproof",       chain: "Sui Mainnet",   tvl: "61/61 tests",  audit: "Internal · 0 Critical",   hash: "0xae47…2c91" },
  { project: "Vouch Protocol",  chain: "Solana · Noir", tvl: "ZK proofs",    audit: "Self-reviewed",           hash: "0x2c91…1b3c" },
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
    <section id="top" className="hero container" data-screen-label="01 Hero">
      <div className="hero-eyebrow">
        <span>DEWANGGA PRAXINDO</span>
        <span>—</span>
        <span>DEFI SMART CONTRACT ENGINEER</span>
        <span>—</span>
        <span>EST. 2022</span>
      </div>

      <h1 className="hero-headline">
        <span className="row">SHIPPING</span>
        <span className="row"><span className="clay">SMART</span> CONTRACTS</span>
        <span className="row"><span className="outline">REAL MONEY</span></span>
        <span className="row">TRUSTS<span style={{ color: "var(--clay)" }}>.</span></span>
      </h1>

      <div className="hero-stage">
        <div className="hero-left">
          <p className="hero-lede">
            I am a <strong>DeFi smart contract engineer</strong> based in Yogyakarta, Indonesia.
            I write the contracts that move money — <mark>$50M+ TVL deployed</mark> across Ethereum, Arbitrum, Base, Solana, and Sui. Three full PeckShield audits, zero criticals. The receipts are below.
          </p>
          <div className="hero-ctas">
            <a className="hero-cta primary" href="mailto:hi@dewaxindo.com">
              Hire me <span className="hc-ico">↗</span>
            </a>
            <a className="hero-cta ghost" href="#works">
              See selected work <span className="hc-ico">→</span>
            </a>
          </div>
        </div>

        <aside className="receipt" key={r.idx}>
          <div className="stamp">DEPLOYED</div>
          <div className="rcpt-head">
            <span className="t">Deploy Receipt</span>
            <span className="l">LIVE</span>
          </div>
          <div className="row"><span className="k">Project</span><span className="v">{r.project}</span></div>
          <div className="row"><span className="k">Chain</span><span className="v">{r.chain}</span></div>
          <div className="row"><span className="k">TVL</span><span className="v bigmoney">{r.tvl}</span></div>
          <div className="row"><span className="k">Audit</span><span className="v em">{r.audit}</span></div>
          <div className="row"><span className="k">Block</span><span className="v"><LiveBlock /></span></div>
          <div className="row"><span className="k">Hash</span><span className="v">
            <button className="copy-btn" data-copy={r.hash} title="Copy hash">
              {r.hash} <span className="copy-ico">⎘</span>
            </button>
          </span></div>
          <div className="barcode">
            <div className="bars">
              <span style={{ height: 18 }} /><span style={{ height: 22 }} /><span style={{ height: 14, width: 4 }} />
              <span style={{ height: 22 }} /><span style={{ height: 16 }} /><span style={{ height: 22, width: 3 }} />
              <span style={{ height: 14 }} /><span style={{ height: 22 }} /><span style={{ height: 18, width: 2 }} />
              <span style={{ height: 22 }} /><span style={{ height: 14 }} /><span style={{ height: 18 }} />
              <span style={{ height: 22, width: 4 }} /><span style={{ height: 14 }} /><span style={{ height: 22 }} />
            </div>
            <span style={{ color: "var(--ink-3)" }}>DWX·MMXXVI</span>
          </div>

          <div className="rcpt-cycle" aria-hidden="true">
            {RECEIPT_CYCLE.map((_, i) => (
              <span key={i} className={"rc-dot" + (i === r.idx ? " on" : "")} />
            ))}
          </div>
        </aside>
      </div>

      <div className="audit-row" aria-label="Audit history">
        <div className="audit-stamp">
          <div className="audit-stamp-inner">
            <span className="as-t">Peck<br/>Shield</span>
            <span className="as-mid">AUDIT</span>
            <span className="as-d">Q3 · 25</span>
          </div>
          <span className="as-label">0 CRITICAL · 0 HIGH</span>
        </div>
        <div className="audit-stamp">
          <div className="audit-stamp-inner">
            <span className="as-t">Peck<br/>Shield</span>
            <span className="as-mid">AUDIT</span>
            <span className="as-d">Q1 · 25</span>
          </div>
          <span className="as-label">0 CRITICAL · 1 INFO</span>
        </div>
        <div className="audit-stamp">
          <div className="audit-stamp-inner">
            <span className="as-t">Peck<br/>Shield</span>
            <span className="as-mid">AUDIT</span>
            <span className="as-d">Q3 · 24</span>
          </div>
          <span className="as-label">0 CRITICAL · 2 LOW</span>
        </div>
        <div className="audit-tally">
          <span className="at-num">3 / 3</span>
          <span className="at-lbl">Audits passed.<br/>Zero critical findings.</span>
        </div>
      </div>

      <div className="marquee">
        <div className="track">
          {[...Array(2)].map((_, dup) => (
            <React.Fragment key={dup}>
              <span>SOLIDITY</span><span className="star">✦</span>
              <span>RUST</span><span className="star">✦</span>
              <span>FOUNDRY</span><span className="star">✦</span>
              <span>ANCHOR</span><span className="star">✦</span>
              <span>SUI MOVE</span><span className="star">✦</span>
              <span>NOIR · ZK</span><span className="star">✦</span>
              <span>NEXT.JS</span><span className="star">✦</span>
              <span>PECKSHIELD AUDITED</span><span className="star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
