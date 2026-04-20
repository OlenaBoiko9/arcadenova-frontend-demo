import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import SectionIntro from "../components/ui/SectionIntro";
import StatsRow from "../components/ui/StatsRow";
import GameCard from "../components/cards/GameCard";
import RewardCard from "../components/cards/RewardCard";
import FaqAccordion from "../components/faq/FaqAccordion";
import { games } from "../data/games";
import { rewards } from "../data/rewards";
import { faqItems } from "../data/faq";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function HomePage() {
  const featuresRef = useRevealOnScroll();
  const gamesRef = useRevealOnScroll();
  const faqRef = useRevealOnScroll();

  return (
    <>
      <HeroSection />

      <section className="section">
        <div className="container">
          <StatsRow />
        </div>
      </section>

      <section className="section reveal" ref={featuresRef}>
        <div className="container">
          <SectionIntro
            eyebrow="Why this project works"
            title="Built to mirror a real junior frontend take-home direction"
            description="Код побудований так, щоб показати верстку, адаптивність, роботу зі станом, базові анімації та логіку multipage-UI."
          />

          <div className="feature-grid">
            <article className="feature-card">
              <h3>Semantic HTML</h3>
              <p>Чітка структура через header, nav, main, section, article, footer.</p>
            </article>
            <article className="feature-card">
              <h3>SCSS architecture</h3>
              <p>Змінні, міксини, компоненти та responsive helpers для масштабованості.</p>
            </article>
            <article className="feature-card">
              <h3>Responsive UX</h3>
              <p>Mobile-first верстка, меню, sticky CTA та комфортні tap targets.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section reveal" ref={gamesRef}>
        <div className="container">
          <SectionIntro
            eyebrow="Catalog preview"
            title="Selected games"
            description="На сторінці Games є пошук і фільтрація за жанрами."
          />

          <div className="cards-grid">
            {games.slice(0, 3).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="section__cta">
            <Link to="/games" className="button button--primary">
              Open full catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionIntro
            eyebrow="Retention blocks"
            title="Reward modules"
            description="Ці блоки показують підхід до продуманих content components і product-style retention UI."
          />

          <div className="reward-grid">
            {rewards.map((reward) => (
              <RewardCard key={reward.id} reward={reward} />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" ref={faqRef}>
        <div className="container faq-layout">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions an interviewer may ask"
            description="На співбесіді ти можеш показати цю сторінку як приклад компонента accordion і структурованого контенту."
          />
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}

export default HomePage;
