import { X, BadgeCheck, Star, Truck, Lock, Award } from "lucide-react";
import anatelLogo from "@/assets/anatel.png";
import reclameAquiLogo from "@/assets/reclame-aqui.png";
import storeLogo from "@/assets/projetor/logo.webp";


export function StoreInfo({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50" onClick={onClose}>
      <div
        className="flex h-[85vh] w-full max-w-[480px] flex-col rounded-t-2xl bg-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-border bg-brand px-4 py-3 text-brand-foreground rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1">
              <img src={storeLogo} alt="CBF STORE" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1 text-sm font-semibold">
                CBF STORE
                <BadgeCheck className="h-4 w-4 fill-white text-brand" />
              </div>
              <div className="text-[11px] opacity-90">Loja verificada • Desde 2019</div>
            </div>

          </div>
          <button onClick={onClose} aria-label="Fechar" className="rounded-full p-1 hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Vendas */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-border bg-muted/40 p-3 text-center">
              <div className="text-lg font-bold text-brand">+128k</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Vendas realizadas</div>
            </div>
            <div className="rounded-lg border border-border bg-muted/40 p-3 text-center">
              <div className="text-lg font-bold text-brand">4.9★</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Avaliação média</div>
            </div>
            <div className="rounded-lg border border-border bg-muted/40 p-3 text-center">
              <div className="text-lg font-bold text-brand">99%</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Clientes satisfeitos</div>
            </div>
          </div>

          {/* Selos */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">Certificações e Selos</h3>
            <div className="space-y-2">
              <SealRow
                icon={<img src={anatelLogo} alt="ANATEL" className="h-10 w-10 object-contain" />}
                title="Homologado pela ANATEL"
                desc="Produto certificado nº 12345-67-89, dentro das normas brasileiras."
              />
              <SealRow
                icon={<img src={reclameAquiLogo} alt="Reclame Aqui" className="h-10 w-10 object-contain" />}
                title="Reclame Aqui • RA1000"
                desc="Nota 9.2/10 • Empresa que resolve até 98% dos chamados."
              />

              <SealRow
                icon={<Lock className="h-5 w-5 text-emerald-600" />}
                title="Site 100% Seguro"
                desc="Pagamentos criptografados (SSL 256 bits) e protegidos contra fraude."
              />
              <SealRow
                icon={<Award className="h-5 w-5 text-emerald-600" />}
                title="Selo Ebit Bronze"
                desc="Reconhecida pela excelência em atendimento e prazo de entrega."
              />
              <SealRow
                icon={<Truck className="h-5 w-5 text-emerald-600" />}
                title="Frete Grátis Brasil"
                desc="Envio expresso por transportadora rastreada em todo o território."
              />
            </div>
          </div>

          {/* Sobre */}
          <div className="rounded-lg border border-border bg-muted/30 p-3">
            <h3 className="mb-1 text-sm font-semibold text-foreground">Sobre a loja</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Somos especialistas em projetores residenciais há mais de 5 anos. Trabalhamos
              direto com o fabricante, sem intermediários, oferecendo o melhor preço, garantia
              estendida de 12 meses e suporte técnico em português.
            </p>
          </div>

          {/* Avaliações */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">O que dizem nossos clientes</h3>
            <div className="space-y-2">
              <Review name="Mariana S." text="Produto excelente, chegou antes do prazo. Recomendo!" />
              <Review name="Carlos R." text="Imagem nítida, atendimento nota 10. Comprarei novamente." />
              <Review name="Patrícia L." text="Loja séria, nota fiscal e tudo certinho. Confiável!" />
            </div>
          </div>

          {/* CNPJ */}
          <div className="rounded-lg border border-dashed border-border p-3 text-center">
            <div className="text-[11px] text-muted-foreground">CNPJ: 12.345.678/0001-90</div>
            <div className="text-[11px] text-muted-foreground">Razão Social: Projetor Oficial Comércio LTDA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SealRow({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3">
      <div className="mt-0.5">{icon}</div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground leading-snug">{desc}</div>
      </div>
    </div>
  );
}

function Review({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-lg border border-border bg-background p-3">
      <div className="mb-1 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/15 text-[10px] font-bold text-brand">
          {name[0]}
        </div>
        <div className="text-xs font-medium text-foreground">{name}</div>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-snug">"{text}"</p>
    </div>
  );
}
