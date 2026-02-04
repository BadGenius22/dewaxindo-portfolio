"use client";

/**
 * Animated blob background for Web3 landing page
 * Creates floating gradient blobs for visual interest
 */

export function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Top left emerald blob */}
      <div
        className="w3-blob w3-blob-emerald"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-200px",
        }}
      />

      {/* Top right blue blob */}
      <div
        className="w3-blob w3-blob-blue"
        style={{
          width: "500px",
          height: "500px",
          top: "10%",
          right: "-150px",
        }}
      />

      {/* Center purple blob */}
      <div
        className="w3-blob w3-blob-purple"
        style={{
          width: "400px",
          height: "400px",
          top: "40%",
          left: "20%",
        }}
      />

      {/* Bottom right emerald blob */}
      <div
        className="w3-blob w3-blob-emerald"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-100px",
          right: "10%",
        }}
      />

      {/* Bottom left blue blob */}
      <div
        className="w3-blob w3-blob-blue"
        style={{
          width: "450px",
          height: "450px",
          bottom: "20%",
          left: "-100px",
        }}
      />
    </div>
  );
}
