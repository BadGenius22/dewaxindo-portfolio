"use client";

import { useEffect, useRef, useCallback } from "react";

interface Block {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface ParticleNetworkProps {
  particleCount?: number;
  particleColor?: string;
  lineColor?: string;
  maxDistance?: number;
  speed?: number;
  className?: string;
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
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const prefersReducedMotionRef = useRef(false);

  const initBlocks = useCallback(
    (width: number, height: number) => {
      const blocks: Block[] = [];
      for (let i = 0; i < particleCount; i++) {
        blocks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * 8 + 8, // Block size 8-16px
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
      return blocks;
    },
    [particleCount, speed]
  );

  // Helper to draw a hollow rounded rectangle (block outline)
  const drawBlock = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const halfSize = size / 2;
      const radius = size * 0.15; // Rounded corners

      ctx.beginPath();
      ctx.roundRect(-halfSize, -halfSize, size, size, radius);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    },
    []
  );

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      const blocks = blocksRef.current;

      // Update and draw blocks
      blocks.forEach((block) => {
        // Repel from mouse
        if (mouseRef.current.isOver) {
          const dx = block.x - mouseRef.current.x;
          const dy = block.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 120;

          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius;
            const repelStrength = 2;
            block.vx += (dx / distance) * force * repelStrength;
            block.vy += (dy / distance) * force * repelStrength;
          }
        }

        // Apply friction to slow down
        block.vx *= 0.98;
        block.vy *= 0.98;

        // Ensure minimum movement
        const minSpeed = 0.1;
        if (Math.abs(block.vx) < minSpeed) block.vx = (Math.random() - 0.5) * minSpeed * 2;
        if (Math.abs(block.vy) < minSpeed) block.vy = (Math.random() - 0.5) * minSpeed * 2;

        // Update position
        block.x += block.vx;
        block.y += block.vy;
        block.rotation += block.rotationSpeed;

        // Bounce off walls
        if (block.x < 0 || block.x > width) block.vx *= -1;
        if (block.y < 0 || block.y > height) block.vy *= -1;

        // Keep in bounds
        block.x = Math.max(0, Math.min(width, block.x));
        block.y = Math.max(0, Math.min(height, block.y));

        // Draw block
        drawBlock(ctx, block.x, block.y, block.size, block.rotation, particleColor);
      });

      // Draw chain connections between blocks
      for (let i = 0; i < blocks.length; i++) {
        for (let j = i + 1; j < blocks.length; j++) {
          const dx = blocks[i].x - blocks[j].x;
          const dy = blocks[i].y - blocks[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(blocks[i].x, blocks[i].y);
            ctx.lineTo(blocks[j].x, blocks[j].y);
            ctx.strokeStyle = lineColor.replace(
              /[\d.]+\)$/,
              `${opacity * 0.25})`
            );
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }

        // Connect to mouse if hovering
        if (mouseRef.current.isOver) {
          const dx = blocks[i].x - mouseRef.current.x;
          const dy = blocks[i].y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance * 1.5) {
            const opacity = 1 - distance / (maxDistance * 1.5);
            ctx.beginPath();
            ctx.moveTo(blocks[i].x, blocks[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = lineColor.replace(
              /[\d.]+\)$/,
              `${opacity * 0.35})`
            );
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }
    },
    [particleColor, lineColor, maxDistance, drawBlock]
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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isOver = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isOver = false;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Check for reduced motion preference
    prefersReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotionRef.current) {
      // Draw static particles once
      draw(ctx, canvas.width, canvas.height);
      return () => {
        window.removeEventListener("resize", handleResize);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseenter", handleMouseEnter);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    const animate = () => {
      draw(ctx, canvas.width, canvas.height);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw, initBlocks]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
