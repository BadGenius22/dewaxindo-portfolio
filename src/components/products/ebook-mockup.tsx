"use client";

/**
 * Ebook cover mockup component for lead magnet pages
 */

import Image from "next/image";
import { cn } from "@/lib/utils";

interface EbookMockupProps {
  className?: string;
  src?: string;
  alt?: string;
}

export function EbookMockup({
  className,
  src = "/og-web3-starter-kit.png",
  alt = "Web3 Starter Kit",
}: EbookMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* 3D Book Effect */}
      <div className="relative w-[240px] h-[340px] md:w-[300px] md:h-[424px] mx-auto">
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full" />

        {/* Book cover with 3D effect */}
        <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 240px, 300px"
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
