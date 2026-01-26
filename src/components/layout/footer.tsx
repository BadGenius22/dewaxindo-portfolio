import Link from "next/link";
import { Github, Linkedin, Send, Instagram, Youtube } from "lucide-react";

import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";
import { navigationItems } from "@/data/navigation";

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
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.author.jobTitle} with {siteConfig.author.experience}{" "}
              experience. {siteConfig.author.tvlDeployed} TVL deployed.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.author.email}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
