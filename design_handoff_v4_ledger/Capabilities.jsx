// v3 — Capabilities

const CAPS_V3 = [
  { n: "01", title: "AI Engineering",     desc: "LLM agents, RAG pipelines, and evals that actually ship. Function calling, tool use, retrieval, and guardrails — from prompt to production.",                   sk: "MODELS",   sv: "GPT · Claude", em: true },
  { n: "02", title: "Full-Stack Apps",    desc: "React, Next.js, TypeScript end to end. Auth, payments, realtime, and the database underneath. I ship the whole product, not a slice.",            sk: "SHIPPED",  sv: "Next · TS" },
  { n: "03", title: "Smart Contracts",    desc: "Solidity and Rust. Heavy testing before any audit — fuzz tests, invariants, and mutation testing run on every change.",            sk: "STACK",    sv: ".sol · .rs" },
  { n: "04", title: "DeFi & Onchain",     desc: "Vaults, liquidity pools, and yield strategies that hold real user money. Production protocols on Arbitrum and Ethereum.",                 sk: "TVL",      sv: "$50M+",        em: true },
  { n: "05", title: "Infra & Ship",       desc: "CI/CD, observability, and cloud. Postgres, edge functions, queues. The unglamorous parts that keep products alive at 3am.",                sk: "UPTIME",   sv: "24/7" },
  { n: "06", title: "Security First",     desc: "Three PeckShield audits, zero critical issues. Slither and Aderyn on every PR. Threat models written before a line of code.",                           sk: "CRITICAL", sv: "0/0/0",        em: true },
];

function Capabilities() {
  return (
    <section id="capabilities" className="section" data-screen-label="02 Services">
      <div className="container">
        <header className="sec-head">
          <div className="marker"><span className="num">§ 01</span> What I build</div>
          <h2>
            Six things I can <span className="clay">build</span> for you, <span className="outline">end-to-end.</span>
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
