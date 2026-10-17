# Khaas (ਖਾਸ) — single-page café website

Build the one-page site described in the brief at the home page, following every section (header through footer) and accuracy rule.

## Look and feel
- Palette: warm ivory/cream background, espresso brown text, caramel/terracotta accents, charcoal contrast, small sage touches.
- Type: Fraunces (editorial display headings), Manrope (body), Noto Sans Gurmukhi / Mukta Mahee for ਖਾਸ.
- Magazine-style layouts: asymmetric image/text, large headings, generous whitespace, thin rules instead of heavy cards, minimal motion (respects reduced motion).

## Sections (in order)
Header (sticky, compacts on scroll, mobile hamburger, Reserve button) → Hero → Introduction → Menu (5 category tabs, supplied dishes only, no prices) → Highlights → Ambience → Visit occasions → Reviews (4.8 ★, 182 reviews, themes only, no invented quotes) → Reservation → Ordering & takeaway (Dine-in, Kerbside pickup, No-contact delivery) → Location & contact (map embed, Directions, Call) → Opening hours ("closes at 10 PM" per listing + check-before-visiting note) → Final CTA → Footer (current year). Mobile sticky bar: Call / Directions / Reserve.

## Links and placeholders
- Call: tel:+917431000069. Directions: Google Maps search link for the address.
- Reservation and ordering links have no verified destination: kept in one settings file, buttons fall back to "Call to reserve/order" and are marked as placeholders.
- Images: generated atmospheric illustrations-style placeholders, labeled "Placeholder image", fixed aspect ratios, lazy loaded, easy to swap.

## Technical details
- Rewrite `src/routes/index.tsx`; sections as components in `src/components/khaas/`; config in `src/lib/site-config.ts` (phone, address, hours, reservationUrl/orderUrl = null, menu data).
- Design tokens in `src/styles.css` (oklch), fonts via `<link>` in `__root.tsx`.
- SEO title/description from the brief in index head(); LocalBusiness/CafeOrCoffeeShop JSON-LD with only supplied facts.
- Small test asserting no prices appear in menu data and links fall back when URLs unset.
