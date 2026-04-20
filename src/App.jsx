import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import RewardsPage from "./pages/RewardsPage";
import GamesPage from "./pages/GamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:slug" element={<GameDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
