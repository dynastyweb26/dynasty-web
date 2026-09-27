import Link from "next/link";
import { siteData } from "../../data/site";

export const metadata = {
  title: "Service Packages & Tier Progression | Dynasty Web",
  description:
    "How our package tiers work. Pay per Digital Solution on top of your custom website base and unlock Pro Gold, Platinum, and Diamond perks.",
};

export default function PackagesPage() {
  return (
    <div className="packages-page">
      <section className="section page-hero-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Package Structure</span>
          </div>
          <h1 className="page-title">
            How our <em>packages</em> &amp; tiers work.
          </h1>
          <p className="page-subtitle">
            Every build starts with a custom website base. Adding Digital Solutions automatically advances your business into higher tiers with exclusive free perks.
          </p>

          <div className="tier-explanation-box">
            <div className="expl-step">
              <span className="expl-num">1</span>
              <h4>Custom Website Base</h4>
              <p>Every client gets a responsive, high-converting digital storefront.</p>
            </div>
            <div className="expl-divider">→</div>
            <div className="expl-step">
              <span className="expl-num">2</span>
              <h4>Select Solutions</h4>
              <p>Choose à la carte tools like SEO, Photography, or On It invoicing.</p>
            </div>
            <div className="expl-divider">→</div>
            <div className="expl-step">
              <span className="expl-num">3</span>
              <h4>Unlock Perks</h4>
              <p>Higher solution counts grant free CRM dashboards, brand refreshes &amp; priority support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section packages-grid-section">
        <div className="wrap">
          <div className="packages-grid">
            {siteData.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`pkg-card ${pkg.featured ? "featured-card" : ""}`}
              >
                {pkg.featured && (
                  <div className="featured-badge-top">
                    <span>Featured Tier</span>
                  </div>
                )}
                <div className="pkg-header">
                  <h2 className="pkg-name">{pkg.name}</h2>
                  <span className="pkg-qualifier">{pkg.qualifier}</span>
                  <p className="pkg-pitch">{pkg.pitch}</p>
                </div>

                <div className="pkg-perks-list">
                  <h4>Included Perks</h4>
                  <ul>
                    {pkg.perks.map((perk, idx) => (
                      <li key={idx}>
                        <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pkg-footer">
                  <Link
                    href={`/contact?s=`}
                    className={`btn ${pkg.featured ? "btn-gold-bright" : "btn-primary"} full-width`}
                  >
                    Build your quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="packages-actions-row">
            <Link href="/solutions" className="btn btn-ghost">
              Browse Digital Solutions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Enquire now
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA BAND */}
      <section className="section cta-band-section">
        <div className="wrap">
          <div className="cta-band-card">
            <div className="eyebrow light-eyebrow">
              <span>Ready to pick solutions?</span>
            </div>
            <h2 className="cta-band-title">
              See which <em>tier</em> matches your vision.
            </h2>
            <p className="cta-band-text">
              Check out our full à la carte menu of Digital Solutions and add them to your interactive quote.
            </p>
            <div className="cta-band-actions">
              <Link href="/solutions" className="btn btn-gold-bright">
                Explore solutions
              </Link>
              <Link href="/contact" className="btn btn-ghost-light">
                Get a custom quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
