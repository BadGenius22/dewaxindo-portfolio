"use client";

/**
 * Ebook / device mockup for the product landing page.
 * Renders the artwork cleanly; the surrounding layout supplies framing + shadow.
 */

import Image from "next/image";
import { cn } from "@/lib/utils";

interface EbookMockupProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: "default" | "large";
  /** Kept for API compatibility; framing/shadow now come from the layout. */
  glow?: boolean;
  variant?: "book" | "device";
}

export function EbookMockup({
  className,
  src = "/og-web3-starter-kit.png",
  alt = "Web3 Starter Kit",
  size = "default",
  variant = "book",
}: EbookMockupProps) {
  const sizeClasses = {
    default: "w-[280px] md:w-[400px]",
    large: "w-full max-w-[640px]",
  };

  const imageSizes = {
    default: "(max-width: 768px) 280px, 400px",
    large: "(max-width: 900px) 90vw, 560px",
  };

  // Device variant - artwork already includes its own device frame
  if (variant === "device") {
    return (
      <div className={cn("relative mx-auto", sizeClasses[size], className)}>
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={667}
          className="object-contain w-full h-auto transition-transform duration-500 motion-safe:hover:scale-[1.02]"
          sizes={imageSizes[size]}
          priority
        />
      </div>
    );
  }

  // Book variant - sharp cover with a hard offset shadow (Forge)
  const bookSizeClasses = {
    default: "w-[240px] h-[340px] md:w-[300px] md:h-[424px]",
    large: "w-[300px] h-[424px] md:w-[380px] md:h-[538px]",
  };

  return (
    <div
      className={cn(
        "relative mx-auto overflow-hidden border border-[var(--ink)]",
        bookSizeClasses[size],
        className
      )}
      style={{ boxShadow: "10px 10px 0 var(--ink)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={imageSizes[size]}
        priority
      />
    </div>
  );
}
