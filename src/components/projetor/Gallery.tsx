import { useEffect, useRef, useState } from "react";
import img1 from "@/assets/projetor/image1.webp";
import img2 from "@/assets/projetor/image2.webp";
import img3 from "@/assets/projetor/image3.webp";
import img4 from "@/assets/projetor/image4.webp";
import img5 from "@/assets/projetor/image5.webp";
import img6 from "@/assets/projetor/image6.webp";
import img7 from "@/assets/projetor/image7.webp";
import img8 from "@/assets/projetor/image8.webp";
import img9 from "@/assets/projetor/image9.webp";
import img10 from "@/assets/projetor/image10.webp";
import img11 from "@/assets/projetor/image11.webp";

type Slide = { type: "image"; src: string; alt: string };

const SLIDES: Slide[] = [
  { type: "image", src: img1, alt: "Projetor Smart HY320 com Android 12" },
  { type: "image", src: img2, alt: "HY320 Stunning Arrival — 4K, Wi-Fi 6, 180°" },
  { type: "image", src: img3, alt: "LED Light, 10000+ horas, 450 ANSI lumens" },
  { type: "image", src: img4, alt: "Projetor 180° rotacional" },
  { type: "image", src: img5, alt: 'Projeção de tela 130", 1.68m de distância' },
  { type: "image", src: img6, alt: "Imagem nativa 1080P de alta qualidade" },
  { type: "image", src: img7, alt: "Projetor Smart HY320 vista frontal" },
  { type: "image", src: img8, alt: "Itens inclusos: controle, manual, caixa e cabo" },
  { type: "image", src: img9, alt: "Detalhe da etiqueta Vai Brasil na gola" },
  { type: "image", src: img10, alt: "Detalhe do logo Nike bordado" },
  { type: "image", src: img11, alt: "Detalhe do escudo CBF bordado" },
];

const AUTOPLAY_MS = 3500;

export function Gallery() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const total = SLIDES.length;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (isProgrammaticScroll.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const idx = Math.round(el.scrollLeft / el.clientWidth);
        setActive((prev) => (prev !== idx ? idx : prev));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    isProgrammaticScroll.current = true;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setActive(i);
    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 500);
  };

  useEffect(() => {
    if (userPaused) return;
    const id = window.setTimeout(() => {
      const next = active + 1 >= total ? 0 : active + 1;
      goTo(next);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, userPaused, total]);

  const pauseAutoplay = () => setUserPaused(true);

  return (
    <div className="bg-card">
      <div
        className="relative aspect-square w-full overflow-hidden bg-black"
        onPointerDown={pauseAutoplay}
      >
        <div
          ref={trackRef}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="relative h-full w-full shrink-0 snap-center snap-always"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
          {active + 1}/{total}
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SLIDES.map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              pauseAutoplay();
              goTo(i);
            }}
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-md border-2 bg-muted ${
              i === active ? "border-brand" : "border-transparent"
            }`}
            aria-label={`Slide ${i + 1}`}
          >
            <img
              src={slide.src}
              alt=""
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
