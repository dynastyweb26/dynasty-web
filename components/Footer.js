import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-site">
      <div className="wrap">
        <div className="footer-top-grid">
          {/* BRAND COL */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link" aria-label="Dynasty Web Home">
              <BrandLogo type="dynasty" width={42} height={46} size="large" />
              <span className="footer-brand-name">Dynasty Web</span>
            </Link>
            <p className="footer-tagline">
              Digital solutions studio crafting high-converting platforms and software for local service businesses.
            </p>
          </div>

          {/* NAVIGATION COL */}
          <div className="footer-col">
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
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* PRODUCTS & LEGAL COL */}
          <div className="footer-col">
            <h4 className="footer-col-title">Studio</h4>
            <ul className="footer-links">
              <li>
                <Link href="/on-it">On It Software</Link>
              </li>
              <li>
                <a
                  href="https://onit.dynastyweb.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-external-link"
                >
                  Visit onit.dynastyweb.co
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* DIRECT CONTACT COL */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Enquiries</h4>
            <a href="mailto:brandon@dynastyweb.co" className="footer-email-link">
              brandon@dynastyweb.co
            </a>
            <span className="footer-location">Forney, Texas</span>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} Dynasty Web LLC · All rights reserved.</p>
          <p>Built with craftsman pride in Forney, TX.</p>
        </div>
      </div>
    </footer>
  );
}
