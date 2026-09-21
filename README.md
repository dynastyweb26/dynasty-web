# Dynasty Web

Digital solutions studio in Forney, Texas building custom websites, local SEO, branding, and lead capture systems for small trade and service businesses. Makers of On It.

Founder: Brandon Fotsing Talla · [brandon@dynastyweb.co](mailto:brandon@dynastyweb.co)

## Services & Packages

- **Starter ($400)** — Custom website, responsive design, lead contact form, domain connection.
- **Pro Gold ($800 + $150/mo)** — Everything in Starter, local SEO, 2 Digital Solutions.
- **Pro Platinum ($1,500 + $250/mo)** — Featured tier, lead tracking CRM, 4 Digital Solutions, monthly support.
- **Pro Allstar Diamond ($2,500 + $400/mo)** — Full brand refresh, all Digital Solutions, quarterly strategy.

## In-House Software

- **On It** — Voice-powered invoicing for tradespeople. Live at [onit.dynastyweb.co](https://onit.dynastyweb.co).

## Environment Variables

For contact form email submission via EmailJS, set the following server-side environment variables in `.env.local`:

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

*Note: Build succeeds cleanly even if variables are omitted, gracefully falling back to brand direct email links.*

## Stack

- [Next.js](https://nextjs.org) (App Router)
- Fonts via `next/font` (Fraunces + Inter)
- OG image and favicon generated with `next/og`
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
