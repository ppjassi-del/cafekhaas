import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import logo from "@/assets/logo.jpg";
import {
  Truck,
  ArrowLeft,
  MapPin,
  Clock,
  Package,
  Car,
  CheckCircle,
  Phone,
  ShieldAlert,
} from "lucide-react";

export const Route = createFileRoute("/shipping-delivery")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy | Khaas (ਖਾਸ) Jalandhar" },
      {
        name: "description",
        content:
          "Shipping and Delivery Policy for Khaas Cafe in Signature Tower, Jawahar Nagar, Jalandhar. Details on delivery coverage, kerbside pickup, packaging, and delivery timelines.",
      },
    ],
  }),
  component: ShippingDelivery,
});

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur py-3.5 px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 transition hover:opacity-85">
          <img
            src={logo}
            alt="Khaas Cafe logo"
            className="h-8 w-8 rounded-full border border-accent/40 object-cover"
          />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-medium tracking-tight">Khaas</span>
            <span className="text-accent">|</span>
            <span lang="pa" className="font-gurmukhi text-xl font-bold">
              ਖਾਸ
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Cafe
          </Link>
          <a
            href={site.phoneHref}
            className="btn btn-outline text-xs hidden sm:inline-flex py-1.5 min-h-[2.4rem] px-4"
          >
            <Phone className="h-3.5 w-3.5" />
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

function ShippingDelivery() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header />

        <main className="mx-auto max-w-4xl px-5 py-12 md:py-20">
          {/* Page Heading */}
          <div className="border-b pb-8">
            <div className="flex items-center gap-2 text-accent">
              <Truck className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Service Options & Fulfillment
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Shipping & Delivery Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {lastUpdated} · Khaas (ਖਾਸ), Signature Tower, Jawahar Nagar, Jalandhar
            </p>
          </div>

          {/* Content sections */}
          <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                1. Delivery Coverage Area
              </h2>
              <p>
                Khaas Cafe provides direct local delivery across key neighborhoods in <strong>Jalandhar, Punjab</strong>, including:
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-foreground pt-1">
                {[
                  "Jawahar Nagar",
                  "Model Town",
                  "Shastri Nagar",
                  "BMC Chowk Area",
                  "Urban Estate Phase 1 & 2",
                  "Guru Nanak Mission",
                  "Defense Colony",
                  "Civil Lines",
                  "Jalandhar Cantt (Select areas)",
                ].map((area) => (
                  <li key={area} className="rounded-lg border bg-card/60 px-3 py-2 text-xs font-medium">
                    📍 {area}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground pt-1">
                For locations outside these core zones, please contact our dispatch team via WhatsApp or phone to confirm rider availability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                2. Estimated Preparation & Delivery Times
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Beverages & Coffee:</strong> 15 to 25 minutes preparation time.
                </li>
                <li>
                  <strong className="text-foreground">Sourdough Toasts, Pasta & Plates:</strong> 20 to 30 minutes freshly cooked.
                </li>
                <li>
                  <strong className="text-foreground">Total Delivery Window:</strong> Generally <strong>30 to 45 minutes</strong> from order placement, depending on peak rush hours and weather conditions.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Car className="h-5 w-5 text-accent" />
                3. Kerbside Pickup Service (Signature Tower)
              </h2>
              <p>
                Short on time or on your way to work? Use our convenient <strong>Kerbside Handover</strong>:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>Place your order via phone or WhatsApp with estimated arrival time.</li>
                <li>Pull up outside <strong>Signature Tower, Jawahar Nagar</strong>.</li>
                <li>Give our team a quick ring or WhatsApp message with your vehicle make/color.</li>
                <li>A member of our team will bring your freshly packaged order straight to your car.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Package className="h-5 w-5 text-accent" />
                4. Packaging & Hygiene Standards
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  All hot coffees and chilled beverages are packaged in spill-proof, insulated, food-grade drinkware.
                </li>
                <li>
                  Plates, pasta, and toasts are sealed in eco-friendly tamper-evident containers to preserve crispness and temperature.
                </li>
                <li>Cutlery, paper napkins, and condiment packets are provided with every order upon request.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-accent" />
                5. Delivery Charges & Conditions
              </h2>
              <p>
                Delivery fees (if applicable) are based on the delivery distance from Signature Tower and will be communicated transparently before you confirm your order. Minimum order values may apply for long-distance deliveries.
              </p>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card/40 py-8 px-5 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[12px] text-emerald-700 bg-white px-2 py-0.5 rounded border border-border">
              fssai
            </span>
            <span className="text-[11px] opacity-80">
              Lic. No. {site.fssaiNumber} · © {new Date().getFullYear()} Khaas (ਖਾਸ)
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition underline">
              Terms & Conditions
            </Link>
            <Link to="/cancellation-refund" className="hover:text-foreground transition underline">
              Cancellation & Refund
            </Link>
            <Link to="/shipping-delivery" className="hover:text-foreground transition underline">
              Shipping & Delivery
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
