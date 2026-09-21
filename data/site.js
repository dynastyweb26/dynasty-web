// Single source of truth for all site content.
// Mark placeholder content with // PLACEHOLDER comments.

export const siteData = {
  packages: [
    {
      id: "starter",
      name: "Starter",
      price: "$400",
      cadence: "one-time",
      pitch: "A custom, high-converting digital storefront built for local service providers.",
      solutionsIncluded: 0,
      features: [
        "Custom website design",
        "Mobile-responsive layout",
        "Contact form with lead delivery",
        "1 revision round",
        "Launch & custom domain connection",
      ],
      featured: false,
    },
    {
      id: "pro-gold",
      name: "Pro Gold",
      price: "$800",
      cadence: "one-time + optional $150/mo",
      pitch: "Enhanced website performance, local SEO optimization, and selected digital add-ons.",
      solutionsIncluded: 2,
      features: [
        "Everything in Starter",
        "Local SEO optimization",
        "Advanced design & smooth interactions",
        "Choose 2 Digital Solutions included",
      ],
      featured: false,
    },
    {
      id: "pro-platinum",
      name: "Pro Platinum",
      price: "$1,500",
      cadence: "one-time + $250/mo",
      pitch: "Complete client engine with live lead tracking dashboard and priority monthly support.",
      solutionsIncluded: 4,
      features: [
        "Everything in Pro Gold",
        "Live lead dashboard",
        "Lead tracking CRM integration",
        "Choose 4 Digital Solutions included",
        "Monthly maintenance & priority support",
      ],
      featured: true, // Featured tier
    },
    {
      id: "pro-allstar-diamond",
      name: "Pro Allstar Diamond",
      price: "$2,500",
      cadence: "one-time + $400/mo",
      pitch: "Full brand transformation, total automation suite, and dedicated quarterly strategy.",
      solutionsIncluded: 7, // All digital solutions
      features: [
        "Everything in Pro Platinum",
        "Full brand refresh & identity package",
        "Automated follow-up emails",
        "All Digital Solutions included",
        "Dedicated account manager & quarterly strategy calls",
      ],
      featured: false,
    },
  ],

  // Comparison Matrix for feature comparison table
  comparisonFeatures: [
    { feature: "Custom Responsive Website", starter: true, proGold: true, proPlatinum: true, proDiamond: true },
    { feature: "Lead Delivery Form", starter: true, proGold: true, proPlatinum: true, proDiamond: true },
    { feature: "Local SEO Optimization", starter: false, proGold: true, proPlatinum: true, proDiamond: true },
    { feature: "Digital Solutions Included", starter: "None", proGold: "Choose 2", proPlatinum: "Choose 4", proDiamond: "All Included" },
    { feature: "Live Lead Dashboard", starter: false, proGold: false, proPlatinum: true, proDiamond: true },
    { feature: "Lead Tracking CRM", starter: false, proGold: false, proPlatinum: true, proDiamond: true },
    { feature: "Full Brand Refresh", starter: false, proGold: false, proPlatinum: false, proDiamond: true },
    { feature: "Automated Email Follow-ups", starter: false, proGold: false, proPlatinum: false, proDiamond: true },
    { feature: "Monthly Maintenance & Support", starter: "Optional", proGold: "Optional ($150/mo)", proPlatinum: "Included ($250/mo)", proDiamond: "Priority ($400/mo)" },
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
      cadence: "month",
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
      cadence: "month",
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
      industry: "Handyman & Door Services", // PLACEHOLDER
      url: "https://crazydoorhandyman.com",
      screenshotKey: "cyril",
      shortDescription: "Custom web platform built to showcase local door installations and handyman service requests.", // PLACEHOLDER
      caseStudy: {
        problem: "Cyril needed a professional online presence to stop relying solely on word-of-mouth and represent their premium door work.", // PLACEHOLDER
        whatWeBuilt: "Designed a fast, responsive site with project galleries, instant estimate request forms, and local SEO structure.", // PLACEHOLDER
        result: "Increased direct online enquiries and established a clear, credible brand for higher-value commercial and residential jobs.", // PLACEHOLDER
      },
    },
    {
      id: "vydale",
      name: "Vydale T.C. Projects",
      industry: "Trade & Construction Projects", // PLACEHOLDER
      url: "https://vydaletcprojects.com",
      screenshotKey: "vydale",
      shortDescription: "High-impact web presence highlighting heavy construction and local contract achievements.", // PLACEHOLDER
      caseStudy: {
        problem: "Vydale T.C. Projects required a structured, clean portfolio to present capability statements to larger contractors.", // PLACEHOLDER
        whatWeBuilt: "Crafted a mobile-first editorial portfolio with direct lead routing and structured project showcases.", // PLACEHOLDER
        result: "Streamlined bidding communication and provided client proof during contract pitches.", // PLACEHOLDER
      },
    },
  ],

  process: [
    {
      step: "01",
      title: "Pick a Tier",
      description: "Select the foundation package that matches your business goals and service scale.",
    },
    {
      step: "02",
      title: "Choose Solutions",
      description: "Add à la carte digital solutions like photography, SEO, or On It invoicing integration.",
    },
    {
      step: "03",
      title: "Build & Refine",
      description: "We craft your site and lead system rapidly with continuous direct communication and zero bloat.",
    },
    {
      step: "04",
      title: "Launch & Drive",
      description: "Your site goes live on your custom domain, ready to accept leads and represent your craft.",
    },
  ],

  faq: [
    {
      question: "How long does a build take?",
      answer: "A standard build takes 1 to 2 weeks from kickoff. Custom enterprise or diamond packages with full branding take 2 to 3 weeks.",
    },
    {
      question: "Do I own my site?",
      answer: "Yes, 100%. You own all source code, domain names, content, and branding assets created during the build.",
    },
    {
      question: "What does the retainer cover?",
      answer: "Monthly retainers cover fast cloud hosting, domain maintenance, regular updates, SEO adjustments, and priority technical support.",
    },
    {
      question: "Can I switch tiers later?",
      answer: "Absolutely. You can upgrade your tier or add/remove digital solutions at any time as your business grows.",
    },
    {
      question: "How do I pay?",
      answer: "We invoice electronically after our initial consultation and contract agreement. Nothing is charged directly on this site.",
    },
  ],
};
