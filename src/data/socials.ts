import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    platform: "x",
    url: "https://x.com/dewaxindo",
    label: "X",
    username: "@dewaxindo",
  },
  {
    platform: "github",
    url: "https://github.com/BadGenius22",
    label: "GitHub",
    username: "BadGenius22",
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
  {
    platform: "instagram",
    url: "https://instagram.com/dewaxindo",
    label: "Instagram",
    username: "@dewaxindo",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@dewaxindo",
    label: "YouTube",
    username: "@dewaxindo",
  },
];

// Get social links as array for schema.org sameAs
export const getSocialUrls = () => socialLinks.map((s) => s.url);
