import SectionIntro from "../components/ui/SectionIntro";
import RewardCard from "../components/cards/RewardCard";
import { rewards } from "../data/rewards";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function RewardsPage() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="section page-top reveal" ref={revealRef}>
      <div className="container">
        <SectionIntro
          eyebrow="Rewards page"
          title="Reusable promo and retention components"
          description="Сторінка показує, як можна будувати content-first модулі для multipage UI."
        />

        <div className="reward-grid">
          {rewards.map((reward) => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </div>

        <div className="split-banner">
          <div>
            <p className="eyebrow">UX idea</p>
            <h3>Short, visible and easy-to-scan reward blocks</h3>
            <p>
              Такий формат добре підходить для сторінок з промо-пропозиціями, retention-модулями
              або акційними картками.
            </p>
          </div>
          <div className="split-banner__badge">SCSS + semantic layout</div>
        </div>
      </div>
    </section>
  );
}

export default RewardsPage;
