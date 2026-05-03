import { PROFILE } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const headline = useReveal<HTMLHeadingElement>();

  return (
    <section className="contact" id="contact">
      <div className="section-label">
        <span className="section-num">05</span>
        <span>Get in Touch</span>
      </div>

      <h2
        ref={headline.ref}
        className={`contact-headline reveal ${headline.visible ? "visible" : ""}`}
      >
        Let's build
        <br />
        something <span className="it">good</span>
        <span className="dot">.</span>
      </h2>

      <div className="contact-grid">
        <div>
          <div className="contact-col-label mono">Email — Best Way</div>
          <a className="contact-link" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </div>
        <div>
          <div className="contact-col-label mono">Phone</div>
          <a className="contact-link" href={`tel:${PROFILE.phoneTel}`}>
            {PROFILE.phone}
          </a>
        </div>
        <div>
          <div className="contact-col-label mono">LinkedIn</div>
          <a
            className="contact-link"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PROFILE.linkedinHandle}
          </a>
        </div>
        <div>
          <div className="contact-col-label mono">GitHub</div>
          <a
            className="contact-link"
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PROFILE.githubHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
