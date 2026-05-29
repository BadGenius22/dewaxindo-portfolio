export function RollGutter() {
  const line = " · ROLL №003 · DEWAXINDO · MMXXVI · FORGE EDITION · ";
  return (
    <aside className="roll-gutter" aria-hidden="true">
      <div className="roll-vtext">{line.repeat(8)}</div>
    </aside>
  );
}
