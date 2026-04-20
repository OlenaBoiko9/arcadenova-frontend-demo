import { useState } from "react";

function FaqAccordion({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null);

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = item.id === activeId;

        return (
          <article className={isOpen ? "faq-item is-open" : "faq-item"} key={item.id}>
            <button
              type="button"
              className="faq-item__button"
              aria-expanded={isOpen}
              onClick={() => setActiveId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span>{isOpen ? "–" : "+"}</span>
            </button>

            <div className="faq-item__content">
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
