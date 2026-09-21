import { ImageResponse } from "next/og";

export const alt = "Dynasty Web — Digital solutions studio for local businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #faf4e9 0%, #f3e6cd 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(224,182,74,0.55), rgba(224,182,74,0))",
            display: "flex",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#241d15",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              color: "#e0b64a",
              fontWeight: 700,
              fontFamily: "serif",
            }}
          >
            D
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#241d15" }}>
            Dynasty Web
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#241d15",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Software the trades actually keep open.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#6b5f4d",
              maxWidth: 820,
              display: "flex",
            }}
          >
            Digital solutions studio in Forney, Texas for local businesses.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#b07d1e",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>Digital Solutions</div>
          <div style={{ display: "flex", color: "#a89a83" }}>·</div>
          <div style={{ display: "flex" }}>Makers of On It</div>
          <div style={{ display: "flex", color: "#a89a83" }}>·</div>
          <div style={{ display: "flex", color: "#6b5f4d" }}>dynastyweb.co</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
