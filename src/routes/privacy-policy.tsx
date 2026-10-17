import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import logo from "@/assets/logo.jpg";
import {
  ShieldCheck,
  ArrowLeft,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Lock,
  Eye,
  FileText,
  MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Khaas (ਖਾਸ) Jalandhar" },
      {
        name: "description",
        content:
          "Privacy Policy for Khaas Cafe in Signature Tower, Jawahar Nagar, Jalandhar. Learn how we handle your personal data for reservations and orders.",
      },
    ],
  }),
  component: PrivacyPolicy,
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

function PrivacyPolicy() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header />

        <main className="mx-auto max-w-4xl px-5 py-12 md:py-20">
          {/* Page Heading */}
          <div className="border-b pb-8">
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Legal & Transparency
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {lastUpdated} · Khaas (ਖਾਸ), Signature Tower, Jawahar Nagar, Jalandhar
            </p>
          </div>

          {/* Content sections */}
          <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Eye className="h-5 w-5 text-accent" />
                1. Information We Collect
              </h2>
              <p>
                At <strong>Khaas (ਖਾਸ)</strong>, we respect your personal privacy. We only collect
                information necessary to provide you with seamless dining, table reservations, and
                takeaway services.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-foreground">Table Reservations:</strong> Name, phone number,
                  preferred date/time, guest count, and seating or special occasion notes.
                </li>
                <li>
                  <strong className="text-foreground">Takeaway & Orders:</strong> Name, contact phone,
                  delivery address (or vehicle details for kerbside handover), and dietary preferences.
                </li>
                <li>
                  <strong className="text-foreground">Customer Inquiries:</strong> Messages, feedback,
                  or special kitchen requests communicated via phone or WhatsApp.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                2. How We Use Your Information
              </h2>
              <p>Your details are used strictly for service fulfillment:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Confirming table bookings and notifying you of waitlist updates.</li>
                <li>Dispatching order confirmations and preparation updates for takeaway orders.</li>
                <li>Answering menu questions, dietary allergen inquiries, and customer feedback.</li>
                <li>Improving our cafe offerings, service speed, and guest hospitality.</li>
              </ul>
              <p className="font-semibold text-foreground">
                We never sell, rent, or trade your personal contact details to any third-party marketing agencies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <Lock className="h-5 w-5 text-accent" />
                3. Data Security & Storage
              </h2>
              <p>
                We maintain appropriate physical and electronic precautions to protect your personal
                information against unauthorized access, loss, or misuse. Reservation logs and
                order communications are handled securely by authorized cafe staff.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                4. Third-Party Services
              </h2>
              <p>
                When you interact with third-party tools such as <strong>Google Maps</strong> (for directions),{" "}
                <strong>WhatsApp</strong> (for fast reservations or takeaway chat), or delivery platforms,
                those interactions are governed by their respective privacy terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                5. Contact & Privacy Inquiries
              </h2>
              <p>
                If you have questions about our privacy practices, wish to update your contact details,
                or would like your past reservation information deleted from our records, please reach out to us:
              </p>
              <div className="rounded-xl border bg-card p-5 text-sm space-y-2 text-foreground">
                <p>
                  <strong>Khaas (ਖਾਸ) Specialty Cafe</strong>
                </p>
                <p className="text-muted-foreground">
                  Signature Tower, Jawahar Nagar, Jalandhar, Punjab 144001, India
                </p>
                <p>
                  Phone:{" "}
                  <a href={site.phoneHref} className="text-accent hover:underline font-semibold">
                    {site.phoneDisplay}
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/917431000069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                  >
                    +91 74310 00069
                  </a>
                </p>
              </div>
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
