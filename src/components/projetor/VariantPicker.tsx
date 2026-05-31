import { useMemo, useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/projetor/logo.webp";

type Selection = {
  size: string;
  model: string;
  color: string;
};

const sizes = ["PP", "P", "M", "G", "GG", "XL", "XXL"];
const models = ["Masculino", "Feminino"];
const colors = ["Amarelo", "Azul"];

const CHECKOUT_URL =
  "https://pay.transacaoseguraemprestimo.online/c/51a33ff6-8431-4b6f-8012-9c78bb07dadc";

export function VariantPicker({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [shirt1, setShirt1] = useState<Selection>({ size: "", model: "", color: "" });
  const [shirt2, setShirt2] = useState<Selection>({ size: "", model: "", color: "" });

  const isComplete = useMemo(
    () =>
      shirt1.size && shirt1.model && shirt1.color &&
      shirt2.size && shirt2.model && shirt2.color,
    [shirt1, shirt2],
  );

  if (!open) return null;

  const handleBuy = () => {
    if (!isComplete) return;
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="flex h-[90vh] w-full max-w-[480px] flex-col rounded-t-2xl bg-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="flex items-start gap-3 border-b border-border px-4 py-3">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
            <img src={logo} alt="CBF STORE" className="h-full w-full object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-price">R$ 89,72</span>
              <span className="text-sm text-muted-foreground line-through">R$ 432,87</span>
              <span className="rounded-md bg-price/10 px-1.5 py-0.5 text-xs font-bold text-price">
                87%
              </span>
            </div>
            <span className="mt-1 inline-block rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              Frete grátis
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full p-1 text-muted-foreground hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <h2 className="mb-3 text-base font-bold text-foreground">
            Escolha suas camisetas{" "}
            <span className="font-normal text-muted-foreground">(2 unidades)</span>
          </h2>

          <ShirtCard
            index={1}
            value={shirt1}
            onChange={setShirt1}
          />
          <div className="mt-4">
            <ShirtCard
              index={2}
              value={shirt2}
              onChange={setShirt2}
            />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-border bg-background px-4 py-3">
          <button
            onClick={handleBuy}
            disabled={!isComplete}
            className="flex h-12 w-full items-center justify-center rounded-full bg-brand font-bold text-brand-foreground transition disabled:cursor-not-allowed disabled:opacity-50"
          >
            Comprar Agora
          </button>
          {!isComplete && (
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Selecione tamanho, modelo e cor das 2 camisetas
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ShirtCard({
  index,
  value,
  onChange,
}: {
  index: number;
  value: Selection;
  onChange: (v: Selection) => void;
}) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
          {index}
        </div>
        <span className="text-sm font-bold text-foreground">Camiseta {index}</span>
      </div>

      <Field label="Tamanho" value={value.size}>
        <Chips
          options={sizes}
          selected={value.size}
          onSelect={(v) => onChange({ ...value, size: v })}
        />
      </Field>

      <Field label="Modelo" value={value.model}>
        <Chips
          options={models}
          selected={value.model}
          onSelect={(v) => onChange({ ...value, model: v })}
        />
      </Field>

      <Field label="Cor" value={value.color} last>
        <Chips
          options={colors}
          selected={value.color}
          onSelect={(v) => onChange({ ...value, color: v })}
        />
      </Field>
    </div>
  );
}

function Field({
  label,
  value,
  last,
  children,
}: {
  label: string;
  value: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={last ? "" : "mb-3"}>
      <p className="mb-1.5 text-xs font-semibold text-foreground">
        {label}:{" "}
        <span className={value ? "text-brand" : "text-muted-foreground font-normal"}>
          {value || "Selecione"}
        </span>
      </p>
      {children}
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
            className={`min-w-[44px] rounded-md border px-3 py-1.5 text-sm transition ${
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