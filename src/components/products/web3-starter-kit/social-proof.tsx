"use client";

/**
 * Social proof badge showing download count (Forge style)
 */

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialProofProps {
  text: string;
  className?: string;
}

export function SocialProof({ text, className }: SocialProofProps) {
  return (
    <div className={cn("pk-social", className)}>
      <Download className="w-3.5 h-3.5" />
      <span>{text}</span>
    </div>
  );
}
