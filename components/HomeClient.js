"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteData } from "../data/site";
import { PastWork } from "./PastWork";
import { OnItSpotlight } from "./OnItSpotlight";
import { Process } from "./Process";

export function HomeClient() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO: short banner, then straight into results */}
      <section className="home-banner">
        <div className="home-banner-glow" aria-hidden="true" />
        <div className="wrap home-banner-inner">
          <div className="eyebrow light-eyebrow home-banner-eyebrow">
            <span>Software Studio · Dallas–Fort Worth</span>
          </div>
          <h1 className="home-banner-title">
            Custom software built around <em>your</em> company.
          </h1>
          <p className="home-banner-sub">
            We design and build the software your company runs on. Here&apos;s what that looks like.
          </p>
          <ul className="home-banner-pills">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Custom software, apps, and internal tools
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
              Websites, local SEO, and Google profiles
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Built for you, owned by you
            </li>
          </ul>
          <div className="home-banner-cta">
            <Link href="/contact" className="btn btn-gold-bright">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED WORK: browser-framed client sites */}
      <PastWork />

      {/* BUILT IN-HOUSE: On It */}
      <OnItSpotlight />

      {/* WHAT WE BUILD */}
      <section className="section teaser-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>What We Build</span>
          </div>
          <div className="section-head-split">
            <h2 className="section-title">
              Software for the way your <em>company</em> runs.
            </h2>
            <p className="section-subtitle">
              We build custom software end to end, from the first workflow map to launch and support. Websites and supporting services are available alongside.
            </p>
          </div>

          <div className="bento-grid teaser-bento">
            {siteData.capabilities.map((item) => (
              <Link
                key={item.id}
                href={item.id === "web-presence" ? "/solutions" : "/custom-software"}
                className="bento-tile interactive-tile capability-tile"
              >
                <h3 className="bento-tile-title">{item.name}</h3>
                <p className="bento-tile-desc">{item.description}</p>
                <span className="capability-cta">
                  {item.id === "web-presence" ? "Explore solutions →" : "Custom software →"}
                </span>
              </Link>
            ))}
          </div>

          <div className="teaser-action-row">
            <Link href="/solutions" className="btn btn-ghost">
              View all solutions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <Process />

      {/* CLOSING CTA BAND */}
      <section className="section cta-band-section">
        <div className="wrap">
          <div className="cta-band-card">
            <div className="eyebrow light-eyebrow">
              <span>Start a Project</span>
            </div>
            <h2 className="cta-band-title">
              Ready to build something <em>great</em>?
            </h2>
            <p className="cta-band-text">
              Tell us how your company operates and where it gets stuck. We reply within one business day with next steps.
            </p>
            <div className="cta-band-actions">
              <Link href="/contact" className="btn btn-gold-bright">
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              </Link>
              <a href="mailto:brandon@dynastyweb.co" className="btn btn-ghost-light">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeClient;
