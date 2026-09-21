"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BrandLogo } from "./BrandLogo";

export function WorkSlideshow({ title, screenshots = [], isBuiltInHouse = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const slideshowRef = useRef(null);

  const images = screenshots && screenshots.length > 0 ? screenshots : ["placeholder"];

  // Autoplay timer when in view, not hovered/focused, and multiple images
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    // Check prefers-reduced-motion
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
                setCurrentIndex((prev) => (prev + 1) % images.length);
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
  }, [images.length, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
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
      <div className="browser-header">
        <div className="browser-dots" aria-hidden="true">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="browser-url">
          <svg className="lock-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span>{title.toLowerCase().replace(/[^a-z0-9]/g, "")}.dynastyweb.co</span>
        </div>
      </div>

      <div
        className="slideshow-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, idx) => {
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
                      <BrandLogo type="onit" width={72} height={72} />
                    ) : (
                      <BrandLogo type="dynasty" width={80} height={40} />
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
                  alt={`${title} screenshot ${idx + 1}`}
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

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="slide-arrow prev"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className="slide-arrow next"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next slide"
            >
              ›
            </button>
            <div className="slide-dots">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dot-nav ${idx === currentIndex ? "active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
