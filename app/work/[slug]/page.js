import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteData } from "../../../data/site";
import { pageMetadata, SITE_URL, ORG_ID } from "../../../data/seo";
import { JsonLd } from "../../../components/JsonLd";

const caseStudies = siteData.work.filter((w) => !w.builtInHouse && w.slug && w.caseStudy);
const getStudy = (slug) => caseStudies.find((w) => w.slug === slug);

export function generateStaticParams() {
  return caseStudies.map((w) => ({ slug: w.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getStudy(slug);
  if (!item) return {};
  return pageMetadata({
    title: `${item.name} Case Study`,
    description: item.shortDescription,
    path: `/work/${item.slug}`,
  });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const item = getStudy(slug);
  if (!item) notFound();
  const cs = item.caseStudy;
  const path = `/work/${item.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: cs.title,
        description: item.shortDescription,
        url: `${SITE_URL}${path}`,
        image: item.screenshots.map((s) => `${SITE_URL}${s.src}`),
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        about: { "@type": "Organization", name: item.name, url: item.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/#work` },
          { "@type": "ListItem", position: 3, name: item.name, item: `${SITE_URL}${path}` },
        ],
      },
    ],
  };

  return (
    <main className="case-study-page">
      <JsonLd data={schema} />

      <section className="section page-hero-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Case Study · {item.industry}</span>
          </div>
          <h1 className="page-title">{item.name}</h1>
          <p className="page-subtitle cs-page-lede">{cs.title}.</p>
          <div className="cs-page-links">
            <a href={item.url} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">
              Visit the live site
            </a>
          </div>
        </div>
      </section>

      <section className="section cs-page-shots-section">
        <div className="wrap cs-page-shots">
          {item.screenshots.map((shot, i) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={shot.w ?? 1600}
              height={shot.h ?? 920}
              sizes="(min-width: 900px) 33vw, 100vw"
              priority={i === 0}
              className="cs-page-shot"
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap cs-page-story">
          <div className="cs-page-block">
            <div className="eyebrow"><span>The Problem</span></div>
            <p>{cs.problem}</p>
          </div>
          <div className="cs-page-block">
            <div className="eyebrow"><span>What We Built</span></div>
            <p>{cs.whatWeBuilt}</p>
          </div>
        </div>
      </section>

      {cs.services?.length > 0 && (
        <section className="section cs-page-services-section">
          <div className="wrap">
            <div className="eyebrow"><span>What&apos;s Included</span></div>
            <h2 className="section-title">
              Everything we <em>handle</em>.
            </h2>
            <div className="process-steps">
              {cs.services.map((s) => (
                <div key={s.name} className="process-card">
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap cs-page-story">
          <div className="cs-page-block">
            <div className="eyebrow"><span>The Result</span></div>
            <p className="cs-page-result">{cs.result}</p>
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
              Want results like this for your <em>company</em>?
            </h2>
            <p className="cta-band-text">
              Tell us where your company stands today and where you want it to be. We reply within one business day.
            </p>
            <div className="cta-band-actions">
              <Link href="/contact" className="btn btn-gold-bright">
                Start a project
              </Link>
              <Link href="/#work" className="btn btn-ghost-light">
                See more work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
