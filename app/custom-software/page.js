import Link from "next/link";
import Image from "next/image";
import { pageMetadata, SITE_URL, ORG_ID } from "../../data/seo";
import { siteData } from "../../data/site";
import { JsonLd } from "../../components/JsonLd";

const PATH = "/custom-software";

export const metadata = pageMetadata({
  title: "Custom Software Development Company",
  description:
    "Dynasty Web is a custom software development company building web apps, quoting tools and internal systems for companies across the US. You own the code.",
  path: PATH,
});

const buildTypes = siteData.capabilities.filter((c) => c.id !== "web-presence");

const signs = [
  "Your team keeps the real numbers in spreadsheets because no tool fits how you work.",
  "The same information gets typed into two or three systems by hand.",
  "You pay for several subscriptions that each do part of the job.",
  "Quotes, schedules or orders depend on one person who knows how it all works.",
  "Customers call or email for things they should be able to see or do themselves.",
  "You've outgrown an off-the-shelf app, but switching to another one won't fix it.",
];

const ownership = [
  {
    title: "The code",
    body: "Your software lives in a repository your company owns. If you ever bring development in-house or move to another team, it goes with you.",
  },
  {
    title: "The accounts",
    body: "Hosting, domains, databases and third-party services are set up under your company's accounts, not ours.",
  },
  {
    title: "The data",
    body: "Your customer and operations data stays yours. Nothing is locked inside a platform you can't leave.",
  },
];

const faqs = [
  {
    q: "How much does custom software cost?",
    a: "Websites start at $400. Custom software is priced by what it needs to do, so every project is scoped individually. After a discovery call you get a written proposal with scope, milestones, timeline and pricing for each phase, before any work begins.",
  },
  {
    q: "How long does a custom software project take?",
    a: "It depends on scope. Projects are built in phases, and you see working versions at each milestone instead of waiting until the end. The timeline is laid out in your proposal before work starts.",
  },
  {
    q: "Do you work with companies outside Texas?",
    a: "Yes. Dynasty Web is based in Forney, Texas, and works with companies anywhere in the United States. Discovery, check-ins and launch all happen remotely.",
  },
  {
    q: "Who owns the software when it's done?",
    a: "Your company does. The code, the accounts it runs on and the data in it all belong to you.",
  },
  {
    q: "What happens after launch?",
    a: "We deploy the software, onboard your team, and can stay on under a support plan for maintenance, fixes and improvements as your company grows.",
  },
  {
    q: "Should I build custom software or buy an off-the-shelf tool?",
    a: "If an existing tool already fits how your company works, use it. Custom software makes sense when your process is what sets you apart, when you're stitching several tools together by hand, or when you've outgrown what the off-the-shelf options can do.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PATH}#service`,
      name: "Custom software development",
      serviceType: "Custom software development",
      url: `${SITE_URL}${PATH}`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Custom web applications, quoting and operations tools, customer portals and internal systems built around how a company works.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom software services",
        itemListElement: buildTypes.map((b) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: b.name, description: b.description },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Custom Software", item: `${SITE_URL}${PATH}` },
      ],
    },
  ],
};

