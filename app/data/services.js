// ─────────────────────────────────────────────────────────────────────────
// SERVICE CATALOG — SINGLE SOURCE OF TRUTH
//
// This file is the ONLY place service names, descriptions, categories, and
// prices are defined. The configurator UI, the summary panel, and the contact
// prefill all read from here. Edit a price in one place and it changes
// everywhere.
//
// >>> PLACEHOLDER DATA <<<
// Every name, description, and price below is a placeholder. Replace all of it
// with the real Dynasty Web catalog. Prices are in whole US dollars.
//   monthly  — recurring monthly fee ("Monthly" total)
//   setup    — one-time onboarding fee ("Due today" total)
// A service with setup: 0 simply contributes nothing to the "Due today" total.
// ─────────────────────────────────────────────────────────────────────────

// Category order controls the order sections render in the configurator.
export const CATEGORIES = [
  { id: 'web', label: 'Web presence' },
  { id: 'automation', label: 'Automation' },
  { id: 'growth', label: 'Growth' },
  { id: 'care', label: 'Care & support' },
];

export const SERVICES = [
  // ── Web presence ──────────────────────────────────────────────
  {
    id: 'website',
    name: 'Contractor website',
    description: 'A custom site built around your trade and service area, made to turn visitors into calls.',
    category: 'web',
    monthly: 49,
    setup: 500,
  },
  {
    id: 'landing-page',
    name: 'Campaign landing page',
    description: 'A single focused page for a promotion or ad campaign, with one clear call to action.',
    category: 'web',
    monthly: 19,
    setup: 250,
  },
  // ── Automation ────────────────────────────────────────────────
  {
    id: 'quote-agent',
    name: 'AI quote assistant',
    description: 'Text a job description and get back a branded, professional quote in seconds.',
    category: 'automation',
    monthly: 79,
    setup: 400,
  },
  {
    id: 'booking',
    name: 'Online booking',
    description: 'Let customers request and confirm appointments without a phone call.',
    category: 'automation',
    monthly: 29,
    setup: 200,
  },
  // ── Growth ────────────────────────────────────────────────────
  {
    id: 'local-seo',
    name: 'Local search setup',
    description: 'Get found in your area with a tuned Google Business profile and local listings.',
    category: 'growth',
    monthly: 39,
    setup: 300,
  },
  {
    id: 'reviews',
    name: 'Review engine',
    description: 'Automatically ask happy customers for a review at the right moment.',
    category: 'growth',
    monthly: 25,
    setup: 150,
  },
  // ── Care & support ────────────────────────────────────────────
  {
    id: 'hosting',
    name: 'Hosting & maintenance',
    description: 'Fast, secure hosting with updates and backups handled for you.',
    category: 'care',
    monthly: 15,
    setup: 0,
  },
  {
    id: 'priority-support',
    name: 'Priority support',
    description: 'A direct line for changes and questions, answered first.',
    category: 'care',
    monthly: 35,
    setup: 0,
  },
];

// ─────────────────────────────────────────────────────────────────────────
// PARTNER LEVELS
//
// A badge computed purely from how many services are selected. Nothing is
// locked behind a level — every service is available to everyone; the level is
// recognition, not a gate. Thresholds are edited here.
//   min — the fewest selected services that earns this level
// Ordered low to high.
// ─────────────────────────────────────────────────────────────────────────
export const PARTNER_LEVELS = [
  { id: 'starter', label: 'Starter', min: 1 },
  { id: 'gold', label: 'Pro Gold', min: 3 },
  { id: 'platinum', label: 'Pro Platinum', min: 5 },
];

/**
 * The partner level earned by a given number of selected services.
 * Returns null below the first threshold (nothing selected yet).
 */
export function partnerLevelForCount(count) {
  let earned = null;
  for (const level of PARTNER_LEVELS) {
    if (count >= level.min) earned = level;
  }
  return earned;
}

/**
 * The next level up from the current count, and how many more services it
 * needs — for the progress indicator. Returns null once the top level is
 * reached.
 */
export function nextPartnerLevel(count) {
  for (const level of PARTNER_LEVELS) {
    if (count < level.min) return { level, remaining: level.min - count };
  }
  return null;
}
