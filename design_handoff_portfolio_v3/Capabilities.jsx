// v3 — Capabilities

const CAPS_V3 = [
  { n: "01", title: "DeFi Engineering",   desc: "Vaults, liquidity pools, and yield strategies that hold real user money. Production protocols on Arbitrum and Ethereum.",                   sk: "TVL",      sv: "$50M+",        em: true },
  { n: "02", title: "Smart Contracts",    desc: "I write Solidity and Rust. Heavy testing before any audit — fuzz tests, invariants, and mutation testing run on every change.",            sk: "STACK",    sv: ".sol · .rs" },
  { n: "03", title: "Multi-Chain",        desc: "Live on six chains — Ethereum, Arbitrum, Base, Solana, Sui, and Polygon. Each one with its own deploy plan and monitoring.",                 sk: "CHAINS",   sv: "06" },
  { n: "04", title: "Security First",     desc: "Three PeckShield audits. Zero critical issues found, every time. Slither and Aderyn run on every PR before merge.",                           sk: "CRITICAL", sv: "0/0/0",        em: true },
  { n: "05", title: "ZK & Privacy",       desc: "Zero-knowledge proofs with Noir. Sealed predictions on Sui, time-locked reveals — keeping data private without losing trust.",                sk: "TOOLS",    sv: "Noir · Walrus" },
  { n: "06", title: "Full-Stack Web3",    desc: "React, Next.js, TypeScript. I build the contract and the website it talks to — no handoffs between people, no rewriting at the boundary.",   sk: "SHIPPED",  sv: "Cx ↔ UI" },
];

function Capabilities() {
  return (
    <section id="capabilities" className="section" data-screen-label="02 Services">
      <div className="container">
        <header className="sec-head">
          <div className="marker"><span className="num">§ 01</span> What I build</div>
          <h2>
            Six things <br/>
            I can <span className="clay">build</span> for you,<br/>
            <span className="outline">end-to-end.</span>
          </h2>
        </header>

        <div className="cap-grid">
          {CAPS_V3.map(c => (
            <div key={c.n} className="cap-row">
              <div className="body">
                <h3><span className="n">{c.n}</span>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
              <div className="stat">
                <span className="k">{c.sk}</span>
                <span className={"v" + (c.em ? " clay" : "")}>{c.sv}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Capabilities = Capabilities;
