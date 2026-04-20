import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/rewards", label: "Rewards" },
  { to: "/games", label: "Games" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" }
];

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="brand" aria-label="ArcadeNova Home">
          <span className="brand__mark" />
          <span>ArcadeNova</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="desktop-nav__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "desktop-nav__link is-active" : "desktop-nav__link"
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <NavLink to="/games" className="button button--ghost">
            Explore games
          </NavLink>

          <button
            className="burger"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} items={navItems} />
    </header>
  );
}

export default Header;
