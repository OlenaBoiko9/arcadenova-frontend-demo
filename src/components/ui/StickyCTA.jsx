import { Link, useLocation } from "react-router-dom";

function StickyCTA() {
  const location = useLocation();

  if (location.pathname === "/games") {
    return (
      <div className="sticky-cta">
        <div className="container sticky-cta__inner">
          <p>Find a game card, open the details page and inspect the UX flow.</p>
          <Link className="button button--primary" to="/games">
            Filter catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky-cta">
      <div className="container sticky-cta__inner">
        <p>Portfolio-ready demo with multipage structure and SCSS architecture.</p>
        <Link className="button button--primary" to="/games">
          Open demo catalog
        </Link>
      </div>
    </div>
  );
}

export default StickyCTA;
