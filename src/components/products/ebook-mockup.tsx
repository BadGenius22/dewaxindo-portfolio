"use client";

/**
 * Ebook cover mockup component for lead magnet pages
 * Supports enhanced styling with glow effects, size variants, and device mockups
 */

import Image from "next/image";
import { cn } from "@/lib/utils";

interface EbookMockupProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: "default" | "large";
  glow?: boolean;
  variant?: "book" | "device";
}

export function EbookMockup({
  className,
  src = "/og-web3-starter-kit.png",
  alt = "Web3 Starter Kit",
  size = "default",
  glow = false,
  variant = "book",
}: EbookMockupProps) {
  const sizeClasses = {
    default: "w-[280px] md:w-[400px]",
    large: "w-full max-w-[700px] md:max-w-[900px] lg:max-w-[1000px]",
  };

  const imageSizes = {
    default: "(max-width: 768px) 280px, 400px",
    large: "(max-width: 768px) 100vw, 1000px",
  };

  // Device variant - for Kindle/tablet mockups that already have their own frame
  if (variant === "device") {
    return (
      <div className={cn("relative", className)}>
        <div
          className={cn(
            "relative mx-auto",
            sizeClasses[size],
            glow && "w3-ebook-glow"
          )}
        >
          {/* Shadow */}
          <div
            className={cn(
              "absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/15 blur-xl rounded-full",
              glow && "bg-emerald-500/15 blur-2xl h-10"
            )}
          />

          {/* Device image */}
          <div className="relative w-full transform hover:scale-[1.02] transition-transform duration-300 motion-safe:transition-transform">
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={667}
              className="object-contain w-full h-auto"
              sizes={imageSizes[size]}
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  // Book variant - traditional 3D book effect
  const bookSizeClasses = {
    default: "w-[240px] h-[340px] md:w-[300px] md:h-[424px]",
    large: "w-[336px] h-[476px] md:w-[420px] md:h-[594px]",
  };

  return (
    <div className={cn("relative", className)}>
      {/* 3D Book Effect */}
      <div
        className={cn(
          "relative mx-auto",
          bookSizeClasses[size],
          glow && "w3-ebook-glow"
        )}
        style={
          glow
            ? {
                transform: "perspective(1000px) rotateY(-5deg)",
              }
            : undefined
        }
      >
        {/* Shadow */}
        <div
          className={cn(
            "absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full",
            glow && "bg-emerald-500/20 blur-2xl h-12"
          )}
        />

        {/* Book cover with 3D effect */}
        <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 motion-safe:transition-transform">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={imageSizes[size]}
            priority
          />

          {/* Subtle shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Page edges effect (right side) */}
        <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-zinc-200 via-white to-zinc-200 rounded-r-sm translate-x-full" />
        <div className="absolute right-0 top-3 bottom-3 w-1 bg-zinc-100 translate-x-[calc(100%+2px)]" />
      </div>
    </div>
  );
}
