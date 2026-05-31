import { Star } from "lucide-react";

export function PriceBlock() {
  return (
    <section className="mt-2 bg-card px-4 py-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-brand px-2 py-0.5 text-xs font-semibold text-brand-foreground">
          O Menor Preço
        </span>
        <span className="text-sm text-muted-foreground line-through">R$ 249,00</span>
        <span className="text-3xl font-extrabold text-price">R$89,72</span>
        <span className="rounded-md bg-price/10 px-2 py-0.5 text-xs font-bold text-price">
          70% OFF
        </span>
      </div>

      <p className="mt-2 text-sm font-medium text-price">
        Restam <span className="font-bold">1000</span> peças com esse desconto.
      </p>

      <div className="mt-2 flex items-center justify-between text-sm">
        <p className="text-foreground">
          R$44,86 x2{" "}
          <span className="text-muted-foreground">Pagamento parcelado</span>
        </p>
        <button className="text-brand">3 opções &gt;</button>
      </div>

      <p className="mt-1 text-xs text-muted-foreground">15k Vendidos</p>

      <h1 className="mt-3 text-base font-semibold leading-snug text-foreground">
        (Compre 1 e leve 2) Camisa do Brasil Copa 2026
      </h1>

      <div className="mt-2 flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-star text-star"
            strokeWidth={0}
          />
        ))}
        <span className="ml-1 text-sm font-medium text-foreground">4.8</span>
      </div>
    </section>
  );
}