export default function CustomSoftwarePage() {
  return (
    <main className="sw-page">
      <JsonLd data={schema} />

      {/* HERO */}
      <section className="section page-hero-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Custom Software Development</span>
          </div>
          <h1 className="page-title sw-title">
            Custom software development, built around <em>your</em> company.
          </h1>
          <p className="page-subtitle sw-lede">
            Dynasty Web is a custom software development company that designs and builds web applications, quoting
            tools and internal systems for companies across the United States. We learn how your company actually
            works, then build the software around it. You own all of it.
          </p>
          <div className="sw-hero-actions">
            <Link href="/contact?s=custom-software" className="btn btn-primary">
              Start a project
            </Link>
            <Link href="#how-it-works" className="btn btn-ghost">
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="section sw-build-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>What we build</span>
          </div>
          <h2 className="section-title">
            Software for the way your company <em>runs</em>.
          </h2>
          <p className="section-subtitle sw-section-sub">
            Most of what we build falls into three kinds of software. Many projects combine them.
          </p>
          <div className="sw-build-grid">
            {buildTypes.map((b, i) => (
              <div key={b.id} className="sw-build-card">
                <span className="sw-build-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{b.name}</h3>
                <p>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="section sw-signs-section">
        <div className="wrap sw-signs">
          <div>
            <div className="eyebrow">
              <span>Is it time?</span>
            </div>
            <h2 className="section-title">
              Signs your company has outgrown <em>off-the-shelf</em> tools.
            </h2>
            <p className="sw-signs-note">
              If a few of these sound familiar, custom software usually pays for itself in time saved and mistakes
              avoided.
            </p>
          </div>
          <ul className="sw-signs-list">
            {signs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROOF: ON IT */}
      <section className="section sw-proof-section">
        <div className="wrap">
          <div className="sw-proof">
            <div className="sw-proof-copy">
              <div className="eyebrow light-eyebrow">
                <span>Built by us</span>
              </div>
              <h2 className="sw-proof-title">
                Built for one company. Now a <em>product</em>.
              </h2>
              <p>
                On It started as custom software for a single field-service crew that was writing up invoices at night
                after long days on job sites. We mapped how the crew actually works and built around it: describe the
                job out loud, and a branded invoice with a pay link goes out on the spot.
              </p>
              <p>That&apos;s the approach on every build: solve one company&apos;s real problem first, and build it to last.</p>
              <Link href="/on-it" className="btn btn-gold-bright">
                See On It
              </Link>
            </div>
            <div className="sw-proof-media">
              <Image
                src="/onit/01-chat.png"
                alt="On It turning a spoken job description into an invoice"
                width={883}
                height={1600}
                sizes="(min-width: 860px) 260px, 60vw"
                className="sw-proof-phone"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="how-it-works">
        <div className="wrap">
          <div className="eyebrow">
            <span>How it works</span>
          </div>
          <h2 className="section-title">
            A clear path from first call to <em>launch</em>.
          </h2>
          <div className="process-steps">
            {siteData.process.map((p) => (
              <div key={p.step} className="process-card">
                <div className="process-step-num">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERSHIP */}
      <section className="section sw-own-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Built for you, owned by you</span>
          </div>
          <h2 className="section-title">
            When it&apos;s done, it&apos;s <em>yours</em>.
          </h2>
          <div className="process-steps sw-own-grid">
            {ownership.map((o) => (
              <div key={o.title} className="process-card">
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANYWHERE */}
      <section className="section sw-anywhere-section">
        <div className="wrap sw-anywhere">
          <div className="eyebrow">
            <span>Where we work</span>
          </div>
          <p className="sw-anywhere-text">
            Based in Forney, Texas. Building for companies <em>anywhere</em> in the United States, remotely, from
            discovery to launch.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section sw-faq-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Questions</span>
          </div>
          <h2 className="section-title">
            Custom software, <em>answered</em>.
          </h2>
          <div className="faq-list sw-faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="faq-question-summary">
                  <span>{f.q}</span>
                  <svg
                    className="arrow-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="faq-answer-content">
                  <p className="faq-answer-text">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band-section">
        <div className="wrap">
          <div className="cta-band-card">
            <div className="eyebrow light-eyebrow">
              <span>Start a Project</span>
            </div>
            <h2 className="cta-band-title">
              Ready to build something <em>great</em>?
            </h2>
            <p className="cta-band-text">
              Tell us how your company works and where it gets stuck. We reply within one business day.
            </p>
            <div className="cta-band-actions">
              <Link href="/contact?s=custom-software" className="btn btn-gold-bright">
                Start a project
              </Link>
              <a href="mailto:brandon@dynastyweb.co" className="btn btn-ghost-light">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
