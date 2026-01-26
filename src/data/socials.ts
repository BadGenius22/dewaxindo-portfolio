import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    platform: "twitter",
    url: "https://twitter.com/dewaxindo",
    label: "Twitter / X",
    username: "@dewaxindo",
  },
  {
    platform: "github",
    url: "https://github.com/dewaxindo",
    label: "GitHub",
    username: "dewaxindo",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/dewaxindo",
    label: "LinkedIn",
    username: "dewaxindo",
  },
  {
    platform: "telegram",
    url: "https://t.me/dewaxindo",
    label: "Telegram",
    username: "@dewaxindo",
  },
];

// Get social links as array for schema.org sameAs
export const getSocialUrls = () => socialLinks.map((s) => s.url);
