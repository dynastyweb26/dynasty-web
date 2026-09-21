import Image from "next/image";
import { brandConfig } from "@/data/brand";

export default function BrowserFrame({
  screenshotKey,
  title,
  url,
  className = "",
  aspectRatio = "16/10",
  interactive = true,
}) {
  const screenshotData = brandConfig.workScreenshots[screenshotKey];
  const src = screenshotData?.src;
  const alt = screenshotData?.alt || title || "Client work screenshot";

  return (
    <div className={`browser-frame ${interactive ? "is-interactive" : ""} ${className}`}>
      <div className="browser-header">
        <div className="browser-dots" aria-hidden="true">
          <span className="dot dot-close" />
          <span className="dot dot-min" />
          <span className="dot dot-max" />
        </div>
        <div className="browser-address">
          <svg
            className="lock-icon"
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 7V4.5a3 3 0 0 1 6 0V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="address-text">{url ? url.replace(/^https?:\/\//, "") : "dynastyweb.co"}</span>
        </div>
      </div>

      <div className="browser-viewport" style={{ aspectRatio }}>
        {src ? (
          <div className="browser-scroll-container">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1600}
              className="browser-screenshot"
            />
          </div>
        ) : (
          /* Brand-colored SVG/CSS fallback screenshot wireframe */
          <div className="browser-placeholder" aria-label={`Preview placeholder for ${title}`}>
            <div className="placeholder-hero">
              <div className="ph-badge" />
              <div className="ph-title">{title}</div>
              <div className="ph-subtitle">{url}</div>
              <div className="ph-btn-group">
                <div className="ph-btn primary" />
                <div className="ph-btn secondary" />
              </div>
            </div>
            <div className="placeholder-grid">
              <div className="ph-card" />
              <div className="ph-card" />
              <div className="ph-card" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
