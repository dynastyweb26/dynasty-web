# Dynasty Web

Single-page marketing site for **Dynasty Web** — a solo-run product studio in
Forney, Texas, building subscription software for small trade businesses.

Founder: Brandon Fotsing Talla · [brandon@dynastyweb.co](mailto:brandon@dynastyweb.co)

## Products

- **On It** — voice-powered invoicing for tradespeople and home-service pros.
  Live at [onit.dynastyweb.co](https://onit.dynastyweb.co).
- **T-Vault** — load management and invoicing for owner-operator truckers. In beta.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- No CMS, no database — a single static page
- Fonts via `next/font` (Fraunces + Inter), self-hosted at build time
- OG image and favicon generated at build with `next/og` (no binary assets)
- Deployed on [Vercel](https://vercel.com)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```
