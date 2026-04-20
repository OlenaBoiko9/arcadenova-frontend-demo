import { useEffect, useState } from "react";
import { animateCounter, prefersReducedMotion } from "../../utils/domEffects";

const stats = [
  { label: "Reusable components", value: 12, suffix: "+" },
  { label: "Pages in the demo", value: 6, suffix: "" },
  { label: "Native browser APIs", value: 4, suffix: "" }
];

function StatsRow() {
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValues(stats.map((item) => item.value));
      return;
    }

    stats.forEach((item, index) => {
      animateCounter(0, item.value, 900 + index * 180, (nextValue) => {
        setValues((prev) => {
          const copy = [...prev];
          copy[index] = nextValue;
          return copy;
        });
      });
    });
  }, []);

  return (
    <div className="stats-row" aria-label="Project stats">
      {stats.map((item, index) => (
        <article className="stat-card" key={item.label}>
          <strong>
            {values[index]}
            {item.suffix}
          </strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}

export default StatsRow;
