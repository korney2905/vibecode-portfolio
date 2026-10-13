const steps = [
  {
    number: "01",
    title: "Погружаюсь в задачу",
    description:
      "Разбираю цель, аудиторию и ограничения. Фиксирую, какой результат нужен и как пойму, что он достигнут.",
  },
  {
    number: "02",
    title: "Создаю с ИИ",
    description:
      "Собираю прототип вместе с AI: интерфейс, логика, данные. От идеи до рабочей версии — без долгих спринтов.",
  },
  {
    number: "03",
    title: "Тестирую и улучшаю",
    description:
      "Проверяю ключевые сценарии на реальных данных, закрываю edge-кейсы и шлифую UX на каждой итерации.",
  },
  {
    number: "04",
    title: "Запускаю и масштабирую",
    description:
      "Вывожу продукт в прод, подключаю аналитику и интеграции. Дальше — развитие и рост нагрузки без переписывания.",
  },
] as const;

export function WorkProcess() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-inner">
        <header className="process-header">
          <div className="section-eyebrow">
            <span /> ПРОЦЕСС
          </div>
          <h2 id="process-title">
            Как я <span>работаю</span>
          </h2>
          <p>Четыре шага от первого погружения в задачу до запуска и масштабирования продукта.</p>
        </header>

        <div className="process-timeline">
          {steps.map(({ number, title, description }) => (
            <article key={title} className="process-step">
              <div className="process-node">{number}</div>
              <div className="process-body">
                <h3>{title}</h3>
                <p className="process-desc">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-end">
          <span>ПОГРУЖЕНИЕ · ГЕНЕРАЦИЯ · ТЕСТЫ · ЗАПУСК</span>
          <span>04 ШАГА</span>
        </div>
      </div>
    </section>
  );
}
