const infoImportant = [
  "Os produtos podem sofrer variação de 1 cm a 2,5 cm nas medidas",
  "Recomendamos escolher um tamanho maior",
  "Produtos personalizados não possuem troca ou devolução",
  "Estoque sujeito à disponibilidade",
  "Em caso de indisponibilidade, o valor será reembolsado integralmente",
];

const careItems = [
  "Não utilizar amaciante",
  "Lavar e passar do lado avesso",
  "Não passar sobre a estampa",
  "Lavar com cores similares",
  "Retirar da máquina imediatamente após a lavagem",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-foreground">
      {items.map((s) => (
        <li key={s} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

export function Description() {
  return (
    <section className="mt-2 bg-card px-4 py-5">
      <h2 className="text-lg font-bold text-foreground">Personalização</h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground">
        As camisas não acompanham nome e número automaticamente.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground">
        Para adicionar personalização, selecione a opção{" "}
        <strong>"Somente Personalizado"</strong> antes de finalizar sua compra e
        informe o nome e número desejados.
      </p>

      <div className="mt-5 rounded-xl border border-border p-4">
        <h3 className="text-lg font-bold text-foreground">
          Informações Importantes
        </h3>
        <BulletList items={infoImportant} />
      </div>

      <h3 className="mt-6 text-lg font-bold text-foreground">
        Cuidados com a Peça
      </h3>
      <BulletList items={careItems} />

      <div className="mt-8 space-y-2 text-center">
        <p className="text-base font-medium text-foreground">
          Vista as cores da paixão nacional.
        </p>
        <p className="text-sm text-muted-foreground">
          Viva cada momento da Copa do Mundo 2026™ com estilo, orgulho e
          emoção.
        </p>
      </div>
    </section>
  );
}
