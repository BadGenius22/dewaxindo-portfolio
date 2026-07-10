// v4 — Frame — copy toast only. The roll gutter, instruments strip and
// perforated dividers from v3 were retired for a quieter page.

function CopyToast() {
  const [msg, setMsg] = React.useState(null);
  React.useEffect(() => {
    const handler = (e) => {
      setMsg(e.detail || "COPIED");
      clearTimeout(window.__copyTimer);
      window.__copyTimer = setTimeout(() => setMsg(null), 1400);
    };
    window.addEventListener("dwx:copied", handler);
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

window.CopyToast = CopyToast;
