import { DISCIPLINES } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const prose = useReveal<HTMLDivElement>();
  const list = useReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="section-label">
        <span className="section-num">03</span>
        <span>About</span>
      </div>

      <div className="about-grid">
        <div
          ref={prose.ref}
          className={`about-prose reveal ${prose.visible ? "visible" : ""}`}
        >
          <p>
            I'm a frontend developer who came in through the side door
            graphics design and typesetting first, then hardware, then code.{" "}
            <span className="accent">Multi-disciplinary</span> isn't a buzzword
            on my CV; it's how I actually think.
          </p>
          <p>
            I care about the small things. The kerning on a button. The exact
            ease curve on a hover. The moment a page loads and something feels
            alive. That's the work.
          </p>
          <p className="small">
            Computer Science B.Tech, Federal University of Technology Minna
            (2018–2024). Board member at ToonStack Inc. Open to full-time and
            contract work including Web3, design-led startups, and product teams that
            take craft seriously.
          </p>
        </div>

        <div
          ref={list.ref}
          className={`disciplines reveal reveal-delay-1 ${
            list.visible ? "visible" : ""
          }`}
        >
          <div className="disciplines-label mono">Practices · 04</div>
          {DISCIPLINES.map((d) => (
            <div key={d.num} className="discipline">
              <span className="discipline-name">
                {d.name && <>{d.name} </>}
                <span className="it">{d.italic}</span>
              </span>
              <span className="discipline-num">{d.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
