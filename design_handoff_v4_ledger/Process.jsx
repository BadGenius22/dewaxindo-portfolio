// v3 — Process — "How I work"

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Scope & design",
    meta: "DAYS 01—03",
    bullets: [
      "Understand the problem before the stack. Read the code, the specs, the prior art.",
      "Map the data flow and the trust boundaries. Mark every place value or state crosses one.",
      "Pick the tools that fit — model, framework, chain — and write the spec we build to.",
    ],
  },
  {
    n: "02",
    title: "Build & test",
    meta: "WEEKS 01—04",
    bullets: [
      "Ship in vertical slices. Working software every week, not a big-bang reveal.",
      "Tests live next to the code: evals for AI, e2e for apps, fuzz & invariants for contracts.",
      "CI on every push. Type-safe end to end. Coverage gate before anything merges.",
    ],
  },
  {
    n: "03",
    title: "Ship & watch",
    meta: "FINAL WEEK",
    bullets: [
      "Deploy with rollback. Feature flags, timelocks, and a tested kill switch on the money paths.",
      "Monitoring, logging, and traces wired in — I get paged before users do.",
      "Audit the critical paths. On-call for the first 30 days after every launch.",
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
            Three phases. <span className="clay">Same</span> every time.
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
