import { MapPin } from "lucide-react";

export function ShippingInfo() {
  return (
    <section className="mt-2 bg-card px-4 py-3">
      <div className="flex items-start justify-between rounded-lg border border-border p-3">
        <div>
          <p className="text-sm font-semibold text-[hsl(145_80%_35%)]">
            Frete Grátis
          </p>
          <p className="text-xs text-muted-foreground">Entrega em 15 a 20 dias</p>
        </div>
        <MapPin className="h-4 w-4 text-muted-foreground" />
      </div>
    </section>
  );
}
