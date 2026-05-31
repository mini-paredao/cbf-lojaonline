import { ShieldCheck, Check, ChevronRight } from "lucide-react";

const items = [
  "Devolução gratuita",
  "Pagamento seguro",
  "Reembolso automático por dano",
  "Cupom por atraso na coleta",
];

export function ShippingWarranty() {
  return (
    <section className="mt-2 bg-card px-4 py-3">
      <div className="rounded-lg border border-[hsl(210_95%_85%)] bg-[hsl(210_100%_96%)] p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[hsl(210_90%_55%)]" />
            <span className="text-sm font-semibold text-[hsl(210_90%_45%)]">
              Proteção do cliente
            </span>
          </div>
          <ChevronRight className="h-4 w-4 text-[hsl(210_90%_55%)]" />
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[hsl(145_80%_40%)]">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              <span className="text-xs text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
