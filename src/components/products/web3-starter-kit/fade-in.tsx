"use client";

/**
 * Fade-in animation component with intersection observer
 * Triggers animation when element enters viewport
 */

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const delayMap: Record<number, string> = {
    0: "",
    100: "w3-delay-100",
    200: "w3-delay-200",
    300: "w3-delay-300",
    400: "w3-delay-400",
    500: "w3-delay-500",
  };
  const delayClass = delayMap[delay] || "";

  return (
    <div
      ref={ref}
      className={cn(
        isVisible
          ? direction === "up"
            ? `w3-fade-in-up ${delayClass}`
            : `w3-fade-in ${delayClass}`
          : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
