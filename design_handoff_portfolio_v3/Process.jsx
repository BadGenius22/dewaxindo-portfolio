// v3 — Process — "How I work"

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Scope & threat model",
    meta: "DAYS 01—03",
    bullets: [
      "Read every line of the existing spec, code, and prior audits.",
      "Diagram the trust assumptions. Mark every place value crosses a trust boundary.",
      "Write the threat model. Adversary capabilities, invariants we cannot break.",
    ],
  },
  {
    n: "02",
    title: "Write, fuzz, invariants",
    meta: "WEEKS 01—04",
    bullets: [
      "Solidity / Move / Rust. Foundry tests next to every contract.",
      "Echidna or Medusa for property-based fuzzing. Mutation testing on every PR.",
      "Slither + Aderyn run on every push. 80% branch coverage gate before merge.",
    ],
  },
  {
    n: "03",
    title: "Audit & deploy",
    meta: "FINAL WEEK",
    bullets: [
      "PeckShield or equivalent. Fixes shipped same day, re-audit on critical paths.",
      "Mainnet deploy with timelock, multisig, and a tested emergency pause.",
      "Tenderly + Defender monitors. On-call for the first 30 days post-launch.",
    ],
  },
];

function Process() {
  return (
    <section id="process" className="section process" data-screen-label="03 Process">
      <div className="container">
        <header className="sec-head">
          <div className="marker"><span className="num">§ 02</span> How I work</div>
          <h2>
            Three<br/>
            phases. <span className="clay">Same</span><br/>
            every time.
          </h2>
        </header>

        <ol className="process-stack">
          {PROCESS_STEPS.map(s => (
            <li key={s.n} className="process-step">
              <div className="ps-head">
                <span className="ps-n">{s.n}</span>
                <span className="ps-meta">{s.meta}</span>
              </div>
              <h3 className="ps-title">{s.title}</h3>
              <ul className="ps-bullets">
                {s.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="ps-tick">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

window.Process = Process;
