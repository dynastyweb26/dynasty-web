// Centralized brand asset configuration.
// If src is null, BrandLogo and work components render clean brand-colored SVG/CSS fallback graphics.
// Set src paths when assets are uploaded to /public (e.g., "/brand/dynasty-web-logo.svg").

export const brandConfig = {
  dynastyLogo: {
    src: null, // PLACEHOLDER — e.g. "/brand/dynasty-web-logo.svg"
    alt: "Dynasty Web logo",
  },
  onitLogo: {
    src: null, // PLACEHOLDER — e.g. "/brand/on-it-logo.svg"
    alt: "On It logo",
  },
  workScreenshots: {
    cyril: {
      src: null, // PLACEHOLDER — e.g. "/work/cyril.png"
      alt: "Cyril Handyman & Door LLC website screenshot",
    },
    vydale: {
      src: null, // PLACEHOLDER — e.g. "/work/vydale.png"
      alt: "Vydale T.C. Projects website screenshot",
    },
  },
};
