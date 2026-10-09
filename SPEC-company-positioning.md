# SPEC: Company-Grade Positioning Pass — dynastyweb.co

**Repo:** `dynastyweb26/dynasty-web` (audited at `79ebacd`, merge of PR #5 `feat/software-first-positioning`)
**Owner:** Deffeu · **Implementer:** coding agent (Jules / Claude Code)
**Goal:** A buyer at a company like a regional manufacturer or distributor lands on the site after a meeting and sees a software studio that builds for companies — not a local web shop selling $400 sites. Nothing structural is rebuilt; this is copy, hierarchy, and three visual fixes.

---

## 0. How to use this spec

1. Read `AGENTS.md` first. Every rule there still applies (tokens, fonts, easing, no new deps, no Tailwind).
2. Work on one branch: `feat/company-positioning`.
3. **One commit per numbered item in Section 3**, in the order listed, using the commit message given.
4. Copy in this spec is **final**. Paste it exactly — straight apostrophes in JS strings, `&apos;` inside JSX text, as the codebase already does.
5. Do not change anything not listed. If something seems missing, stop and ask; don't improvise.
6. Batch all commits, then test once on the Vercel preview deploy (Section 4). No localhost.

---

## 1. Decisions for Deffeu (answer before handing this off)

Each has a default. The spec is written for the default; the alternative is noted where it changes an item.

| # | Decision | Default in this spec | If you choose the alternative |
|---|---|---|---|
| D1 | Location label in hero + metadata | **"Dallas–Fort Worth"** (Forney is in the DFW metro; reads bigger without being untrue). Footer and contact sidebar still say "Forney, Texas". | Replace every "Dallas–Fort Worth" in this spec with "Forney, TX". |
| D2 | Packages visibility | **Removed from nav and home page.** `/packages` stays live, linked from Solutions, footer, and FAQ. | Skip item 3.8's nav change and item 3.7's removal of the tier-ladder section. |
| D3 | NDA FAQ entry ("Will you sign an NDA?" → "Yes") | **Included.** Only keep it if you will actually sign a client's NDA. | Delete that FAQ object in item 3.11. |
| D4 | New case study: window-treatment quoting system for Cyril | **Skipped** until you supply 2–3 sanitized screenshots of a quote (no customer name, address, phone, or supplier name). Also confirm you're comfortable calling the current scripted workflow a "quoting system." | Do item 3.13. |
| D5 | Legal name in footer | **"Dynasty Web"** stays until the LLC is filed. | After filing: change footer bottom bar to `© {year} Dynasty Web LLC · All rights reserved.` |

---

## 2. Global rules for this pass

### 2.1 Terminology

| Replace | With | Notes |
|---|---|---|
| "your business" (reader-facing) | "your company" | Everywhere in copy. |
| "small business", "local business", "service businesses" | removed or "companies" | Including metadata keywords. |
| "Get a quote" (CTA label) | "Start a project" | Nav, mobile menu, hero, CTA bands. Solutions-page toggle buttons ("Add to quote", "Request a quote") stay. |
| "Digital Solutions" (as a product name) | "services" / "supporting services" | Code identifiers (`solutions`, `getTier`, etc.) **do not change**. |
| "Business Photography" | "Brand Photography" | Display name only; `id: "photography"` stays. |
| "home service pro(s)" | "field-service teams" | Except on `/on-it`, which is a product page for tradespeople and keeps its voice. |

### 2.2 Allowed exceptions (do NOT change these)

- "business hours", "one business day" — standard terms.
- "Google Business Profile" — product name.
- Form/API internals: state key `businessName`, request body key `businessName`, EmailJS template variable `business_name`. **Only the visible label changes.** Renaming these breaks the email template.
- `/on-it` page body copy (tradesperson voice is correct for that product). Only the fixes in item 3.12 apply there.
- Function/variable names in `data/site.js`.

### 2.3 Banned words (new copy must not introduce these)
leverage, seamless, revolutionize, cutting-edge, AI-powered, solutions provider, synergy, world-class, "!" in any heading or banner.

---

## 3. Commits (in order)

---

### 3.1 `docs: update agent brief for company positioning`

**File:** `AGENTS.md`

1. Replace the paragraph under `## Brand in one line`:
   - **Before:** `Warm, editorial, craftsman-premium digital solutions studio for local businesses. It should feel like a well-made printed piece or a heritage brand, **not** a SaaS template. Restraint is the point.`
   - **After:** `Warm, editorial, craftsman-premium custom software studio. Primary reader: a decision-maker at a company commissioning custom software (owner, operations lead, manager). Secondary reader: smaller clients buying a website or supporting services. It should feel like a well-made printed piece or a heritage brand, **not** a SaaS template. Restraint is the point.`
2. Replace the first bullet under `## Voice & copy`:
   - **Before:** `- Plain-spoken, confident, respectful of local business owners and tradespeople. Short sentences.`
   - **After:** `- Plain-spoken, confident, and precise. Address the reader's company ("your company"), never "your business" or "small business". Short sentences.`
3. Append this bullet to the end of `## Voice & copy`:
   - `- Primary CTA label is "Start a project". Exceptions to the "company" rule: "business hours", "business day", "Google Business Profile", and the /on-it product page.`

**File:** `README.md`
- Replace line 3:
  - **Before:** `Digital solutions studio in Forney, Texas building custom websites, local SEO, branding, and lead capture systems for small trade and service businesses. Makers of On It.`
  - **After:** `Custom software studio based in Forney, Texas, designing and building web applications, quoting and operations tools, and customer-facing apps for companies, plus websites and supporting services. Makers of On It.`

**Acceptance:** No code changes in this commit.

---

### 3.2 `copy: company-grade metadata and OG image`

**File:** `app/layout.js` — replace the `metadata` fields below. Everything else in the object stays.

```js
title: {
  default: "Dynasty Web — Custom Software Built Around Your Company",
  template: "%s · Dynasty Web",
},
description:
  "Software studio in the Dallas–Fort Worth area designing and building custom web applications, quoting and operations tools, and customer-facing apps for companies. Makers of On It.",
keywords: [
  "Dynasty Web",
  "custom software development",
  "custom web application development",
  "software development company Texas",
  "custom software Dallas Fort Worth",
  "quoting software development",
  "customer portal development",
  "On It",
  "Forney Texas",
  "web design Forney TX",
],
```
`openGraph.title` and `twitter.title`: `"Dynasty Web — Custom Software Built Around Your Company"`
`openGraph.description` and `twitter.description`: `"Custom software, web applications, and operations tools designed around how your company works. A software studio in Texas."`

**File:** `app/opengraph-image.js`
- Line 3 `alt`: `"Dynasty Web — Custom software built around your company"`
- Headline text (currently `Software the trades actually keep open.`): `Custom software built around your company.`
- Subline text (currently `Custom software and web apps, built around your business.`): `Web applications, quoting systems, and customer-facing apps.`
- No style changes.

**Acceptance:** `npm run build` passes. Preview URL `/opengraph-image` renders the new headline on two lines max.

---

### 3.3 `copy: rewrite service, case study, and process data`

**File:** `data/site.js` — copy-only edits. Do not change ids, prices, cadences, notes, flags, or functions.

**`packages[0].pitch` (starter):** `"A custom website, starting at $400."`

**`solutions` — `description` (and `name` where listed):**

| id | Field | New value |
|---|---|---|
| `custom-software` | description | `"Software designed and built around how your company operates: customer-facing apps, quoting and ordering systems, portals, scheduling, and internal dashboards. Scoped and quoted per project."` |
| `photography` | name | `"Brand Photography"` |
| `photography` | description | `"On-location photography of your team, facilities, fleet, and completed work."` |
| `social-media` | description | `"We plan, create, and publish content that shows your real work, every month."` |
| `analytics` | description | `"One dashboard showing how many people found you, where they came from, and how many reached out."` |
| `branding` | description | `"Vector logo files, color palette, typography guidelines, and vehicle and signage assets."` |
| `local-seo` | description | `"Google Business Profile optimization, directory listings, and on-site tuning so you show up in local search."` |

`website`, `invoicing`, `email-marketing` descriptions: unchanged.

**`work` — Cyril (`id: "cyril"`):**
- `industry`: `"Field Services · Website & Local Search"`
- `shortDescription`: `"A growing handyman and door company with a strong reputation and no online presence. Now customers see the work before they call."`
- `caseStudy.problem`: `"Cyril Handyman & Door was earning a strong reputation for quality work, but had no website and no social presence. People who heard about the company had nowhere to see the work or check it out before calling."`
- `caseStudy.whatWeBuilt`: unchanged.
- `caseStudy.result`: `"The work now makes the first impression before the phone rings. Customers see real projects, trust what they're getting, and can reach the company in one tap. Word of mouth now leads somewhere."`

**`work` — Vydale:** unchanged.

**`work` — On It (`id: "onit"`):**
- `industry`: `"Field-service invoicing app"`
- `shortDescription`: `"Built as custom software for one field-service company, now a standalone product. Say the job, send the invoice, get paid."`
- `caseStudy.problem`: `"Cyril's crew was writing up invoices at night after long days on job sites, and off-the-shelf invoicing apps didn't fit how they work."`
- `caseStudy.whatWeBuilt`: `"A custom voice-to-invoice web app built around the crew's workflow: describe the job out loud, and On It writes and sends a branded invoice with a pay link."`
- `caseStudy.result`: `"Invoices go out before the truck leaves the driveway. It worked well enough that we turned it into a product for field-service teams everywhere."`

**`process` — replace the whole array:**
```js
process: [
  {
    step: "01",
    title: "Discovery",
    description: "We learn how your company operates today: the workflow, the people involved, the systems already in place, and where time and money leak out.",
  },
  {
    step: "02",
    title: "Proposal & Scope",
    description: "You receive a written proposal with scope, milestones, timeline, and pricing for each phase before any work begins.",
  },
  {
    step: "03",
    title: "Build in Phases",
    description: "We ship working versions at each milestone so your team can test with real data and shape the product as it comes together.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy, onboard your team, and stay on under a support plan for maintenance, fixes, and improvements.",
  },
],
```

**Add a new top-level key `capabilities`** (place it directly after `solutions`):
```js
// Home page "What We Build" tiles. No prices; these describe custom-software work.
capabilities: [
  {
    id: "customer-apps",
    name: "Customer-Facing Apps",
    description: "Tools your customers use directly: product configurators, portals, quote requests, and order tracking, under your brand.",
  },
  {
    id: "operations-tools",
    name: "Quoting & Operations Tools",
    description: "Replace spreadsheets and manual lookups with systems that price, quote, schedule, and track work accurately.",
  },
  {
    id: "internal-systems",
    name: "Internal Systems & Dashboards",
    description: "One place for your team to see orders, jobs, and numbers, built around how your company already operates.",
  },
  {
    id: "web-presence",
    name: "Websites & Supporting Services",
    description: "Fast, custom websites plus local search, branding, photography, and marketing, for clients who need them alongside a build.",
  },
],
```

**`faq` — replace the whole array** (order matters):
```js
faq: [
  {
    question: "What kind of software do you build?",
    answer: "Custom web applications built around one company's operations: customer-facing apps and product configurators, quoting and ordering systems, portals, scheduling, and internal dashboards. They run in any browser, on phone or desktop. If part of your company runs on spreadsheets, manual lookups, or tools that don't talk to each other, that's usually where we start.",
  },
  {
    question: "How is custom software priced?",
    answer: "Every project is scoped before it's priced. After discovery you receive a written proposal with scope, milestones, timeline, and pricing for each phase, so you can approve a first phase before committing to the full build.",
  },
  {
    question: "Who owns the software?",
    answer: "You do. You own the source code, designs, and content created for your project.",
  },
  {
    question: "Will you sign an NDA?",
    answer: "Yes. We're glad to sign your NDA before discovery begins.",
  },
  {
    question: "What happens after launch?",
    answer: "We stay on under a support plan covering hosting, maintenance, security updates, fixes, and improvements. Support terms, including response times, are set out in your proposal.",
  },
  {
    question: "How long does a build take?",
    answer: "Custom software depends on scope, and your proposal includes a timeline for each phase. Websites take 1 to 2 weeks from kickoff; Diamond-tier website projects take 2 to 3 weeks.",
  },
  {
    question: "How much does a website cost?",
    answer: "Websites start at $400 for up to 3 pages: home, services or gallery, and contact. That includes mobile-friendly design, a contact form, basic on-page SEO, Google Search Console setup, and 1 revision round. You supply the text, logo, and photos. Hosting and maintenance is $90/mo. Extra pages, copywriting, local SEO, branding, and other services are add-ons.",
  },
  {
    question: "Can I buy a service on its own?",
    answer: "Yes. Any service can be purchased on its own, no website required. Package tiers and perks apply to website projects.",
  },
  {
    question: "How do website packages work?",
    answer: "You pay per service added to a website project. Adding more services automatically moves the project into higher tiers (Pro Gold, Pro Platinum, Pro Allstar Diamond) with included perks, at no added tier fee.",
  },
  {
    question: "How do I pay?",
    answer: "We invoice electronically once your proposal and contract are approved. Nothing is charged on this website.",
  },
],
```
(If D3 = no, delete the NDA object.)

**Acceptance:** Build passes. Solutions page shows "Brand Photography". Contact page FAQ shows 10 questions in the order above.

---

### 3.4 `feat: company-grade home hero with product visual`

**File:** `components/HomeClient.js` — replace the entire `{/* FULL VIEWPORT HERO */}` `<section>` with:

```jsx
{/* FULL VIEWPORT HERO */}
<section className="hero-full-viewport">
  <div className="hero-radial-glow" aria-hidden="true" />

  <div className="wrap hero-wrap">
    <div className="hero-copy">
      <div className="eyebrow hero-eyebrow">
        <span>Software Studio · Dallas–Fort Worth</span>
      </div>

      <h1 className="hero-headline">
        Custom software tailored to <em>your</em> company.
      </h1>

      <p className="hero-subhead">
        We design and build the software your company runs on: customer-facing apps, quoting and ordering tools, and internal systems, shaped around how your team actually works. Built for you, owned by you.
      </p>

      <div className="hero-cta-group">
        <Link href="/contact" className="btn btn-primary hero-btn">
          Start a project
          {/* keep the existing right-arrow <svg> exactly as is */}
        </Link>
        <Link href="/#work" className="btn btn-ghost hero-btn">
          See our work
        </Link>
      </div>

      <a href="#built-by-dynasty" className="hero-scroll-cue" aria-label="Scroll to our software">
        <span className="scroll-text">See what we&apos;ve shipped</span>
        {/* keep the existing down-arrow <svg> exactly as is */}
      </a>
    </div>

    <div className="hero-visual">
      <Image
        src="/onit/04-expenses.png"
        alt=""
        width={797}
        height={1600}
        sizes="(min-width: 1000px) 260px, 180px"
        className="hero-phone hero-phone-back"
      />
      <Image
        src="/onit/01-chat.png"
        alt="On It, custom software Dynasty Web built for a field-service company, turning a spoken job into an invoice"
        width={883}
        height={1600}
        sizes="(min-width: 1000px) 300px, 210px"
        priority
        className="hero-phone hero-phone-front"
      />
      <Link href="/on-it" className="hero-visual-caption">
        On It · built for one client, now a live product →
      </Link>
    </div>
  </div>
</section>
```
- Add `import Image from "next/image";` at the top.
- The faded "Dynasty" watermark `<div className="faded-word-background">` is **removed** (it fights the new visual).

**File:** `app/globals.css`
1. Delete the `.faded-word-background { … }` rule block.
2. Replace the `.hero-wrap { … }` block with:
```css
.hero-wrap {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  width: 100%;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (min-width: 1000px) {
  .hero-wrap {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 56px;
  }
}
```
3. In `.hero-headline`, change `font-size` to `clamp(38px, 5.6vw, 62px)`. Nothing else in that rule.
4. In `.hero-subhead`, change `max-width` to `44ch`. Nothing else.
5. Add after `.hero-scroll-cue`:
```css
.hero-visual {
  position: relative;
  height: clamp(360px, 46vw, 540px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-phone {
  position: absolute;
  height: 86%;
  width: auto;
  filter: drop-shadow(0 24px 40px rgba(36, 29, 21, 0.18));
}

.hero-phone-back {
  transform: translateX(-30%) rotate(-6deg) scale(0.86);
}

.hero-phone-front {
  transform: translateX(16%) rotate(3deg);
}

.hero-visual-caption {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-2);
  transition: border-color 0.2s var(--ease), color 0.2s var(--ease);
}

.hero-visual-caption:hover {
  border-color: var(--gold);
  color: var(--gold);
}

@media (max-width: 999px) {
  .hero-visual {
    height: 380px;
  }
}

@media (max-width: 480px) {
  .hero-visual {
    height: 320px;
  }
  .hero-visual-caption {
    font-size: 12px;
  }
}
```
Only existing tokens and the existing shadow color are used. No new colors.

**Acceptance:**
- ≥1000px: text left, two phones right, caption pill centered under phones, nothing overlaps the nav.
- <1000px: phones stack below the scroll cue; caption never wraps or overflows at 375px.
- No horizontal page scroll at 375px.

---

### 3.5 `copy: On It spotlight framed as a client case study`

**File:** `components/OnItSpotlight.js`
- Eyebrow text: `Built In-House`
- `<h2>`: `Built for one <em>client</em>. Now a product.`
- Paragraph (replace entire text):
  `On It began as custom software for a single field-service company whose crew was writing up invoices at night after every job. We mapped how the crew actually works and built around it: describe the job out loud, and a branded invoice with a pay link goes out on the spot. It worked well enough that we turned it into a standalone product. That&apos;s how we approach every build: solve one company&apos;s real problem first, and build it to last.`
- Button label `See On It` stays.
- Move the three inline `style={{…}}` objects into a class: add `.onit-intro-block .section-title { margin: 12px 0 16px; }` and `.onit-intro-p { font-size: 16px; color: var(--ink-2); line-height: 1.6; margin-bottom: 28px; }` to `globals.css`, and remove the inline styles. (Same visual result.)

**Acceptance:** Section looks identical in layout to before; only the words changed.

---

### 3.6 `copy: rename client websites to selected work`

**File:** `components/PastWork.js`
- Eyebrow: `Selected Work`
- `<h2>`: `Work that <em>earns</em> its keep.`
- Subtitle: `Custom software and the web presence around it, built for clients who needed something off-the-shelf tools couldn&apos;t give them.`
- Bottom button: label `Discuss your project`, `href="/contact"`. Keep its arrow svg.

**Acceptance:** `/#work` anchor still scrolls to this section.

---

### 3.7 `refactor: replace pricing teasers on home with capabilities`

**File:** `components/HomeClient.js`

1. **Delete** the entire `{/* 5. PACKAGE PROGRESSION (TIER LADDER TEASER) */}` section. (If D2 = keep, skip this step.)
2. Remove the line `const featuredSolutions = siteData.solutions.slice(0, 2);`
3. Replace the `{/* 4. DIGITAL SOLUTIONS TEASER */}` section with:
```jsx
{/* 4. WHAT WE BUILD (CAPABILITIES) */}
<section className="section teaser-section">
  <div className="wrap">
    <div className="eyebrow">
      <span>What We Build</span>
    </div>
    <div className="section-head-split">
      <h2 className="section-title">
        Software for the way your <em>company</em> runs.
      </h2>
      <p className="section-subtitle">
        We build custom software end to end, from the first workflow map to launch and support. Websites and supporting services are available alongside.
      </p>
    </div>

    <div className="bento-grid teaser-bento">
      {siteData.capabilities.map((item) => (
        <div key={item.id} className="bento-tile">
          <h3 className="bento-tile-title">{item.name}</h3>
          <p className="bento-tile-desc">{item.description}</p>
        </div>
      ))}
    </div>

    <div className="teaser-action-row">
      <Link href="/solutions" className="btn btn-ghost">
        View all solutions
        {/* keep existing right-arrow svg */}
      </Link>
    </div>
  </div>
</section>
```
   Tiles are **not** links and have no price tag. If `.bento-tile-title` needs spacing from the description without `.bento-tile-top`, add `.teaser-bento .bento-tile-title { margin-bottom: 10px; }` — nothing else.
4. Closing CTA band (`{/* 6. CLOSING CTA BAND */}`):
   - Eyebrow: `Start a Project`
   - `<h2>`: `Let&apos;s build something <em>lasting</em> for your company.`
   - Paragraph: `Tell us how your company operates and where it gets stuck. We reply within one business day with next steps.`
   - Primary button: `Start a project` → `/contact` (keep arrow svg)
   - Secondary button: `See our work` → `/#work`
5. Renumber the section comments so they read 1–5 in order. Comments only.

**Acceptance:** Home page order is: Hero → Built In-House (On It) → Selected Work → How We Work → What We Build → CTA band. No dollar amounts appear anywhere on the home page.

---

### 3.8 `feat: nav and footer for company positioning`

**File:** `components/Nav.js`
- `navLinks`:
```js
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];
```
- Desktop CTA label: `Start a project`. Mobile menu CTA label: `Start a project`.
- Active-state logic: leave as is (`/#work` never matches `pathname`, which is correct; Home stays active on `/`).

**File:** `components/Footer.js`
- Tagline: `Custom software studio designing and building web applications, operations tools, and websites for companies in Texas and beyond.`
- Navigation column links: Home `/`, Work `/#work`, Solutions `/solutions`, Contact `/contact`.
- "Studio" column links, in order: `On It Software` `/on-it`, `Visit onit.dynastyweb.co` (unchanged external link), `Website Packages` `/packages`, `Privacy Policy` `/privacy`.
- "Direct Inquiries" column: unchanged.

**Acceptance:** Nav shows exactly Home · Work · Solutions · Contact + "Start a project". Clicking Work from `/solutions` lands on the home page's work section. `/packages` reachable from the footer.

---

### 3.9 `feat: solutions page leads with custom software`

**File:** `app/solutions/page.js`

1. Hero copy:
   - Eyebrow: `Solutions`
   - `<h1>`: `Custom <em>software</em> first. Supporting services alongside.`
   - Subtitle: `Most engagements start with a custom build scoped to your company. Supporting services can be added to a project or purchased on their own.`
2. **Delete** the `<div className="tier-unlock-banner">…</div>` from the hero.
3. Split the grid. Compute at the top of the component:
```js
const featured = siteData.solutions.find((s) => s.id === "custom-software");
const services = siteData.solutions.filter((s) => s.id !== "custom-software");
```
   Render `featured` first in its own `<div className="bento-grid">` with the tile class `bento-tile interactive-tile feature-tile` (plus `selected` when selected). Then render:
```jsx
<div className="eyebrow services-eyebrow">
  <span>Supporting Services</span>
</div>
<p className="services-note">
  Adding two or more services to a website project unlocks package perks.{" "}
  <Link href="/packages">How packages work →</Link>
</p>
```
   then a second `<div className="bento-grid">` mapping `services` with the existing tile markup. Extract the tile JSX into a local `renderTile(sol, extraClass)` function so it isn't duplicated.
4. CSS additions in `globals.css`:
```css
.feature-tile {
  grid-column: 1 / -1;
}

.services-eyebrow {
  margin-top: clamp(40px, 6vw, 64px);
}

.services-note {
  font-size: 15px;
  color: var(--ink-2);
  margin: 8px 0 24px;
}

.services-note a {
  color: var(--gold);
  text-decoration: underline;
}
```
5. Floating summary bar: render the `.tier-indicator` block **only when** `hasWebsite` is true. When it's hidden, `.summary-count` still shows. Button label `Proceed to quote` → `Continue`.
6. Closing CTA band:
   - Eyebrow: `Not sure where to start?`
   - `<h2>`: `Let&apos;s talk about your <em>project</em>.` (unchanged)
   - Paragraph: `Send a short description of what you need. We&apos;ll recommend the right scope, whether that&apos;s a custom build, a single service, or both.`
   - Primary: `Start a project` (same href logic). Secondary: `How packages work` → `/packages`.

**Acceptance:** Custom Software tile spans the full row at all widths. Selecting only Custom Software shows no "Calculated Tier". Selecting Website shows the tier. Selections still carry to `/contact?s=…`.

---

### 3.10 `copy: reframe packages page as website packages`

**File:** `app/packages/page.js`
- `metadata.title`: `"Website Packages"` (the layout template appends `· Dynasty Web`; remove the manual `| Dynasty Web`).
- `metadata.description`: `"How Dynasty Web website packages work: add services to a website project and unlock included perks."`
- Eyebrow: `Website Packages`
- `<h1>`: `How <em>packages</em> work.`
- Subtitle: `Packages apply to website projects. Adding supporting services moves a project into higher tiers with included perks. Every service can also be purchased on its own, and custom software is always scoped separately.`
- Explanation steps:
  1. `Website Base` / `Every package starts with a custom, mobile-friendly website.`
  2. `Add Services` / `Add services like local SEO, photography, or On It invoicing.`
  3. `Unlock Perks` / `Higher service counts unlock CRM setup, website maintenance, and priority support.` (use `&amp;` → plain "and")
- Featured badge text `Featured Tier` stays.
- Card button `Build your quote` → `Build your quote` (unchanged). Fix its href from `/contact?s=` to `/contact?s=website`.
- Actions row: `Browse Digital Solutions` → `Browse services`; `Inquire now` → `Start a project`.
- CTA band: eyebrow `Ready to choose?`; `<h2>`: `Find the <em>package</em> that fits.`; paragraph `Browse supporting services and add them to your quote.`; primary `Explore services` → `/solutions`; secondary `Start a project` → `/contact`.

**Acceptance:** Page title tab reads "Website Packages · Dynasty Web". "Build your quote" pre-selects Website on the contact form and the tier banner appears.

---

### 3.11 `copy: contact page for company inquiries`

**File:** `app/contact/page.js`
- Eyebrow: `Start a Project`
- `<h1>`: `Tell us about your <em>project</em>.`
- Subtitle: `Share what you need built. We reply within one business day with next steps or a time to talk it through.`
- **Tier banner** (`.computed-tier-banner`): render only when `selectedSolutions.includes("website")`.
- Fields (labels/placeholders only; `name`/`id`/state keys unchanged):
  - Name: label `Name *`, placeholder `Full name`
  - businessName: label `Company`, placeholder `Company name`
  - Email: label `Work email *`, placeholder `you@company.com`
  - Phone: label `Phone`, placeholder `(972) 555-0199` (unchanged)
  - Solutions group label: `What you&apos;re interested in (optional)`
  - Message: label `Project details *`, placeholder `Describe how your company operates today and what you need built…`
- Submit button: `Send inquiry` / sending state `Sending…`
- Success message: `Thanks, your inquiry is in. We&apos;ll reply within one business day.`
- Sidebar: `<p>` under "Direct Contact" → `Prefer email? Write to Brandon directly.`; location paragraph → `Based in the Dallas–Fort Worth area, working with companies anywhere.` (the `<span>Forney, Texas</span>` stays).
- Error/network messages: unchanged.

**File:** `components/FAQ.js`
- Subtitle: `Timelines, ownership, support, and billing: what to know before a project begins.`
- Everything else unchanged.

**File:** `app/api/contact/route.js` — **no changes.**

**Acceptance:** Submitting the form on the preview still delivers an email with the company name in the `business_name` field.

---

### 3.12 `fix: On It page QR placement and hero visual`

**File:** `app/on-it/page.js`

1. **QR badge:** remove the absolutely positioned `<div className="onit-qr-badge desktop-only">` from the top of the section. Re-insert it inside `.onit-hero-cta-block`, directly after the "How to install" link, with this markup (it's now a real link, so give it a label):
```jsx
<a
  href="https://onit.dynastyweb.co/install"
  target="_blank"
  rel="noopener noreferrer"
  className="qr-link onit-qr-inline desktop-only"
  aria-label="Scan to install On It on your phone"
>
  <Image src="/onit/install-qr.png" alt="" width={72} height={72} className="qr-code-img" />
  <span className="qr-caption">Scan to install on your phone</span>
</a>
```
   CSS: delete the `.onit-qr-badge` rule. Add:
```css
.onit-qr-inline {
  flex-direction: row;
  gap: 12px;
  margin-top: 8px;
}

.onit-qr-inline .qr-code-img {
  width: 72px;
  height: 72px;
}
```
2. **Hero visual:** replace the `<div className="onit-hero-video"><OnItPromoVideo /></div>` in the hero with a static screenshot:
```jsx
<div className="onit-hero-shot">
  <Image
    src="/onit/01-chat.png"
    alt="On It chat screen turning a spoken job into an invoice"
    width={883}
    height={1600}
    sizes="320px"
    priority
    className="onit-hero-shot-img"
  />
</div>
```
   CSS:
```css
.onit-hero-shot {
  height: min(64vh, 560px);
  margin: 0 auto;
}

.onit-hero-shot-img {
  height: 100%;
  width: auto;
  display: block;
  filter: drop-shadow(0 24px 40px rgba(36, 29, 21, 0.18));
}

@media (max-width: 600px) {
  .onit-hero-shot {
    height: 440px;
  }
}
```
3. **Video moves to its own section**, placed between the benefits section and the closing CTA:
```jsx
<section className="onit-video-section">
  <div className="wrap">
    <div className="eyebrow">
      <span>See It Work</span>
    </div>
    <div className="onit-video-frame">
      <div className="onit-hero-video">
        <OnItPromoVideo />
      </div>
    </div>
  </div>
</section>
```
   CSS:
```css
.onit-video-section {
  padding: clamp(60px, 9vw, 100px) 0;
  border-top: 1px solid var(--line);
}

.onit-video-frame {
  margin-top: 20px;
  background: var(--ink);
  border-radius: 26px;
  padding: clamp(16px, 3vw, 32px);
  display: flex;
  justify-content: center;
}
```
   Keep the existing `.onit-hero-video` / `.onit-promo-video` rules as they are.
4. **Cross-sell line** in the closing section, under the "Open On It" button:
```jsx
<p className="onit-studio-note">
  Built by Dynasty Web. Need software built around your company?{" "}
  <Link href="/contact">Start a project →</Link>
</p>
```
   Add `import Link from "next/link";`. CSS: `.onit-studio-note { margin-top: 20px; font-size: 14.5px; color: var(--ink-soft); } .onit-studio-note a { color: var(--gold); text-decoration: underline; }`
5. Metadata: `title: "On It: Voice-Powered Invoicing"`, `description: "Say the job, send the invoice, get paid on the spot. On It is a voice-powered invoicing app built by Dynasty Web."` (drop the manual `| Dynasty Web`; the template adds it).

**Acceptance:** At any scroll position the QR is never clipped by the sticky nav. Hero shows a crisp static phone, not a mid-animation video frame. Video plays only inside the dark frame lower on the page; with reduced motion it shows controls and doesn't autoplay.

**Follow-up (not code, for Deffeu):** re-export the promo video on an ink (`#241d15`) background instead of black so it blends into the frame.

---

### 3.13 `feat: add quoting system case study` — ONLY if D4 = yes

**Assets:** Deffeu supplies 3 sanitized screenshots → `public/work/quoting/1.webp`, `2.webp`, `3.webp` (same dimensions as the other case-study images).

**File:** `data/site.js` — insert into `work` **before** Cyril:
```js
{
  id: "quoting-system",
  name: "Window Treatment Quoting System",
  industry: "Field Services · Custom Software",
  url: "",
  screenshots: [
    { src: "/work/quoting/1.webp", alt: "Room-by-room window treatment quote with product and labor lines" },
    { src: "/work/quoting/2.webp", alt: "Quote broken out by room with per-unit labor" },
    { src: "/work/quoting/3.webp", alt: "Quote totals and payment details" },
  ],
  shortDescription: "Supplier price sheets in, branded multi-room quotes out, built for Cyril Handyman & Door's window treatment line.",
  caseStudy: {
    problem: "Every window treatment is priced per opening from supplier sheets organized in size brackets. Building a multi-room quote by hand meant looking up each window across pages of brackets, adding labor, and formatting the result: slow, and easy to get wrong.",
    whatWeBuilt: "A quoting pipeline that reads the supplier's price sheets, matches each measured window to the correct size bracket, applies the chosen product tier and labor, and produces a branded, room-by-room quote ready to send.",
    result: "Quotes covering 20 windows across 8 rooms, built and re-priced across product lines without re-keying a number.",
  },
},
```
**File:** `components/WorkCard.js` — when `item.url` is empty, do not render the "Visit site" link (render only the case-study button).

**Acceptance:** Card renders with slideshow; no broken "Visit site" link; no supplier name anywhere.

---

### 3.14 `copy: privacy page wording`

**File:** `app/privacy/page.js`
- Subtitle: `We respect the privacy of everyone who contacts us. Here is exactly how we handle your information.`
- Section 1: replace `business name` with `company name`.
- Section 2: replace `regarding our digital solutions services.` with `regarding our services.`

---

## 4. QA before merge (one preview deploy, after all commits)

1. `npm run build` passes with zero warnings introduced by this branch.
2. Terminology sweep — this must return **only** the allowed exceptions in 2.2:
   ```
   grep -rniE "your business|small business|local business|service business|home service pro|digital solution|storefront|get a quote" app components data
   ```
3. Check on the Vercel preview at **375px, 768px, 1280px, 1440px**:
   - Home, Solutions, Packages, Contact, On It, Privacy.
   - No horizontal scroll. No overlapping text. Hero phones don't cover the CTA buttons.
4. Click-through: every nav and footer link; Work link from a sub-page; Solutions → Continue → Contact pre-selection; Packages → Build your quote.
5. Submit one test inquiry on the preview; confirm the email arrives with the Company field.
6. Toggle OS reduced-motion: reveals don't animate, On It video doesn't autoplay.
7. Open `/opengraph-image` on the preview and confirm the new headline.
8. Read the home page top to bottom once as a buyer at a 200-person company. Any line that sounds like it's selling to a solo tradesperson gets flagged back to Deffeu, not rewritten on the fly.

---

## 5. Out of scope (do not touch)

- Colors, fonts, radii, easing, grain overlay, scroll-reveal logic.
- Prices, tier logic, `getTier`, `countTierSolutions`, API route.
- WorkSlideshow internals, Vydale case study.
- Any new page (e.g. `/work`, `/about`). A dedicated About/founder page is a good next step but is a separate spec.
