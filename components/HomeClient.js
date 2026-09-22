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

  const featuredSolutions = siteData.solutions.slice(0, 2);

  return (
    <>
      {/* FULL VIEWPORT HERO */}
      <section className="hero-full-viewport">
        <div className="faded-word-background" aria-hidden="true">
          Dynasty
        </div>
        <div className="hero-radial-glow" aria-hidden="true" />

        <div className="wrap hero-wrap">
          <div className="eyebrow hero-eyebrow">
            <span>Digital Solutions Studio · Forney, TX</span>
          </div>

          <h1 className="hero-headline">
            Digital solutions built for <em>local</em> service businesses.
          </h1>

          <p className="hero-subhead">
            We craft custom websites and integrated digital tools designed to drive inquiries, streamline operations, and elevate hard-working trades.
          </p>

          <div className="hero-cta-group">
            <Link href="/contact" className="btn btn-primary hero-btn">
              Get a quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/solutions" className="btn btn-ghost hero-btn">
              Explore solutions
            </Link>
          </div>

          <a href="#work" className="hero-scroll-cue" aria-label="Scroll to Recent Work">
            <span className="scroll-text">Explore work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </div>
      </section>

      {/* 1. RECENT WORK SECTION */}
      <PastWork />

      {/* 2. BUILT BY DYNASTY WEB SECTION */}
      <OnItSpotlight />

      {/* 3. HOW WE WORK (4-STEP PROCESS) */}
      <Process />

      {/* 4. PACKAGE PROGRESSION (TIER LADDER TEASER) */}
      <section className="section teaser-section tier-ladder-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Package Progression</span>
          </div>
          <div className="section-head-split">
            <h2 className="section-title">
              The more you add, the <em>more</em> you unlock.
            </h2>
            <p className="section-subtitle">
              You pay per solution. Every added tool advances your business up our package ladder, unlocking free strategy & maintenance perks.
            </p>
          </div>

          <div className="tier-ladder">
            {siteData.packages.map((pkg, index) => (
              <div key={pkg.id} className={`ladder-step step-${index + 1} ${pkg.featured ? "featured-step" : ""}`}>
                <div className="ladder-step-num">0{index + 1}</div>
                <div className="ladder-step-info">
                  <h3 className="ladder-step-name">{pkg.name}</h3>
                  <span className="ladder-step-qualifier">{pkg.qualifier}</span>
                </div>
                <p className="ladder-step-pitch">{pkg.pitch}</p>
              </div>
            ))}
          </div>

          <div className="teaser-action-row">
            <Link href="/packages" className="btn btn-primary">
              See how tiers &amp; perks work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DIGITAL SOLUTIONS TEASER */}
      <section className="section teaser-section">
        <div className="wrap">
          <div className="eyebrow">
            <span>Digital Solutions</span>
          </div>
          <div className="section-head-split">
            <h2 className="section-title">
              À la carte <em>tools</em> for growth.
            </h2>
            <p className="section-subtitle">
              Select individual services or combine them on top of your website base to automatically unlock package perks.
            </p>
          </div>

          <div className="bento-grid teaser-bento">
            {featuredSolutions.map((item) => (
              <div key={item.id} className="bento-tile">
                <div className="bento-tile-top">
                  <h3 className="bento-tile-title">{item.name}</h3>
                  <div className="bento-price-tag">
                    <span className="price-num">{item.price}</span>
                    <span className="price-cadence">/{item.cadence}</span>
                  </div>
                </div>
                <p className="bento-tile-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="teaser-action-row">
            <Link href="/solutions" className="btn btn-ghost">
              View all 7 digital solutions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BAND */}
      <section className="section cta-band-section">
        <div className="wrap">
          <div className="cta-band-card">
            <div className="eyebrow light-eyebrow">
              <span>Ready to start?</span>
            </div>
            <h2 className="cta-band-title">
              Let&apos;s build something <em>lasting</em> for your business.
            </h2>
            <p className="cta-band-text">
              Pick your solutions, estimate your package tier, and send us an enquiry. We respond within 24 business hours.
            </p>
            <div className="cta-band-actions">
              <Link href="/contact" className="btn btn-gold-bright">
                Get a quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/solutions" className="btn btn-ghost-light">
                Browse solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeClient;
