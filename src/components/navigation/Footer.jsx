import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <section>
          <h2 className="footer__title">ArcadeNova</h2>
          <p className="footer__text">
            Демонстраційний multipage frontend-проєкт для портфоліо.
          </p>
        </section>

        <section>
          <h2 className="footer__title">Pages</h2>
          <ul className="footer__list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/rewards">Rewards</NavLink></li>
            <li><NavLink to="/games">Games</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
          </ul>
        </section>

        <section>
          <h2 className="footer__title">Tech stack</h2>
          <p className="footer__text">React · SCSS · Vanilla browser APIs · Vite</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
