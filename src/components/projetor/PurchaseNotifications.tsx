import { useEffect, useState } from "react";

const names = [
  "Thiago Rocha",
  "Camila Santos",
  "Marcos Silva",
  "Juliana Costa",
  "Ricardo Almeida",
  "Beatriz Oliveira",
  "Eduardo Pereira",
  "Larissa Mendes",
  "Fernando Rocha",
  "Patrícia Lima",
  "Lucas Ferreira",
  "Aline Carvalho",
  "Gabriel Souza",
  "Mariana Dias",
  "Rafael Nunes",
  "Bruna Martins",
];

export function PurchaseNotifications() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(names[0]);

  useEffect(() => {
    let idx = 0;
    let hideTimer: ReturnType<typeof setTimeout>;

    const show = () => {
      setName(names[idx % names.length]);
      idx++;
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), 4500);
    };

    const firstTimer = setTimeout(show, 3000);
    const interval = setInterval(show, 9000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed top-24 left-3 z-40 max-w-[280px] rounded-md border border-white/10 bg-[#1a1a1a]/95 px-3 py-2 shadow-lg backdrop-blur-sm transition-all duration-500 ${
        visible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-2 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      <p className="text-xs leading-snug text-white/90">
        <span className="font-semibold text-brand">{name}</span>{" "}
        acabou de comprar 2 camisas do Brasil Copa 2026
      </p>
    </div>
  );
}
