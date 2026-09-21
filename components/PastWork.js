"use client";

import { useState } from "react";
import BrowserFrame from "@/components/BrowserFrame";
import { siteData } from "@/data/site";

export default function PastWork() {
  const [expandedWork, setExpandedWork] = useState({});

  const toggleCaseStudy = (id) => {
    setExpandedWork((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Client Work</span>
            <h2>Craftsmanship in action across real local businesses.</h2>
          </div>
          <p>
            Hover or focus over any screenshot frame to scroll through the full page build.
          </p>
        </div>

        <div className="work-grid reveal">
          {siteData.work.map((item) => {
            const isExpanded = !!expandedWork[item.id];
            return (
              <div key={item.id} className="work-card">
                <div className="work-frame-wrapper">
                  <BrowserFrame
                    screenshotKey={item.screenshotKey}
                    title={item.name}
                    url={item.url}
                    aspectRatio="16/10"
                    interactive={true}
                  />
                </div>

                <div className="work-info">
                  <div className="work-meta">
                    <span className="industry-badge">{item.industry}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p className="work-desc">{item.shortDescription}</p>

                  <div className="work-actions">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                      className="visit-site-link"
                    >
                      Visit site
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </a>

                    <button
                      type="button"
                      className="case-study-toggle"
                      onClick={() => toggleCaseStudy(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`case-study-${item.id}`}
                    >
                      <span>{isExpanded ? "Close case study" : "Read case study"}</span>
                      <svg
                        className={`arrow-icon ${isExpanded ? "rotate" : ""}`}
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Inline Collapsible Case Study Drawer */}
                  <div
                    id={`case-study-${item.id}`}
                    className={`drawer-container ${isExpanded ? "is-expanded" : ""}`}
                  >
                    <div className="drawer-inner">
                      <div className="case-study-box">
                        <div className="cs-section">
                          <h4>The Problem</h4>
                          <p>{item.caseStudy.problem}</p>
                        </div>
                        <div className="cs-section">
                          <h4>What We Built</h4>
                          <p>{item.caseStudy.whatWeBuilt}</p>
                        </div>
                        <div className="cs-section">
                          <h4>The Result</h4>
                          <p>{item.caseStudy.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
