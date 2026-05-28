// v3 — Top tape + nav + footer

function TapeTop() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const ts = new Date(time.getTime() + 7 * 3600 * 1000).toISOString().slice(11, 19);
  return (
    <div className="tape-top">
      <div className="l">№ 003 / FORGE EDITION</div>
      <div className="c">AVAILABLE — Q2 2026</div>
      <div className="r">{ts} WIB · UTC+7 · Yogyakarta, ID</div>
    </div>
  );
}

function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="mark">
        Praxindo<span className="num">/003</span>
      </a>
      <nav className="links">
        <a href="#capabilities"><span className="n">01.</span>Services</a>
        <a href="#process"><span className="n">02.</span>Process</a>
        <a href="#works"><span className="n">03.</span>Work</a>
        <a href="#log"><span className="n">04.</span>Log</a>
        <a href="#contact"><span className="n">05.</span>Contact</a>
      </nav>
      <a className="cta" href="mailto:hi@dewaxindo.com">Hire me</a>
    </header>
  );
}

function FootV3() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="l">
          <span style={{ color: "var(--ink-faint)" }}>SIGNED ·</span>{" "}
          <span style={{ fontWeight: 500, color: "var(--ink-2)", letterSpacing: "0.04em" }}>DEWANGGA PRAXINDO</span>
        </div>
        <div className="c">© MMXXVI · Yogyakarta, ID · v3 Forge Edition</div>
        <div className="r">
          <span style={{ color: "var(--ink-faint)" }}>SET IN</span>{" "}
          BOLDONSE · FUNNEL SANS · IBM PLEX MONO
        </div>
      </div>
    </footer>
  );
}

window.TapeTop = TapeTop;
window.Nav = Nav;
window.FootV3 = FootV3;
