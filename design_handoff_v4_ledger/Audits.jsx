// v4 — Audits & Credentials
// Audit record table (PeckShield history + pending slots) and the
// RektOff Solana Auditor Bootcamp credential card.

const AUDIT_RECORDS = [
  { date: "2025.Q3", scope: "Factor PT-GMX Leverage v2",  firm: "PeckShield", result: "0 critical", status: "pass" },
  { date: "2025.Q2", scope: "Factor LP-USDC.e Vaults",    firm: "PeckShield", result: "0 critical", status: "pass" },
  { date: "2025.Q1", scope: "Factor LP-ETH Core",         firm: "PeckShield", result: "0 critical", status: "pass" },
  { date: "2026",    scope: "TOLDPROOF · Sui Move",       firm: "TBA",        result: "Report pending", status: "pending" },
];

function Audits() {
  return (
    <section id="audits" className="section" data-screen-label="05 Audits">
      <div className="container">
        <header className="sec-head">
          <div className="marker"><span className="num">§ 04</span> Security record</div>
          <h2>
            Audited code. <br />
            <span className="clay">Zero</span> critical findings<span className="outline">, so far.</span>
          </h2>
        </header>

        <div className="aud-layout">
          <div className="aud-frame">
            <div className="aud-frame-head">
              <span>AUDIT · RECORD</span>
              <span className="ok">{AUDIT_RECORDS.filter(a => a.status === "pass").length} PASSED / {AUDIT_RECORDS.length} TOTAL</span>
            </div>
            <div role="table">
              <div className="aud-row2 head" role="row">
                <span>Date</span>
                <span>Scope</span>
                <span>Firm</span>
                <span className="a-result">Result</span>
              </div>
              {AUDIT_RECORDS.map((a, i) => (
                <div key={i} className="aud-row2" role="row">
                  <span className="a-date">{a.date}</span>
                  <span className="a-scope">{a.scope}</span>
                  <span className="a-firm">{a.firm}</span>
                  <span className="a-result">
                    <span className={"aud-badge " + a.status}>{a.result}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="cred-card">
            <div className="cred-head">
              <span>CREDENTIAL · № 001</span>
              <span className="clay">GRADUATE</span>
            </div>
            <div className="cred-visual">
              <image-slot
                id="cert-rektoff"
                shape="rect"
                placeholder="Drop the RektOff certificate image"
              ></image-slot>
              <span className="placeholder-mark">[ RektOff certificate — drop image here ]</span>
            </div>
            <div className="cred-body">
              <h3>RektOff Solana Auditor Bootcamp</h3>
              <p>
                Graduated from RektOff's Solana security bootcamp — auditing Anchor
                and native programs: account validation, CPI safety, and the exploit
                patterns that drain protocols.
              </p>
              <div className="cred-meta">
                <span>SOLANA · SECURITY</span>
                <span className="clay">CERTIFIED · 2026</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

window.Audits = Audits;
