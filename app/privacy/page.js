import Link from "next/link";
import BrandLogo from "../../components/BrandLogo";

export const metadata = {
  title: "Privacy Policy | Dynasty Web",
  description: "Privacy policy and data handling commitment for Dynasty Web client enquiries.",
};

export default function PrivacyPage() {
  return (
    <main className="wrap section page-hero-section">
      <div className="eyebrow">
        <span>Legal & Transparency</span>
      </div>

      <h1 className="page-title">
        Privacy <em>Policy</em> & Data Commitment.
      </h1>

      <p className="page-subtitle" style={{ marginBottom: "32px" }}>
        We respect the privacy of every business owner who reaches out to us. Here is exactly how we handle your data.
      </p>

      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius)",
          padding: "36px",
          maxWidth: "760px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <BrandLogo type="dynasty" width={28} height={28} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "18px" }}>Dynasty Web Data Promise</span>
        </div>

        <section>
          <h3 style={{ fontSize: "18px", marginBottom: "8px", fontFamily: "var(--font-display)" }}>1. What Information We Collect</h3>
          <p style={{ color: "var(--ink-2)", lineHeight: "1.6", fontSize: "15px" }}>
            When you submit our contact form, we collect your name, business name, email address, phone number, and any project details you provide.
          </p>
        </section>

        <section>
          <h3 style={{ fontSize: "18px", marginBottom: "8px", fontFamily: "var(--font-display)" }}>2. How We Use Your Data</h3>
          <p style={{ color: "var(--ink-2)", lineHeight: "1.6", fontSize: "15px" }}>
            Your information is strictly used to evaluate your project request, prepare custom quote proposals, and communicate with you directly regarding our digital solutions services.
          </p>
        </section>

        <section>
          <h3 style={{ fontSize: "18px", marginBottom: "8px", fontFamily: "var(--font-display)" }}>3. No Third-Party Sales</h3>
          <p style={{ color: "var(--ink-2)", lineHeight: "1.6", fontSize: "15px" }}>
            We never sell, rent, or trade your contact details to third-party advertisers or data brokers.
          </p>
        </section>

        <section>
          <h3 style={{ fontSize: "18px", marginBottom: "8px", fontFamily: "var(--font-display)" }}>4. Contact Us</h3>
          <p style={{ color: "var(--ink-2)", lineHeight: "1.6", fontSize: "15px" }}>
            If you have any questions regarding your data, please contact Brandon directly at{" "}
            <a href="mailto:brandon@dynastyweb.co" style={{ color: "var(--gold)", textDecoration: "underline" }}>
              brandon@dynastyweb.co
            </a>.
          </p>
        </section>

        <div style={{ marginTop: "12px" }}>
          <Link href="/" className="btn btn-ghost">
            ← Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
