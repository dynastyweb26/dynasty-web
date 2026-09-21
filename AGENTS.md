# AGENTS.md — Dynasty Web site

Instructions for AI coding agents working on this repo.
Read this fully before making any change.

## Working rules

- **Audit before editing.** Read the relevant files first and state what you'll change and why before changing it.
- **One commit per discrete change**, with a clear conventional message (`feat:`, `fix:`, `style:`, `refactor:`).
- **Testing happens on Vercel preview deploys**, not localhost. Make sure `npm run build` passes.
- **No new dependencies** without explicit approval. No Tailwind, no UI libraries, no CSS-in-JS. Styling lives in `app/globals.css` using the existing tokens and class conventions.
- **Never introduce new colors, fonts, radii, or easing curves.** Use the tokens below. If something truly needs a new token, stop and ask.

## Stack

- Next.js App Router, plain JavaScript (no TypeScript)
- Single page marketing layout with `/privacy` subpage
- Favicon (`app/icon.js`) and OG image (`app/opengraph-image.js`) generated with `next/og`
- Deployed on Vercel

## Brand in one line

Warm, editorial, craftsman-premium digital solutions studio for local businesses. It should feel like a well-made printed piece or a heritage brand, **not** a SaaS template. Restraint is the point.

## Color tokens (defined in `:root`)

| Token | Value | Use |
|---|---|---|
| `--cream` | `#faf4e9` | Page background ("paper") |
| `--cream-2` | `#f5ecdb` | Subtle alt surface |
| `--cream-3` | `#efe3cd` | Hover fill on light surfaces |
| `--card` | `#fffdf8` | Card background |
| `--ink` | `#241d15` | Primary text, dark sections, primary button |
| `--ink-2` | `#4a3f31` | Body / secondary text |
| `--ink-soft` | `#6b5f4d` | Muted text, meta, footer |
| `--gold` | `#b07d1e` | Accent on light backgrounds (eyebrows, italic emphasis, links) |
| `--gold-2` | `#c9992f` | Secondary gold |
| `--gold-bright` | `#e0b64a` | Accent on dark backgrounds, selection color |
| `--line` | `rgba(36,29,21,0.12)` | Default borders/dividers |
| `--line-strong` | `rgba(36,29,21,0.22)` | Button borders, hover borders |

Rules:
- Never use pure black (`#000`) or pure white (`#fff`) for text or backgrounds. Ink is warm brown-black; light surfaces are cream.
- Gold is an accent, never a large fill. On light backgrounds use `--gold`; on dark (`--ink`) backgrounds use `--gold-bright`.
- Background warmth comes from faint radial gold glows. Keep them subtle. No loud gradients, no purple/blue anything.

## Typography

- **Display: Fraunces** (`var(--font-display)`), used for headlines, brand name, product names, stats, and the contact email.
  - Headlines use **weight 400** (light and elegant, not bold), tight line-height (1.03–1.18), and negative letter-spacing (`-0.02em` to `-0.025em`).
  - Sizes use `clamp()` for fluid scaling.
- **Body: Inter** (`var(--font-body)`), 17px base, line-height 1.6.
- **Signature move:** one word or short phrase per headline is wrapped in `<em>` and renders *italic gold*. Use it once per headline, max. Never on body text.
- **Eyebrows:** `.eyebrow` class, 12px Inter 600, uppercase, `0.18em` tracking, gold, with a short gold rule before it. Each section opens with one.

## Layout & spacing

- Content width: `.wrap` (max `--maxw: 1080px`, 22px side padding).
- Sections: `.section` with fluid vertical padding `clamp(56px, 9vw, 104px)`.
- Radius: `--radius: 18px` for cards, `26px` for dark studio blocks, `999px` (pill) for buttons, badges, and nav CTA.

## Motion

- Easing: always `var(--ease)` (`cubic-bezier(0.22, 1, 0.36, 1)`).
- Scroll reveal: add class `reveal` to an element. Hidden state is gated behind `.js` class so no-JS visitors still see content.
- Always respect `prefers-reduced-motion`.
- Motion stays subtle: small lifts, fades, and nudges. No parallax, bouncing, or scroll-jacking.

## Voice & copy

- Plain-spoken, confident, respectful of local business owners and tradespeople. Short sentences.
- Avoid buzzwords ("leverage," "seamless," "revolutionize," "AI-powered platform").
- Don't mention our tech stack in client-facing copy.
