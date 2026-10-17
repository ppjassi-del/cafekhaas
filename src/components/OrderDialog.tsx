import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { site } from "@/lib/site-config";
import {
  ShoppingBag,
  Plus,
  Minus,
  MessageSquare,
  Phone,
  Check,
  UtensilsCrossed,
  Car,
  Package,
} from "lucide-react";
import { toast } from "sonner";

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: "Dine-in" | "Kerbside pickup" | "No-contact delivery";
  initialItem?: string;
}

const MENU_ITEMS = [
  { id: "cold-coffee", name: "Cold Coffee", category: "Beverages", desc: "Velvety blend of artisan espresso & chilled cream milk" },
  { id: "combo", name: "Coffee with Sandwich and Fries", category: "Combos", desc: "Toasted sandwich, signature coffee & crisp golden fries" },
  { id: "burrata", name: "Burrata Sourdough Toast", category: "Plates", desc: "Artisanal creamy burrata, cherry tomatoes & herb emulsion" },
  { id: "sandwiches", name: "Gourmet Sandwich Options", category: "Plates", desc: "Grilled artisan sourdough with fresh fillings & dips" },
  { id: "white-spaghetti", name: "White Sauce Spaghetti", category: "Pasta", desc: "Al dente spaghetti tossed in garlic parmesan cream" },
  { id: "flame-chicken", name: "Flame Kiss Chicken", category: "Mains", desc: "Char-grilled spiced chicken breast with signature glaze" },
];

