import Image from "next/image";
import Link from "next/link";
import { pageMetadata, SITE_URL, ORG_ID } from "../../data/seo";
import { brandConfig } from "../../data/brand";
import { JsonLd } from "../../components/JsonLd";

export const metadata = pageMetadata({
  title: "About the Studio",
  description:
    "Dynasty Web is a one-person software studio in Forney, Texas, run by Brandon Fotsing Talla. You work directly with the person who builds your software.",
  path: "/about",
});

const GITHUB_URL = "https://github.com/dynastyweb26";

const principles = [
  {
    title: "You talk to the builder",
    body: "There's no account manager in the middle. The person on your first call is the person who designs, builds and supports your software.",
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
      jobTitle: "Founder",
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
            A studio of one, built on <em>purpose</em>.
          </h1>
          <p className="page-subtitle about-lede">
            Dynasty Web is a one-person software studio in Forney, Texas. I&apos;m Brandon Fotsing Talla, and I design
            and build every project myself, from the first call to launch and beyond.
          </p>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="wrap about-story">
          <div className="about-story-copy">
            <div className="eyebrow">
              <span>Why it works this way</span>
            </div>
            <p>
              Most companies don&apos;t need a big agency. They need someone who will learn how they actually work and
              build the tool that fits, without handing them off to someone else halfway through.
            </p>
            <p>
              That&apos;s the whole model here. You get one point of contact who understands your project end to end,
              because they&apos;re the one building it. Decisions move faster, nothing gets lost between people, and
              you always know who to call.
            </p>
            <p>
              I&apos;m also a full-time student at Collin College. The studio runs alongside it, which keeps the
              work focused: a small number of projects at a time, each one done properly.
            </p>
          </div>

          <aside className="about-facts" aria-label="Studio facts">
            <div className="about-fact">
              <span className="about-fact-label">Founder</span>
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
            <span>How I work</span>
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

      <section className="section about-work-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>The work</span>
          </div>
          <ul className="about-work-links">
            <li>
              <Link href="/work/cyril-handyman">Cyril Handyman &amp; Door: website, photography, Google profile and local SEO →</Link>
            </li>
            <li>
              <Link href="/work/vydale">Vydale T.C. Projects: speaker and author site with a book drive →</Link>
            </li>
            <li>
              <Link href="/on-it">On It: invoicing software built in-house →</Link>
            </li>
          </ul>
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
              Tell me how your company works and where it gets stuck. I reply within one business day.
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
