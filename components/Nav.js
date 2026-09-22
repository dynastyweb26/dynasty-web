"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          <BrandLogo type="dynasty" width={32} height={32} />
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

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            className={`hamburger-btn ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div className="mobile-menu-overlay" role="dialog" aria-modal="true">
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              <ul>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
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
                className="btn btn-primary full-width"
                onClick={() => setIsOpen(false)}
              >
                Get a quote
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
