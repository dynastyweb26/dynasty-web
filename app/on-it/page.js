import Image from "next/image";
import { OnItVideoSection } from "../../components/OnItVideoSection";

export const metadata = {
  title: "On It: Fast invoicing for home service pros | Dynasty Web",
  description:
    "Say the job. Send the invoice. Get paid before you leave the driveway. Voice-powered invoicing software built by Dynasty Web.",
};

export default function OnItPage() {
  const stripScreenshots = [
    { src: "/onit/02-invoices.png", alt: "On It invoices list screen" },
    { src: "/onit/03-books.png", alt: "On It books and accounting overview screen" },
    { src: "/onit/04-expenses.png", alt: "On It expense tracking screen" },
    { src: "/onit/05-invoice-style.png", alt: "On It customizable invoice preview screen" },
    { src: "/onit/06-settings.png", alt: "On It application settings screen" },
  ];

  return (
    <main className="onit-page">
      {/* 1. HERO SECTION */}
      <section className="onit-hero-section">
        {/* DESKTOP QR BADGE TOP-RIGHT */}
        <div className="onit-qr-badge desktop-only" aria-hidden="true">
          <a
            href="https://onit.dynastyweb.co/install"
            target="_blank"
            rel="noopener noreferrer"
            className="qr-link"
          >
            <div className="qr-code-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h3v3h-3zM18 18h3v3h-3zM18 15h3v3h-3z" />
              </svg>
            </div>
            <span className="qr-caption">Scan to install</span>
          </a>
        </div>

        <div className="wrap onit-hero-wrap">
          {/* LOGO / WORDMARK */}
          <div className="onit-brand-header">
            <Image
              src="/brand/on-it-logo.png"
              alt="On It logo"
              width={56}
              height={56}
              priority
              className="onit-hero-logo"
            />
          </div>

          {/* HEADLINE & SUBLINE */}
          <h1 className="onit-hero-headline">Fast Invoice. Fast Money.</h1>

          <p className="onit-hero-subline">
            Say the job. Send the invoice. Get paid before you leave the driveway.
          </p>

          {/* CTA BUTTON & INSTALL LINK */}
          <div className="onit-hero-cta-block">
            <a
              href="https://onit.dynastyweb.co"
              className="btn btn-gold-bright onit-primary-btn"
            >
              Open On It
            </a>
            <a
              href="https://onit.dynastyweb.co/install"
              className="onit-install-link"
            >
              How to install
            </a>
          </div>

          {/* HERO DEVICE SHOWCASE */}
          <div className="onit-hero-device-container">
            <div className="onit-device-wrapper">
              <Image
                src="/onit/01-chat.png"
                alt="On It voice chat invoice creation interface"
                width={360}
                height={720}
                priority
                className="onit-hero-device-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCREENSHOT STRIP SECTION */}
      <section className="onit-strip-section" aria-label="Application Screenshots Showcase">
        <div className="onit-strip-track">
          {stripScreenshots.map((item, idx) => (
            <div key={idx} className="onit-strip-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={280}
                height={560}
                loading="lazy"
                className="onit-strip-img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROMO VIDEO SECTION */}
      <OnItVideoSection />

      {/* 4. THREE BENEFIT LINES */}
      <section className="onit-benefits-section">
        <div className="wrap">
          <div className="onit-benefits-grid">
            <div className="onit-benefit-item">
              <h2 className="benefit-title">Talk it.</h2>
              <p className="benefit-desc">Describe the job, On It writes the invoice.</p>
            </div>
            <div className="onit-benefit-item">
              <h2 className="benefit-title">Send it.</h2>
              <p className="benefit-desc">A clean PDF and a pay link, in seconds.</p>
            </div>
            <div className="onit-benefit-item">
              <h2 className="benefit-title">Get paid.</h2>
              <p className="benefit-desc">Card, Cash App and more on one pay page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="onit-closing-section">
        <div className="wrap onit-closing-wrap">
          <h2 className="onit-closing-title">Your next invoice takes a minute.</h2>
          <a
            href="https://onit.dynastyweb.co"
            className="btn btn-gold-bright onit-primary-btn"
          >
            Open On It
          </a>
        </div>
      </section>
    </main>
  );
}
