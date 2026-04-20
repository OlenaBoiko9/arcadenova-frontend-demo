function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "section-intro section-intro--centered" : "section-intro"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionIntro;
