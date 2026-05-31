import { useState } from "react";
import { Star, X } from "lucide-react";
import menina1 from "@/assets/projetor/menina1.webp";
import menina2 from "@/assets/projetor/menina2.webp";
import menina3 from "@/assets/projetor/menina3.webp";
import homem1 from "@/assets/projetor/homem1.webp";
import homem2 from "@/assets/projetor/homem2.webp";
import homem3 from "@/assets/projetor/homem3.webp";
import avali1 from "@/assets/projetor/avali1.webp";
import avali2 from "@/assets/projetor/avali2.webp";
import avali3 from "@/assets/projetor/avali3.webp";
import avali4 from "@/assets/projetor/avali4.webp";
import avali5 from "@/assets/projetor/avali5.webp";
import avali6 from "@/assets/projetor/avali6.webp";
import avali7 from "@/assets/projetor/avali7.webp";
import avali8 from "@/assets/projetor/avali8.webp";
import avali9 from "@/assets/projetor/avali9.webp";
import menina5 from "@/assets/projetor/menina5.webp";
import menina6 from "@/assets/projetor/menina6.webp";
import menina7 from "@/assets/projetor/menina7.webp";
import homem4 from "@/assets/projetor/homem4.webp";
import homem5 from "@/assets/projetor/homem5.webp";
import homem6 from "@/assets/projetor/homem6.webp";

type Review = {
  name: string;
  city: string;
  avatar: string;
  text: string;
  photo?: string;
};

const reviews: Review[] = [
  {
    name: "Camila Santos",
    city: "Curitiba PR",
    avatar: menina1,
    text: "Chegou super rápido e muito bem embalado! As 2 camisas vieram perfeitas, tecido de qualidade e o escudo da CBF lindo. Já é a minha segunda compra aqui.",
    photo: avali1,
  },
  {
    name: "Marcos Silva",
    city: "São Paulo SP",
    avatar: homem1,
    text: "Comprei a promoção de leve 2 e não me arrependi. A azul ficou sensacional, tecido grosso e bem costurado. Vou usar muito na Copa 2026!",
    photo: avali2,
  },
  {
    name: "Juliana Costa",
    city: "Belo Horizonte MG",
    avatar: menina2,
    text: "Estava previsto pra chegar dia 14/05 e chegou dia 12/05. Ela é simplesmente linda demais, igualzinha às fotos! Recomendo demais a loja.",
    photo: avali3,
  },
  {
    name: "Ricardo Almeida",
    city: "Salvador BA",
    avatar: homem2,
    text: "Camiseta de qualidade absurda pelo preço! Acabamento impecável, escudo bem aplicado e o tecido é leve e confortável. Vale cada centavo.",
    photo: avali4,
  },
  {
    name: "Beatriz Oliveira",
    city: "Recife PE",
    avatar: menina3,
    text: "Sempre gostei mais da amarela, camiseta bonita demais! Ficou perfeita no meu marido e a segunda foi pro meu filho. Ganhei o coração da família!",
    photo: avali5,
  },
  {
    name: "Eduardo Pereira",
    city: "Porto Alegre RS",
    avatar: homem3,
    text: "Pedi a amarela e a azul, ambas chegaram em perfeito estado. Material de primeira, parece coisa de loja oficial. Atendimento nota 10!",
    photo: avali6,
  },
];

function StarsYellow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < count
              ? "fill-[hsl(45_100%_50%)] text-[hsl(45_100%_50%)]"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function StarsBlack() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-foreground text-foreground"
        />
      ))}
    </div>
  );
}

const reviewsPage2: Review[] = [
  {
    name: "Larissa Mendes",
    city: "Florianópolis SC",
    avatar: menina5,
    text: "Amei! As 2 camisas chegaram certinhas, tecido leve e o escudo da CBF muito bem bordado. Já é a minha segunda compra na loja.",
    photo: avali7,
  },
  {
    name: "Fernando Rocha",
    city: "Foz do Iguaçu PR",
    avatar: homem4,
    text: "Comprei a promoção de leve 2 e veio tudo lacradinho. A azul ficou show, tecido grosso e bem feito. Recomendo!",
    photo: avali8,
  },
  {
    name: "Patrícia Lima",
    city: "Goiânia GO",
    avatar: menina6,
    text: "Chegou antes do prazo e veio igualzinho às fotos. Comprei pra mim e pro meu marido, ficamos super felizes!",
    photo: avali9,
  },
  {
    name: "Lucas Ferreira",
    city: "Fortaleza CE",
    avatar: homem5,
    text: "Camisa top demais! Vai ser perfeita pra assistir a Copa 2026 com a galera. Preço imbatível levando 2.",
  },
  {
    name: "Aline Carvalho",
    city: "Manaus AM",
    avatar: menina7,
    text: "Dei de presente pro meu esposo e ele amou! O acabamento é impecável e o caimento ficou perfeito. Loja confiável.",
  },
  {
    name: "Gabriel Souza",
    city: "Brasília DF",
    avatar: homem6,
    text: "Pedi a amarela e a azul, ambas chegaram em perfeito estado. Material de qualidade e o escudo super bem aplicado. Vale muito a pena!",
  },
];

export function Reviews() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const currentReviews = page === 1 ? reviews : reviewsPage2;

  return (
    <section className="mt-2 bg-card px-4 py-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-foreground">
          Avaliação do produto <span className="font-bold">(+860)</span>
        </h2>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-foreground">4.9</span>
          <StarsYellow count={5} />
          <span className="text-muted-foreground">&gt;</span>
        </div>
      </div>

      {currentReviews.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          Em breve mais avaliações...
        </p>
      ) : (
        <ul className="space-y-5">
          {currentReviews.map((r) => (
            <li
              key={r.name}
              className="border-b border-border pb-5 last:border-b-0 last:pb-0"
            >
              <div className="mb-2 flex items-center gap-2">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-foreground">
                  {r.name} - {r.city}
                </span>
              </div>
              <StarsBlack />
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {r.text}
              </p>
              {r.photo && (
                <button
                  onClick={() => setSelectedImage(r.photo!)}
                  className="mt-3 block overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <img
                    src={r.photo}
                    alt={`Foto da avaliação de ${r.name}`}
                    loading="lazy"
                    className="h-20 w-20 object-cover transition-transform duration-200 hover:scale-105"
                  />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          onClick={() => setPage(1)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
            page === 1
              ? "bg-brand text-brand-foreground"
              : "border border-border bg-card text-foreground"
          }`}
        >
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
            page === 2
              ? "bg-brand text-brand-foreground"
              : "border border-border bg-card text-foreground"
          }`}
        >
          2
        </button>
        <span className="px-1 text-sm text-muted-foreground">...</span>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full border border-brand text-sm font-semibold text-brand"
        >
          12
        </button>
      </div>


      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-h-[80vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
