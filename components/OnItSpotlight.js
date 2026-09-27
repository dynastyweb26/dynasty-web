import Link from "next/link";
import { siteData } from "../data/site";
import { WorkCard } from "./WorkCard";

export function OnItSpotlight() {
  const onitItem = siteData.work.find((item) => item.builtInHouse);

  return (
    <section className="section onit-section" id="built-by-dynasty">
      <div className="wrap">
        <div className="onit-split-grid">
          {/* INTRO BLOCK */}
          <div className="onit-intro-block">
            <div className="eyebrow">
              <span>Built by Dynasty Web</span>
            </div>
            <h2 className="section-title" style={{ marginTop: "12px", marginBottom: "16px" }}>
              We build <em>software</em> we use.
            </h2>
            <p className="onit-intro-p" style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: "1.6", marginBottom: "28px" }}>
              We design and ship real web applications to solve daily field friction for working trades. On It is our in-house voice-powered invoicing tool — proof that Dynasty Web builds true software, not just static templates.
            </p>
            <Link href="/on-it" className="btn btn-primary">
              Learn about On It software
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* SHOWCASE CARD */}
          <div className="onit-card-wrap">
            {onitItem && <WorkCard item={onitItem} />}
          </div>
        </div>
      </div>
    </section>
  );
}
