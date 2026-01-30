"use client";

import { Github, Linkedin, Send, Instagram, Youtube } from "lucide-react";

import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";
import { cn } from "@/lib/utils";

// Custom X (formerly Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ElementType> = {
  x: XIcon,
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
  instagram: Instagram,
  youtube: Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl w-full mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="font-display font-medium text-foreground">
              {siteConfig.name}
            </span>
            <span className="hidden md:block text-muted-foreground/50">·</span>
            <span className="text-sm text-muted-foreground">
              &copy; {currentYear}
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 4).map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    "p-2 rounded-lg hover:bg-accent/50",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
