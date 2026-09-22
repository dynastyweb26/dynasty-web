"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const firstNavLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll and set focus when menu opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (firstNavLinkRef.current) {
        firstNavLinkRef.current.focus();
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-wrap">
        <Link href="/" className="nav-logo-link" aria-label="Dynasty Web Home">
          <BrandLogo type="dynasty" width={32} height={35} size="small" />
          <span className="nav-brand-wordmark">Dynasty Web</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="btn btn-primary nav-cta">
            Get a quote
          </Link>

          {/* MOBILE HAMBURGER / CLOSE BUTTON */}
          <button
            type="button"
            className={`hamburger-btn ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu-overlay"
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div
          id="mobile-menu-overlay"
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="mobile-menu-content">
            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul>
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        ref={idx === 0 ? firstNavLinkRef : null}
                        href={link.href}
                        className={`mobile-nav-link ${isActive ? "active" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mobile-menu-footer">
              <Link
                href="/contact"
                className="btn btn-primary full-width mobile-cta-btn"
                onClick={() => setIsOpen(false)}
              >
                Get a quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href="mailto:brandon@dynastyweb.co" className="mobile-email">
                brandon@dynastyweb.co
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
