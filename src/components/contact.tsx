import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { ChatQrButton } from "@/components/chat-qr-button";

const channels = [
  {
    label: "MAX",
    icon: MessageCircle,
    href: "https://max.ru/u/f9LHodD0cOJ0erOwDi7A9hlBczCNHP2uOXR5nNx8ZsgX20ITLo3Kuyvr08E",
    external: true,
  },
  { label: "Telegram", icon: Send, href: "https://t.me/vibecodesk", external: true },
  { label: "E-mail", icon: Mail, href: "mailto:korney290581@yandex.ru", external: false },
] as const;

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-card">
          <h2 id="contact-title" className="contact-title">
            <span /> ОБСУДИТЬ ПРОЕКТ
          </h2>
          <p className="contact-text">
            Выберите удобный мессенджер — отвечу в течение дня и предложу план работ.
          </p>
          <div className="contact-actions">
            {channels.map(({ label, icon: Icon, href, external }) => (
              <a
                key={label}
                className="contact-button"
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="contact-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                {label}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="contact-qr">
            <ChatQrButton variant="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
