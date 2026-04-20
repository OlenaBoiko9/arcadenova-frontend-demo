const RECENT_GAMES_KEY = "arcadenova_recent_games";
const CONSENT_KEY = "arcadenova_consent";

export function getRecentGames() {
  const raw = localStorage.getItem(RECENT_GAMES_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveRecentGame(game) {
  const current = getRecentGames();
  const filtered = current.filter((item) => item.slug !== game.slug);
  const next = [game, ...filtered].slice(0, 3);
  localStorage.setItem(RECENT_GAMES_KEY, JSON.stringify(next));
  return next;
}

export function getConsentState() {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export function saveConsentState() {
  localStorage.setItem(CONSENT_KEY, "accepted");
}
