import Link from "next/link";
import { siteData } from "../data/site";
import { WorkCard } from "./WorkCard";

export function PastWork() {
  const clientWork = siteData.work.filter((item) => !item.builtInHouse);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="eyebrow">
          <span>Recent Work</span>
        </div>
        <div className="section-head-split">
          <h2 className="section-title">
            Craftsmanship in <em>the wild</em>.
          </h2>
          <p className="section-subtitle">
            Every client site is built custom from the ground up for speed, local search authority, and clear lead conversion.
          </p>
        </div>

        <div className="recent-work-grid">
          {clientWork.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>

        <div className="teaser-action-row" style={{ marginTop: "32px" }}>
          <Link href="/solutions" className="btn btn-ghost">
            Explore solutions for your business
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
