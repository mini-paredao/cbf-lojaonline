import { ArrowLeft, Search, ShoppingCart, Share2, Check } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Camisa do Brasil Copa 2026",
      text: "Olha essa camisa que achei com 70% OFF! 🔥",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(shareData);
        return;
      }
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* user cancelled or share failed */
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center gap-2 bg-card px-3 py-2.5 shadow-sm">
      <button className="p-1.5 text-foreground" aria-label="Voltar">
        <ArrowLeft className="h-5 w-5" />
      </button>
      <div className="flex flex-1 items-center gap-2 rounded-full bg-muted px-3 py-1.5">
        <Search className="h-4 w-4 text-muted-foreground" />
        <span className="truncate text-sm text-muted-foreground">
          Camisa do Brasil Copa 2026...
        </span>
      </div>
      <button className="p-1.5 text-foreground" aria-label="Carrinho">
        <ShoppingCart className="h-5 w-5" />
      </button>
      <button
        onClick={handleShare}
        className="relative p-1.5 text-foreground"
        aria-label="Compartilhar"
      >
        {copied ? (
          <Check className="h-5 w-5 text-brand" />
        ) : (
          <Share2 className="h-5 w-5" />
        )}
        {copied && (
          <span className="absolute right-0 top-full mt-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-md">
            Link copiado!
          </span>
        )}
      </button>
    </header>
  );
}
