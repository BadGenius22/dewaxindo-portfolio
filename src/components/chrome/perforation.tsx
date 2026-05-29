interface PerforationProps {
  label?: string;
}

export function Perforation({ label }: PerforationProps) {
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
