import SectionIntro from "../components/ui/SectionIntro";
import FaqAccordion from "../components/faq/FaqAccordion";
import { faqItems } from "../data/faq";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function FaqPage() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="section page-top reveal" ref={revealRef}>
      <div className="container faq-layout">
        <SectionIntro
          eyebrow="FAQ page"
          title="Accordion component"
          description="Ще один приклад reusable component для багатосторінкового сайту."
        />
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}

export default FaqPage;
