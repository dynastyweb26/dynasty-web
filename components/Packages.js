"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function Packages({ onSelectPackage }) {
  const [showComparison, setShowComparison] = useState(false);

  const handleEnquire = (packageId) => {
    if (onSelectPackage) {
      onSelectPackage(packageId);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section" id="packages">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Service Packages</span>
            <h2>Simple, transparent pricing built for local growth.</h2>
          </div>
          <p>
            Choose a foundation package to transform your web presence. No surprise fees, no hidden extras.
          </p>
        </div>

        {/* Package Grid (Supports 3 or 4 tiers) */}
        <div className="packages-grid reveal">
          {siteData.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.featured ? "featured-card" : ""}`}
            >
              {pkg.featured && (
                <div className="card-badge-row">
                  <span className="eyebrow-badge">Most Popular</span>
                </div>
              )}
              <div className="tier-header">
                <h3>{pkg.name}</h3>
                <div className="tier-price">
                  <span className="amount">{pkg.price}</span>
                  <span className="cadence">{pkg.cadence}</span>
                </div>
                <p className="pitch">{pkg.pitch}</p>
              </div>

              <div className="tier-body">
                <div className="solutions-included">
                  <strong>
                    {pkg.solutionsIncluded === 0
                      ? "Standard add-ons extra"
                      : pkg.solutionsIncluded === 7
                      ? "All 7 Digital Solutions included"
                      : `Includes ${pkg.solutionsIncluded} Digital Solutions`}
                  </strong>
                </div>

                <ul className="feature-list">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M3.5 8.5l3 3 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tier-footer">
                <button
                  type="button"
                  className={`btn ${pkg.featured ? "btn-primary-bright" : "btn-primary"}`}
                  onClick={() => handleEnquire(pkg.id)}
                >
                  Enquire about {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Expander */}
        <div className="comparison-wrapper reveal">
          <button
            type="button"
            className="toggle-comparison-btn"
            onClick={() => setShowComparison(!showComparison)}
            aria-expanded={showComparison}
            aria-controls="comparison-matrix-drawer"
          >
            <span>{showComparison ? "Hide feature comparison" : "Compare all features"}</span>
            <svg
              className={`arrow-icon ${showComparison ? "rotate" : ""}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <div
            id="comparison-matrix-drawer"
            className={`drawer-container ${showComparison ? "is-expanded" : ""}`}
          >
            <div className="drawer-inner">
              <div className="comparison-table-scroll">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Starter</th>
                      <th>Pro Gold</th>
                      <th>Pro Platinum</th>
                      <th>Diamond</th>
                    </tr>
                  </thead>
                  <tbody>
                    {siteData.comparisonFeatures.map((row, idx) => (
                      <tr key={idx}>
                        <td className="feat-col">{row.feature}</td>
                        <td>{renderTableCell(row.starter)}</td>
                        <td>{renderTableCell(row.proGold)}</td>
                        <td>{renderTableCell(row.proPlatinum)}</td>
                        <td>{renderTableCell(row.proDiamond)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderTableCell(value) {
  if (typeof value === "boolean") {
    return value ? (
      <svg className="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Included">
        <path d="M3.5 8.5l3 3 6-6" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ) : (
      <span className="dash">—</span>
    );
  }
  return <span>{value}</span>;
}
