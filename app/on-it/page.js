import { pageMetadata, onItSchema } from "../../data/seo";
import { JsonLd } from "../../components/JsonLd";
import Image from "next/image";
import Link from "next/link";
import OnItPromoVideo from "../../components/OnItPromoVideo";

export const metadata = pageMetadata({
  title: "On It: Voice-Powered Invoicing App",
  description:
    "Say the job, send the invoice, get paid on the spot. On It is a voice-powered invoicing app for tradespeople and home service pros, built by Dynasty Web.",
  path: "/on-it",
});

export default function OnItPage() {
  const stripScreenshots = [
    { src: "/onit/01-chat.png", w: 767, alt: "On It chat screen with quick actions for receipts, invoices and payments" },
    { src: "/onit/02-invoices.png", w: 767, alt: "On It invoices list with open and paid invoices" },
    { src: "/onit/03-books.png", w: 767, alt: "On It books overview with money owed, collected and spent" },
    { src: "/onit/04-books-summary.png", w: 767, alt: "On It books summary chart of income and expenses over time" },
    { src: "/onit/05-invoice-style.png", w: 767, alt: "On It invoice style and color picker with a live preview" },
    { src: "/onit/06-settings.png", w: 767, alt: "On It settings for clients, products, payment options and plan" },
    { src: "/onit/07-clients.png", w: 767, alt: "On It clients list with open balances and estimates" },
    { src: "/onit/08-payment-options.png", w: 767, alt: "On It payment options for card, bank transfer, Zelle, Cash App, PayPal and Venmo" },
  ];

  return (
    <main className="onit-page">
      <JsonLd data={onItSchema} />
      {/* 1. HERO SECTION */}
      <section className="onit-hero-section">
        {/* DESKTOP QR BADGE TOP-RIGHT */}
        <div className="onit-qr-badge desktop-only">
          <a
            href="https://onit.dynastyweb.co/install"
            target="_blank"
            rel="noopener noreferrer"
            className="qr-link"
            aria-label="Scan to install On It on your phone"
          >
            <Image
              src="/onit/install-qr.png"
              alt=""
              width={88}
              height={88}
              className="qr-code-img"
            />
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
          <h1 className="onit-hero-headline">
            Fast Invoices. <em>Fast Money.</em>
          </h1>

          <p className="onit-hero-subline">
            Say the job. Send the invoice. Get paid before you leave the driveway.
          </p>

          {/* CTA BUTTON & INSTALL LINK */}
          <div className="onit-hero-cta-block">
            <a
              href="https://onit.dynastyweb.co"
              className="btn btn-primary onit-primary-btn"
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

          {/* HERO SCREENSHOT */}
          <div className="onit-hero-shot">
            <Image
              src="/onit/01-chat.png"
              alt="On It chat screen with quick actions for receipts, invoices and payments"
              width={767}
              height={1600}
              sizes="320px"
              priority
              className="onit-hero-shot-img"
            />
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
                width={item.w}
                height={1600}
                sizes="260px"
                loading="lazy"
                className="onit-strip-img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. THREE BENEFIT LINES */}
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

      {/* 4. PROMO VIDEO */}
      <section className="onit-video-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>See It Work</span>
          </div>
          <div className="onit-video-frame">
            <div className="onit-hero-video">
              <OnItPromoVideo />
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
            className="btn btn-primary onit-primary-btn"
          >
            Open On It
          </a>
          <p className="onit-studio-note">
            Built by Dynasty Web. Need software built around your company?{" "}
            <Link href="/contact">Start a project →</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
