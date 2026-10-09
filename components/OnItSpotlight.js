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
              <span>Built In-House</span>
            </div>
            <h2 className="section-title">
              Built for one <em>client</em>. Now a product.
            </h2>
            <p className="onit-intro-p">
              On It began as custom software for a single field-service company whose crew was writing up invoices at night after every job. We mapped how the crew actually works and built around it: describe the job out loud, and a branded invoice with a pay link goes out on the spot. It worked well enough that we turned it into a standalone product. That&apos;s how we approach every build: solve one company&apos;s real problem first, and build it to last.
            </p>
            <Link href="/on-it" className="btn btn-primary">
              See On It
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
