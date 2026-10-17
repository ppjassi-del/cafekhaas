import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import logo from "@/assets/logo.jpg";
import {
  RotateCcw,
  ArrowLeft,
  Phone,
  CheckCircle,
  HelpCircle,
  Clock,
  Utensils,
  CreditCard,
} from "lucide-react";

export const Route = createFileRoute("/cancellation-refund")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy | Khaas (ਖਾਸ) Jalandhar" },
      {
        name: "description",
        content:
          "Cancellation and Refund Policy for Khaas Cafe in Signature Tower, Jawahar Nagar, Jalandhar. Learn about table reservation changes, order cancellations, and refund processing.",
      },
    ],
  }),
  component: CancellationRefund,
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

function CancellationRefund() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header />

        <main className="mx-auto max-w-4xl px-5 py-12 md:py-20">
          {/* Page Heading */}
          <div className="border-b pb-8">
            <div className="flex items-center gap-2 text-accent">
              <RotateCcw className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Customer Protection & Clarity
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Cancellation & Refund Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {lastUpdated} · Khaas (ਖਾਸ), Signature Tower, Jawahar Nagar, Jalandhar
            </p>
          </div>

          {/* Content sections */}
          <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                1. Table Reservation Cancellations
              </h2>
              <p>
                Plans change, and we understand! There are <strong>no penalties or fees</strong> for
                canceling or rescheduling a table reservation at Khaas.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  We kindly request guests to inform us at least <strong>1 to 2 hours in advance</strong> via
                  phone or WhatsApp so we can release the table to other waiting guests.
                </li>
                <li>
                  To cancel or modify your booking, simply call us at{" "}
                  <a href={site.phoneHref} className="text-accent underline font-medium">
                    {site.phoneDisplay}
                  </a>{" "}
                  or message us on WhatsApp.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Utensils className="h-5 w-5 text-accent" />
                2. Takeaway & Delivery Order Cancellations
              </h2>
              <p>
                Because all beverages and food items are prepared fresh to order with artisan ingredients:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Within 5 Minutes of Ordering:</strong> You can cancel
                  your order free of charge by calling the cafe kitchen immediately. If prepaid, a full refund
                  will be initiated.
                </li>
                <li>
                  <strong className="text-foreground">After Food Preparation Has Begun:</strong> Once our chefs
                  or baristas have started preparing your dish (typically 5 minutes after order placement),
                  cancellations cannot be accepted.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                3. Quality Assurance & Immediate Replacements
              </h2>
              <p>
                Our goal is that every meal and cup of coffee makes your day truly <em>Khaas</em>. In the rare event that:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>An incorrect item was delivered or handed over.</li>
                <li>Packaging was breached or food was damaged during transit.</li>
                <li>An item fails to meet our culinary quality standards.</li>
              </ul>
              <div className="rounded-xl border bg-card p-4 text-sm text-foreground space-y-1 mt-2">
                <p className="font-semibold text-accent">Our Immediate Resolution:</p>
                <p className="text-muted-foreground">
                  Please notify our staff immediately or send a photo via WhatsApp. We will promptly
                  replace the item with an expedited fresh order, or issue a 100% full refund.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                4. Refund Processing & Timelines
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">UPI & Digital Wallets:</strong> Refunds are processed
                  within <strong>24 to 48 hours</strong> back to the originating UPI account.
                </li>
                <li>
                  <strong className="text-foreground">Credit / Debit Cards:</strong> Refunds are typically
                  reflected in your bank statement within <strong>2 to 4 business days</strong>, depending
                  on your card issuer.
                </li>
                <li>
                  <strong className="text-foreground">Cash Orders:</strong> For kerbside pickup orders paid
                  in cash, refunds are provided immediately at the cafe counter.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-accent" />
                5. Assistance & Customer Support
              </h2>
              <p>
                For any order discrepancy, refund status check, or assistance:
              </p>
              <p className="text-foreground">
                <strong>Khaas (ਖਾਸ) Help Desk:</strong> Signature Tower, Jawahar Nagar, Jalandhar ·
                Phone:{" "}
                <a href={site.phoneHref} className="text-accent hover:underline font-semibold">
                  {site.phoneDisplay}
                </a>
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
