export function filterGames(games, search, genre) {
  const normalizedSearch = search.trim().toLowerCase();

  return games.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(normalizedSearch) ||
      game.description.toLowerCase().includes(normalizedSearch);

    const matchesGenre = genre === "All" || game.genre === genre;

    return matchesSearch && matchesGenre;
  });
}
