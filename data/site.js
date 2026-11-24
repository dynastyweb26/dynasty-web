// Single source of truth for all site content.
// Mark placeholder content with // PLACEHOLDER comments.

export const siteData = {
  packages: [
    {
      id: "starter",
      name: "Starter",
      qualifier: "Website base (0–1 solutions)",
      pitch: "A custom website, starting at $400.",
      perks: [
        "Custom website, up to 3 pages",
        "Mobile-friendly design & contact form",
        "Basic on-page SEO & Google Search Console setup",
        "1 revision round & launch support",
      ],
      featured: false,
    },
    {
      id: "pro-gold",
      name: "Pro Gold",
      qualifier: "Website + 2–3 solutions",
      pitch: "A stronger launch with richer design, extra revisions, and faster support.",
      perks: [
        "Everything in Starter",
        "Advanced layout & fluid animations",
        "2 revision rounds",
        "Priority email support",
      ],
      featured: false,
    },
    {
      id: "pro-platinum",
      name: "Pro Platinum",
      qualifier: "Website + 4–6 solutions",
      pitch: "Your full lead system, with CRM setup, website maintenance, and first place in line.",
      perks: [
        "Everything in Pro Gold",
        "Lead CRM setup",
        "Monthly website maintenance included",
        "Priority build turnaround",
      ],
      featured: true, // Featured tier (dark card)
    },
    {
      id: "pro-allstar-diamond",
      name: "Pro Allstar Diamond",
      qualifier: "Website + all 7 solutions",
      pitch: "Every solution working together, with direct access to the founder.",
      perks: [
        "Everything in Pro Platinum",
        "Quarterly strategy call with the founder",
        "First access to new tools and features",
        "Priority on custom software requests",
      ],
      featured: false,
    },
  ],

  // Solutions. `tierEligible: false` means it never counts toward package tiers
// (the website is the base every tier builds on; Custom Software is quoted separately).
  // `quoteOnly: true` means no fixed price; the client requests a quote.
  solutions: [
    {
      id: "custom-software",
      name: "Custom Software",
      quoteOnly: true,
      tierEligible: false,
      description: "Software designed and built around how your company operates: customer-facing apps, quoting and ordering systems, portals, scheduling, and internal dashboards. Scoped and quoted per project.",
    },
    {
      id: "website",
      name: "Website Design",
      price: "From $400",
      cadence: "site",
      note: "plus $90/mo hosting & maintenance",
      tierEligible: false,
      description: "A custom website, up to 3 pages: home, services or gallery, and contact. Mobile-friendly design, contact form, basic on-page SEO, Google Search Console setup, and 1 revision round. You supply the text, logo, and photos.",
    },
    {
      id: "photography",
      name: "Brand Photography",
      price: "$300",
      cadence: "session",
      description: "On-location photography of your team, facilities, fleet, and completed work.",
    },
    {
      id: "social-media",
      name: "Social Media Management",
      price: "$399",
      cadence: "mo",
      description: "We plan, create, and publish content that shows your real work, every month.",
    },
    {
      id: "invoicing",
      name: "Invoicing, powered by On It",
      price: "$30",
      cadence: "setup",
      note: "then $10/mo for the app",
      description: "Say the job, send the invoice, get paid. We set up On It with your logo, services, and payment methods.",
    },
    {
      id: "analytics",
      name: "Analytics Dashboard",
      price: "$100",
      cadence: "mo",
      note: "3-month minimum",
      description: "One dashboard showing how many people found you, where they came from, and how many reached out.",
    },
    {
      id: "branding",
      name: "Logo & Brand Package",
      price: "$299",
      cadence: "one-time",
      description: "Vector logo files, color palette, typography guidelines, and vehicle and signage assets.",
    },
    {
      id: "email-marketing",
      name: "Email Marketing Setup",
      price: "$200",
      cadence: "setup",
      description: "Automatic welcome, thank-you, review request, and come-back emails, plus templates you can send yourself.",
    },
    {
      id: "local-seo",
      name: "Local SEO Boost",
      price: "$250",
      cadence: "one-time",
      note: "plus directory listing fees at cost",
      description: "Google Business Profile optimization, directory listings, and on-site tuning so you show up in local search.",
    },
  ],

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

  work: [
    {
      id: "cyril",
      slug: "cyril-handyman",
      logo: "/work/cyril/logo.webp",
      meta: "Forney, TX · Field services",
      chips: ["29 Google reviews", "40 project pages", "Verified on Google"],
      name: "Cyril Handyman & Door LLC",
      industry: "Field Services · Website & Local Search",
      url: "https://crazydoorhandyman.com",
      screenshots: [
        { src: "/work/cyril/1.webp", w: 1600, h: 928, alt: "Cyril Handyman & Door homepage hero: Garage doors to media walls. One call, done right." },
        { src: "/work/cyril/2.webp", w: 1600, h: 928, alt: "Cyril Handyman & Door gallery carousel of real projects, each with its own page" },
        { src: "/work/cyril/3.webp", w: 1600, h: 910, alt: "Before and after slider showing a plain TV wall turned into a slat media wall" },
        { src: "/work/cyril/4.webp", w: 1600, h: 926, alt: "Five-star Google reviews from Cyril's customers on the homepage" },
        { src: "/work/cyril/5.webp", w: 1600, h: 813, alt: "Service area map with Forney as home base and pages for eight nearby towns" },
        { src: "/work/cyril/6.webp", w: 1600, h: 934, alt: "Filterable gallery showing 40 projects across garage doors, blinds, patio screens, and media walls" },
      ],
      shortDescription: "A handyman everyone in town already knew, now found well beyond it. Website, photos, Google, SEO, social, and in-house software.",
      caseStudy: {
        title: "From word of mouth to found on Google",
        problem: "Cyril was great at his work, and around Forney people knew it. But that is where his reach stopped. He had no website, no photos of his work online, and no way for anyone outside his circle to find him or see what he could do.",
        whatWeBuilt: "We started with a website, because he had none. We went on site with him to photograph real jobs for the site and his social media, set up and verified his Google Business Profile, and built out his local SEO. We keep growing his social presence, and he works on On It, the software we build in-house, before its public release.",
        result: "Cyril now reaches customers beyond the city he is based in. People find him on Google, see real photos of his work before they call, and reach him in one tap. And with On It, invoices and tax paperwork take far less of his time.",
        emWord: "Handyman",
        stats: [
          { value: "29", label: "Google Reviews" },
          { value: "8", label: "Town Pages" },
          { value: "5", label: "Service Pages" },
          { value: "40", label: "Project Pages" },
          { text: "Built from Scratch" },
        ],
        heroShot: { src: "/work/cyril/1.webp", w: 1600, h: 928, alt: "Cyril Handyman & Door homepage on desktop" },
        problemImage: { src: "/work/cyril/6.webp", w: 1600, h: 934, alt: "Cyril's project gallery: 40 real jobs across garage doors, blinds, patio screens, and media walls" },
        beforeAfter: {
          before: { src: "/work/cyril/before.webp", w: 1600, h: 1200, alt: "A TV and soundbar on a bare beige wall, before" },
          after: { src: "/work/cyril/after.webp", w: 1600, h: 1200, alt: "The same wall finished as a slat media wall with built-in shelves, after" },
          caption: "Slat media wall, one of his 40 project pages",
        },
        services: [
          { name: "Website", detail: "Built from scratch: service pages, city pages, a project gallery, tap-to-call, and a quote request form.", shot: "/work/cyril/1.webp" },
          { name: "On-site photography", detail: "We went to his job sites and photographed real work for the website and social media.", shot: "/work/cyril/photo-led-wall.webp", shotPosition: "50% 50%" },
          { name: "Local SEO", detail: "Pages for each service and city he covers, structured data, and a clean sitemap, so he shows up beyond Forney.", shot: "/work/cyril/5.webp" },
          { name: "Google Business Profile", detail: "Set up and verified on Google so local searches lead to him.", shot: "/work/cyril/4.webp" },
          { name: "Social media", detail: "An ongoing push to grow his social presence with his own work.", shot: "/work/cyril/2.webp" },
          { name: "Early access to On It", detail: "Private, unreleased software from our studio that handles his invoices and tax paperwork.", shot: "/onit/01-chat.png", shotPosition: "50% 0%" },
        ],
      },
    },
    {
      id: "vydale",
      slug: "vydale",
      logo: "/work/vydale/logo.webp",
      meta: "Speaker & author",
      chips: ["Books & speaking", "Book drive donations"],
      name: "Vydale T.C. Projects",
      industry: "Speaker, Author & Youth Empowerment",
      url: "https://vydaletcprojects.com",
      screenshots: [
        { src: "/work/vydale/1.webp", alt: "Vydale T.C. Projects homepage hero introducing Vydale as a speaker and author, with impact stats" },
        { src: "/work/vydale/2.webp", alt: "Vydale T.C. Projects founder section introducing Vydale Mache Fotsing and her award nominations" },
        { src: "/work/vydale/3.webp", alt: "Vydale T.C. Projects photo gallery of community events and speaking engagements" },
      ],
      shortDescription: "A rising speaker and author whose message reached only as far as she could. Now her books, speaking, and book drive reach people anywhere.",
      caseStudy: {
        problem: "Vydale is an upcoming speaker, author, and MC whose message is faith, growth, and personal transformation. Her positivity reached people only as far as she could physically go. Her books, speaking, awards, and community work were scattered across social media, with no single place to show event organizers and readers the full picture.",
        whatWeBuilt: "A polished personal site that brings it all together: her story, her books (I Am Worthy of My Dreams and the children's book Martha's Little Secret), awards, a gallery of past events, and a Book Vydale button for speaking inquiries. We also added a Donate page for her drive to get books to children in orphanages.",
        result: "Organizers, readers, and supporters now land on one place that shows who she is and what she's done. It gives her a professional first impression for bookings and a direct way for people to support her book drive.",
        title: "Taking her message beyond her physical reach",
        emWord: "Projects",
        services: [
          { name: "Personal website", detail: "Her story, speaking, and awards brought together in one polished site." },
          { name: "Book showcase", detail: "I Am Worthy of My Dreams and the children's book Martha's Little Secret, front and center." },
          { name: "Event gallery", detail: "Photos from past speaking engagements and community events." },
          { name: "Booking and donations", detail: "A Book Vydale button for speaking inquiries and a Donate page for her book drive." },
        ],
      },
    },
    {
      id: "onit",
      name: "On It",
      logo: "/brand/on-it-logo.png",
      meta: "Built in-house · Invoicing app",
      chips: ["Live product", "Voice to invoice"],
      href: "/on-it",
      thumbs: [
        { src: "/onit/01-chat.png", alt: "On It chat screen turning a spoken job into an invoice" },
        { src: "/onit/02-invoices.png", alt: "On It invoices list" },
        { src: "/onit/03-books.png", alt: "On It books overview" },
      ],
      industry: "Field-service invoicing app",
      url: "https://onit.dynastyweb.co",
      screenshots: [],
      builtInHouse: true,
      shortDescription: "Built as custom software for one field-service company, now a standalone product. Say the job, send the invoice, get paid.",
      caseStudy: {
        problem: "Cyril's crew was writing up invoices at night after long days on job sites, and off-the-shelf invoicing apps didn't fit how they work.",
        whatWeBuilt: "A custom voice-to-invoice web app built around the crew's workflow: describe the job out loud, and On It writes and sends a branded invoice with a pay link.",
        result: "Invoices go out before the truck leaves the driveway. It worked well enough that we turned it into a product for field-service teams everywhere.",
      },
    },
  ],

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
};

