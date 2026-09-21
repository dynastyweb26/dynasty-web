"use client";

import { useEffect, useState, useRef } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function Nav() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Smart nav: hide on scroll down, show on scroll up
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current + 5) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Active section highlight
      const sections = ["packages", "solutions", "work", "process", "faq", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation & focus trap for mobile overlay
  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <header className={`nav-header ${isHidden ? "nav-hidden" : ""}`}>
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="Dynasty Web homepage">
            <BrandLogo variant="dynasty" />
            <span>Dynasty Web</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a
              className={`nav-link hide-sm ${activeSection === "packages" ? "active" : ""}`}
              href="#packages"
            >
              Packages
            </a>
            <a
              className={`nav-link hide-sm ${activeSection === "solutions" ? "active" : ""}`}
              href="#solutions"
            >
              Solutions
            </a>
            <a
              className={`nav-link hide-sm ${activeSection === "work" ? "active" : ""}`}
              href="#work"
            >
              Work
            </a>
            <a
              className={`nav-link hide-sm ${activeSection === "process" ? "active" : ""}`}
              href="#process"
            >
              Process
            </a>
            <a
              className={`nav-link hide-sm ${activeSection === "faq" ? "active" : ""}`}
              href="#faq"
            >
              FAQ
            </a>
            <a className="nav-cta" href="#contact">
              Get a quote
            </a>
          </nav>

          <button
            className="hamburger"
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-overlay-menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {isMobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-overlay-menu"
        ref={overlayRef}
        className={`mobile-overlay ${isMobileOpen ? "is-open" : ""}`}
        aria-hidden={!isMobileOpen}
      >
        <div className="mobile-nav-links">
          <a href="#packages" onClick={closeMobile}>Packages</a>
          <a href="#solutions" onClick={closeMobile}>Solutions</a>
          <a href="#work" onClick={closeMobile}>Work</a>
          <a href="#process" onClick={closeMobile}>Process</a>
          <a href="#faq" onClick={closeMobile}>FAQ</a>
          <a href="#contact" onClick={closeMobile}>Get a quote</a>
        </div>
      </div>
    </>
  );
}
