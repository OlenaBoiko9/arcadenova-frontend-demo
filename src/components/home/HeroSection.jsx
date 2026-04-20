import { Link } from "react-router-dom";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function HeroSection() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="hero reveal" ref={revealRef}>
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Frontend portfolio demo</p>
          <h1>Multipage React showcase with SCSS, responsive UI and conversion-friendly structure.</h1>
          <p className="hero__text">
            Проєкт побудований як showcase під вакансію: семантика, багатосторінкова структура,
            reusable components, mobile-first і native browser APIs.
          </p>
          <div className="hero__actions">
            <Link to="/games" className="button button--primary">
              Explore demo
            </Link>
            <Link to="/about" className="button button--ghost">
              See tech details
            </Link>
          </div>
        </div>

        <aside className="hero__visual" aria-label="Gaming dashboard preview">
          <div className="hero-panel hero-panel--main">
            <span className="hero-panel__label">Responsive UI</span>
            <strong>6 pages</strong>
            <p>Desktop / Tablet / Mobile flow with clear CTA structure.</p>
          </div>
          <div className="hero-panel hero-panel--secondary">
            <span className="hero-panel__label">Vanilla browser APIs</span>
            <strong>Observer + Storage</strong>
            <p>Scroll reveal, recently viewed, counters and sticky action blocks.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
