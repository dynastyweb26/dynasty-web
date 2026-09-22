import Image from "next/image";
import { brandConfig } from "../data/brand";

export function BrandLogo({ type = "dynasty", variant = "dynasty", className = "", style = {}, width, height, size = "small" }) {
  const logoVariant = type || variant;
  const isDynasty = logoVariant === "dynasty";

  let logoData = null;
  if (isDynasty) {
    logoData = size === "large" ? brandConfig.dynastyLogoLarge : brandConfig.dynastyLogoSmall;
  } else {
    logoData = brandConfig.onitLogo;
  }

  // Preserve native 682x745 portrait aspect ratio for Dynasty Web logo if explicit width/height not provided
  const defaultWidth = width || (size === "large" ? 42 : 32);
  const defaultHeight = height || Math.round(defaultWidth * (745 / 682));

  if (logoData && logoData.src) {
    return (
      <Image
        src={logoData.src}
        alt={logoData.alt}
        width={defaultWidth}
        height={defaultHeight}
        className={`brand-logo-img ${className}`}
        style={{ objectFit: "contain", ...style }}
      />
    );
  }

  // Fallback brand-colored SVG vector logo
  if (isDynasty) {
    return (
      <svg
        className={`mark ${className}`}
        style={{ width: defaultWidth, height: defaultHeight, ...style }}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        role="img"
      >
        <rect x="1" y="1" width="30" height="30" rx="9" fill="#241d15" />
        <path
          d="M10 8h6a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-6V8z"
          stroke="#e0b64a"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10 8v16"
          stroke="#e0b64a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // On It fallback logo
  return (
    <svg
      className={`mark-onit ${className}`}
      style={{ width: defaultWidth, height: defaultHeight, ...style }}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#b07d1e" />
      <path
        d="M16 7a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0v-5a5 5 0 0 1 5-5z"
        stroke="#faf4e9"
        strokeWidth="2"
      />
      <path
        d="M8 17a8 8 0 0 0 16 0M16 25v3M11 28h10"
        stroke="#faf4e9"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default BrandLogo;
