import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site, menu, reviewsData, MenuItem } from "@/lib/site-config";
import { ReservationDialog } from "@/components/ReservationDialog";
import { OrderDialog } from "@/components/OrderDialog";
import { MenuItemDialog } from "@/components/MenuItemDialog";
import hero from "@/assets/hero.jpg";
import food from "@/assets/food.jpg";
import coffee from "@/assets/coffee.jpg";
import friends from "@/assets/friends.jpg";
import atmosphere from "@/assets/atmosphere.jpg";
import logo from "@/assets/logo.jpg";
import {
  Phone,
  Calendar,
  MapPin,
  Copy,
  ExternalLink,
  MessageSquare,
  Star,
  ArrowRight,
  Utensils,
  Coffee,
  Check,
  ShoppingBag,
  Car,
  Package,
  Sparkles,
  Instagram,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

const TITLE = "Khaas (ਖਾਸ) Jalandhar | Coffee, Food & Café Experience";
const DESC =
  "Discover Khaas (ਖਾਸ) in Jawahar Nagar, Jalandhar. Explore coffee, food, the café experience, and options for visiting, reservations, and takeaway.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Khaas (ਖਾਸ)",
          telephone: "+917431000069",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Signature Tower, Jawahar Nagar",
            addressLocality: "Jalandhar",
            addressRegion: "Punjab",
            postalCode: "144001",
            addressCountry: "IN",
          },
          acceptsReservations: true,
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["Our Story", "#story"],
  ["Experience", "#experience"],
  ["Reviews", "#reviews"],
  ["Instagram", "#instagram"],
  ["Visit Us", "#visit"],
] as const;

