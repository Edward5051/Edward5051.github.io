import { MARQUEE_ITEMS } from "../data/portfolio";

export function Marquee() {
  // Duplicate the list so the loop is seamless
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
