"use client";

import { useEffect, useState } from "react";
import Configurator from "./Configurator";
import SummaryPanel from "./SummaryPanel";

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

function Mark() {
  return (
    <svg
      className="mark"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#241d15" />
      <path
        d="M9 22V10l7 9 7-9v12"
        stroke="#e0b64a"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Page() {
  // Which services are selected in the configurator. Owned here so the summary
  // panel and the contact prefill read one source of truth.
  const [selected, setSelected] = useState(() => new Set());
  const toggleService = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    // Safety net: if anything hasn't revealed shortly after load, show it.
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 1400);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="Dynasty Web home">
            <Mark />
            Dynasty Web
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a className="hide-sm" href="#work">
              Work
            </a>
            <a className="hide-sm" href="#studio">
              Studio
            </a>
            <a className="nav-cta" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="wrap">
            <span className="eyebrow reveal">Product studio · Forney, Texas</span>
            <h1 className="reveal">
              Software the trades <em>actually</em> keep open.
            </h1>
            <p className="lede reveal">
              Dynasty Web is a solo studio building subscription software for
              small trade and home-service businesses — practical tools for the
              people who keep things running, not another dashboard to babysit.
            </p>
            <div className="hero-actions reveal">
              <a
                className="btn btn-primary"
                href="https://onit.dynastyweb.co"
                target="_blank"
                rel="noopener"
              >
                See On It <Arrow />
              </a>
              <a className="btn btn-ghost" href="#studio">
                Meet the studio
              </a>
            </div>
            <div className="meta-row reveal">
              <span>Independent &amp; self-funded</span>
              <span className="dot" aria-hidden="true" />
              <span>Built by Brandon Fotsing Talla</span>
              <span className="dot" aria-hidden="true" />
              <span>Shipping since day one</span>
            </div>
          </div>
        </section>

        {/* Work / Products */}
        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">What we make</span>
                <h2>Two products. One obsession: less admin, more work done.</h2>
              </div>
              <p>
                Each one starts with a real job on a real worksite, then removes
                the paperwork standing between doing it and getting paid for it.
              </p>
            </div>

            <div className="products">
              <article className="product reveal">
                <div className="product-top">
                  <span className="product-logo">
                    <span className="glyph onit" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M10 2.5a3 3 0 0 1 3 3v4a3 3 0 1 1-6 0v-4a3 3 0 0 1 3-3Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M5 9.5a5 5 0 0 0 10 0M10 14.5v3M7 17.5h6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    On It
                  </span>
                  <span className="status live">
                    <span className="led" aria-hidden="true" />
                    Live
                  </span>
                </div>
                <h3>Voice-powered invoicing for tradespeople.</h3>
                <p>
                  Describe the job out loud — what you did, the parts, the hours
                  — and On It turns it into a clean, professional invoice ready to
                  send before you&apos;ve packed up the truck. Made for
                  electricians, plumbers, HVAC techs and home-service pros.
                </p>
                <a
                  className="product-foot"
                  href="https://onit.dynastyweb.co"
                  target="_blank"
                  rel="noopener"
                >
                  onit.dynastyweb.co <Arrow />
                </a>
              </article>

              <article className="product reveal">
                <div className="product-top">
                  <span className="product-logo">
                    <span className="glyph tvault" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M2.5 7.5h11l3 3v4a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-7Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <circle cx="6" cy="15" r="1.6" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="14" cy="15" r="1.6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                    T-Vault
                  </span>
                  <span className="status beta">
                    <span className="led" aria-hidden="true" />
                    In beta
                  </span>
                </div>
                <h3>Load management &amp; invoicing for owner-operators.</h3>
                <p>
                  A home base for the truckers running their own show — track
                  loads, keep the paperwork straight and bill for every mile
                  without a back office. Built with owner-operators, currently in
                  private beta.
                </p>
                <span className="product-foot muted">
                  Private beta — say hello to get early access
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* Configurator */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Build your package</span>
                <h2>Pick the services you need. Nothing you don&apos;t.</h2>
              </div>
              <p>
                Every service is priced on its own — no bundles, no tiers to buy
                into. Choose what fits, and your partner level comes with it.
              </p>
            </div>
            <div className="svc-layout">
              <Configurator selected={selected} onToggle={toggleService} />
              <SummaryPanel selected={selected} />
            </div>
          </div>
        </section>

        {/* Studio */}
        <section className="section" id="studio">
          <div className="wrap">
            <div className="studio reveal">
              <span className="eyebrow">The studio</span>
              <h2>
                One founder, close to the work, shipping software that{" "}
                <em>earns its subscription</em>.
              </h2>
              <p>
                Dynasty Web is run by Brandon Fotsing Talla out of Forney, Texas.
                No committees, no venture roadmap — just a short line between the
                people doing the work and the person building their tools. Every
                product is subscription software small trade businesses can rely
                on month after month, priced for a one-truck operation, not an
                enterprise.
              </p>
              <div className="studio-stats">
                <div className="stat">
                  <div className="n">2</div>
                  <div className="l">Products in the family — one live, one in beta</div>
                </div>
                <div className="stat">
                  <div className="n">1</div>
                  <div className="l">Founder, hands on every release</div>
                </div>
                <div className="stat">
                  <div className="n">TX</div>
                  <div className="l">Rooted in Forney, building for the trades</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact" id="contact">
          <div className="wrap">
            <span className="eyebrow reveal">Get in touch</span>
            <h2 className="reveal">
              Building for the trades? <em>Let&apos;s talk.</em>
            </h2>
            <p className="reveal">
              Questions about On It, early access to T-Vault, or an idea for what
              Dynasty Web should build next — it all reaches the same inbox.
            </p>
            <div className="reveal">
              <a className="mail" href="mailto:brandon@dynastyweb.co">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                brandon@dynastyweb.co
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="brand" href="#top">
            <Mark />
            Dynasty Web
          </a>
          <div className="footer-links">
            <a href="https://onit.dynastyweb.co" target="_blank" rel="noopener">
              On It
            </a>
            <a href="#work">T-Vault</a>
            <a href="mailto:brandon@dynastyweb.co">Email</a>
          </div>
          <span>© {new Date().getFullYear()} Dynasty Web · Forney, TX</span>
        </div>
      </footer>
    </>
  );
}
