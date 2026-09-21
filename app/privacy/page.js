import BrandLogo from "@/components/BrandLogo";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Dynasty Web enquiries and contact details.",
};

export default function PrivacyPage() {
  return (
    <main className="wrap" style={{ padding: "80px 22px 120px", maxWidth: "800px" }}>
      <div style={{ marginBottom: "32px" }}>
        <a href="/" className="brand" style={{ marginBottom: "24px", display: "inline-flex" }}>
          <BrandLogo variant="dynasty" />
          <span>Dynasty Web</span>
        </a>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, marginTop: "16px" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--ink-soft)", fontSize: "15px", marginTop: "8px" }}>
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "28px", lineHeight: "1.7", color: "var(--ink-2)" }}>
        <section>
          <h2 style={{ fontSize: "22px", color: "var(--ink)", marginBottom: "10px" }}>Information We Collect</h2>
          <p>
            When you submit an enquiry through our contact form, we collect the information you provide, including your name, business name, email address, phone number, and project details.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "22px", color: "var(--ink)", marginBottom: "10px" }}>How We Use Your Information</h2>
          <p>
            Information collected via the enquiry form is used solely to evaluate your project requirements, communicate directly with you, and formulate digital solution estimates.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "22px", color: "var(--ink)", marginBottom: "10px" }}>Data Sharing & Third Parties</h2>
          <p>
            We do not sell, rent, or trade your personal information. Enquiry form data is processed securely through our email service provider (EmailJS) exclusively for communication purposes.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "22px", color: "var(--ink)", marginBottom: "10px" }}>Data Retention & Removal</h2>
          <p>
            You may request the removal of your contact information and enquiry history from our records at any time by emailing us at{" "}
            <a href="mailto:brandon@dynastyweb.co" style={{ color: "var(--gold)", fontWeight: 600 }}>
              brandon@dynastyweb.co
            </a>.
          </p>
        </section>

        <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
          <a href="/" style={{ color: "var(--gold)", fontWeight: 600 }}>
            ← Back to Dynasty Web
          </a>
        </div>
      </div>
    </main>
  );
}
