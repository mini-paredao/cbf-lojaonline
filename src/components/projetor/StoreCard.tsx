import logo from "@/assets/projetor/logo.webp";
import verifiedBadge from "@/assets/projetor/verified-badge.png";

export function StoreCard() {
  return (
    <section className="mt-2 overflow-hidden rounded-md bg-card">
      <div className="h-1 bg-brand" />
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-16 items-center justify-center overflow-hidden rounded-md bg-white">
            <img
              src={logo}
              alt="CBF STORE"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-foreground">CBF STORE</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-sky-700">
                <img src={verifiedBadge} alt="Verificada" className="h-4 w-4" />
                Loja Verificada
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              <span className="text-emerald-600">•</span> 15 Mil produtos · 100% recomendado
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>Confiança:</span>
          <span className="font-semibold text-foreground">100%</span>
        </div>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full rounded-full bg-sky-400" />
        </div>
        <p className="mt-1 text-center text-xs text-muted-foreground">
          Loja 100% Confiável
        </p>
      </div>
    </section>
  );
}
