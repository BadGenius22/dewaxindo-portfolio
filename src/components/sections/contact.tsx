"use client";

import { Github, Linkedin, Send, Mail, Instagram, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { socialLinks } from "@/data/socials";
import { siteConfig } from "@/data/site";
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
  email: Mail,
};

const socialColors: Record<string, string> = {
  x: "hover:bg-neutral-500/10 hover:text-neutral-300 hover:border-neutral-500/50",
  github: "hover:bg-neutral-500/10 hover:text-neutral-300 hover:border-neutral-500/50",
  linkedin: "hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/50",
  telegram: "hover:bg-cyan-500/10 hover:text-cyan-500 hover:border-cyan-500/50",
  instagram: "hover:bg-pink-500/10 hover:text-pink-500 hover:border-pink-500/50",
  youtube: "hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50",
  email: "hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/50",
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Let's Build Together"
            subtitle="Got a DeFi project? Let's make it happen."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-muted-foreground mb-8">
              Looking for a smart contract engineer who ships secure, audited code?
              Whether you&apos;re building DeFi protocols, need ZK implementations,
              or want Web3 architecture consulting — I&apos;m ready to help.
            </p>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = socialIcons[social.platform];
                return (
                  <AnimatedSection key={social.platform} delay={0.1 * index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex flex-col items-center gap-3 p-6 rounded-xl border bg-card",
                        "transition-all duration-300",
                        socialColors[social.platform]
                      )}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                      <div className="text-center">
                        <p className="font-medium text-sm">{social.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Email CTA */}
            <AnimatedSection delay={0.5}>
              <div className="mt-12">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer email?
                </p>
                <Button size="lg" variant="outline" asChild>
                  <a href={`mailto:${siteConfig.author.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {siteConfig.author.email}
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
