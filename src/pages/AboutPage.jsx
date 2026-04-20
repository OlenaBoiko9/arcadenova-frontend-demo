import SectionIntro from "../components/ui/SectionIntro";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function AboutPage() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="section page-top reveal" ref={revealRef}>
      <div className="container">
        <SectionIntro
          eyebrow="About the project"
          title="How this demo maps to the vacancy"
          description="Ця сторінка допомагає пояснити рекрутеру або HR, чому проєкт релевантний саме під junior frontend роль."
        />

        <div className="content-grid">
          <article className="content-card">
            <h3>HTML5 / semantics</h3>
            <p>Структура сторінок побудована через semantic layout і читабельну ієрархію секцій.</p>
          </article>
          <article className="content-card">
            <h3>SCSS</h3>
            <p>Є variables, mixins, component blocks і responsive helpers для масштабування стилів.</p>
          </article>
          <article className="content-card">
            <h3>React</h3>
            <p>Маршрути, state, props, reusable components, detail route та catalog UX.</p>
          </article>
          <article className="content-card">
            <h3>Native APIs / vanilla JS</h3>
            <p>IntersectionObserver, requestAnimationFrame, localStorage, event listeners і matchMedia.</p>
          </article>
          <article className="content-card">
            <h3>Figma workflow</h3>
            <p>Такий проєкт легко прив’язати до реального макета через grid, spacing та components review.</p>
          </article>
          <article className="content-card">
            <h3>Multipage thinking</h3>
            <p>Сайт має кілька сценаріїв входу, окремі сторінки і зрозумілий шлях між ними.</p>
          </article>
        </div>

        <div className="note-box">
          <h3>Що сказати на співбесіді</h3>
          <p>
            Я зробила демо-проєкт під вакансію: багатосторінкова структура, адаптивність, SCSS,
            React Router, semantic HTML і базова логіка на native browser APIs. Це дозволяє показати
            не лише верстку, а й підхід до компонентної архітектури і UX.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
