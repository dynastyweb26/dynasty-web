import BrowserFrame from "@/components/BrowserFrame";

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

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Faded oversized watermark word */}
      <div className="bg-watermark">Dynasty</div>

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow reveal">Digital Solutions Studio · Forney, TX</span>

            <h1 className="reveal">
              Digital solutions built for local businesses that <em>work</em>.
            </h1>

            <p className="lede reveal">
              We craft high-converting websites, local SEO systems, and custom digital tools
              for trades and service businesses. Polish without the fluff, built to get you paid.
            </p>

            <div className="hero-actions reveal">
              <a className="btn btn-primary" href="#packages">
                Explore Packages <Arrow />
              </a>
              <a className="btn btn-ghost" href="#work">
                View Recent Work
              </a>
            </div>
          </div>

          <div className="hero-collage reveal">
            <div className="collage-container">
              <div className="collage-frame frame-back">
                <BrowserFrame
                  screenshotKey="vydale"
                  title="Vydale T.C. Projects"
                  url="https://vydaletcprojects.com"
                  interactive={false}
                />
              </div>
              <div className="collage-frame frame-front">
                <BrowserFrame
                  screenshotKey="cyril"
                  title="Cyril Handyman & Door LLC"
                  url="https://crazydoorhandyman.com"
                  interactive={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
