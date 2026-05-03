import { PROFILE } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { useLocalTime } from "../hooks/useLocalTime";

export function Hero() {
  const time = useLocalTime(PROFILE.timeZone);

  const meta = useReveal<HTMLDivElement>();
  const name = useReveal<HTMLHeadingElement>();
  const tag = useReveal<HTMLDivElement>();

  const yearsCoding = new Date().getFullYear() - PROFILE.startedCodingYear;

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div
          ref={meta.ref}
          className={`hero-meta reveal ${meta.visible ? "visible" : ""}`}
        >
          <div className="meta-block">
            <span className="mono">Name</span>
            <span className="val">{PROFILE.name}</span>
          </div>
          <div className="meta-block">
            <span className="mono">Role</span>
            <span className="val">{PROFILE.role}</span>
          </div>
          <div className="meta-block">
            <span className="mono">Based in</span>
            <span className="val">
              {PROFILE.location} · <span className="dim">{time} WAT</span>
            </span>
          </div>
          <div className="meta-block">
            <span className="mono">Status</span>
            <span className="val accent">{PROFILE.status}</span>
          </div>
        </div>

        <h1
          ref={name.ref}
          className={`hero-name reveal reveal-delay-1 ${
            name.visible ? "visible" : ""
          }`}
        >
          Emmanuel
          <br />
          <span className="it">Danladi</span>
          <span className="dot">.</span>
        </h1>

        <div
          ref={tag.ref}
          className={`hero-tagline reveal reveal-delay-2 ${
            tag.visible ? "visible" : ""
          }`}
        >
          <p className="hero-tagline-text">
            A founding <span className="accent">Front End Engineer</span>{" "}
            building Web3 interfaces, with a side practice in graphics design,
            typesetting, and custom PC builds.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="val">{String(yearsCoding).padStart(2, "0")}</div>
              <div className="label">Years coding</div>
            </div>
            <div className="stat">
              <div className="val">13</div>
              <div className="label">Public repos</div>
            </div>
            <div className="stat">
              <div className="val">∞</div>
              <div className="label">PCs built</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
