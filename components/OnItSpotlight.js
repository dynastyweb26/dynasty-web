import BrandLogo from "@/components/BrandLogo";

function Arrow() {
  return (
    <svg
      className="arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OnItSpotlight() {
  return (
    <section className="section" id="onit">
      <div className="wrap">
        <div className="studio reveal">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <span className="eyebrow">Built In-House</span>
            <span className="status live">
              <span className="led" aria-hidden="true" />
              Live Software
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "20px" }}>
            <BrandLogo variant="onit" style={{ width: "42px", height: "42px" }} />
            <h2 style={{ margin: 0 }}>On It — Voice-powered invoicing for the trades.</h2>
          </div>

          <p>
            We don&apos;t just design websites — we engineer real products. On It lets electricians,
            plumbers, HVAC techs, and contractors convert spoken job notes into clean, professional
            invoices ready to send before leaving the worksite.
          </p>

          <div style={{ marginTop: "32px" }}>
            <a
              className="btn btn-ghost"
              style={{ color: "var(--cream)", borderColor: "rgba(250, 244, 233, 0.3)" }}
              href="https://onit.dynastyweb.co"
              target="_blank"
              rel="noopener"
            >
              Experience On It <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