function Img({
  src,
  alt,
  w,
  h,
  className = "",
  eager,
  caption = "@khaas.cafe",
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
  eager?: boolean;
  caption?: string;
}) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
      {caption && (
        <figcaption className="absolute bottom-2 left-2 rounded-xs bg-background/85 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-muted-foreground backdrop-blur-xs">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Logo({ invert }: { invert?: boolean }) {
  return (
    <span
      className={`flex items-center gap-2.5 ${
        invert ? "text-espresso-foreground" : "text-foreground"
      }`}
    >
      <img
        src={logo}
        alt="Khaas Cafe"
        className="h-7 w-7 rounded-full object-cover border border-accent/40 shadow-xs"
      />
      <span className="flex items-baseline gap-2">
        <span className="font-display text-2xl font-medium tracking-tight">Khaas</span>
        <span className="text-accent">|</span>
        <span lang="pa" className="font-gurmukhi text-xl font-bold">
          ਖਾਸ
        </span>
      </span>
    </span>
  );
}

function Header({ onOpenReservation }: { onOpenReservation: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const handleNavClick = (h: string) => {
    setOpen(false);
    const element = document.querySelector(h);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/95 backdrop-blur transition-all ${
        scrolled ? "py-2.5 shadow-sm" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" aria-label="Khaas home" className="transition hover:opacity-85">
          <Logo />
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8 text-sm font-medium">
            {nav.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(h);
                  }}
                  className="transition hover:text-accent"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenReservation}
            className="btn btn-primary hidden sm:inline-flex shadow-sm"
          >
            <Calendar className="h-4 w-4" />
            Reserve a Table
          </button>
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t bg-background/95 backdrop-blur lg:hidden">
          <ul className="flex flex-col px-5 py-3">
            {nav.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(h);
                  }}
                  className="block py-3 font-display text-xl transition hover:text-accent"
                >
                  {l}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenReservation();
                }}
                className="btn btn-primary w-full"
              >
                <Calendar className="h-4 w-4" />
                Reserve a Table
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-4xl leading-[1.05] font-light md:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

function MenuSection({
  tab,
  setTab,
  onItemSelect,
  onOpenOrder,
}: {
  tab: string;
  setTab: (t: string) => void;
  onItemSelect: (item: MenuItem & { categoryTitle?: string }) => void;
  onOpenOrder: (item?: string) => void;
}) {
  const cat = menu.find((c) => c.id === tab) || menu[0];

  return (
    <Section id="menu" className="bg-card">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="eyebrow">The Menu</p>
          <H2 className="mt-3 max-w-3xl">Coffee, plates & small indulgences.</H2>
        </div>
        <button
          type="button"
          onClick={() => onOpenOrder()}
          className="btn btn-primary self-start md:self-end shadow-sm"
        >
          <ShoppingBag className="h-4 w-4" />
          Order Online / Takeaway
        </button>
      </div>

      <div
        role="tablist"
        aria-label="Menu categories"
        className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none"
      >
        {menu.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={tab === c.id}
            onClick={() => setTab(c.id)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
              tab === c.id
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "border-border hover:border-foreground bg-background/50 hover:bg-background"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <Img
          src={cat.id === "coffee" ? coffee : food}
          alt={
            cat.id === "coffee"
              ? "Iced coffee and cappuccino on a marble counter"
              : "Sourdough toast topped with burrata, tomatoes and basil"
          }
          w={1024}
          h={1280}
          className="aspect-[4/5] rounded-2xl border"
        />
        <div role="tabpanel" className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="font-display text-3xl font-light">{cat.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Click any item to view or order
              </span>
            </div>
            <ul className="mt-4 divide-y">
              {cat.items.map((i) => (
                <li
                  key={i.name}
                  onClick={() => onItemSelect({ ...i, categoryTitle: cat.title })}
                  className="group flex cursor-pointer items-start justify-between py-5 px-3 -mx-3 rounded-xl transition hover:bg-background/80"
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2.5">
                      <p className="font-display text-2xl font-medium transition group-hover:text-accent">
                        {i.name}
                      </p>
                      {i.tag && (
                        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                          {i.tag}
                        </span>
                      )}
                    </div>
                    {i.description && (
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {i.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center self-center shrink-0">
                    <span className="rounded-full border border-border bg-background p-2 text-muted-foreground opacity-60 transition group-hover:border-accent group-hover:text-accent group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-border bg-background/50 p-4">
            <p className="text-sm text-muted-foreground">
              A curated selection from our daily menu. Looking for seasonal bakes or beverages?
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => onOpenOrder("Special Order")}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Ask About Today's Specials
              </button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold hover:bg-secondary transition"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Chef's Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Index() {
  const year = new Date().getFullYear();
  const [reservationOpen, setReservationOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderMode, setOrderMode] = useState<"Dine-in" | "Kerbside pickup" | "No-contact delivery">("Kerbside pickup");
  const [orderInitialItem, setOrderInitialItem] = useState<string | undefined>(undefined);
  const [selectedMenuItem, setSelectedMenuItem] = useState<(MenuItem & { categoryTitle?: string }) | null>(null);
  const [menuItemDialogOpen, setMenuItemDialogOpen] = useState(false);
  const [menuTab, setMenuTab] = useState(menu[0].id);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const handleOpenOrder = (itemName?: string, mode?: "Dine-in" | "Kerbside pickup" | "No-contact delivery") => {
    if (itemName) setOrderInitialItem(itemName);
    if (mode) setOrderMode(mode);
    setOrderOpen(true);
  };

  const handleMenuItemSelect = (item: MenuItem & { categoryTitle?: string }) => {
    setSelectedMenuItem(item);
    setMenuItemDialogOpen(true);
  };

  const handleCopyAddress = () => {
    const fullAddress = `${site.address[0]} ${site.address[1]}`;
    navigator.clipboard.writeText(fullAddress);
    toast.success("Address Copied!", {
      description: fullAddress,
    });
  };

  const jumpToMenuTab = (tabId: string) => {
    setMenuTab(tabId);
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pb-16 md:pb-0">
      <Header onOpenReservation={() => setReservationOpen(true)} />

      <main>
        {/* Hero */}
        <section id="home" className="px-5 pt-10 md:pt-16">
          <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="pb-6">
              <p className="eyebrow">Coffee shop · Jawahar Nagar, Jalandhar</p>
              <h1 className="mt-5 font-display text-5xl leading-[0.98] font-light md:text-7xl">
                Make your everyday moments <em className="text-accent">Khaas</em>{" "}
                <span lang="pa" className="font-gurmukhi font-bold">
                  (ਖਾਸ)
                </span>
                .
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
                Good coffee, delicious food, and a welcoming space to slow down, catch up, and
                enjoy the moment in the heart of Jalandhar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#menu" className="btn btn-primary shadow-sm">
                  Explore the Menu
                </a>
                <button
                  type="button"
                  onClick={() => setReservationOpen(true)}
                  className="btn btn-outline"
                >
                  <Calendar className="h-4 w-4" />
                  Reserve a Table
                </button>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
              <div className="mt-5 flex items-center gap-4 text-sm">
                <button
                  type="button"
                  onClick={() => handleOpenOrder()}
                  className="inline-flex items-center gap-1 font-semibold text-accent underline underline-offset-4 hover:opacity-85"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Order Takeaway & Delivery →
                </button>
                <span className="text-muted-foreground">·</span>
                <a
                  href={site.phoneHref}
                  className="text-muted-foreground hover:text-foreground transition underline underline-offset-4"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <Img
              src={hero}
              alt="A warm café interior with a latte on a wooden table"
              w={1600}
              h={1104}
              eager
              className="aspect-[4/3] rounded-3xl border shadow-sm"
            />
          </div>
        </section>

        {/* Intro */}
        <Section id="story">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Our Story</p>
              <H2 className="mt-3">A little place for something special.</H2>
              <p
                lang="pa"
                className="mt-8 font-gurmukhi text-[8rem] leading-none font-bold text-secondary select-none"
                aria-hidden="true"
              >
                ਖਾਸ
              </p>
            </div>
            <div className="space-y-6 text-lg">
              <p>
                Khaas is a coffee shop in Jalandhar where you can enjoy artisanal coffee, comforting
                food, and an aesthetic café atmosphere — whether it's a quick morning break or a
                long evening catch-up.
              </p>
              <p className="text-muted-foreground">What our guests often mention:</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Warm, cozy ambience",
                  "Aesthetic surroundings",
                  "Coffee & food guests enjoy",
                  "Polite, helpful staff",
                  "Quick service",
                ].map((t) => (
                  <li
                    key={t}
                    onClick={() => {
                      const idx = reviewsData.findIndex((r) => r.theme === t);
                      if (idx !== -1) {
                        setActiveReviewIndex(idx);
                        document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="cursor-pointer border-l-2 border-accent pl-3 text-base transition hover:translate-x-1 hover:text-accent font-medium"
                  >
                    {t} <span className="text-xs text-muted-foreground">↗</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setReservationOpen(true)}
                  className="btn btn-primary"
                >
                  Experience Khaas Today
                </button>
                <a
                  href={`https://wa.me/917431000069?text=${encodeURIComponent(
                    "Hello Khaas team, I'd like to ask a few questions about your café!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Interactive Menu Section */}
        <MenuSection
          tab={menuTab}
          setTab={setMenuTab}
          onItemSelect={handleMenuItemSelect}
          onOpenOrder={handleOpenOrder}
        />

        {/* Highlights */}
        <Section>
          <H2 className="max-w-3xl">
            Made for your kind of moment{" "}
            <span lang="pa" className="font-gurmukhi font-bold">
              (ਖਾਸ)
            </span>
            .
          </H2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                src: coffee,
                t: "Specialty Coffee Pours",
                d: "From Gulabo Ji Latte to artisan cold coffee — expertly roasted and extracted with precision.",
                alt: "Barista-crafted specialty latte at Khaas Cafe",
                tabId: "coffee",
                btnLabel: "Explore Coffee Menu",
              },
              {
                src: food,
                t: "Sourdough & Artisanal Plates",
                d: "Slow morning breakfast spreads, Burrata toasts, and savory pastas crafted to savor.",
                alt: "Artisan sourdough and breakfast spread at Khaas Cafe",
                tabId: "toasts",
                btnLabel: "Explore Plates & Toasts",
              },
              {
                src: atmosphere,
                t: "Aesthetic Cafe Vibes",
                d: "Curated lighting, minimal tones, and a peaceful ambiance in Signature Tower, Jawahar Nagar.",
                alt: "Cozy and aesthetic interior seating at Khaas Cafe Jalandhar",
                tabId: "brunch",
                btnLabel: "Explore Cafe Experience",
              },
            ].map((card, i) => (
              <article
                key={card.t}
                className={`group flex flex-col justify-between rounded-2xl border bg-card/40 p-5 transition hover:shadow-md ${
                  i === 1 ? "md:mt-12" : ""
                }`}
              >
                <div>
                  <Img
                    src={card.src}
                    alt={card.alt}
                    w={1024}
                    h={1280}
                    className="aspect-[4/5] rounded-xl"
                  />
                  <h3 className="mt-5 font-display text-2xl font-medium">{card.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{card.d}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t">
                  <button
                    type="button"
                    onClick={() => jumpToMenuTab(card.tabId)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    {card.btnLabel} →
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenOrder(card.t)}
                    className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    Quick Order
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" className="bg-espresso text-espresso-foreground">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Img
              src={friends}
              alt="Friends laughing over coffee and pasta in warm lamplight"
              w={1600}
              h={1008}
              className="aspect-[16/10] rounded-3xl"
            />
            <div>
              <p className="eyebrow">Experience</p>
              <H2 className="mt-3">Come for coffee. Stay for the feeling.</H2>
              <p className="mt-6 text-lg opacity-85 leading-relaxed">
                A relaxed spot to sit back, share a table and let the afternoon stretch a little
                longer in good company.
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-6 border-t border-espresso-foreground/20 pt-8">
                {[
                  "Coffee breaks",
                  "Catch-ups with friends",
                  "Brunch & casual meals",
                  "Relaxed dining",
                ].map((o) => (
                  <li
                    key={o}
                    onClick={() => setReservationOpen(true)}
                    className="group cursor-pointer font-display text-xl transition hover:text-accent"
                  >
                    <span>{o}</span>
                    <span className="block text-xs font-sans text-espresso-foreground/60 group-hover:text-accent">
                      Book a spot →
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setReservationOpen(true)}
                  className="btn btn-primary bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm"
                >
                  <Calendar className="h-4 w-4" />
                  Reserve a Table
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenOrder()}
                  className="btn border border-espresso-foreground/40 text-espresso-foreground hover:bg-espresso-foreground hover:text-espresso"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Order Takeaway
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Reviews */}
        <Section id="reviews">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow">Reviews</p>
              <p className="mt-3 font-display text-8xl font-light">
                {site.rating}
                <span className="text-accent"> ★</span>
              </p>
              <p className="mt-2 text-muted-foreground">
                {site.reviewCount}+ verified reviews on Google Maps
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={site.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-xs"
                >
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  Read Google Reviews
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-xs"
                >
                  Write a Review ★
                </a>
              </div>
            </div>
            <div>
              <H2 className="text-3xl md:text-4xl">What people talk about</H2>
              <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Click any highlight to read what customers shared:
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {reviewsData.map((t, idx) => (
                  <button
                    key={t.theme}
                    type="button"
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      activeReviewIndex === idx
                        ? "border-accent bg-accent text-accent-foreground shadow-sm"
                        : "border-border bg-background hover:bg-secondary"
                    }`}
                  >
                    ✦ {t.theme}
                  </button>
                ))}
              </div>

              {/* Dynamic Review Spotlight */}
              <div className="mt-6 rounded-2xl border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: reviewsData[activeReviewIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <blockquote className="mt-3 text-lg italic text-foreground leading-relaxed">
                  "{reviewsData[activeReviewIndex].quote}"
                </blockquote>
                <div className="mt-4 flex items-center justify-between border-t pt-3 text-sm text-muted-foreground">
                  <span>— {reviewsData[activeReviewIndex].author}</span>
                  <span className="text-xs bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-medium">
                    Verified Guest Review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Reserve + Order */}
        <Section className="bg-card">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="eyebrow">Reservations</p>
              <H2 className="mt-3 text-3xl md:text-5xl">
                Save a seat for someone with something special.
              </H2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Planning a gathering, birthday celebration, or quiet brunch? Reserve a table in
                advance or call our hosts directly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setReservationOpen(true)}
                  className="btn btn-primary shadow-sm"
                >
                  <Calendar className="h-4 w-4" />
                  Reserve a Table
                </button>
                <a href={site.phoneHref} className="btn btn-outline">
                  <Phone className="h-4 w-4" />
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div>
              <p className="eyebrow">Order & Takeaway</p>
              <H2 className="mt-3 text-3xl md:text-5xl">Your Khaas moments, your way.</H2>
              <p className="mt-3 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Select your service option:
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {[
                  { mode: "Dine-in" as const, icon: Utensils },
                  { mode: "Kerbside pickup" as const, icon: Car },
                  { mode: "No-contact delivery" as const, icon: Package },
                ].map(({ mode, icon: Icon }) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => handleOpenOrder(undefined, mode)}
                    className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary hover:bg-primary/5 hover:text-primary active:scale-95"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    <span>{mode}</span>
                    <span className="text-xs opacity-60">→</span>
                  </button>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Freshly prepared to order. Kerbside handover right to your car at Signature Tower or
                delivery across Jalandhar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenOrder()}
                  className="btn btn-primary"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Start Your Order Now
                </button>
                <a
                  href={`https://wa.me/917431000069?text=${encodeURIComponent(
                    "Hello Khaas team, I would like to order takeaway!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-emerald-600 text-emerald-800 dark:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Instagram Moments from @khaas.cafe */}
        <Section id="instagram" className="border-t bg-card/30">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Instagram className="h-4 w-4" />
                <p className="eyebrow">Instagram · @khaas.cafe</p>
              </div>
              <H2 className="mt-3">Captured at Khaas.</H2>
              <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">
                As Special As You. Sourced beans, handcrafted lattes, artisanal sourdough, and warm people in Jawahar Nagar, Jalandhar.
              </p>
            </div>
            <a
              href="https://www.instagram.com/khaas.cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-white self-start md:self-end shadow-xs"
            >
              <Instagram className="h-4 w-4" />
              Follow @khaas.cafe on Instagram ↗
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              {
                src: coffee,
                title: "Gulabo Ji Latte",
                desc: "Precision roasted espresso & botanical rose notes",
                likes: "565+",
                url: "https://www.instagram.com/reel/DYevrfrvSzT/",
                badge: "Specialty Pour",
              },
              {
                src: food,
                title: "Slow Morning Brunch",
                desc: "Burrata toast, eggs & table full of favourites",
                likes: "250+",
                url: "https://www.instagram.com/reel/DZVIV9_TYR5/",
                badge: "Morning Mood",
              },
              {
                src: hero,
                title: "Opening Day Moments",
                desc: "Our welcoming space at Signature Tower",
                likes: "220+",
                url: "https://www.instagram.com/reel/DXVsemWkz5_/",
                badge: "Cafe Launch",
              },
              {
                src: friends,
                title: "People & Stories",
                desc: "Every plate has a story, every corner a connection",
                likes: "185+",
                url: "https://www.instagram.com/reel/DX6UiARzOia/",
                badge: "Connections",
              },
              {
                src: atmosphere,
                title: "Aesthetic Corner",
                desc: "Warm lighting and peaceful ambiance in Jalandhar",
                likes: "340+",
                url: "https://www.instagram.com/reel/DbDaCMLJt0L/",
                badge: "Aesthetics",
              },
            ].map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-65 transition group-hover:opacity-90" />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-background/85 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-foreground backdrop-blur-xs">
                    {p.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3 text-white/90 opacity-0 transition group-hover:opacity-100">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3.5 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-accent font-semibold">
                    <Heart className="h-3 w-3 fill-accent" />
                    <span>{p.likes} likes</span>
                  </div>
                  <p className="mt-0.5 font-display text-sm font-medium leading-snug">{p.title}</p>
                  <p className="mt-1 text-[11px] text-white/70 line-clamp-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Visit */}
        <Section id="visit">
          <p className="eyebrow">Visit Us</p>
          <H2 className="mt-3">Find your Khaas moment.</H2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-8">
              <address className="not-italic text-lg">
                <strong className="font-display text-2xl font-medium">
                  Khaas (
                  <span lang="pa" className="font-gurmukhi">
                    ਖਾਸ
                  </span>
                  )
                </strong>
                <br />
                {site.address[0]}
                <br />
                {site.address[1]}
              </address>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition active:scale-95"
                >
                  <Copy className="h-3.5 w-3.5 text-accent" />
                  Copy Address
                </button>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Open in Google Maps ↗
                </a>
              </div>
              <p>
                <span className="text-muted-foreground">Phone: </span>
                <a
                  href={site.phoneHref}
                  className="font-semibold underline underline-offset-4 hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <div>
                <h3 className="font-display text-2xl font-light">Opening hours</h3>
                <p className="mt-2 text-base font-medium">{site.hoursNote}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Open 7 days a week. Please call ahead for holiday timings or large gatherings.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
                <a href={site.phoneHref} className="btn btn-outline">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <button
                  type="button"
                  onClick={() => setReservationOpen(true)}
                  className="btn btn-outline"
                >
                  <Calendar className="h-4 w-4" />
                  Reserve a Table
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                title="Map showing Khaas at Signature Tower, Jawahar Nagar, Jalandhar"
                src={site.mapEmbedUrl}
                loading="lazy"
                className="aspect-[4/3] w-full border-0"
              />
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <section className="bg-primary px-5 py-24 text-center text-primary-foreground">
          <h2 className="font-display text-4xl font-light md:text-6xl">
            Make today a little more Khaas.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm md:text-base opacity-90">
            Whether for your morning brew, quiet brunch, or an evening with friends, we're ready to
            welcome you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#menu"
              className="btn bg-background text-foreground hover:bg-accent hover:text-accent-foreground shadow-sm"
            >
              Explore the Menu
            </a>
            <button
              type="button"
              onClick={() => setReservationOpen(true)}
              className="btn border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Calendar className="h-4 w-4" />
              Reserve a Table
            </button>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-espresso px-5 py-14 text-espresso-foreground border-t border-espresso-foreground/10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Logo invert />
            <p className="text-sm opacity-80 leading-relaxed">
              {site.address[0]} {site.address[1]}
            </p>
            <p className="text-xs opacity-70">
              Hours: {site.hoursNote}
            </p>
            <a
              href={site.phoneHref}
              className="block text-sm font-semibold hover:text-accent transition"
            >
              {site.phoneDisplay}
            </a>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="rounded-full border border-espresso-foreground/30 px-3 py-1 text-xs hover:bg-espresso-foreground hover:text-espresso transition"
              >
                Copy Address
              </button>
              <a
                href={`https://wa.me/917431000069`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-500/50 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-300 hover:bg-emerald-900 transition"
              >
                WhatsApp Café
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-display text-base font-semibold text-espresso-foreground/90 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {nav.map(([l, h]) => (
                <li key={h}>
                  <a
                    href={h}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Links */}
          <div>
            <h4 className="font-display text-base font-semibold text-espresso-foreground/90 mb-3">
              Cafe & Community
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition"
                >
                  Directions on Google Maps ↗
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setReservationOpen(true)}
                  className="opacity-80 hover:opacity-100 hover:text-accent transition text-left"
                >
                  Reserve a Table
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleOpenOrder()}
                  className="opacity-80 hover:opacity-100 hover:text-accent transition text-left"
                >
                  Order Online & Takeaway
                </button>
              </li>
              <li>
                <a
                  href={site.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition"
                >
                  Customer Reviews (4.8 ★)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/khaas.cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 opacity-80 hover:opacity-100 hover:text-accent transition"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  Instagram (@khaas.cafe) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Policies & Legal */}
          <div>
            <h4 className="font-display text-base font-semibold text-espresso-foreground/90 mb-3">
              Policies & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition block"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-refund"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition block"
                >
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-delivery"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition block"
                >
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* FSSAI Compliance Strip */}
        <div className="mx-auto mt-10 max-w-7xl rounded-xl border border-espresso-foreground/20 bg-black/20 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex items-center justify-center rounded-md bg-white px-3 py-1 text-black font-extrabold tracking-tight text-xs shadow-xs shrink-0">
              <span className="font-extrabold text-[15px] tracking-tight text-emerald-800 lowercase">
                fssai
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-espresso-foreground flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Food Safety and Standards Authority of India (FSSAI) Compliant
              </p>
              <p className="text-[11px] opacity-75 mt-0.5">
                Lic. No. <span className="font-mono font-semibold text-espresso-foreground">{site.fssaiNumber}</span> · Signature Tower, Jawahar Nagar, Jalandhar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] opacity-75 text-center md:text-right">
            <span>Prepared in accordance with strict food hygiene, clean water & storage standards (Regulation 2011).</span>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="mx-auto mt-12 max-w-7xl border-t border-espresso-foreground/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-70">
          <p>© {year} Khaas (ਖਾਸ), Jalandhar. Photography & content courtesy of @khaas.cafe.</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-accent transition underline underline-offset-2">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-accent transition underline underline-offset-2">
              Terms
            </Link>
            <Link to="/cancellation-refund" className="hover:text-accent transition underline underline-offset-2">
              Refunds
            </Link>
            <Link to="/shipping-delivery" className="hover:text-accent transition underline underline-offset-2">
              Delivery
            </Link>
          </div>
        </div>
      </footer>

      {/* Mobile action bar */}
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-background/95 backdrop-blur text-sm font-semibold md:hidden shadow-lg"
      >
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-1.5 py-4 text-center hover:bg-secondary transition"
        >
          <Phone className="h-4 w-4 text-accent" />
          <span>Call</span>
        </a>
        <a
          href={site.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 border-x py-4 text-center hover:bg-secondary transition"
        >
          <MapPin className="h-4 w-4 text-accent" />
          <span>Directions</span>
        </a>
        <button
          type="button"
          onClick={() => setReservationOpen(true)}
          className="flex items-center justify-center gap-1.5 bg-primary py-4 text-center text-primary-foreground font-semibold hover:bg-accent transition"
        >
          <Calendar className="h-4 w-4" />
          <span>Reserve</span>
        </button>
      </nav>

      {/* Interactive Modals */}
      <ReservationDialog open={reservationOpen} onOpenChange={setReservationOpen} />
      <OrderDialog
        open={orderOpen}
        onOpenChange={setOrderOpen}
        defaultMode={orderMode}
        initialItem={orderInitialItem}
      />
      <MenuItemDialog
        item={selectedMenuItem}
        open={menuItemDialogOpen}
        onOpenChange={setMenuItemDialogOpen}
        onOrderNow={(itemName) => handleOpenOrder(itemName)}
        onReserveWithDish={(itemName) => {
          setReservationOpen(true);
        }}
      />
    </div>
  );
}
