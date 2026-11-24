"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BrandLogo } from "./BrandLogo";

export function WorkSlideshow({ title, url = "", screenshots = [], isBuiltInHouse = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const slideshowRef = useRef(null);

  const rawImages = screenshots && screenshots.length > 0 ? screenshots : ["placeholder"];
  const displayDomain = url ? url.replace(/^https?:\/\//, "") : "dynastyweb.co";

  // Autoplay timer when in view, not hovered/focused, and multiple images
  useEffect(() => {
    if (rawImages.length <= 1 || isPaused) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let observer;
    let timer;

    if (slideshowRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % rawImages.length);
              }, 4500);
            } else {
              if (timer) clearInterval(timer);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(slideshowRef.current);
    }

    return () => {
      if (timer) clearInterval(timer);
      if (observer) observer.disconnect();
    };
  }, [rawImages.length, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rawImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + rawImages.length) % rawImages.length);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    touchStartXRef.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  return (
    <div
      ref={slideshowRef}
      className="slideshow-frame"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`${title} screenshot slideshow`}
    >
      {/* BROWSER CHROME HEADER */}
      <div className="browser-header">
        <div className="browser-dots" aria-hidden="true">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="browser-url">
          <svg className="lock-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span>{displayDomain}</span>
        </div>
      </div>

      {/* VIEWPORT & SLIDES */}
      <div
        className="slideshow-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {rawImages.map((item, idx) => {
          const src = typeof item === "string" ? item : item.src;
          const altText = typeof item === "string" ? `${title} screenshot ${idx + 1}` : item.alt;
          const isError = imageError[idx] || src === "placeholder";

          return (
            <div
              key={idx}
              className={`slide ${idx === currentIndex ? "active" : ""}`}
              aria-hidden={idx !== currentIndex}
            >
              {isError ? (
                <div className="slide-placeholder">
                  <div className="placeholder-watermark">
                    {isBuiltInHouse ? (
                      <BrandLogo type="onit" width={64} height={64} />
                    ) : (
                      <BrandLogo type="dynasty" width={72} height={36} />
                    )}
                    <p className="placeholder-title">{title}</p>
                    <span className="placeholder-badge">
                      {isBuiltInHouse ? "In-House Software" : "Client Platform"}
                    </span>
                  </div>
                </div>
              ) : (
                <Image
                  src={src}
                  alt={altText}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  onError={() => setImageError((prev) => ({ ...prev, [idx]: true }))}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
              )}
            </div>
          );
        })}

        {rawImages.length > 1 && (
          <>
            <button
              type="button"
              className="slide-arrow prev"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous screenshot"
            >
              ‹
            </button>
            <button
              type="button"
              className="slide-arrow next"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next screenshot"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* DOTS BELOW VIEWPORT */}
      {rawImages.length > 1 && (
        <div className="slide-dots-outer">
          {rawImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot-nav ${idx === currentIndex ? "active" : ""}`}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              aria-label={`Screenshot ${idx + 1} of ${rawImages.length}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
