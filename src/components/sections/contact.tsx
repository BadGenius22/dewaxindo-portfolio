"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Send, Mail, Instagram, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
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

const socialColors: Record<string, { bg: string; text: string; border: string }> = {
  x: { bg: "bg-neutral-500/10", text: "text-neutral-400", border: "border-neutral-500/30" },
  github: { bg: "bg-neutral-500/10", text: "text-neutral-400", border: "border-neutral-500/30" },
  linkedin: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  telegram: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" },
  instagram: { bg: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  youtube: { bg: "bg-red-500/10", text: "text-red-500", border: "border-red-500/30" },
  email: { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
};

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="bg-background px-6 py-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.p
          className="text-muted-foreground font-display text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("label")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-medium leading-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {t("subtitle")}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t("description")}
            </p>

            {/* Email CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" asChild>
                <a href={`mailto:${siteConfig.author.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {siteConfig.author.email}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Social Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = socialIcons[social.platform];
              const colors = socialColors[social.platform] || socialColors.email;

              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} - ${social.username}`}
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card",
                    "transition-all duration-300 cursor-pointer",
                    "hover:border-border/80 hover:bg-accent/50",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                >
                  <motion.div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      colors.bg
                    )}
                    whileHover={{ scale: 1.1 }}
                  >
                    {Icon && <Icon className={cn("h-5 w-5", colors.text)} />}
                  </motion.div>
                  <div className="text-center">
                    <p className="font-medium text-sm text-foreground">{social.label}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {social.username}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
