import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <article className={`game-card game-card--${game.accent}`}>
      <div className="game-card__visual" aria-label={game.imageLabel}>
        <span className="game-card__tag">{game.tag}</span>
      </div>

      <div className="game-card__content">
        <header className="game-card__header">
          <div>
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
          </div>
          <div className="game-card__meta">
            <span>★ {game.rating}</span>
            <span>{game.players}</span>
          </div>
        </header>

        <p className="game-card__description">{game.description}</p>

        <ul className="game-card__features">
          {game.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="game-card__actions">
          <Link className="button button--primary" to={`/games/${game.slug}`}>
            Open details
          </Link>
          <Link className="button button--ghost" to="/faq">
            Learn more
          </Link>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
