import { describe, it, expect } from "vitest";
import { menu, ctaLink, site } from "@/lib/site-config";

describe("Khaas rules", () => {
  it("menu shows no prices", () => {
    const text = JSON.stringify(menu);
    expect(text).not.toMatch(/₹|Rs\.?|INR|\bprice\b/i);
    for (const c of menu) for (const i of c.items) expect(Object.keys(i)).not.toContain("price");
  });
  it("reserve falls back to phone when no URL configured", () => {
    const l = ctaLink(null, "Reserve a Table", "Call to Reserve");
    expect(l.href).toBe("tel:+917431000069");
    expect(l.placeholder).toBe(true);
  });
  it("phone is the supplied number", () => {
    expect(site.phoneDisplay).toBe("074310 00069");
  });
});
