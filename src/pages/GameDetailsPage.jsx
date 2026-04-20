import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { games } from "../data/games";
import { getRecentGames, saveRecentGame } from "../utils/storage";

function GameDetailsPage() {
  const { slug } = useParams();
  const [recentGames, setRecentGames] = useState([]);
  const game = useMemo(() => games.find((item) => item.slug === slug), [slug]);

  useEffect(() => {
    setRecentGames(getRecentGames());
  }, []);

  useEffect(() => {
    if (!game) return;
    const next = saveRecentGame({
      slug: game.slug,
      title: game.title,
      genre: game.genre
    });
    setRecentGames(next);
  }, [game]);

  if (!game) {
    return (
      <section className="section page-top">
        <div className="container empty-state">
          <h1>Game not found</h1>
          <p>Схоже, такого slug немає в даних проєкту.</p>
          <Link to="/games" className="button button--primary">
            Return to catalog
          </Link>
        </div>
      </section>
    );
  }

  const relatedGames = games.filter((item) => item.slug !== game.slug).slice(0, 3);

  return (
    <section className="section page-top">
      <div className="container">
        <article className="details-hero">
          <div className={`details-hero__visual details-hero__visual--${game.accent}`}>
            <span>{game.imageLabel}</span>
          </div>

          <div className="details-hero__content">
            <p className="eyebrow">{game.genre}</p>
            <h1>{game.title}</h1>
            <p>{game.description}</p>

            <ul className="details-meta">
              <li>Rating: {game.rating}</li>
              <li>Players: {game.players}</li>
              <li>Tag: {game.tag}</li>
            </ul>

            <div className="details-actions">
              <Link to="/faq" className="button button--primary">
                Review UI patterns
              </Link>
              <Link to="/games" className="button button--ghost">
                Back to catalog
              </Link>
            </div>
          </div>
        </article>

        <section className="section section--compact">
          <div className="details-grid">
            <article className="details-panel">
              <h2>Feature list</h2>
              <ul className="feature-list">
                {game.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>

            <article className="details-panel">
              <h2>Why this page matters</h2>
              <p>
                Вона показує route params, роботу з localStorage та структуру detail page — це
                хороший приклад для співбесіди на тему multipage UI.
              </p>
            </article>
          </div>
        </section>

        <section className="section section--compact">
          <h2 className="subheading">Recently viewed</h2>
          <div className="mini-grid">
            {recentGames.map((item) => (
              <article className="mini-card" key={item.slug}>
                <strong>{item.title}</strong>
                <span>{item.genre}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--compact">
          <h2 className="subheading">Related cards</h2>
          <div className="mini-grid">
            {relatedGames.map((item) => (
              <Link className="mini-card" to={`/games/${item.slug}`} key={item.slug}>
                <strong>{item.title}</strong>
                <span>{item.genre}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default GameDetailsPage;
