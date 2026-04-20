import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="section page-top">
      <div className="container empty-state">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>Маршрут не знайдено. Повернися на головну або відкрий каталог.</p>
        <div className="empty-state__actions">
          <Link className="button button--primary" to="/">
            Home
          </Link>
          <Link className="button button--ghost" to="/games">
            Games
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
