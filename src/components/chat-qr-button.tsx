import { Send } from "lucide-react";
import qrTelegram from "@/assets/telegram-qr.svg";

const BOT_URL = "https://t.me/AI_Project_KS_Bot";
const BOT_HANDLE = "@AI_Project_KS_Bot";

type ChatQrButtonProps = {
  variant?: "hero" | "contact";
};

export function ChatQrButton({ variant = "hero" }: ChatQrButtonProps) {
  return (
    <a
      className={`chat-qr chat-qr-${variant}`}
      href={BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Открыть чат-бота ${BOT_HANDLE} в Telegram`}
    >
      <span className="chat-qr-code">
        <img
          src={qrTelegram}
          alt={`QR-код для перехода в Telegram-бот ${BOT_HANDLE}`}
          width={160}
          height={160}
        />
      </span>
      <span className="chat-qr-meta">
        <span className="chat-qr-label">
          <Send size={14} aria-hidden="true" /> Чат-бот AI-Проекты
        </span>
        <span className="chat-qr-handle">{BOT_HANDLE}</span>
        <span className="chat-qr-url">t.me/AI_Project_KS_Bot</span>
        <span className="chat-qr-hint">Наведите камеру на QR или нажмите</span>
      </span>
    </a>
  );
}
