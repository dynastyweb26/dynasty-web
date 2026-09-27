import Link from "next/link";
import { siteData } from "../data/site";

export function FAQ() {
  return (
    <section className="section" id="faq" style={{ scrollMarginTop: "100px" }}>
      <div className="wrap">
        <div className="eyebrow">
          <span>Frequently Asked Questions</span>
        </div>
        <div className="section-head-split">
          <h2 className="section-title">
            Clear answers before <em>you start</em>.
          </h2>
          <p className="section-subtitle">
            Have a question about our build timelines, software ownership, or billing process? Here is what you need to know.
          </p>
        </div>

        <div className="faq-list">
          {siteData.faq.map((item, idx) => (
            <details key={idx} className="faq-item">
              <summary className="faq-question-summary">
                <span>{item.question}</span>
                <svg
                  className="arrow-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="faq-answer-content">
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="teaser-action-row" style={{ marginTop: "32px" }}>
          <p style={{ fontSize: "15px", color: "var(--ink-2)" }}>
            Have a question not listed here? Email Brandon directly at{" "}
            <a href="mailto:brandon@dynastyweb.co" style={{ color: "var(--gold)", textDecoration: "underline" }}>
              brandon@dynastyweb.co
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
