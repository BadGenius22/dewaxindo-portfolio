"use client";

import { useEffect, useRef, useCallback } from "react";

interface Block {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
}

interface ParticleNetworkProps {
  particleCount?: number;
  particleColor?: string;
  lineColor?: string;
  maxDistance?: number;
  speed?: number;
  className?: string;
}

// Parse rgba color string to get components
function parseRgba(color: string): { r: number; g: number; b: number; a: number } {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: match[4] ? parseFloat(match[4]) : 1,
    };
  }
  return { r: 128, g: 128, b: 128, a: 0.5 };
}

export function ParticleNetwork({
  particleCount = 50,
  particleColor = "rgba(128, 128, 128, 0.5)",
  lineColor = "rgba(128, 128, 128, 0.15)",
  maxDistance = 150,
  speed = 0.5,
  className,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blocksRef = useRef<Block[]>([]);
  const animationRef = useRef<number>(0);
  const prefersReducedMotionRef = useRef(false);

  const initBlocks = useCallback(
    (width: number, height: number) => {
      const blocks: Block[] = [];
      for (let i = 0; i < particleCount; i++) {
        blocks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 100,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          vz: (Math.random() - 0.5) * speed * 0.3,
          size: Math.random() * 8 + 12, // Cube size 12-20px
        });
      }
      return blocks;
    },
    [particleCount, speed]
  );

  // Draw proper isometric 3D cube
  const drawIsometricCube = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number,
      size: number,
      baseColor: { r: number; g: number; b: number; a: number }
    ) => {
      // Isometric projection constants (30 degree angle)
      const isoAngle = Math.PI / 6; // 30 degrees
      const cosA = Math.cos(isoAngle);
      const sinA = Math.sin(isoAngle);

      const h = size * 0.5; // Height of cube
      const w = size * 0.5; // Half-width of cube

      // 6 visible vertices of isometric cube (viewed from top-front)
      // Top face (diamond)
      const topBack = { x: centerX, y: centerY - h };
      const topLeft = { x: centerX - w * cosA, y: centerY - h + w * sinA };
      const topRight = { x: centerX + w * cosA, y: centerY - h + w * sinA };
      const topFront = { x: centerX, y: centerY - h + w * sinA * 2 };

      // Bottom vertices (only 3 visible)
      const bottomLeft = { x: centerX - w * cosA, y: centerY + w * sinA };
      const bottomRight = { x: centerX + w * cosA, y: centerY + w * sinA };
      const bottomFront = { x: centerX, y: centerY + w * sinA * 2 };

      // Color variations for 3D shading
      const { r, g, b, a } = baseColor;
      const topColor = `rgba(${Math.min(255, r + 50)}, ${Math.min(255, g + 50)}, ${Math.min(255, b + 50)}, ${a})`;
      const leftColor = `rgba(${r}, ${g}, ${b}, ${a * 0.8})`;
      const rightColor = `rgba(${Math.max(0, r - 40)}, ${Math.max(0, g - 40)}, ${Math.max(0, b - 40)}, ${a * 0.6})`;
      const strokeColor = `rgba(${Math.min(255, r + 20)}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 20)}, ${a * 0.5})`;

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = strokeColor;
      ctx.lineJoin = "round";

      // Draw left face (medium shade)
      ctx.beginPath();
      ctx.moveTo(topLeft.x, topLeft.y);
      ctx.lineTo(topFront.x, topFront.y);
      ctx.lineTo(bottomFront.x, bottomFront.y);
      ctx.lineTo(bottomLeft.x, bottomLeft.y);
      ctx.closePath();
      ctx.fillStyle = leftColor;
      ctx.fill();
      ctx.stroke();

      // Draw right face (darkest)
      ctx.beginPath();
      ctx.moveTo(topRight.x, topRight.y);
      ctx.lineTo(topFront.x, topFront.y);
      ctx.lineTo(bottomFront.x, bottomFront.y);
      ctx.lineTo(bottomRight.x, bottomRight.y);
      ctx.closePath();
      ctx.fillStyle = rightColor;
      ctx.fill();
      ctx.stroke();

      // Draw top face (lightest - diamond shape)
      ctx.beginPath();
      ctx.moveTo(topBack.x, topBack.y);
      ctx.lineTo(topRight.x, topRight.y);
      ctx.lineTo(topFront.x, topFront.y);
      ctx.lineTo(topLeft.x, topLeft.y);
      ctx.closePath();
      ctx.fillStyle = topColor;
      ctx.fill();
      ctx.stroke();
    },
    []
  );

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      const blocks = blocksRef.current;
      const baseColor = parseRgba(particleColor);

      // Sort blocks by z for proper depth rendering (back to front)
      const sortedBlocks = [...blocks].sort((a, b) => a.z - b.z);

      // Draw glowing chain connections first (behind cubes)
      const glowColor = parseRgba(lineColor);

      for (let i = 0; i < blocks.length; i++) {
        for (let j = i + 1; j < blocks.length; j++) {
          const dx = blocks[i].x - blocks[j].x;
          const dy = blocks[i].y - blocks[j].y;
          const dz = blocks[i].z - blocks[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz * 0.3);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const avgZ = (blocks[i].z + blocks[j].z) / 2;
            const zFade = 0.4 + (avgZ / 100) * 0.6;

            // Draw subtle glow
            ctx.lineCap = "round";

            // Soft outer glow
            ctx.beginPath();
            ctx.moveTo(blocks[i].x, blocks[i].y);
            ctx.lineTo(blocks[j].x, blocks[j].y);
            ctx.shadowColor = `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, ${opacity * 0.2 * zFade})`;
            ctx.shadowBlur = 4;
            ctx.strokeStyle = `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, ${opacity * 0.1 * zFade})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Core line
            ctx.beginPath();
            ctx.moveTo(blocks[i].x, blocks[i].y);
            ctx.lineTo(blocks[j].x, blocks[j].y);
            ctx.shadowBlur = 0;
            ctx.strokeStyle = `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, ${opacity * 0.25 * zFade})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Reset shadow for cubes
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      // Update and draw cubes
      sortedBlocks.forEach((block) => {
        // Update position
        block.x += block.vx;
        block.y += block.vy;
        block.z += block.vz;

        // Bounce off walls
        if (block.x < 0 || block.x > width) block.vx *= -1;
        if (block.y < 0 || block.y > height) block.vy *= -1;
        if (block.z < 0 || block.z > 100) block.vz *= -1;

        // Keep in bounds
        block.x = Math.max(0, Math.min(width, block.x));
        block.y = Math.max(0, Math.min(height, block.y));
        block.z = Math.max(0, Math.min(100, block.z));

        // Scale and fade based on z-depth (parallax effect)
        const zScale = 0.5 + (block.z / 100) * 0.7;
        const zAlpha = 0.3 + (block.z / 100) * 0.7;

        // Draw isometric cube
        drawIsometricCube(
          ctx,
          block.x,
          block.y,
          block.size * zScale,
          { ...baseColor, a: baseColor.a * zAlpha }
        );
      });
    },
    [particleColor, lineColor, maxDistance, drawIsometricCube]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      blocksRef.current = initBlocks(rect.width, rect.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Check for reduced motion preference
    prefersReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotionRef.current) {
      draw(ctx, canvas.width, canvas.height);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    const animate = () => {
      draw(ctx, canvas.width, canvas.height);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw, initBlocks]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
