import Link from "next/link";

export const metadata = {
  title: "On It — Voice-Powered Invoicing Software · Built by Dynasty Web",
  description:
    "On It is voice-powered invoicing software built in-house by Dynasty Web for field tradespeople. Simple, fast billing before leaving the job site.",
};

export default function OnItPage() {
  return (
    <main className="wrap section page-hero-section">
      <div className="eyebrow">
        <span>BUILT BY DYNASTY WEB</span>
      </div>

      <h1 className="page-title">
        On It — Voice-powered invoicing for <em>trades</em>.
      </h1>

      <p className="page-subtitle" style={{ marginBottom: "32px" }}>
        We build software we actually use. On It is our in-house voice-to-invoice web tool built specifically for contractors, technicians, and local field tradespeople.
      </p>

      <div
        className="on-it-card-box"
        style={{
          background: "var(--card)",
          border: "1px solid var(--gold)",
          borderRadius: "var(--radius)",
          padding: "clamp(20px, 5vw, 36px)",
          marginTop: "24px",
          marginBottom: "40px",
          maxWidth: "720px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span className="badge-in-house">
            <span className="live-dot" /> Built in-house
          </span>
          <span style={{ fontSize: "13px", color: "var(--ink-soft)" }}>
            Voice Invoicing Software
          </span>
        </div>

        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 4vw, 28px)", lineHeight: "1.2", marginBottom: "12px" }}>
          Invoice client work before leaving the driveway.
        </h2>

        <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: "1.6", marginBottom: "28px" }}>
          Speak the job details and generate professional, clear invoices right from the field in seconds. No desktop accounting bloat or multi-tap mobile menus.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="https://onit.dynastyweb.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit On It software
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <Link href="/solutions" className="btn btn-ghost">
            View as a Digital Solution
          </Link>
          <Link href="/" className="btn btn-ghost" style={{ border: "none" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
