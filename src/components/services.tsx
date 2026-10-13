import { Bot, Palette, Plug, Rocket } from "lucide-react";

const services = [
  {
    icon: Rocket,
    number: "01",
    title: "MVP за неделю",
    description:
      "Собираю рабочий MVP за 7 дней — от идеи и прототипа до продукта в проде. Правки и новые фичи добавляю прямо в процессе, без многонедельных спринтов.",
    result: "Первый продукт в проде уже через неделю",
  },
  {
    icon: Bot,
    number: "02",
    title: "AI-автоматизация",
    description:
      "Подключаю LLM и автой к вашим процессам: отчёты, ответы клиентов и рутинные задачи выполняются без участия человека. Каждый сценарий строю на проверяемых шагах с логами.",
    result: "−80% ручных операций",
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX с вайбкодингом",
    description:
      "Превращаю референсы и идеи в аккуратные интерфейсы прямо во время генерации. Дизайн-система, типографика и адаптив — часть процесса, а не надстройка после.",
    result: "Консистентный интерфейс на всех экранах",
  },
  {
    icon: Plug,
    number: "04",
    title: "Интеграции",
    description:
      "Связываю CRM, платежи, Telegram и аналитику в один рабочий контур. Данные ходят между сервисами автоматически, без дублей и ручного переноса.",
    result: "Все инструменты работают как единое целое",
  },
] as const;

export function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-inner">
        <header className="services-header">
          <div className="section-eyebrow">
            <span /> ЧТО Я ДЕЛАЮ
          </div>
          <h2 id="services-title">
            Четыре <span>направления</span>
          </h2>
          <p>
            От быстрого MVP до автоматизации и интеграций — довожу идею до работающего продукта.
          </p>
        </header>

        <div className="services-grid">
          {services.map(({ icon: Icon, number, title, description, result }) => (
            <article key={title} className="service-card">
              <div className="service-top">
                <span className="service-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="service-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p className="service-desc">{description}</p>
              <div className="service-result">
                <span>ВЫГОДА</span>
                <b>{result}</b>
              </div>
            </article>
          ))}
        </div>

        <div className="section-end">
          <span>ВАЙБКОДИНГ · AI · ИНТЕГРАЦИИ</span>
          <span>04 НАПРАВЛЕНИЯ</span>
        </div>
      </div>
    </section>
  );
}
