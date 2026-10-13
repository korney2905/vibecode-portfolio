import { ArrowRight, Bot, ChartNoAxesCombined, Layers } from "lucide-react";
import brickWall from "@/assets/brick-wall.jpg";

const projects = [
  {
    name: "Голосовые и чат-боты TWIN",
    category: "AI · Агенты",
    description:
      "Виртуальный сотрудник на базе TWIN: принимает звонки, отвечает в мессенджерах и записывает клиентов.",
    technologies: ["TWIN", "OpenAI", "Telegram · WhatsApp", "REST API"],
    theme: "twin",
    number: "01",
  },
  {
    name: "НейроАналитик",
    category: "AI · АНАЛИТИКА",
    description:
      "AI-сервис для анализа данных. Превращает сложные таблицы в понятные выводы и наглядные отчёты.",
    technologies: ["Python", "React", "OpenAI", "Pandas"],
    theme: "analytics",
    number: "02",
  },
  {
    name: "LaunchPro",
    category: "WEB · ЛЕНДИНГ",
    description:
      "Лендинг для запуска продукта. Выразительный дизайн, чёткая структура и фокус на конверсии.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    theme: "launch",
    number: "03",
  },
] as const;

function ProjectPreview({ theme }: { theme: (typeof projects)[number]["theme"] }) {
  return (
    <div
      className={`project-preview preview-${theme}`}
      aria-label={`Концепт интерфейса ${theme === "twin" ? "ботов TWIN" : theme === "analytics" ? "НейроАналитик" : "LaunchPro"}`}
      role="img"
    >
      <div className="preview-browser">
        <span />
        <span />
        <span />
        <div className="preview-address">
          {theme === "twin"
            ? "twin-bot.app"
            : theme === "analytics"
              ? "neuroanalytics.ai"
              : "launchpro.site"}
        </div>
      </div>
      {theme === "twin" ? (
        <div className="twin-ui">
          <div className="twin-header">
            <span className="twin-avatar">
              <Bot size={13} />
            </span>
            <div>
              <b>Ассистент TWIN</b>
              <em>
                <i /> Онлайн
              </em>
            </div>
          </div>
          <div className="twin-chat">
            <span className="twin-day">Сегодня</span>
            <div className="twin-msg bot">
              <span className="twin-avatar mini">
                <Bot size={9} />
              </span>
              <p>Здравствуйте! Записать вас на завтра в 15:00?</p>
            </div>
            <div className="twin-msg user">
              <p>Да, подходит.</p>
            </div>
            <div className="twin-msg bot">
              <span className="twin-avatar mini">
                <Bot size={9} />
              </span>
              <p>Записано ✓. Ждём вас завтра с 14:45.</p>
            </div>
            <div className="twin-quick">
              <span>Повторить запись</span>
              <span>Изменить время</span>
            </div>
          </div>
          <div className="twin-input">
            <span>Напишите сообщение…</span>
            <span className="twin-send">➤</span>
          </div>
        </div>
      ) : theme === "analytics" ? (
        <div className="analytics-ui">
          <div className="mini-brand">
            <ChartNoAxesCombined size={13} /> НейроАналитик <span>Обзор</span>
          </div>
          <div className="analytics-stats">
            <div>
              <span>Выручка</span>
              <b>₽ 842 500</b>
            </div>
            <div>
              <span>Рост за месяц</span>
              <b>+24,8%</b>
            </div>
            <div>
              <span>Конверсия</span>
              <b>8,4%</b>
            </div>
          </div>
          <div className="chart-header">
            Динамика показателей <span>Последние 7 месяцев</span>
          </div>
          <div className="bar-chart">
            {[32, 48, 42, 66, 58, 79, 94].map((height, index) => (
              <div key={height} className={`chart-bar bar-${index}`}>
                <span />
                <small>{["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"][index]}</small>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="launch-ui">
          <div className="mini-brand">
            launchpro
            <span>
              Продукт{"\u3000"} Возможности{"\u3000"} ↗
            </span>
          </div>
          <div className="launch-orbit">
            <Layers size={34} />
          </div>
          <div className="launch-pill">ТВОЯ ИДЕЯ. НОВЫЙ УРОВЕНЬ.</div>
          <strong>
            Большие идеи.
            <br />
            Яркий запуск.
          </strong>
          <p>Всё, что нужно для следующего шага.</p>
          <div className="launch-cta">
            Начать сейчас <span>↗</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="featured-section" id="projects" aria-labelledby="featured-title">
      <img className="brick-background" src={brickWall} alt="" width={1536} height={1024} />
      <div className="featured-inner">
        <header className="featured-header">
          <div className="section-eyebrow">
            <span /> ОТ ИДЕИ ДО ПРОДУКТА
          </div>
          <h1 id="featured-title">
            Избранные <span>проекты</span>
          </h1>
          <p>Идеи, которые стали работающими цифровыми продуктами.</p>
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className={`project-card card-${project.theme}`}>
              <ProjectPreview theme={project.theme} />
              <div className="project-details">
                <div className="project-category">
                  {project.category}
                  <span>{project.number}</span>
                </div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <ul className="technology-tags" aria-label="Технологии">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a
                  className="project-more"
                  href="#"
                  aria-disabled="true"
                  onClick={(event) => event.preventDefault()}
                >
                  Детальнее <ArrowRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="section-end">
          <span>СОЗДАНО С КОДОМ. УСИЛЕНО AI.</span>
          <span>03 ПРОЕКТА</span>
        </div>
      </div>
    </section>
  );
}
