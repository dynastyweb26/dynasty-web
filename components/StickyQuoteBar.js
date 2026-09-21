"use client";

import { useEffect, useState } from "react";

export default function StickyQuoteBar({ solutionCount = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("top");
      const contactEl = document.getElementById("contact");

      if (!heroEl || !contactEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const contactTop = contactEl.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show bar after hero is scrolled past, hide when contact section enters viewport
      if (heroBottom < 0 && contactTop > windowHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky-quote-bar ${isVisible ? "is-visible" : ""}`}>
      <div>
        <strong style={{ fontSize: "14px", color: "var(--gold-bright)" }}>
          Get a quote
        </strong>
        {solutionCount > 0 && (
          <span style={{ fontSize: "12px", color: "rgba(250,244,233,0.8)", marginLeft: "8px" }}>
            · {solutionCount} solution{solutionCount > 1 ? "s" : ""} added
          </span>
        )}
      </div>

      <a
        href="#contact"
        className="btn btn-primary-bright"
        style={{ padding: "8px 16px", fontSize: "13px", borderRadius: "999px" }}
      >
        Enquire
      </a>
    </div>
  );
}
