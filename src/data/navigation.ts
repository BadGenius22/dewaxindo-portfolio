import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/#contact" },
];

// External navigation items (for header)
export const externalLinks: NavItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/BadGenius22",
    external: true,
  },
];
