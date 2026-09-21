"use client";

import { siteData } from "@/data/site";

export default function Solutions({ selectedSolutions = [], onToggleSolution }) {
  return (
    <section className="section" id="solutions">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">À La Carte Menu</span>
            <h2>Digital Solutions tailored for your workflow.</h2>
          </div>
          <p>
            Pick standalone solutions or combine them into your package quote.
            <em>Note: Solutions cost significantly less when bundled inside a tier!</em>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid reveal">
          {siteData.solutions.map((sol) => {
            const isAdded = selectedSolutions.includes(sol.id);
            return (
              <div key={sol.id} className="bento-tile">
                <div>
                  <div className="bento-tile-top">
                    <h3>{sol.name}</h3>
                    <span className="bento-price">
                      {sol.price}
                      <small style={{ fontSize: "11px", color: "var(--ink-soft)", fontWeight: 400 }}>
                        /{sol.cadence}
                      </small>
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.5 }}>
                    {sol.description}
                  </p>
                </div>

                <div style={{ marginTop: "18px" }}>
                  <button
                    type="button"
                    className={`toggle-btn ${isAdded ? "added" : ""}`}
                    onClick={() => onToggleSolution && onToggleSolution(sol.id)}
                    aria-pressed={isAdded}
                  >
                    {isAdded ? "✓ Added to quote" : "+ Add to quote"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
