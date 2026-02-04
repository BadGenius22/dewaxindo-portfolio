"use client";

/**
 * Social proof badge component showing download count
 */

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialProofProps {
  text: string;
  className?: string;
}

export function SocialProof({ text, className }: SocialProofProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full",
        "bg-emerald-500/10 border border-emerald-500/20",
        "text-sm text-emerald-600 dark:text-emerald-400",
        className
      )}
    >
      <Download className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
}
