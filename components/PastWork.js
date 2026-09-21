import { siteData } from "../data/site";
import { WorkCard } from "./WorkCard";

export function PastWork() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="eyebrow">
          <span>Client Proof & Software</span>
        </div>
        <div className="section-head-split">
          <h2 className="section-title">
            Recent work &amp; <em>in-house</em> software.
          </h2>
          <p className="section-subtitle">
            Every project is built from scratch with custom speed, clean typography, and zero template bloat.
          </p>
        </div>

        <div className="work-grid">
          {siteData.work.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
