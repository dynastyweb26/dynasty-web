// Single source of truth for all site content.
// Mark placeholder content with // PLACEHOLDER comments.

export const siteData = {
  packages: [
    {
      id: "starter",
      name: "Starter",
      qualifier: "Website base (0–1 solutions)",
      pitch: "A custom website for local service providers, starting at $400.",
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
      description: "Web apps built around how your business runs: job trackers, customer portals, quote builders, scheduling, and internal dashboards. Scoped and quoted per project.",
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
      name: "Business Photography",
      price: "$300",
      cadence: "session",
      description: "On-location photo sessions capturing your shop, crew, trucks, and completed work.",
    },
    {
      id: "social-media",
      name: "Social Media Management",
      price: "$399",
      cadence: "mo",
      description: "We plan, create, and post content that shows off your real jobs, every month.",
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
      description: "One page that shows how many people found you, where they came from, and how many called or asked for a quote.",
    },
    {
      id: "branding",
      name: "Logo & Brand Package",
      price: "$299",
      cadence: "one-time",
      description: "Vector logo files, brand color palette, typography guidelines, and truck decal assets.",
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
      description: "Google Business Profile optimization, local listings, and on-site tuning so you show up in your town.",
    },
  ],

  work: [
    {
      id: "cyril",
      name: "Cyril Handyman & Door LLC",
      industry: "Handyman & Door Services",
      url: "https://crazydoorhandyman.com",
      screenshots: [
        { src: "/work/cyril/1.webp", alt: "Cyril Handyman & Door homepage with hero headline and quote request form" },
        { src: "/work/cyril/2.webp", alt: "Cyril Handyman & Door services section listing garage doors, media walls, kitchen renovation, and more" },
        { src: "/work/cyril/3.webp", alt: "Cyril Handyman & Door gallery of completed garage door, media wall, and kitchen projects" },
      ],
      shortDescription: "A new handyman business with a strong local reputation and no online presence, now with a website and Google profile that show off the work.",
      caseStudy: {
        problem: "Cyril's handyman and door business was building a strong reputation in the local community for excellent work. But it had no website and no social media presence, so people who heard about him had nowhere to see his work or check him out before calling.",
        whatWeBuilt: "A clean, simple website that puts his garage doors, media walls, and remodels front and center, with tap-to-call and a quote request form. We also optimized his Google Business Profile and set up local SEO so nearby customers can find him. Cyril signed off on the design at the first demo.",
        result: "His work now makes the first impression before he picks up the phone. Customers see real projects, trust what they're getting, and can reach him in one tap. Word of mouth now leads to a business people can find and check out online.",
      },
    },
    {
      id: "vydale",
      name: "Vydale T.C. Projects",
      industry: "Speaker, Author & Youth Empowerment",
      url: "https://vydaletcprojects.com",
      screenshots: [
        { src: "/work/vydale/1.webp", alt: "Vydale T.C. Projects homepage hero introducing Vydale as a speaker and author, with impact stats" },
        { src: "/work/vydale/2.webp", alt: "Vydale T.C. Projects founder section introducing Vydale Mache Fotsing and her award nominations" },
        { src: "/work/vydale/3.webp", alt: "Vydale T.C. Projects photo gallery of community events and speaking engagements" },
      ],
      shortDescription: "An international speaker and author with no single place to show her books, awards, and community work, now with a home for all of it.",
      caseStudy: {
        problem: "Vydale is an international speaker, published author, and MC focused on faith, growth, and personal transformation. Her books, speaking, awards, and community work were spread across social media, with no single place to show event organizers and readers the full picture.",
        whatWeBuilt: "A polished personal site that brings it all together: her story, her books (I Am Worthy of My Dreams and the children's book Martha's Little Secret), awards, a gallery of past events, and a Book Vydale button for speaking inquiries. We also added a Donate page for her drive to get books to children in orphanages.",
        result: "Organizers, readers, and supporters now land on one place that shows who she is and what she's done. It gives her a professional first impression for bookings and a direct way for people to support her book drive.",
      },
    },
    {
      id: "onit",
      name: "On It",
      industry: "Invoicing app for home service pros",
      url: "https://onit.dynastyweb.co",
      screenshots: [],
      builtInHouse: true,
      shortDescription: "Fast invoices, fast money. Our in-house invoicing app for home service pros, built from scratch and used in the field.",
      caseStudy: {
        problem: "Tradespeople lose hours typing out invoices after long days on job sites.",
        whatWeBuilt: "Created voice-to-invoice web software so field workers can speak the job and send a professional invoice.",
        result: "Enables field workers to invoice before leaving the client driveway.",
      },
    },
  ],

  process: [
    {
      step: "01",
      title: "Tell Us the Problem",
      description: "Walk us through how your business runs today and where it slows you down: paperwork, spreadsheets, missed follow-ups.",
    },
    {
      step: "02",
      title: "Quick Call & Quote",
      description: "We map out the tool on a short call and send a clear quote with scope and timeline before any work starts.",
    },
    {
      step: "03",
      title: "Build & Refine",
      description: "We build in short rounds and show you working versions along the way, so you shape it as it comes together.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Your software goes live, your team gets set up, and we stay on to maintain and improve it.",
    },
  ],

  faq: [
    {
      question: "What kind of software do you build?",
      answer: "Web apps that run on any phone or computer, built around one business: job trackers, customer portals, quote and estimate builders, invoicing, scheduling, and internal dashboards. If part of your business runs on spreadsheets, paper, or a pile of apps that don't talk to each other, that's usually where we start.",
    },
    {
      question: "How much does custom software cost?",
      answer: "Every project is quoted after a short call, because scope drives price. You get a clear quote with scope and timeline before any work begins, and we can start small and grow it in stages.",
    },
    {
      question: "How much does a website cost?",
      answer: "Websites start at $400 for up to 3 pages: home, services or gallery, and contact. That includes mobile-friendly design, a contact form, basic on-page SEO, Google Search Console setup, and 1 revision round. You supply the text, logo, and photos. Hosting and maintenance is $90/mo. Extra pages, copywriting, Local SEO, branding, and other solutions are add-ons.",
    },
    {
      question: "Can I buy a solution without a website?",
      answer: "Yes. Any solution can be bought on its own, no website required. Package tiers and their perks apply when a website is part of the project.",
    },
    {
      question: "How long does a build take?",
      answer: "Custom software depends on scope, and your quote includes a timeline. Websites take 1 to 2 weeks from kickoff; Diamond tier projects with full brand refreshes take 2 to 3 weeks.",
    },
    {
      question: "Do I own my site?",
      answer: "Yes, 100%. You own all source code, domain names, content, and design assets created during the project.",
    },
    {
      question: "How do package tiers work?",
      answer: "You pay per Digital Solution added on top of your website base. Adding more solutions automatically unlocks higher tiers (Pro Gold, Pro Platinum, Pro Allstar Diamond) and their exclusive perks at no added tier fee.",
    },
    {
      question: "How do I pay?",
      answer: "We invoice electronically after our initial consultation and contract approval. Nothing is charged directly on this website.",
    },
    {
      question: "What does ongoing maintenance cover?",
      answer: "Maintenance covers fast cloud hosting, domain upkeep, regular security updates, content revisions, and priority technical support.",
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
