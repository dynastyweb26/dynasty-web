"use client";

import { useEffect, useRef, useState } from "react";

export function OnItVideoSection() {
  const videoRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) return;

    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="onit-video-section">
      <div className="wrap onit-video-wrap">
        {/* TEXT COLUMN */}
        <div className="onit-video-text-col">
          <div className="eyebrow">
            <span>SEE IT WORK</span>
          </div>
          <h2 className="onit-video-title">
            From the job to <em>paid</em>.
          </h2>
          <p className="onit-video-body">
            Say the job, send the invoice, get paid. That&apos;s the whole app.
          </p>
          <div className="onit-video-cta-wrap">
            <a
              href="https://onit.dynastyweb.co"
              className="btn btn-primary onit-ink-pill-btn"
            >
              Open On It
            </a>
          </div>
        </div>

        {/* VIDEO COLUMN */}
        <div className="onit-video-col">
          <video
            ref={videoRef}
            className="onit-promo-video"
            src="/onit/onit-promo.mp4"
            poster="/onit/01-chat.png"
            muted
            loop
            playsInline
            preload="none"
            controls={reducedMotion}
          />
        </div>
      </div>
    </section>
  );
}

export default OnItVideoSection;
