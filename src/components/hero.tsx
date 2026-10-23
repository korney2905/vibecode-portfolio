import { ArrowRight, Bot, ChartNoAxesCombined, Check, LayoutGrid, Plug, Zap } from "lucide-react";
import { ChatQrButton } from "@/components/chat-qr-button";

const points = [
  "Первый результат уже через 3 дня",
  "Дизайн и код — в одном лице",
  "Правки онлайн, без долгих спринтов",
] as const;

const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"];
const revenue = [38, 52, 45, 68, 61, 83, 97];
const channels = [
  { label: "Прямые", share: "42%", dot: "lg-1" },
  { label: "Реклама", share: "34%", dot: "lg-2" },
  { label: "Поиск", share: "24%", dot: "lg-3" },
] as const;

function HeroDashboard() {
  return (
    <aside className="hero-visual" aria-label="Пример аналитического дашборда">
      <div className="hero-dashboard">
        <div className="dash-bar">
          <span />
          <span />
          <span />
          <div className="dash-address">analytics.vibecode.app</div>
        </div>

        <div className="dash-body">
          <div className="dash-head">
            <div className="dash-brand">
              <ChartNoAxesCombined size={15} aria-hidden="true" /> Аналитика
            </div>
            <span className="dash-live">
              <i /> LIVE
            </span>
          </div>

          <div className="dash-kpis">
            <div className="dash-kpi">
              <span>Выручка</span>
              <b>₽ 1,28M</b>
              <em>+18,4%</em>
            </div>
            <div className="dash-kpi">
              <span>Клиенты</span>
              <b>3 245</b>
              <em>+7,2%</em>
            </div>
            <div className="dash-kpi">
              <span>Конверсия</span>
              <b>6,8%</b>
              <em>+1,3%</em>
            </div>
          </div>

          <div className="dash-panel">
            <div className="dash-panel-head">
              Динамика дохода <span>последние 7 месяцев</span>
            </div>
            <div className="dash-bars">
              {revenue.map((height, index) => (
                <div key={months[index]} className="dash-bar-col">
                  <span style={{ height: `${height}%` }} />
                  <small>{months[index]}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-sources">
            <div className="dash-donut">
              <b>8,4K</b>
            </div>
            <ul className="dash-legend">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <i className={channel.dot} />
                  {channel.label} · {channel.share}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function Hero() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <header className="hero-header">
            <div className="section-eyebrow">
              <span /> ВАЙБКОДИНГ · AI · АВТОМАТИЗАЦИЯ
            </div>
            <h1 id="hero-title">
              <span className="headline-item">
                <span className="point-icon">
                  <Zap size={17} aria-hidden="true" />
                </span>
                Лендинги и MVP <span className="headline-accent">за 3 дня</span>
              </span>
              <span className="headline-item">
                <span className="point-icon">
                  <Bot size={17} aria-hidden="true" />
                </span>
                Голосовые и чат-боты TWIN
              </span>
              <span className="headline-item">
                <span className="point-icon">
                  <Plug size={17} aria-hidden="true" />
                </span>
                Bitrix24 и интеграции
              </span>
            </h1>
            <p>
              Собираю продающие страницы и запускаю продукты, внедряю голосовых и чат-ботов TWIN,
              автоматизирую бизнес на Bitrix24 — под ключ и в срок.
            </p>
          </header>

          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#contact">
              Поставить задачу <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="hero-btn hero-btn-ghost" href="#projects">
              <LayoutGrid size={16} aria-hidden="true" /> Смотреть проекты
            </a>
          </div>

          <ul className="hero-points">
            {points.map((point) => (
              <li key={point}>
                <Check size={13} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <ChatQrButton variant="hero" />
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
