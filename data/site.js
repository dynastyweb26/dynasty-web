// Single source of truth for all site content.
// Mark placeholder content with // PLACEHOLDER comments.

export const siteData = {
  packages: [
    {
      id: "starter",
      name: "Starter",
      qualifier: "Website base (0–1 solutions)",
      pitch: "A custom, high-converting digital storefront built for local service providers.",
      perks: [
        "Custom responsive website design",
        "Mobile-optimized performance & accessibility",
        "Secure contact & lead delivery form",
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

  // Solutions. `tierEligible: false` means it never counts toward package tiers.
  // `quoteOnly: true` means no fixed price; the client requests a quote.
  solutions: [
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
    {
      id: "custom-software",
      name: "Custom Software",
      quoteOnly: true,
      tierEligible: false,
      description: "Job trackers, customer portals, quote builders: tools built around how your business actually runs.",
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
      shortDescription: "Case study coming soon.",
      caseStudy: {
        problem: "Case study coming soon.",
        whatWeBuilt: "Case study coming soon.",
        result: "Case study coming soon.",
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
      shortDescription: "Case study coming soon.",
      caseStudy: {
        problem: "Case study coming soon.",
        whatWeBuilt: "Case study coming soon.",
        result: "Case study coming soon.",
      },
    },
    {
      id: "onit",
      name: "On It",
      industry: "Invoicing app for home service pros",
      url: "https://onit.dynastyweb.co",
      screenshots: [],
      builtInHouse: true,
      shortDescription: "Fast invoices, fast money. An invoicing app for home service pros, and proof that Dynasty Web ships real software, not just websites.",
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
      title: "Pick Solutions",
      description: "Select the specific Digital Solutions your business needs, from local SEO to business photography.",
    },
    {
      step: "02",
      title: "Tier Unlocks",
      description: "Your total solution count automatically unlocks higher package tiers and free strategy perks.",
    },
    {
      step: "03",
      title: "Build & Refine",
      description: "We craft your website and solutions rapidly with direct craftsman communication and zero bloat.",
    },
    {
      step: "04",
      title: "Launch & Lead",
      description: "Your custom platform goes live on your domain, ready to turn local visitors into paying customers.",
    },
  ],

  faq: [
    {
      question: "How long does a build take?",
      answer: "A standard build takes 1 to 2 weeks from kickoff. Diamond tier projects with full brand refreshes take 2 to 3 weeks.",
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
