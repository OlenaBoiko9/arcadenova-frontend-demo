export const games = [
  {
    id: 1,
    slug: "neon-rush",
    title: "Neon Rush",
    genre: "Arcade",
    rating: "4.8",
    players: "12k+",
    tag: "Trending",
    accent: "violet",
    description:
      "Швидка arcade-гра з акцентом на реакцію, бонусні місії та яскраві neon-анімації.",
    features: ["Fast sessions", "Daily rewards", "Touch-friendly UI"],
    imageLabel: "Neon energy grid artwork"
  },
  {
    id: 2,
    slug: "sky-raid",
    title: "Sky Raid",
    genre: "Action",
    rating: "4.7",
    players: "8k+",
    tag: "Competitive",
    accent: "blue",
    description:
      "Динамічний sci-fi action досвід з короткими сесіями, missions та ranked progression.",
    features: ["Short rounds", "Leaderboards", "Season missions"],
    imageLabel: "Sky battle artwork"
  },
  {
    id: 3,
    slug: "pixel-quest",
    title: "Pixel Quest",
    genre: "Adventure",
    rating: "4.9",
    players: "15k+",
    tag: "Editors pick",
    accent: "green",
    description:
      "Adventure-проєкт з pixel-естетикою, прогресією рівнів та колекційними challenge-блоками.",
    features: ["Progress save", "Challenges", "Story maps"],
    imageLabel: "Retro pixel landscape"
  },
  {
    id: 4,
    slug: "nova-drift",
    title: "Nova Drift",
    genre: "Racing",
    rating: "4.6",
    players: "6k+",
    tag: "New",
    accent: "orange",
    description:
      "Мобільно-орієнтований racing UI з короткими заїздами, unlock-системою та seasonal rewards.",
    features: ["Responsive controls", "Unlockables", "Quick onboarding"],
    imageLabel: "Futuristic racing lane"
  },
  {
    id: 5,
    slug: "mythic-arena",
    title: "Mythic Arena",
    genre: "Strategy",
    rating: "4.8",
    players: "9k+",
    tag: "Top pick",
    accent: "red",
    description:
      "Strategy-гра з турнірними списками, build-комбінаціями та глибшим multi-step UX.",
    features: ["Tactical battles", "Meta builds", "Tournament pages"],
    imageLabel: "Arena strategy scene"
  },
  {
    id: 6,
    slug: "echo-ops",
    title: "Echo Ops",
    genre: "Shooter",
    rating: "4.5",
    players: "5k+",
    tag: "Live event",
    accent: "cyan",
    description:
      "Командний shooter з live-івентами, battle passes та дашбордом активності гравця.",
    features: ["Live events", "Session resume", "Clan widgets"],
    imageLabel: "Digital tactical interface"
  }
];

export const genres = ["All", ...new Set(games.map((game) => game.genre))];
