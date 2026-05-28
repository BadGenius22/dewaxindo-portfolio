"use client";

import * as React from "react";

const pad = (n: number, w = 4) => String(n).padStart(w, "0");

export function Instruments() {
  const [pct, setPct] = React.useState(0);
  const [xy, setXy] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onScroll = () => {
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? (el.scrollTop / max) * 100 : 0;
      setPct(p);
    };
    const onMove = (e: MouseEvent) => setXy({ x: e.clientX | 0, y: e.clientY | 0 });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="instruments" aria-hidden="true">
      <div className="instr-bar">
        <span className="instr-label">SCROLL</span>
        <div className="instr-track">
          <div className="instr-fill" style={{ width: pct + "%" }} />
        </div>
        <span className="instr-value">{pad(Math.round(pct), 3)}%</span>
      </div>
      <div className="instr-coord">
        <span className="instr-label">CURSOR</span>
        <span className="instr-value">
          X:{pad(xy.x)} · Y:{pad(xy.y)}
        </span>
      </div>
    </div>
  );
}
