"use client";

import { useState } from "react";
import Link from "next/link";
import { siteData, getTier } from "../../data/site";

export default function SolutionsPage() {
  const [selectedSolutions, setSelectedSolutions] = useState([]);

  const toggleSolution = (id) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTier = getTier(selectedSolutions);
  const queryParam = selectedSolutions.join(",");

  return (
    <div className="solutions-page">
      <section className="section page-hero-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Digital Solutions Menu</span>
          </div>
          <h1 className="page-title">
            À la carte <em>services</em> for local growth.
          </h1>
          <p className="page-subtitle">
            Pick and choose the exact digital tools your business needs. Each added solution builds your quote and advances your tier.
          </p>

          <div className="tier-unlock-banner">
            <div className="banner-content">
              <span className="banner-badge">Tier Advantage</span>
              <p>
                Add 2 or more solutions to automatically unlock <strong>Pro Gold</strong> perks, or add 4 for <strong>Pro Platinum</strong>!
              </p>
            </div>
            <Link href="/packages" className="btn btn-ghost btn-sm">
              See what unlocks →
            </Link>
          </div>
        </div>
      </section>

      <section className="section solutions-bento-section">
        <div className="wrap">
          <div className="bento-grid">
            {siteData.solutions.map((sol) => {
              const isSelected = selectedSolutions.includes(sol.id);
              return (
                <div
                  key={sol.id}
                  className={`bento-tile interactive-tile ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSolution(sol.id)}
                >
                  <div className="bento-tile-top">
                    <h2 className="bento-tile-title">{sol.name}</h2>
                    <div className="bento-price-tag">
                      <span className="price-num">{sol.price}</span>
                      <span className="price-cadence">/{sol.cadence}</span>
                    </div>
                  </div>

                  <p className="bento-tile-desc">{sol.description}</p>

                  <div className="bento-tile-footer">
                    <button
                      type="button"
                      className={`btn-toggle-quote ${isSelected ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSolution(sol.id);
                      }}
                    >
                      <span className="checkbox-icon">
                        {isSelected && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                      <span>{isSelected ? "Added to quote" : "Add to quote"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* STICKY SUMMARY FLOATING BAR */}
          <div className="solutions-floating-bar">
            <div className="summary-info">
              <div className="tier-indicator">
                <span className="indicator-label">Calculated Tier:</span>
                <strong className="indicator-tier-name">{currentTier.name}</strong>
              </div>
              <span className="summary-count">
                {selectedSolutions.length} solution{selectedSolutions.length === 1 ? "" : "s"} selected
              </span>
            </div>
            <Link
              href={queryParam ? `/contact?s=${queryParam}` : "/contact"}
              className="btn btn-primary"
            >
              Proceed to quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA BAND */}
      <section className="section cta-band-section">
        <div className="wrap">
          <div className="cta-band-card">
            <div className="eyebrow light-eyebrow">
              <span>Have custom requirements?</span>
            </div>
            <h2 className="cta-band-title">
              Let&apos;s talk about your <em>project</em>.
            </h2>
            <p className="cta-band-text">
              Unsure which solutions match your goals? Send us an enquiry and we&apos;ll help structure the ideal package.
            </p>
            <div className="cta-band-actions">
              <Link
                href={queryParam ? `/contact?s=${queryParam}` : "/contact"}
                className="btn btn-gold-bright"
              >
                Send enquiry
              </Link>
              <Link href="/packages" className="btn btn-ghost-light">
                Review package perks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
