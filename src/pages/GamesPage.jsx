import { useMemo, useState } from "react";
import SectionIntro from "../components/ui/SectionIntro";
import GameCard from "../components/cards/GameCard";
import { games, genres } from "../data/games";
import { filterGames } from "../utils/filterGames";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function GamesPage() {
  const [search, setSearch] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const revealRef = useRevealOnScroll();

  const filteredGames = useMemo(
    () => filterGames(games, search, activeGenre),
    [search, activeGenre]
  );

  return (
    <section className="section page-top reveal" ref={revealRef}>
      <div className="container">
        <SectionIntro
          eyebrow="Games catalog"
          title="Filtering and search"
          description="Сторінка демонструє catalog-style UX з пошуком, фільтрацією та reusable cards."
        />

        <div className="catalog-toolbar" role="search">
          <label className="search-field">
            <span className="sr-only">Search games</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by title or feature"
            />
          </label>

          <div className="genre-tabs" aria-label="Filter by genre">
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                className={genre === activeGenre ? "genre-tabs__button is-active" : "genre-tabs__button"}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <p className="catalog-count">Found: {filteredGames.length}</p>

        <div className="cards-grid">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesPage;
