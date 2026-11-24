import Link from "next/link";
import { siteData } from "../data/site";
import { WorkCard } from "./WorkCard";

export function PastWork() {
  const clientWork = siteData.work.filter((item) => !item.builtInHouse);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="eyebrow">
          <span>Selected Work</span>
        </div>
        <div className="section-head-split">
          <h2 className="section-title">
            Work that <em>earns</em> its keep.
          </h2>
          <p className="section-subtitle">
            Custom software and the web presence around it, built for clients who needed something off-the-shelf tools couldn&apos;t give them.
          </p>
        </div>

        <div className="recent-work-grid">
          {clientWork.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>

        <div className="teaser-action-row" style={{ marginTop: "32px" }}>
          <Link href="/contact" className="btn btn-ghost">
            Discuss your project
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
