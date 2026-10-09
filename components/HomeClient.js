"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* FULL VIEWPORT HERO */}
      <section className="hero-full-viewport">
        <div className="hero-radial-glow" aria-hidden="true" />

        <div className="wrap hero-wrap">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span>Software Studio · Dallas–Fort Worth</span>
            </div>

            <h1 className="hero-headline">
              Custom software tailored to <em>your</em> company.
            </h1>

            <p className="hero-subhead">
              We design and build the software your company runs on: customer-facing apps, quoting and ordering tools, and internal systems, shaped around how your team actually works. Built for you, owned by you.
            </p>

            <div className="hero-cta-group">
              <Link href="/contact" className="btn btn-primary hero-btn">
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/#work" className="btn btn-ghost hero-btn">
                See our work
              </Link>
            </div>

            <a href="#built-by-dynasty" className="hero-scroll-cue" aria-label="Scroll to our software">
              <span className="scroll-text">See what we&apos;ve shipped</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>

          <div className="hero-visual">
            <Image
              src="/onit/04-expenses.png"
              alt=""
              width={797}
              height={1600}
              sizes="(min-width: 1000px) 260px, 180px"
              className="hero-phone hero-phone-back"
            />
            <Image
              src="/onit/01-chat.png"
              alt="On It, custom software Dynasty Web built for a field-service company, turning a spoken job into an invoice"
              width={883}
              height={1600}
              sizes="(min-width: 1000px) 300px, 210px"
              priority
              className="hero-phone hero-phone-front"
            />
            <Link href="/on-it" className="hero-visual-caption">
              On It · built for one client, now a live product →
            </Link>
          </div>
        </div>
      </section>

      {/* 1. BUILT IN-HOUSE (ON IT SPOTLIGHT) */}
      <OnItSpotlight />

      {/* 2. SELECTED WORK */}
      <PastWork />

      {/* 3. HOW WE WORK (4-STEP PROCESS) */}
      <Process />

      {/* 4. WHAT WE BUILD (CAPABILITIES) */}
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
              <div key={item.id} className="bento-tile">
                <h3 className="bento-tile-title">{item.name}</h3>
                <p className="bento-tile-desc">{item.description}</p>
              </div>
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

      {/* 5. CLOSING CTA BAND */}
      <section className="section cta-band-section">
        <div className="wrap">
          <div className="cta-band-card">
            <div className="eyebrow light-eyebrow">
              <span>Start a Project</span>
            </div>
            <h2 className="cta-band-title">
              Let&apos;s build something <em>lasting</em> for your company.
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
              <Link href="/#work" className="btn btn-ghost-light">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeClient;
