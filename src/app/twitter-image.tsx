import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";

export const alt = "Dewangga Praxindo - DeFi Smart Contract Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            textAlign: "center",
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 32,
              border: "4px solid rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ fontSize: 48, color: "white" }}>DP</span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: "#fafafa",
              margin: 0,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.author.name}
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              margin: 0,
              marginBottom: 24,
            }}
          >
            {siteConfig.author.jobTitle}
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 16,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: 36, fontWeight: 700, color: "#3b82f6" }}>
                $50M+
              </span>
              <span style={{ fontSize: 16, color: "#71717a" }}>TVL Deployed</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: 36, fontWeight: 700, color: "#8b5cf6" }}>
                3+
              </span>
              <span style={{ fontSize: 16, color: "#71717a" }}>Years Experience</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: 36, fontWeight: 700, color: "#06b6d4" }}>
                5+
              </span>
              <span style={{ fontSize: 16, color: "#71717a" }}>Chains</span>
            </div>
          </div>

          {/* URL */}
          <p
            style={{
              fontSize: 20,
              color: "#52525b",
              position: "absolute",
              bottom: 40,
            }}
          >
            dewaxindo.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
