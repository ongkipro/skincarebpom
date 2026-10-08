/**
 * The register of native Astro landing pages.
 *
 * A native landing page is a real route file — `src/pages/<slug>.astro` — built
 * and deployed with the Worker. Adding an entry here is what makes the CMS
 * aware of it: the admin can see it, copy its link, and hand it a product page.
 * Without an entry the route still answers on its URL, but the operator has no
 * way to know it exists.
 *
 * **This is a manifest, not discovery.** Cloudflare Workers bundles routes and
 * cannot enumerate `src/pages/` at runtime, so the list is written down and
 * compiled in. `validateNativeLandingPages` fails the build on a duplicate or
 * an incomplete entry rather than shipping a register that misrepresents the
 * site.
 *
 * To add one:
 *   1. create `src/pages/<slug>.astro` (see `docs/LANDING-PAGES.md`);
 *   2. add its entry below, with `slug` matching the filename exactly;
 *   3. deploy. The CMS picks it up on the next landing-page list load, or
 *      within the hour from the scheduled re-sync — the sitemap with it.
 *
 * To remove one: delete both. Removing only the file leaves a register entry
 * pointing at a 404; removing only the entry leaves an unlisted live URL.
 */
export type NativeLandingPage = {
  slug: string;
  title: string;
  productSlug: string;
  description: string;
  /** Optional list thumbnail (root-relative or https). Without it the lists
   *  show the product's photo. */
  image?: string;
  /** A page can be registered before it is ready to be linked. */
  isActive?: boolean;
};

export const nativeLandingPages: NativeLandingPage[] = [
  {
    "slug": "lip-serum",
    "title": "Beauty Of Angel — Lip Serum Pencerah & Pelembab Bibir",
    "productSlug": "lip-serum",
    "description": "Landing page promosi resmi Beauty Of Angel — Lip Serum Pencerah & Pelembab Bibir.",
    "isActive": true
  },
  {
    "slug": "lip-serum-b3",
    "title": "Beauty Of Angel Lip Serum — Promo Spesial B3",
    "productSlug": "lip-serum",
    "description": "Landing page promosi resmi Beauty Of Angel Lip Serum — Promo Spesial B3.",
    "isActive": true
  },
  {
    "slug": "lip-serum-b6",
    "title": "Beauty Of Angel Lip Serum — Promo Spesial B6",
    "productSlug": "lip-serum",
    "description": "Landing page promosi resmi Beauty Of Angel Lip Serum — Promo Spesial B6.",
    "isActive": true
  },
  {
    "slug": "lip-serum-b7",
    "title": "Beauty Of Angel Lip Serum — Promo Spesial B7",
    "productSlug": "lip-serum",
    "description": "Landing page promosi resmi Beauty Of Angel Lip Serum — Promo Spesial B7.",
    "isActive": true
  },
  {
    "slug": "lip-serum-b8",
    "title": "Beauty Of Angel Lip Serum — Promo Spesial B8",
    "productSlug": "lip-serum",
    "description": "Landing page promosi resmi Beauty Of Angel Lip Serum — Promo Spesial B8.",
    "isActive": true
  },
  {
    "slug": "lip-serum-b11",
    "title": "Beauty Of Angel Lip Serum — Promo Spesial B11",
    "productSlug": "lip-serum",
    "description": "Landing page promosi resmi Beauty Of Angel Lip Serum — Promo Spesial B11.",
    "isActive": true
  },
  {
    "slug": "lip-serum-b12",
    "title": "Beauty Of Angel Lip Serum — Promo Spesial B12",
    "productSlug": "lip-serum",
    "description": "Landing page promosi resmi Beauty Of Angel Lip Serum — Promo Spesial B12.",
    "isActive": true
  },
  {
    "slug": "glow-soap",
    "title": "Beauty Of Angel — Glow Soap Sabun Batang Retinol & Niacinamide",
    "productSlug": "glowsoap",
    "description": "Landing page promosi resmi Beauty Of Angel — Glow Soap Sabun Batang Retinol & Niacinamide.",
    "isActive": true
  },
  {
    "slug": "glow-soap-b3",
    "title": "Beauty Of Angel Glow Soap — Promo Spesial B3",
    "productSlug": "glowsoap",
    "description": "Landing page promosi resmi Beauty Of Angel Glow Soap — Promo Spesial B3.",
    "isActive": true
  },
  {
    "slug": "glow-soap-b7",
    "title": "Beauty Of Angel Glow Soap — Promo Spesial B7",
    "productSlug": "glowsoap",
    "description": "Landing page promosi resmi Beauty Of Angel Glow Soap — Promo Spesial B7.",
    "isActive": true
  },
  {
    "slug": "glow-soap-b8",
    "title": "Beauty Of Angel Glow Soap — Promo Spesial B8",
    "productSlug": "glowsoap",
    "description": "Landing page promosi resmi Beauty Of Angel Glow Soap — Promo Spesial B8.",
    "isActive": true
  }
];

/**
 * Other top-level route files this install serves that are not landing pages —
 * a legacy slug that 301s to a renamed page, say. A CMS landing page on one of
 * these slugs would save and never be reachable, because the route file
 * answers first, so the CMS refuses them. Every entry in `nativeLandingPages`
 * is refused the same way without being repeated here.
 */
export const installRouteSlugs: string[] = [];
