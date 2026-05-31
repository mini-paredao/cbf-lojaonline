const highlights = [
  "Tecido leve e confortável",
  "Alta respirabilidade",
  "Tecnologia de controle de umidade",
  "Secagem rápida",
  "Caimento moderno e anatômico",
  "Ideal para jogos e uso casual",
  "Versões Home e Away inclusas",
  "Personalização disponível com fonte oficial",
];

export function Specs() {
  return (
    <section className="mt-2 bg-card px-4 py-4">
      <h2 className="text-base font-bold text-foreground">Sobre este produto</h2>

      <div className="mt-3 rounded-xl border border-border px-4 py-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Promoção Especial Copa do Mundo 2026™
        </p>
        <h3 className="mt-3 text-3xl font-extrabold leading-tight text-foreground">
          COMPRE 1 E LEVE 2
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Vista a paixão nacional em dobro nesta Copa do Mundo 2026™.
        </p>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
        <p>
          A <strong>Camisa Brasil Home + Away 2026</strong> combina tradição,
          desempenho e estilo para os torcedores que vivem cada jogo
          intensamente.
        </p>
        <p>
          O kit inclui as duas versões da Seleção Brasileira: o clássico
          uniforme amarelo Home e a elegante camisa azul Away, inspirada nas
          cores da bandeira nacional.
        </p>
        <p>
          Produzidas em tecido leve e respirável com tecnologia de secagem
          rápida, oferecem conforto, ventilação e excelente caimento para
          acompanhar você nos jogos, no dia a dia ou na coleção.
        </p>
      </div>

      <div className="mt-5 rounded-xl border border-border p-4">
        <h3 className="text-lg font-bold text-foreground">
          Destaques do Produto
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-foreground">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
