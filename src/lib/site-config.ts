// Edit business details here. Reservation/order URLs are null until verified destinations exist.
export const site = {
  name: "Khaas",
  gurmukhi: "ਖਾਸ",
  phoneDisplay: "074310 00069",
  phoneHref: "tel:+917431000069",
  whatsAppHref: "https://wa.me/917431000069",
  address: ["Signature Tower, Jawahar Nagar,", "Jalandhar, Punjab 144001, India"],
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Khaas+Signature+Tower+Jawahar+Nagar+Jalandhar",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Signature+Tower+Jawahar+Nagar+Jalandhar&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Khaas+Signature+Tower+Jawahar+Nagar+Jalandhar#reviews",
  rating: 4.8,
  reviewCount: 182,
  hoursNote: "8:00 AM – 10:00 PM (Daily)",
  instagramUrl: "https://www.instagram.com/khaas.cafe",
  fssaiNumber: "12124999000182",
  fssaiNotice: "FSSAI Registered · Food Safety and Standards Authority of India",
  reservationUrl: null as string | null,
  orderUrl: null as string | null,
};

export type CtaLink = { href: string; label: string; placeholder: boolean; external: boolean };

export function ctaLink(url: string | null, label: string, fallbackLabel: string): CtaLink {
  if (url) return { href: url, label, placeholder: false, external: true };
  return { href: site.phoneHref, label: fallbackLabel, placeholder: true, external: false };
}

export type MenuItem = {
  name: string;
  description?: string;
  tag?: string;
};

export type MenuCategory = { id: string; title: string; items: MenuItem[] };

// Items supplied by the owner. No prices by request.
export const menu: MenuCategory[] = [
  {
    id: "coffee",
    title: "Coffee & Beverages",
    items: [
      {
        name: "Cold Coffee",
        description: "Smooth, velvety blend of artisan roast espresso and chilled creamy milk.",
        tag: "Signature Beverage",
      },
      {
        name: "Coffee with Sandwich and Fries",
        description: "Freshly brewed hot or cold coffee paired with toasted artisan sandwich and golden crisp fries.",
        tag: "Best Value Combo",
      },
    ],
  },
  {
    id: "toasts",
    title: "Toasts & Sandwiches",
    items: [
      {
        name: "Burrata Sourdough Toast",
        description: "Creamy artisanal burrata cheese on warm toasted sourdough with blistered cherry tomatoes and fresh basil drizzle.",
        tag: "Chef's Special",
      },
      {
        name: "Sandwich options",
        description: "Gourmet grilled and toasted sandwiches crafted with garden-fresh greens, melting cheese and house sauces.",
        tag: "Guest Favorite",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta & Savoury Plates",
    items: [
      {
        name: "White Sauce Spaghetti",
        description: "Al dente spaghetti tossed in rich, velvety garlic parmesan cream sauce with aromatic herbs.",
        tag: "House Classic",
      },
      {
        name: "Flame Kiss Chicken",
        description: "Char-grilled tender chicken cuts spiced with Punjabi aromatics and house smoky glaze.",
        tag: "Signature Savoury",
      },
      {
        name: "Pasta options",
        description: "Handcrafted pasta tossed in your choice of marinara, aglio e olio, or creamy rosée sauce.",
        tag: "Customizable",
      },
    ],
  },
  {
    id: "brunch",
    title: "Brunch",
    items: [
      {
        name: "Burrata Sourdough Toast",
        description: "Slow morning indulgence with creamy burrata, ripe tomatoes and herb emulsion on sourdough.",
        tag: "Brunch Star",
      },
      {
        name: "Coffee with Sandwich and Fries",
        description: "Hearty brunch combo to jumpstart your day in cozy café ambiance.",
        tag: "Popular Morning Pick",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Specials",
    items: [
      {
        name: "Ask our team about today's specials",
        description: "Daily rotating artisanal bakes, sweet indulgences, and seasonal creations prepared fresh.",
        tag: "Daily Specials",
      },
    ],
  },
];

export const reviewsData = [
  {
    theme: "Pleasant atmosphere",
    quote: "The warm lighting, wooden accents, and gentle ambient music make Khaas the coziest cafe in Jawahar Nagar.",
    author: "Simran K.",
    rating: 5,
  },
  {
    theme: "Delicious food",
    quote: "The Burrata Sourdough Toast is out of this world! Everything feels freshly made and thoughtfully plated.",
    author: "Amanjot S.",
    rating: 5,
  },
  {
    theme: "Smooth, enjoyable coffee",
    quote: "Hands down the best cold coffee in Jalandhar. Rich, smooth, not overly sweet, just perfect espresso balance.",
    author: "Rohan M.",
    rating: 5,
  },
  {
    theme: "Polite and helpful staff",
    quote: "The staff is remarkably polite and patient. Quick service even when the café was packed on a Sunday afternoon.",
    author: "Harpreet B.",
    rating: 5,
  },
  {
    theme: "Positive brunch and dining experiences",
    quote: "We spent 2 hours catching up over pasta and iced lattes. A welcoming haven to slow down and enjoy good company.",
    author: "Navdeep G.",
    rating: 5,
  },
];
