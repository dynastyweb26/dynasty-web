import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteData } from "../../../data/site";
import { pageMetadata, SITE_URL, ORG_ID } from "../../../data/seo";
import { JsonLd } from "../../../components/JsonLd";
import { BeforeAfter } from "../../../components/BeforeAfter";
import { Zoomable } from "../../../components/Zoomable";

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

  const hero = cs.heroShot ?? item.screenshots[0];
  const problemImg = cs.problemImage ?? item.screenshots[1] ?? item.screenshots[0];
  const showcase = item.screenshots[2] ?? item.screenshots[0];
  const [before, emWord, after] = cs.emWord && item.name.includes(cs.emWord)
    ? [item.name.slice(0, item.name.indexOf(cs.emWord)), cs.emWord, item.name.slice(item.name.indexOf(cs.emWord) + cs.emWord.length)]
    : [item.name, null, ""];

  return (
    <main className="case-study-page">
      <JsonLd data={schema} />

      {/* HERO: the client's work leads */}
      <section className="csx-hero">
        <div className="wrap csx-hero-grid">
          <div className="csx-hero-copy">
            <div className="eyebrow">
              <span>Case Study · {item.industry}</span>
            </div>
            <h1 className="csx-title">
              {before}
              {emWord && <em>{emWord}</em>}
              {after}
            </h1>
            <p className="csx-lede">{cs.title}.</p>
            <a href={item.url} target="_blank" rel="noopener" className="btn btn-ghost btn-sm csx-live-btn">
              Visit the live site
            </a>
          </div>

          <div className={`csx-devices${cs.mobileShot ? " has-phone" : ""}`}>
            <div className="csx-browser">
              <div className="csx-browser-bar" aria-hidden="true">
                <span /><span /><span />
              </div>
              <Zoomable src={hero.src} alt={hero.alt} className="zoomable-block">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  width={hero.w ?? 1600}
                  height={hero.h ?? 920}
                  sizes="(min-width: 1000px) 620px, 100vw"
                  priority
                  className="csx-browser-img"
                />
              </Zoomable>
            </div>
            {cs.mobileShot && (
              <div className="csx-phone">
                <Image
                  src={cs.mobileShot.src}
                  alt={cs.mobileShot.alt}
                  width={cs.mobileShot.w}
                  height={cs.mobileShot.h}
                  sizes="170px"
                  className="csx-phone-img"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      {cs.stats?.length > 0 && (
        <section className="csx-stats" aria-label="Project at a glance">
          <div className="wrap csx-stats-row">
            {cs.stats.map((st) => (
              <div key={st.label ?? st.text} className={`csx-stat${st.text ? " csx-stat-text" : ""}`}>
                {st.text ? (
                  <span className="csx-stat-phrase">{st.text}</span>
                ) : (
                  <>
                    <span className="csx-stat-value">{st.value}</span>
                    <span className="csx-stat-label">{st.label}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* THE PROBLEM */}
      <section className="csx-section">
        <div className="wrap csx-problem">
          <Zoomable src={problemImg.src} alt={problemImg.alt} className="zoomable-block">
            <Image
              src={problemImg.src}
              alt={problemImg.alt}
              width={problemImg.w ?? 1600}
              height={problemImg.h ?? 920}
              sizes="(min-width: 900px) 560px, 100vw"
              className="csx-problem-img"
            />
          </Zoomable>
          <div className="csx-problem-copy">
            <div className="eyebrow"><span>The Problem</span></div>
            <p>{cs.problem}</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DID */}
      <section className="csx-section csx-section-tight">
        <div className="wrap csx-did">
          <div className="csx-did-copy">
            <div className="eyebrow"><span>What We Did</span></div>
            <p>{cs.whatWeBuilt}</p>
          </div>
          {cs.services?.length > 0 && (
            <ol className="csx-tiles">
              {cs.services.map((sv, idx) => {
                const shot = sv.shot ?? item.screenshots[idx % item.screenshots.length].src;
                return (
                  <li key={sv.name} className="csx-tile" title={sv.detail}>
                    <Zoomable src={shot} alt={sv.name} className="csx-tile-media">
                      <Image
                        src={shot}
                        alt=""
                        fill
                        sizes="(min-width: 900px) 200px, 50vw"
                        style={{ objectFit: "cover", objectPosition: sv.shotPosition ?? "50% 0%" }}
                      />
                      <span className="csx-tile-num">{String(idx + 1).padStart(2, "0")}</span>
                    </Zoomable>
                    <span className="csx-tile-name">{sv.name}</span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </section>

      {/* DARK SHOWCASE: before/after + result, then CTA */}
      <section className="csx-section csx-section-tight">
        <div className="wrap">
          <div className="csx-dark">
            <div className="csx-dark-grid">
              <div className="csx-dark-media">
                {cs.beforeAfter ? (
                  <>
                    <BeforeAfter before={cs.beforeAfter.before} after={cs.beforeAfter.after} />
                    {cs.beforeAfter.caption && <p className="csx-dark-caption">{cs.beforeAfter.caption}</p>}
                  </>
                ) : (
                  <Zoomable src={showcase.src} alt={showcase.alt} className="zoomable-block">
                    <Image
                      src={showcase.src}
                      alt={showcase.alt}
                      width={showcase.w ?? 1600}
                      height={showcase.h ?? 920}
                      sizes="(min-width: 900px) 560px, 100vw"
                      className="csx-dark-img"
                    />
                  </Zoomable>
                )}
              </div>
              <div className="csx-result">
                <div className="eyebrow light-eyebrow"><span>The Result</span></div>
                <p className="csx-result-text">{cs.result}</p>
              </div>
            </div>

            <div className="csx-cta">
              <h2 className="csx-cta-title">
                Want <em>results</em> like this for your company?
              </h2>
              <Link href="/contact" className="btn btn-gold-bright">
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
