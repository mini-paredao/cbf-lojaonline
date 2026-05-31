import { useState } from "react";
import { Store, MessageCircle, ShoppingCart } from "lucide-react";
import { useCountdown } from "./OfferBanner";
import { ContactChat } from "./ContactChat";
import { StoreInfo } from "./StoreInfo";
import { VariantPicker } from "./VariantPicker";

export function BuyCTA() {
  const { label } = useCountdown(30 * 60);
  const [chatOpen, setChatOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  return (
    <>
      <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-background px-2 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStoreOpen(true)}
            className="flex w-12 flex-col items-center justify-center gap-0.5 text-[10px] text-foreground"
          >
            <Store className="h-5 w-5" />
            <span>Loja</span>
          </button>

          <button
            onClick={() => setChatOpen(true)}
            className="flex w-12 flex-col items-center justify-center gap-0.5 text-[10px] text-foreground"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Contatar</span>
          </button>
          <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-l-full bg-brand/15 text-brand">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            onClick={() => setPickerOpen(true)}
            className="flex h-12 flex-1 flex-col items-center justify-center rounded-r-full bg-brand font-bold text-brand-foreground leading-tight"
          >
            <span className="text-sm">Compre Agora</span>
            <span className="text-[10px] font-medium opacity-90">Termina em {label}</span>
          </button>
        </div>
      </div>
      <ContactChat open={chatOpen} onClose={() => setChatOpen(false)} />
      <StoreInfo open={storeOpen} onClose={() => setStoreOpen(false)} />
      <VariantPicker open={pickerOpen} onClose={() => setPickerOpen(false)} />

    </>
  );
}

