import { BIDA_STACK } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export function CurrentlyBuilding() {
  const title = useReveal<HTMLHeadingElement>();
  const detail = useReveal<HTMLDivElement>();

  return (
    <section className="now" id="now">
      <div className="section-label">
        <span className="section-num">01</span>
        <span>Currently Building</span>
      </div>

      <div className="now-grid">
        <div>
          <h2
            ref={title.ref}
            className={`now-title reveal ${title.visible ? "visible" : ""}`}
          >
            BIDA<span className="stamp">Live</span>
          </h2>
        </div>

        <div
          ref={detail.ref}
          className={`now-detail reveal reveal-delay-1 ${
            detail.visible ? "visible" : ""
          }`}
        >
          <div className="now-role">Founding Front End Engineer</div>
          <p className="now-desc">
            A decentralized blockchain platform bridging real-world assets
            real estate, vehicles, luxury items with on-chain ownership
            through tokenization, fractional crowdfunding, and live raffle
            auctions.
          </p>
          <div className="now-meta">
            <div className="now-meta-item">
              <span className="mono">Company</span>
              <span className="val">Thor Network Inc.</span>
            </div>
            <div className="now-meta-item">
              <span className="mono">Since</span>
              <span className="val">December 2025</span>
            </div>
            <div className="now-meta-item">
              <span className="mono">Stage</span>
              <span className="val">MVP / Token launch</span>
            </div>
            <div className="now-meta-item">
              <span className="mono">Domain</span>
              <span className="val">bida.finance</span>
            </div>
          </div>
          <div className="stack-pills">
            {BIDA_STACK.map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
