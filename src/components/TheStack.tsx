import { STACK_GRID } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { Marquee } from "./Marquee";

export function TheStack() {
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="stack" style={{ paddingBottom: 0 }}>
      <div className="section-label">
        <span className="section-num">04</span>
        <span>The Stack</span>
      </div>

      <div
        ref={grid.ref}
        className={`stack-grid reveal ${grid.visible ? "visible" : ""}`}
      >
        {STACK_GRID.map((cell) => (
          <div key={cell.cat} className="stack-cell">
            <div className="cat">{cell.cat}</div>
            <div className="items">
              {cell.items.map((item, i) => (
                <span key={i} className={item.italic ? "it" : ""}>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Marquee />
    </section>
  );
}
