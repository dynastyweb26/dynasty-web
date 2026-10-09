"use client";

import { useState } from "react";
import Link from "next/link";
import { siteData, getTier, countTierSolutions } from "../../data/site";

export default function SolutionsPage() {
  const [selectedSolutions, setSelectedSolutions] = useState([]);

  const toggleSolution = (id) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTier = getTier(selectedSolutions);
  const tierCount = countTierSolutions(selectedSolutions);
  const hasWebsite = selectedSolutions.includes("website");
  const hasQuoteOnly = selectedSolutions.some(
    (id) => siteData.solutions.find((s) => s.id === id)?.quoteOnly
  );
  const queryParam = selectedSolutions.join(",");

  const featured = siteData.solutions.find((s) => s.id === "custom-software");
  const services = siteData.solutions.filter((s) => s.id !== "custom-software");

  const renderTile = (sol, extraClass = "") => {
    const isSelected = selectedSolutions.includes(sol.id);
    return (
      <div
        key={sol.id}
        className={`bento-tile interactive-tile ${extraClass} ${isSelected ? "selected" : ""}`}
        onClick={() => toggleSolution(sol.id)}
      >
        <div className="bento-tile-top">
          <h2 className="bento-tile-title">{sol.name}</h2>
          <div className="bento-price-tag">
            {sol.quoteOnly ? (
              <span className="price-num price-quote">Custom quote</span>
            ) : (
              <>
                <span className="price-num">{sol.price}</span>
                <span className="price-cadence">/{sol.cadence}</span>
              </>
            )}
          </div>
        </div>

        {sol.note && <p className="bento-price-note">{sol.note}</p>}

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
            <span>
              {sol.quoteOnly
                ? isSelected
                  ? "Quote requested"
                  : "Request a quote"
                : isSelected
                ? "Added to quote"
                : "Add to quote"}
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="solutions-page">
      <section className="section page-hero-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Solutions</span>
          </div>
          <h1 className="page-title">
            Custom <em>software</em> first. Supporting services alongside.
          </h1>
          <p className="page-subtitle">
            Most engagements start with a custom build scoped to your company. Supporting services can be added to a project or purchased on their own.
          </p>
        </div>
      </section>

      <section className="section solutions-bento-section">
        <div className="wrap">
          <div className="bento-grid">
            {featured && renderTile(featured, "feature-tile")}
          </div>

          <div className="eyebrow services-eyebrow">
            <span>Supporting Services</span>
          </div>
          <p className="services-note">
            Adding two or more services to a website project unlocks package perks.{" "}
            <Link href="/packages">How packages work →</Link>
          </p>

          <div className="bento-grid">
            {services.map((sol) => renderTile(sol))}
          </div>

          {/* STICKY SUMMARY FLOATING BAR */}
          <div className="solutions-floating-bar">
            <div className="summary-info">
              {hasWebsite && (
                <div className="tier-indicator">
                  <span className="indicator-label">Calculated Tier:</span>
                  <strong className="indicator-tier-name">{currentTier.name}</strong>
                </div>
              )}
              <span className="summary-count">
                {tierCount} solution{tierCount === 1 ? "" : "s"} selected
                {hasWebsite && " + website"}
                {hasQuoteOnly && " + custom quote"}
              </span>
            </div>
            <Link
              href={queryParam ? `/contact?s=${queryParam}` : "/contact"}
              className="btn btn-primary"
            >
              Continue
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
              <span>Not sure where to start?</span>
            </div>
            <h2 className="cta-band-title">
              Let&apos;s talk about your <em>project</em>.
            </h2>
            <p className="cta-band-text">
              Send a short description of what you need. We&apos;ll recommend the right scope, whether that&apos;s a custom build, a single service, or both.
            </p>
            <div className="cta-band-actions">
              <Link
                href={queryParam ? `/contact?s=${queryParam}` : "/contact"}
                className="btn btn-gold-bright"
              >
                Start a project
              </Link>
              <Link href="/packages" className="btn btn-ghost-light">
                How packages work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
