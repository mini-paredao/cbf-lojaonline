import { useEffect, useState } from "react";
import { X, Lock } from "lucide-react";

const sizes = ["PP", "P", "M", "G", "GG", "XL", "XXL"];
const models = ["Masculino", "Feminino"];
const colors = ["Amarelo", "Azul"];
const CHECKOUT_URL =
  "https://pay.transacaoseguraemprestimo.online/c/bc302d9b-7f15-4f3f-8757-15d79565ca96";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [seconds, setSeconds] = useState(7 * 60 + 21);
  const [size, setSize] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (shown) return;

    const trigger = () => {
      if (!shown) {
        setOpen(true);
        setShown(true);
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    let lastY = 0;
    let lastT = Date.now();
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? 0;
      const t = Date.now();
      const dt = t - lastT;
      if (dt > 0) {
        const v = (y - lastY) / dt;
        if (v > 1.2 && window.scrollY < 50) trigger();
      }
      lastY = y;
      lastT = t;
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") trigger();
    };

    // Fallback: trigger after 25s of inactivity on page
    const timer = window.setTimeout(trigger, 25000);

    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [shown]);

  useEffect(() => {
    if (!open) return;
    const i = window.setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : 0)),
      1000,
    );
    return () => window.clearInterval(i);
  }, [open]);

  if (!open) return null;

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const isComplete = !!(size && model && color);
  const handleBuy = () => {
    if (!isComplete) return;
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl bg-brand shadow-2xl animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-center px-4 py-3 relative">
          <span className="text-sm font-extrabold tracking-wider text-yellow-300">
            OFERTA EXCLUSIVA
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* White card */}
        <div className="mx-3 rounded-2xl bg-background px-5 pt-5 pb-5 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-foreground">
            Espera! Última chance 🔥
          </h2>
          <p className="mt-2 text-base font-extrabold text-brand">
            no seu pedido!
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Liberamos um desconto especial só pra você fechar agora.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-3xl font-extrabold text-brand">R$ 67,54</span>
            <span className="text-lg text-muted-foreground line-through">
              R$ 89,75
            </span>
          </div>

          <div className="mt-4 flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-base font-bold text-white">
            Termina em 00:{mm}:{ss}
          </div>

          {/* Variant selection */}
          <div className="mt-5 text-left">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground/70">
              Tamanho: <span className="text-muted-foreground">—</span>
            </p>
            <Chips options={sizes} selected={size} onSelect={setSize} />

            <p className="mt-4 mb-2 text-xs font-bold uppercase tracking-wider text-foreground/70">
              Modelo: <span className="text-muted-foreground">—</span>
            </p>
            <Chips options={models} selected={model} onSelect={setModel} />

            <p className="mt-4 mb-2 text-xs font-bold uppercase tracking-wider text-foreground/70">
              Cor: <span className="text-muted-foreground">—</span>
            </p>
            <Chips options={colors} selected={color} onSelect={setColor} />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-4 py-4">
          <button
            onClick={handleBuy}
            disabled={!isComplete}
            className="block w-full rounded-full bg-white/90 py-4 text-center text-base font-extrabold text-brand shadow-lg transition active:scale-[0.98] disabled:cursor-not-allowed"
          >
            {isComplete ? "QUERO ESSE DESCONTO" : "Selecione: Tamanho, Modelo, Cor"}
          </button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/90">
            <Lock className="h-3.5 w-3.5" />
            Compra 100% segura • Estoque limitado
          </p>
        </div>
      </div>
    </div>
  );
}

function Chips({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected === opt;
        return (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`min-w-[56px] rounded-full border px-4 py-2 text-sm transition ${
              active
                ? "border-brand bg-brand/10 font-semibold text-brand"
                : "border-border bg-background text-foreground hover:border-foreground/30"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
