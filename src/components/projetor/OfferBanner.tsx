import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function format(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export function useCountdown(initial = 30 * 60) {
  const [seconds, setSeconds] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : initial));
    }, 1000);
    return () => clearInterval(id);
  }, [initial]);
  return { seconds, label: format(seconds) };
}

export function OfferBanner() {
  const { label } = useCountdown(30 * 60);
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center gap-2 bg-brand py-2 text-sm font-medium text-brand-foreground shadow-md">
      <Clock className="h-4 w-4" />
      <span>Oferta termina em</span>
      <span className="font-bold tabular-nums">{label}</span>
    </div>
  );
}
