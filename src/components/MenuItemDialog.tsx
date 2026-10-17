import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { site, MenuItem } from "@/lib/site-config";
import { MessageSquare, Phone, Utensils, Sparkles, Check } from "lucide-react";
import { toast } from "sonner";

interface MenuItemDialogProps {
  item: (MenuItem & { categoryTitle?: string }) | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOrderNow: (itemName: string) => void;
  onReserveWithDish: (itemName: string) => void;
}

export function MenuItemDialog({
  item,
  open,
  onOpenChange,
  onOrderNow,
  onReserveWithDish,
}: MenuItemDialogProps) {
  if (!item) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Khaas! I'm interested in ordering "${item.name}" from your ${item.categoryTitle || "menu"}. Is it available today?`
    );
    window.open(`https://wa.me/917431000069?text=${text}`, "_blank");
    toast.info(`Inquiring about ${item.name} on WhatsApp...`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md overflow-hidden border border-border bg-background p-0">
        <div className="bg-espresso px-6 py-6 text-espresso-foreground">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              {item.categoryTitle || "Khaas Special"}
            </span>
            <span className="text-xs text-espresso-foreground/70">Signature Item</span>
          </div>
          <DialogTitle className="mt-2 font-display text-2xl font-light text-espresso-foreground">
            {item.name}
          </DialogTitle>
          <DialogDescription className="mt-1 text-xs text-espresso-foreground/75">
            Crafted fresh at Khaas (ਖਾਸ) · Signature Tower, Jawahar Nagar, Jalandhar
          </DialogDescription>
        </div>

        <div className="px-6 py-5 space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description ||
              "Handcrafted with fresh artisan ingredients and prepared with dedication by our kitchen team at Khaas."}
          </p>

          <div className="rounded-lg border bg-card/60 p-3.5 text-xs space-y-2">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Highlights</span>
            </div>
            <ul className="space-y-1 text-muted-foreground pl-5 list-disc">
              <li>Made fresh to order with premium ingredients</li>
              <li>Available for Dine-in, Kerbside pickup & Takeaway</li>
              <li>Pairs wonderfully with our barista-crafted coffee</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={() => {
                onOpenChange(false);
                onOrderNow(item.name);
              }}
              className="btn btn-primary w-full shadow-sm"
            >
              <Utensils className="h-4 w-4" />
              Order This Item Now
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-600 bg-emerald-50 px-3 py-2.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-200"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Ask on WhatsApp
              </button>
              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  onReserveWithDish(item.name);
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2.5 text-xs font-semibold hover:bg-secondary transition"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
