import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import logo from "@/assets/logo.jpg";
import {
  FileText,
  ArrowLeft,
  Calendar,
  Phone,
  Clock,
  AlertTriangle,
  CreditCard,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Khaas (ਖਾਸ) Jalandhar" },
      {
        name: "description",
        content:
          "Terms and Conditions for Khaas Cafe in Signature Tower, Jawahar Nagar, Jalandhar. Table reservations, dine-in policies, and dietary guidelines.",
      },
    ],
  }),
  component: TermsAndConditions,
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

function TermsAndConditions() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header />

        <main className="mx-auto max-w-4xl px-5 py-12 md:py-20">
          {/* Page Heading */}
          <div className="border-b pb-8">
            <div className="flex items-center gap-2 text-accent">
              <FileText className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Guest Agreement & Guidelines
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {lastUpdated} · Khaas (ਖਾਸ), Signature Tower, Jawahar Nagar, Jalandhar
            </p>
          </div>

          {/* Content sections */}
          <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                1. General Overview
              </h2>
              <p>
                Welcome to <strong>Khaas (ਖਾਸ)</strong>. By visiting our cafe, reserving tables,
                or ordering food and beverages through our channels, you agree to comply with
                these Terms & Conditions. Our mission is to maintain a warm, welcoming, and relaxed
                environment for all coffee lovers and diners in Jalandhar.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                2. Table Reservations & Holding Policy
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Grace Period:</strong> Reserved tables will be held
                  for a maximum of <strong>15 minutes</strong> past your scheduled reservation time. If you
                  anticipate being delayed, please call us so our host can adjust your seating.
                </li>
                <li>
                  <strong className="text-foreground">Large Gatherings:</strong> For parties of 8 or more,
                  we recommend contacting us at least 24 hours in advance to ensure preferred seating arrangement.
                </li>
                <li>
                  <strong className="text-foreground">Seating Availability:</strong> Specific seating areas
                  (indoor lounge, window booth, outdoor) are honored subject to availability and weather conditions.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                3. Food Allergens & Dietary Notice
              </h2>
              <p>
                Our menu features fresh dairy (including artisanal burrata cheese), gluten, nuts, and
                herbal seasonings.
              </p>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-foreground">
                <p className="font-semibold text-amber-800 dark:text-amber-200">
                  Important Allergen Advisory:
                </p>
                <p className="mt-1 text-muted-foreground">
                  If you or anyone in your party has severe food allergies (such as lactose intolerance,
                  gluten sensitivity, or peanut allergies), please inform your server or baristas before
                  placing your order. We will take every reasonable precaution in preparing your meal.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                4. Pricing, Billing & Payment Methods
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>All prices listed on our menu are in Indian Rupees (INR) and are inclusive/subject to applicable Goods and Services Tax (GST).</li>
                <li>We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards, and Cash.</li>
                <li>Item availability and seasonal specials may vary based on daily fresh kitchen sourcing.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                5. Cafe Etiquette & Atmosphere
              </h2>
              <p>
                Khaas is designed as a peaceful, aesthetic sanctuary. We kindly request our guests to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Use headphones when listening to audio or taking business calls on laptops/phones.</li>
                <li>Refrain from bringing outside food or beverages into the cafe premises.</li>
                <li>Respect the comfort and privacy of fellow diners, especially when taking photographs or social media reels.</li>
              </ul>
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
