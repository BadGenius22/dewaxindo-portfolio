// v3 — Changelog — chronological "deploy log" / shipped receipts

const LOG_ENTRIES = [
  { date: "2026.04.12", project: "TOLDPROOF",        chain: "SUI MAINNET",   hash: "0xae47…2c91", note: "61/61 tests · 0 critical", live: true },
  { date: "2026.03.05", project: "AMALY v2",          chain: "WEB · PWA",     hash: "—",            note: "224 monthly users" },
  { date: "2026.02.18", project: "REKON.GG",          chain: "POLYMARKET",    hash: "0x91ae…47b3", note: "AI · esports predictions", live: true },
  { date: "2026.01.30", project: "LAZORKIT SDK",      chain: "SOLANA",        hash: "—",            note: "WebAuthn template" },
  { date: "2026.01.12", project: "VOUCH PROTOCOL",    chain: "SOLANA · NOIR", hash: "0x7b3c…91ae", note: "ZK hackathon · finalist" },
  { date: "2025.11.22", project: "FACTOR LP-USDC.e",  chain: "ARBITRUM ONE",  hash: "0x1b3c…ae47", note: "$32M TVL · audited", live: true },
  { date: "2025.09.04", project: "FACTOR PT-GMX",     chain: "ARBITRUM ONE",  hash: "0x4c91…3b7a", note: "leverage vault · v2" },
  { date: "2025.06.18", project: "FACTOR LP-ETH",     chain: "ARBITRUM ONE",  hash: "0x3b7a…ae47", note: "initial deploy · $8M TVL", live: true },
  { date: "2022.10.09", project: "BATTLE OF HEROES",  chain: "ETHEREUM",      hash: "0x9201…c4d2", note: "Chainlink hack · winner" },
];

function Changelog() {
  return (
    <section id="log" className="section log" data-screen-label="05 Log">
      <div className="container">
        <header className="sec-head">
          <div className="marker"><span className="num">§ 04</span> Deploy log</div>
          <h2>
            <span className="clay">9</span> commits<br/>
            to <span className="outline">production.</span><br/>
            All on chain.
          </h2>
        </header>

        <div className="log-frame">
          <div className="log-frame-head">
            <span>DEPLOY · LOG</span>
            <span className="log-cnt"><span className="log-dot" /> {LOG_ENTRIES.filter(e=>e.live).length} LIVE / {LOG_ENTRIES.length} TOTAL</span>
            <span>SIGNED · DWX</span>
          </div>

          <div className="log-table" role="table">
            <div className="log-row log-row-head" role="row">
              <span>Date</span>
              <span>Project</span>
              <span>Chain</span>
              <span>Tx · Hash</span>
              <span>Note</span>
            </div>

            {LOG_ENTRIES.map((e, i) => (
              <div key={i} className="log-row" role="row">
                <span className="lg-date">{e.date}</span>
                <span className="lg-project">
                  {e.live && <span className="lg-live" title="Live on mainnet" />}
                  {e.project}
                </span>
                <span className="lg-chain">{e.chain}</span>
                <span className="lg-hash">
                  {e.hash !== "—" ? (
                    <button className="copy-btn" data-copy={e.hash} title="Copy hash">
                      {e.hash} <span className="copy-ico">⎘</span>
                    </button>
                  ) : <span style={{ color: "var(--ink-faint)" }}>{e.hash}</span>}
                </span>
                <span className="lg-note">{e.note}</span>
              </div>
            ))}
          </div>

          <div className="log-frame-foot">
            <span>END · OF · ROLL</span>
            <span>— · — · —</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Changelog = Changelog;
