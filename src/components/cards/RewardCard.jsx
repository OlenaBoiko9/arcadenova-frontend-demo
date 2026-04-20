function RewardCard({ reward }) {
  return (
    <article className="reward-card">
      <span className="reward-card__badge">{reward.badge}</span>
      <h3>{reward.title}</h3>
      <p>{reward.description}</p>
    </article>
  );
}

export default RewardCard;
