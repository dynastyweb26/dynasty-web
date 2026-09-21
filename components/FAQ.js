"use client";

import { useState } from "react";
import { siteData } from "../data/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head-split reveal">
          <div>
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-title">Everything you need to know before <em>starting</em>.</h2>
          </div>
          <p className="section-subtitle">
            Got additional questions? Email us anytime at{" "}
            <a href="mailto:brandon@dynastyweb.co" className="gold-link">
              brandon@dynastyweb.co
            </a>
          </p>
        </div>

        <div className="faq-list reveal">
          {siteData.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`arrow-icon ${isOpen ? "rotate" : ""}`}
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className={`drawer-container ${isOpen ? "is-expanded" : ""}`}
                >
                  <div className="drawer-inner">
                    <p className="faq-answer-text">{item.answer}</p>
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

export default FAQ;
