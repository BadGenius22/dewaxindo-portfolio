// v3 — Contact

const SOCIALS_V3 = [
  { pl: "X / Twitter",  hd: "@dewaxindo",  url: "https://x.com/dewaxindo" },
  { pl: "GitHub",       hd: "BadGenius22", url: "https://github.com/BadGenius22" },
  { pl: "LinkedIn",     hd: "in/dewaxindo",url: "https://linkedin.com/in/dewaxindo" },
];

function Contact() {
  return (
    <section id="contact" className="contact-wrap" data-screen-label="06 Contact">
      <div className="contact-ghost" aria-hidden="true">RECEIPTS</div>
      <div className="contact-inner">
        <div className="contact-eyebrow">§ 05 — Get in touch</div>

        <h2 className="contact-pitch">
          Let's<br/>
          build something<br/>
          worth <span className="forest-pad offset-print" data-text="auditing">auditing</span>.
        </h2>

        <div className="contact-line">
          <div>
            <a className="email-btn" href="mailto:hi@dewaxindo.com">
              hi@dewaxindo.com <span className="arrow">→</span>
            </a>
            <button className="email-copy copy-btn" data-copy="hi@dewaxindo.com" title="Copy email">
              <span className="ec-label">or copy address</span>
              <span className="ec-ico">⎘</span>
            </button>
            <p className="lede" style={{ marginTop: 24 }}>
              I reply in <b>under 24 hours</b> on weekdays. Available for contract audits, protocol engineering, and Web3 advice — <b>starting Q2 2026</b>.
            </p>
          </div>

          <div className="contact-meta">
            {SOCIALS_V3.map(s => (
              <a key={s.pl} className="row" href={s.url} target="_blank" rel="noreferrer">
                <span className="pl">{s.pl}</span>
                <span className="hd">{s.hd}</span>
                <span className="ar">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
