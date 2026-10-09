import Link from "next/link";
import { siteData } from "../../data/site";

export const metadata = {
  title: "Website Packages",
  description:
    "How Dynasty Web website packages work: add services to a website project and unlock included perks.",
};

export default function PackagesPage() {
  return (
    <div className="packages-page">
      <section className="section page-hero-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Website Packages</span>
          </div>
          <h1 className="page-title">
            How <em>packages</em> work.
          </h1>
          <p className="page-subtitle">
            Packages apply to website projects. Adding supporting services moves a project into higher tiers with included perks. Every service can also be purchased on its own, and custom software is always scoped separately.
          </p>

          <div className="tier-explanation-box">
            <div className="expl-step">
              <span className="expl-num">1</span>
              <h4>Website Base</h4>
              <p>Every package starts with a custom, mobile-friendly website.</p>
            </div>
            <div className="expl-divider">→</div>
            <div className="expl-step">
              <span className="expl-num">2</span>
              <h4>Add Services</h4>
              <p>Add services like local SEO, photography, or On It invoicing.</p>
            </div>
            <div className="expl-divider">→</div>
            <div className="expl-step">
              <span className="expl-num">3</span>
              <h4>Unlock Perks</h4>
              <p>Higher service counts unlock CRM setup, website maintenance, and priority support.</p>
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
                    href={`/contact?s=website`}
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
              Browse services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA BAND */}
      <section className="section cta-band-section">
        <div className="wrap">
          <div className="cta-band-card">
            <div className="eyebrow light-eyebrow">
              <span>Ready to choose?</span>
            </div>
            <h2 className="cta-band-title">
              Find the <em>package</em> that fits.
            </h2>
            <p className="cta-band-text">
              Browse supporting services and add them to your quote.
            </p>
            <div className="cta-band-actions">
              <Link href="/solutions" className="btn btn-gold-bright">
                Explore services
              </Link>
              <Link href="/contact" className="btn btn-ghost-light">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
