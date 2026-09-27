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
      pitch: "Enhanced search visibility, local SEO foundation, and interactive client touches.",
      perks: [
        "Everything in Starter",
        "Local SEO foundation & keyword setup",
        "Advanced layout & fluid animations",
        "Priority revision rounds",
      ],
      featured: false,
    },
    {
      id: "pro-platinum",
      name: "Pro Platinum",
      qualifier: "Website + 4–6 solutions",
      pitch: "Complete client intake engine with live tracking dashboard and priority monthly upkeep.",
      perks: [
        "Everything in Pro Gold",
        "Live lead tracking dashboard",
        "Lead CRM integration",
        "Monthly technical maintenance & priority support",
      ],
      featured: true, // Featured tier (dark card)
    },
    {
      id: "pro-allstar-diamond",
      name: "Pro Allstar Diamond",
      qualifier: "Website + all 7 solutions",
      pitch: "Total business transformation with full brand identity refresh and automated follow-ups.",
      perks: [
        "Everything in Pro Platinum",
        "Full brand refresh & asset package",
        "Automated client follow-up sequences",
        "Dedicated account strategist & quarterly strategy call",
      ],
      featured: false,
    },
  ],

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
      price: "$200",
      cadence: "mo",
      description: "Consistent, tailored updates highlighting your ongoing local projects.",
    },
    {
      id: "invoicing",
      name: "Invoicing, powered by On It",
      price: "$150",
      cadence: "setup",
      description: "Voice-powered field invoicing setup so your team bills on-site effortlessly.",
    },
    {
      id: "analytics",
      name: "Analytics Dashboard",
      price: "$100",
      cadence: "mo",
      description: "Simple, real-time reporting on site visitors, calls, and lead source tracking.",
    },
    {
      id: "branding",
      name: "Logo & Brand Package",
      price: "$300",
      cadence: "one-time",
      description: "Vector logo files, brand color palette, typography guidelines, and truck decal assets.",
    },
    {
      id: "email-marketing",
      name: "Email Marketing Setup",
      price: "$200",
      cadence: "setup",
      description: "Automated email welcome sequences and broadcast newsletter templates.",
    },
    {
      id: "local-seo",
      name: "Local SEO Boost",
      price: "$250",
      cadence: "one-time",
      description: "Google Business Profile optimization, local citations, and geo-targeted keywords.",
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
      industry: "Voice-Powered Invoicing Software",
      url: "https://onit.dynastyweb.co",
      screenshots: [],
      builtInHouse: true,
      shortDescription: "Voice-powered field invoicing for tradespeople. Proof that Dynasty Web ships real software, not just websites.",
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
export function getTier(selectedSolutions = []) {
  const count = Array.isArray(selectedSolutions)
    ? selectedSolutions.length
    : typeof selectedSolutions === "number"
    ? selectedSolutions
    : 0;

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
