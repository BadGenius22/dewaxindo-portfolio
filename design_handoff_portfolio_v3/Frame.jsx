// v3 — Frame — perforated section dividers + left "roll" gutter + instruments strip

function Perforation({ label }) {
  return (
    <div className="perf" role="separator" aria-hidden="true">
      <div className="perf-edge perf-edge-top" />
      <div className="perf-label">
        <span className="perf-scissor">✂</span>
        <span>{label || "— — — — — — TEAR HERE — — — — — —"}</span>
        <span className="perf-scissor flip">✂</span>
      </div>
      <div className="perf-edge perf-edge-bot" />
    </div>
  );
}

function RollGutter() {
  // Fixed left strip — vertical text + a few section anchors.
  const line = " · ROLL №003 · DEWAXINDO · MMXXVI · FORGE EDITION · ";
  return (
    <aside className="roll-gutter" aria-hidden="true">
      <div className="roll-vtext">{line.repeat(8)}</div>
    </aside>
  );
}

function Instruments() {
  // Thin strip directly under the tape: scroll progress + cursor X/Y.
  const [pct, setPct] = React.useState(0);
  const [xy, setXy] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onScroll = () => {
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? (el.scrollTop / max) * 100 : 0;
      setPct(p);
    };
    const onMove = (e) => setXy({ x: e.clientX | 0, y: e.clientY | 0 });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const pad = (n, w=4) => String(n).padStart(w, "0");

  return (
    <div className="instruments" aria-hidden="true">
      <div className="instr-bar">
        <span className="instr-label">SCROLL</span>
        <div className="instr-track"><div className="instr-fill" style={{ width: pct + "%" }} /></div>
        <span className="instr-value">{pad(Math.round(pct), 3)}%</span>
      </div>
      <div className="instr-coord">
        <span className="instr-label">CURSOR</span>
        <span className="instr-value">X:{pad(xy.x)} · Y:{pad(xy.y)}</span>
      </div>
    </div>
  );
}

function CopyToast() {
  // Tiny "COPIED" pill triggered by a global event.
  const [msg, setMsg] = React.useState(null);
  React.useEffect(() => {
    const handler = (e) => {
      setMsg(e.detail || "COPIED");
      clearTimeout(window.__copyTimer);
      window.__copyTimer = setTimeout(() => setMsg(null), 1400);
    };
    window.addEventListener("dwx:copied", handler);
    // Delegate copy clicks
    const onClick = async (e) => {
      const btn = e.target.closest("[data-copy]");
      if (!btn) return;
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        window.dispatchEvent(new CustomEvent("dwx:copied", { detail: "COPIED · " + btn.dataset.copy }));
      } catch {}
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("dwx:copied", handler);
      document.removeEventListener("click", onClick);
    };
  }, []);

  if (!msg) return null;
  return <div className="copy-toast" role="status">{msg}</div>;
}

window.Perforation = Perforation;
window.RollGutter = RollGutter;
window.Instruments = Instruments;
window.CopyToast = CopyToast;
