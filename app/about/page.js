import Image from "next/image";
import Link from "next/link";
import { pageMetadata, SITE_URL, ORG_ID } from "../../data/seo";
import { brandConfig } from "../../data/brand";
import { JsonLd } from "../../components/JsonLd";
import { siteData } from "../../data/site";

export const metadata = pageMetadata({
  title: "About the Studio",
  description:
    "Dynasty Web is a software studio in Forney, Texas, led by CEO Brandon Fotsing Talla. We design and build custom software and websites for companies.",
  path: "/about",
});

const GITHUB_URL = "https://github.com/dynastyweb26";

const principles = [
  {
    title: "You work with the builders",
    body: "No layers of account managers. The people on your calls are the people who design, build and support your software.",
  },
  {
    title: "Built for you, owned by you",
    body: "Your company owns the code, the accounts and the data. Nothing is locked inside a platform you can't leave.",
  },
  {
    title: "Proof over promises",
    body: "Every project ships as something real your company can use. The work on this site is live and running.",
  },
];

const clients = siteData.work.filter((w) => !w.builtInHouse && w.slug);
const workCards = [
  ...clients.map((w) => ({
    href: `/work/${w.slug}`,
    img: w.screenshots[0].src,
    alt: w.screenshots[0].alt,
    tag: w.industry,
    name: w.name,
    cta: "Read the case study",
  })),
  {
    href: "/on-it",
    img: "/onit/01-chat.png",
    alt: "On It chat screen with quick actions for receipts, invoices and payments",
    tag: "Built in-house · Invoicing app",
    name: "On It",
    cta: "See the app",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#page`,
      url: `${SITE_URL}/about`,
      name: "About Dynasty Web",
      about: { "@id": ORG_ID },
      mainEntity: { "@id": `${SITE_URL}/about#founder` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/about#founder`,
      name: "Brandon Fotsing Talla",
      jobTitle: "CEO",
      worksFor: { "@id": ORG_ID },
      affiliation: { "@type": "CollegeOrUniversity", name: "Collin College" },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Certified Cloud Practitioner",
        credentialCategory: "certification",
      },
      sameAs: [GITHUB_URL],
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <JsonLd data={schema} />

      <section className="section page-hero-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>About Dynasty Web</span>
          </div>
          <h1 className="page-title">
            A studio built on <span className="nowrap"><em>purpose</em>.</span>
          </h1>
          <p className="page-subtitle about-lede">
            Dynasty Web is a software studio in Forney, Texas, led by CEO Brandon Fotsing Talla. We design and build
            custom software and websites for companies, from the first call to launch and beyond.
          </p>
        </div>
      </section>

      <section className="csx-stats" aria-label="Studio at a glance">
        <div className="wrap csx-stats-row about-stats-row">
          <div className="csx-stat">
            <span className="csx-stat-value">2</span>
            <span className="csx-stat-label">Client launches</span>
          </div>
          <div className="csx-stat">
            <span className="csx-stat-value">1</span>
            <span className="csx-stat-label">In-house product</span>
          </div>
          <div className="csx-stat">
            <span className="csx-stat-value">DFW</span>
            <span className="csx-stat-label">Based in Forney, TX</span>
          </div>
          <div className="csx-stat csx-stat-text">
            <span className="csx-stat-phrase">AWS Certified</span>
          </div>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="wrap about-story">
          <div className="about-story-copy">
            <div className="eyebrow">
              <span>Why it works this way</span>
            </div>
            <p>
              Most companies don&apos;t need a giant agency. They need a team that learns how they actually work and
              builds the tool that fits, without passing them from person to person along the way.
            </p>
            <p>
              That&apos;s how we run. You get a direct line to the people building your project, decisions move
              faster, and nothing gets lost in handoffs. We keep a small number of projects at a time so each one is
              done properly.
            </p>
            <p>
              Our CEO, Brandon, is also a full-time student at Collin College, and he brings that same habit of
              learning into every build.
            </p>
          </div>

          <aside className="about-facts" aria-label="Studio facts">
            <div className="about-fact">
              <span className="about-fact-label">CEO</span>
              <span className="about-fact-value">Brandon Fotsing Talla</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-label">Based in</span>
              <span className="about-fact-value">Forney, Texas</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-label">Works with</span>
              <span className="about-fact-value">Companies anywhere</span>
            </div>
            <div className="about-fact about-fact-credential">
              <Image
                src={brandConfig.awsCloudPractitioner.src}
                alt={brandConfig.awsCloudPractitioner.alt}
                width={56}
                height={56}
              />
              <span className="about-fact-value">AWS Certified Cloud Practitioner</span>
            </div>
            <div className="about-fact-links">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer me">
                GitHub ↗
              </a>
              <a href="mailto:brandon@dynastyweb.co">brandon@dynastyweb.co</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section about-principles-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>How we work</span>
          </div>
          <h2 className="section-title">
            Three things that don&apos;t <em>change</em>.
          </h2>
          <div className="process-steps">
            {principles.map((p) => (
              <div key={p.title} className="process-card">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-belief-section">
        <div className="wrap">
          <div className="about-belief">
            <div className="eyebrow light-eyebrow">
              <span>What we believe</span>
            </div>
            <p className="about-belief-text">
              Software should fit the way your company works, not the other way around. We build it that way, and
              then we hand you the <em>keys</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-work-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>The work</span>
          </div>
          <h2 className="section-title">
            Work we&apos;ve <em>shipped</em>.
          </h2>
          <div className="about-work-grid">
            {workCards.map((w) => (
              <Link key={w.href} href={w.href} className="about-work-card">
                <div className="about-work-shot">
                  <Image src={w.img} alt={w.alt} fill sizes="(min-width: 860px) 340px, 100vw" />
                </div>
                <div className="about-work-body">
                  <span className="about-work-tag">{w.tag}</span>
                  <h3>{w.name}</h3>
                  <span className="about-work-cta">{w.cta} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              <Link href="/contact" className="btn btn-gold-bright">
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
