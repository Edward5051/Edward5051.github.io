import { WORK, type WorkItem } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

function WorkRow({ item }: { item: WorkItem }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      className={`work-row reveal ${visible ? "visible" : ""}`}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="work-num">{item.num}</span>
      <span className="work-name">
        {item.name && <>{item.name} </>}
        <span className="it">{item.italic}</span>
      </span>
      <span className="work-tech">{item.tech}</span>
      <span className="work-year">{item.year}</span>
      <span className="work-arrow">↗</span>
    </a>
  );
}

export function SelectedWork() {
  return (
    <section id="work">
      <div className="section-label">
        <span className="section-num">02</span>
        <span>Selected Work — A Loose Anthology</span>
      </div>

      <div className="work-list">
        {WORK.map((item) => (
          <WorkRow key={item.num} item={item} />
        ))}
      </div>
    </section>
  );
}
