/**
 * The register of native Astro landing pages.
 *
 * A native landing page is a real route file — `src/pages/<slug>.astro` — built
 * and deployed with the Worker. Adding an entry here is what makes the CMS
 * aware of it: the admin can see it, copy its link, and hand it a product page.
 * Without an entry the route still answers on its URL, but the operator has no
 * way to know it exists.
 */
export type NativeLandingPage = {
  /** Must equal the route filename, and is the public path: `/<slug>`. */
  slug: string;
  /** Shown in the CMS list. */
  title: string;
  /** The product this page sells, by product slug. */
  productSlug: string;
  /** Shown in the CMS list beneath the title. */
  description: string;
  /** A page can be registered before it is ready to be linked. */
  isActive?: boolean;
};

export const nativeLandingPages: NativeLandingPage[] = [
  {
    slug: 'lip-serum',
    title: 'Beauty Of Angel — Lip Serum Pencerah & Pelembab Bibir',
    productSlug: 'lip-serum',
    description: 'Landing page resmi Beauty Of Angel Lip Serum BPOM NA18220113176 paket hemat.',
    isActive: true,
  },
  {
    slug: 'glow-soap',
    title: 'Beauty Of Angel — Glow Soap Retinol & Niacinamide',
    productSlug: 'glowsoap',
    description: 'Landing page resmi Beauty Of Angel Glow Soap sabun pencerah wajah & badan BPOM.',
    isActive: true,
  },
];
