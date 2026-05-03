export function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <div className="masthead-left">
          <span className="masthead-brand">EDANTE</span>
          <span className="hide-sm" style={{ color: "var(--ink-faint)" }}>
            /
          </span>
          <span className="hide-sm" style={{ color: "var(--ink-dim)" }}>
            VOL. 01 — PORTFOLIO
          </span>
        </div>
        <div className="masthead-right">
          <a className="nav-link" href="#work">
            Work
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#stack">
            Stack
          </a>
          <span className="live hide-sm">Available</span>
        </div>
      </div>
    </header>
  );
}