/**
 * Pure function to compute package tier based on selected digital solution IDs or count.
 * @param {Array|number} selectedSolutions - Array of solution IDs or count of solutions
 * @returns {Object} Tier information object
 */
// Only real, tier-eligible solutions count (Custom Software is quoted separately).
export function countTierSolutions(selectedSolutions = []) {
  if (typeof selectedSolutions === "number") return selectedSolutions;
  if (!Array.isArray(selectedSolutions)) return 0;
  return selectedSolutions.filter((id) => {
    const sol = siteData.solutions.find((s) => s.id === id);
    return sol && sol.tierEligible !== false;
  }).length;
}

// Keeps only ids that exist, without duplicates.
export function cleanSolutionIds(ids = []) {
  if (!Array.isArray(ids)) return [];
  const known = new Set(siteData.solutions.map((s) => s.id));
  return [...new Set(ids.filter((id) => typeof id === "string" && known.has(id)))];
}

// "$399/mo", "$30/setup, then $10/mo for the app", "Custom quote"
export function formatSolutionPrice(sol) {
  if (!sol) return "";
  if (sol.quoteOnly) return "Custom quote";
  const base = `${sol.price}/${sol.cadence}`;
  return sol.note ? `${base}, ${sol.note}` : base;
}

export function getTier(selectedSolutions = []) {
  const count = countTierSolutions(selectedSolutions);

  if (count >= 7) {
    return {
      id: "pro-allstar-diamond",
      name: "Pro Allstar Diamond",
      qualifier: "Website + 7 solutions",
      count,
      nextTier: null,
      neededForNext: 0,
    };
  }
  if (count >= 4) {
    return {
      id: "pro-platinum",
      name: "Pro Platinum",
      qualifier: "Website + 4–6 solutions",
      count,
      nextTier: "Pro Allstar Diamond",
      neededForNext: 7 - count,
    };
  }
  if (count >= 2) {
    return {
      id: "pro-gold",
      name: "Pro Gold",
      qualifier: "Website + 2–3 solutions",
      count,
      nextTier: "Pro Platinum",
      neededForNext: 4 - count,
    };
  }
  return {
    id: "starter",
    name: "Starter",
    qualifier: "Website base (0–1 solutions)",
    count,
    nextTier: "Pro Gold",
    neededForNext: 2 - count,
  };
}
