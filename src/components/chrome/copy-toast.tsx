"use client";

import * as React from "react";

declare global {
  interface WindowEventMap {
    "dwx:copied": CustomEvent<string>;
  }
}

export function CopyToast() {
  const [msg, setMsg] = React.useState<string | null>(null);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setMsg(detail || "COPIED");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setMsg(null), 1400);
    };
    window.addEventListener("dwx:copied", handler);

    const onClick = async (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const btn = target.closest<HTMLElement>("[data-copy]");
      if (!btn) return;
      const text = btn.dataset.copy;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        window.dispatchEvent(
          new CustomEvent("dwx:copied", { detail: "COPIED · " + text })
        );
      } catch {
        // clipboard unavailable - silently ignore
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("dwx:copied", handler);
      document.removeEventListener("click", onClick);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!msg) return null;
  return (
    <div className="copy-toast" role="status">
      {msg}
    </div>
  );
}
