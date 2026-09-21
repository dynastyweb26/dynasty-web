import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-site">
      <div className="wrap footer-wrap">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link" aria-label="Dynasty Web Home">
              <BrandLogo type="dynasty" width={110} height={28} />
            </Link>
            <p className="footer-tagline">
              Digital solutions studio in Forney, Texas. Crafting high-converting web systems and digital tools for local service providers.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/packages">Packages</Link>
              </li>
              <li>
                <Link href="/contact">Get a Quote</Link>
              </li>
            </ul>
          </div>

          <div className="footer-software-col">
            <h4 className="footer-col-title">In-House Software</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://onit.dynastyweb.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-external-link"
                >
                  On It Invoicing
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <a href="mailto:brandon@dynastyweb.co" className="footer-email-link">
              brandon@dynastyweb.co
            </a>
            <span className="footer-location">Forney, TX</span>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} Dynasty Web · Forney, TX. All rights reserved.
          </p>
          <div className="legal-links">
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
