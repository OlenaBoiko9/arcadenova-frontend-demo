import { NavLink } from "react-router-dom";

function MobileMenu({ menuOpen, setMenuOpen, items }) {
  return (
    <div className={menuOpen ? "mobile-menu is-open" : "mobile-menu"}>
      <nav className="mobile-menu__panel" aria-label="Mobile navigation">
        <ul className="mobile-menu__list">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="mobile-menu__link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/rewards" className="button button--primary" onClick={() => setMenuOpen(false)}>
          View rewards
        </NavLink>
      </nav>
    </div>
  );
}

export default MobileMenu;