export function OrderDialog({
  open,
  onOpenChange,
  defaultMode = "Kerbside pickup",
  initialItem,
}: OrderDialogProps) {
  const [mode, setMode] = React.useState<"Dine-in" | "Kerbside pickup" | "No-contact delivery">(defaultMode);
  const [quantities, setQuantities] = React.useState<Record<string, number>>({});
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [addressOrCar, setAddressOrCar] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  React.useEffect(() => {
    if (defaultMode) setMode(defaultMode);
  }, [defaultMode]);

  React.useEffect(() => {
    if (initialItem && open) {
      const match = MENU_ITEMS.find(
        (m) => m.name.toLowerCase().includes(initialItem.toLowerCase()) || initialItem.toLowerCase().includes(m.name.toLowerCase())
      );
      if (match) {
        setQuantities((prev) => ({ ...prev, [match.id]: (prev[match.id] || 0) + 1 }));
      }
    }
  }, [initialItem, open]);

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      const updated = { ...prev };
      if (next === 0) {
        delete updated[id];
      } else {
        updated[id] = next;
      }
      return updated;
    });
  };

  const selectedItems = MENU_ITEMS.filter((item) => (quantities[item.id] || 0) > 0);
  const totalItemCount = Object.values(quantities).reduce((a, b) => a + b, 0);

  const formatOrderSummary = () => {
    if (selectedItems.length === 0) {
      return "General Menu Inquiry / Custom Order";
    }
    return selectedItems
      .map((item) => `• ${item.name} x ${quantities[item.id]}`)
      .join("\n");
  };

  const handleWhatsAppOrder = () => {
    const orderText = formatOrderSummary();
    const details = [
      `Hello Khaas (ਖਾਸ) team! I'd like to place an order:`,
      `\n📍 Order Type: ${mode}`,
      `👤 Name: ${name || "Guest"}`,
      `📞 Phone: ${phone || "Not specified"}`,
      addressOrCar ? `🚗 Notes/Details: ${addressOrCar}` : null,
      notes ? `💬 Special Request: ${notes}` : null,
      `\n🍽 Items:\n${orderText}`,
      `\nPlease let me know total amount and estimated preparation time. Thank you!`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/917431000069?text=${encodeURIComponent(details)}`, "_blank");
    toast.info("Opening WhatsApp with your order details...");
    onOpenChange(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your contact number");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      toast.success("Order request sent to Khaas!", {
        description: `Your ${mode} order has been dispatched to the café kitchen.`,
      });
    }, 600);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setQuantities({});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg overflow-hidden border border-border bg-background p-0 sm:max-w-xl">
        <div className="bg-espresso px-6 py-6 text-espresso-foreground">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-medium">Khaas</span>
            <span className="text-accent">|</span>
            <span lang="pa" className="font-gurmukhi text-xl font-bold">
              ਖਾਸ
            </span>
          </div>
          <DialogTitle className="mt-2 font-display text-2xl font-light text-espresso-foreground">
            Order & Takeaway
          </DialogTitle>
          <DialogDescription className="mt-1 text-xs text-espresso-foreground/75">
            Dine-in · Kerbside Pickup · No-contact Delivery · Freshly Made to Order
          </DialogDescription>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-6 py-5">
          {isConfirmed ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                Order Received by Khaas Kitchen!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you, <strong>{name}</strong>! We are preparing your {mode} order. Estimated
                prep time is <strong>15–25 minutes</strong>.
              </p>
              <div className="mt-6 rounded-lg border bg-card p-4 text-left text-sm space-y-2">
                <p className="font-semibold text-foreground">Order Summary ({mode}):</p>
                <div className="divide-y text-xs">
                  {selectedItems.length > 0 ? (
                    selectedItems.map((item) => (
                      <div key={item.id} className="flex justify-between py-1.5">
                        <span>{item.name}</span>
                        <span className="font-semibold">x {quantities[item.id]}</span>
                      </div>
                    ))
                  ) : (
                    <p className="py-1 text-muted-foreground">Custom / Chef's Special Order</p>
                  )}
                </div>
                {addressOrCar && (
                  <p className="pt-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Instructions:</span> {addressOrCar}
                  </p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </button>
                <button type="button" onClick={handleReset} className="btn btn-primary">
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service mode tabs */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  Choose Service Option
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMode("Dine-in")}
                    className={`flex flex-col items-center justify-center gap-1 rounded-lg border p-2.5 text-xs transition-colors ${
                      mode === "Dine-in"
                        ? "border-primary bg-primary text-primary-foreground font-semibold"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    <UtensilsCrossed className="h-4 w-4" />
                    <span>Dine-in</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("Kerbside pickup")}
                    className={`flex flex-col items-center justify-center gap-1 rounded-lg border p-2.5 text-xs transition-colors ${
                      mode === "Kerbside pickup"
                        ? "border-primary bg-primary text-primary-foreground font-semibold"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    <Car className="h-4 w-4" />
                    <span>Kerbside</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("No-contact delivery")}
                    className={`flex flex-col items-center justify-center gap-1 rounded-lg border p-2.5 text-xs transition-colors ${
                      mode === "No-contact delivery"
                        ? "border-primary bg-primary text-primary-foreground font-semibold"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    <Package className="h-4 w-4" />
                    <span>Delivery</span>
                  </button>
                </div>
              </div>

              {/* Menu items list */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    Select Items from Khaas Menu
                  </label>
                  {totalItemCount > 0 && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent">
                      {totalItemCount} {totalItemCount === 1 ? "item" : "items"} selected
                    </span>
                  )}
                </div>
                <div className="mt-2 divide-y rounded-lg border bg-card/50">
                  {MENU_ITEMS.map((item) => {
                    const count = quantities[item.id] || 0;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 transition hover:bg-card"
                      >
                        <div className="pr-3">
                          <p className="font-medium text-sm text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">{item.desc}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {count > 0 && (
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, -1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                          )}
                          {count > 0 && (
                            <span className="w-5 text-center text-sm font-semibold">{count}</span>
                          )}
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            aria-label={`Add ${item.name}`}
                            className={`flex h-7 items-center justify-center gap-1 rounded-full px-2.5 text-xs font-medium transition ${
                              count > 0
                                ? "border border-border bg-background hover:bg-secondary"
                                : "bg-primary text-primary-foreground hover:bg-accent"
                            }`}
                          >
                            <Plus className="h-3 w-3" />
                            {count === 0 ? "Add" : ""}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact and address fields */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="ord-name"
                    className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                  >
                    Your Name *
                  </label>
                  <input
                    id="ord-name"
                    type="text"
                    required
                    placeholder="e.g. Gurpreet Kaur"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ord-phone"
                    className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                  >
                    Contact Phone *
                  </label>
                  <input
                    id="ord-phone"
                    type="tel"
                    required
                    placeholder="e.g. 074310 00069"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="ord-details"
                  className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                >
                  {mode === "Kerbside pickup"
                    ? "Vehicle Model & Color (for kerbside handover)"
                    : mode === "No-contact delivery"
                    ? "Delivery Address in Jalandhar"
                    : "Table or Seating Preference"}
                </label>
                <input
                  id="ord-details"
                  type="text"
                  placeholder={
                    mode === "Kerbside pickup"
                      ? "e.g. White Swift / PB 08... parked in front"
                      : mode === "No-contact delivery"
                      ? "e.g. House No. 42, Model Town, Jalandhar"
                      : "e.g. Window side booth"
                  }
                  value={addressOrCar}
                  onChange={(e) => setAddressOrCar(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="ord-notes"
                  className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                >
                  Special Kitchen Notes (Optional)
                </label>
                <input
                  id="ord-notes"
                  type="text"
                  placeholder="e.g. Extra hot coffee, Less spicy pasta, No onions"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="btn btn-primary w-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  Send Order via WhatsApp
                </button>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-primary bg-primary/10 px-3 py-2.5 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    {isSubmitting ? "Submitting..." : "Submit to Café Kitchen"}
                  </button>
                  <a
                    href={site.phoneHref}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2.5 text-xs font-semibold hover:bg-secondary transition"
                  >
                    <Phone className="h-4 w-4" />
                    Call {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
