import Image from "next/image";
import { brandConfig } from "@/data/brand";

export default function BrandLogo({ variant = "dynasty", className = "", style = {} }) {
  const isDynasty = variant === "dynasty";
  const logoData = isDynasty ? brandConfig.dynastyLogo : brandConfig.onitLogo;

  if (logoData.src) {
    return (
      <Image
        src={logoData.src}
        alt={logoData.alt}
        width={32}
        height={32}
        className={`brand-logo-img ${className}`}
        style={style}
      />
    );
  }

  // Fallback brand-colored SVG vector logo
  if (isDynasty) {
    return (
      <svg
        className={`mark ${className}`}
        style={style}
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
      style={style}
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
