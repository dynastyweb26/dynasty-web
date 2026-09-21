"use client";

import { useState } from "react";
import { WorkSlideshow } from "./WorkSlideshow";
import { BrandLogo } from "./BrandLogo";

export function WorkCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (item.builtInHouse) {
    return (
      <div className="work-card on-it-card">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="work-card-link-overlay"
          aria-label={`Open ${item.name} website in a new tab`}
        />
        <WorkSlideshow
          title={item.name}
          screenshots={item.screenshots}
          isBuiltInHouse={true}
        />
        <div className="work-card-content">
          <div className="work-card-header">
            <div className="work-card-title-group">
              <span className="badge-in-house">
                <span className="live-dot" aria-hidden="true" />
                Built In-House
              </span>
              <div className="logo-title-row">
                <BrandLogo type="onit" width={32} height={32} />
                <h3 className="work-card-title">{item.name}</h3>
              </div>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link-out"
              onClick={(e) => e.stopPropagation()}
            >
              Visit product
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <p className="work-card-desc">{item.shortDescription}</p>

          <div className="work-card-actions">
            <button
              type="button"
              className="btn-case-study"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Close case study" : "Read case study"}
              <svg
                className={`chevron ${isExpanded ? "open" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {isExpanded && item.caseStudy && (
            <div className="case-study-drawer">
              <div className="case-study-grid">
                <div className="cs-item">
                  <h4>The Problem</h4>
                  <p>{item.caseStudy.problem}</p>
                </div>
                <div className="cs-item">
                  <h4>What We Built</h4>
                  <p>{item.caseStudy.whatWeBuilt}</p>
                </div>
                <div className="cs-item">
                  <h4>The Result</h4>
                  <p>{item.caseStudy.result}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="work-card">
      <WorkSlideshow
        title={item.name}
        screenshots={item.screenshots}
        isBuiltInHouse={false}
      />
      <div className="work-card-content">
        <div className="work-card-header">
          <div className="work-card-title-group">
            <span className="work-card-industry">{item.industry}</span>
            <h3 className="work-card-title">{item.name}</h3>
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link-out"
          >
            Visit site
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <p className="work-card-desc">{item.shortDescription}</p>

        <div className="work-card-actions">
          <button
            type="button"
            className="btn-case-study"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Close case study" : "Read case study"}
            <svg
              className={`chevron ${isExpanded ? "open" : ""}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {isExpanded && item.caseStudy && (
          <div className="case-study-drawer">
            <div className="case-study-grid">
              <div className="cs-item">
                <h4>The Problem</h4>
                <p>{item.caseStudy.problem}</p>
              </div>
              <div className="cs-item">
                <h4>What We Built</h4>
                <p>{item.caseStudy.whatWeBuilt}</p>
              </div>
              <div className="cs-item">
                <h4>The Result</h4>
                <p>{item.caseStudy.result}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
