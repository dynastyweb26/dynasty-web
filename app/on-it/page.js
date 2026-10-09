import Image from "next/image";
import Link from "next/link";
import OnItPromoVideo from "../../components/OnItPromoVideo";

export const metadata = {
  title: "On It: Voice-Powered Invoicing",
  description:
    "Say the job, send the invoice, get paid on the spot. On It is a voice-powered invoicing app built by Dynasty Web.",
};

export default function OnItPage() {
  const stripScreenshots = [
    { src: "/onit/01-chat.png", w: 883, alt: "On It chat screen turning a spoken job into an invoice" },
    { src: "/onit/02-invoices.png", w: 883, alt: "On It invoices list screen" },
    { src: "/onit/03-books.png", w: 911, alt: "On It books overview with money kept this year" },
    { src: "/onit/04-expenses.png", w: 797, alt: "On It expenses logged from receipt photos" },
    { src: "/onit/05-invoice-style.png", w: 900, alt: "On It invoice style and color picker" },
    { src: "/onit/06-settings.png", w: 879, alt: "On It business settings and payment connections" },
  ];

  return (
    <main className="onit-page">
      {/* 1. HERO SECTION */}
      <section className="onit-hero-section">
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
            <a
              href="https://onit.dynastyweb.co/install"
              target="_blank"
              rel="noopener noreferrer"
              className="qr-link onit-qr-inline desktop-only"
              aria-label="Scan to install On It on your phone"
            >
              <Image src="/onit/install-qr.png" alt="" width={72} height={72} className="qr-code-img" />
              <span className="qr-caption">Scan to install on your phone</span>
            </a>
          </div>

          {/* HERO SCREENSHOT */}
          <div className="onit-hero-shot">
            <Image
              src="/onit/01-chat.png"
              alt="On It chat screen turning a spoken job into an invoice"
              width={883}
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
