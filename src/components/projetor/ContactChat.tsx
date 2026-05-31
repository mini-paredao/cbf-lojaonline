import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";

type Message = { from: "bot" | "user"; text: string };

type QA = { q: string; a: string };

const FAQ: QA[] = [
  {
    q: "Qual o prazo de entrega?",
    a: "Enviamos em até 24h após a confirmação do pagamento. A entrega ocorre em 5 a 10 dias úteis para todo o Brasil.",
  },
  {
    q: "Qual a garantia do produto?",
    a: "Oferecemos 12 meses de garantia direto com o fabricante, além de 7 dias para devolução conforme o Código de Defesa do Consumidor.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Aceitamos Pix (com desconto), cartão de crédito em até 12x e boleto bancário.",
  },
  {
    q: "O frete é grátis?",
    a: "Sim! O frete é grátis para todo o Brasil em compras realizadas pelo site.",
  },
  {
    q: "Como rastrear meu pedido?",
    a: "Após o envio, você recebe o código de rastreio por e-mail e WhatsApp para acompanhar a entrega.",
  },
  {
    q: "Falar com um atendente",
    a: "Claro! Nossa equipe está disponível no WhatsApp (11) 99999-9999, de segunda a sábado, das 9h às 18h.",
  },
];

export function ContactChat({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Olá! 👋 Sou o assistente virtual. Como posso te ajudar hoje?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  if (!open) return null;

  const ask = (qa: QA) => {
    setMessages((m) => [...m, { from: "user", text: qa.q }]);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: qa.a }]);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50" onClick={onClose}>
      <div
        className="flex h-[80vh] w-full max-w-[480px] flex-col rounded-t-2xl bg-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-border bg-brand px-4 py-3 text-brand-foreground rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base font-bold">
              A
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Atendimento</div>
              <div className="text-[11px] opacity-90">Online agora</div>
            </div>
          </div>
          <button onClick={onClose} aria-label="Fechar chat" className="rounded-full p-1 hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto px-3 py-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === "user"
                    ? "bg-brand text-brand-foreground rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border px-3 py-2">
          <div className="mb-2 text-[11px] font-medium text-muted-foreground">Perguntas frequentes:</div>
          <div className="flex flex-wrap gap-1.5">
            {FAQ.map((qa) => (
              <button
                key={qa.q}
                onClick={() => ask(qa)}
                className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs text-brand hover:bg-brand/20"
              >
                {qa.q}
              </button>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-2">
            <input
              disabled
              placeholder="Selecione uma pergunta acima..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <Send className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
