"use client";

import { useEffect, useRef, useState } from "react";

// Plays the promo only while it is on screen. With reduced motion it never
// autoplays; the poster shows with native controls instead.
export default function OnItPromoVideo() {
  const ref = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prefersReduced);
    if (prefersReduced || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="onit-promo-video"
      src="/onit/onit-promo.mp4"
      poster="/onit/onit-promo-poster.jpg"
      muted
      loop
      playsInline
      preload="none"
      controls={reduced}
      aria-label="On It promo: creating an invoice by voice and getting paid"
    />
  );
}
