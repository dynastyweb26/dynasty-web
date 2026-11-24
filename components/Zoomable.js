"use client";

import { useRef } from "react";
import Image from "next/image";

// Wraps any image so a tap/click opens it full size in a native <dialog>
// (Esc, backdrop click, and the close button all dismiss it).
export function Zoomable({ src, alt, className = "", children }) {
  const dialogRef = useRef(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" className={`zoomable ${className}`} onClick={open} aria-label={`Enlarge: ${alt || "image"}`}>
        {children}
        <span className="zoomable-hint" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
          ×
        </button>
        <Image src={src} alt={alt} width={1600} height={1000} sizes="95vw" className="lightbox-img" />
      </dialog>
    </>
  );
}
