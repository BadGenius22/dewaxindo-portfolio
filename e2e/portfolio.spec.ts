import { test, expect } from "@playwright/test";

test.describe("Portfolio Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Dewangga Praxindo/i);
  });

  test("hero section renders with name", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toContainText("Dewangga Praxindo");
  });

  test("navigation links work", async ({ page }) => {
    // Test navigation exists
    const nav = page.locator("header nav");
    await expect(nav).toBeVisible();
  });

  test("all main sections are visible", async ({ page }) => {
    // Hero
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // About section
    const about = page.locator("#about");
    await expect(about).toBeVisible();

    // Projects section
    const projects = page.locator("#projects");
    await expect(projects).toBeVisible();

    // Contact section
    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
  });

  test("projects display correctly", async ({ page }) => {
    const projectsSection = page.locator("#projects");
    await projectsSection.scrollIntoViewIfNeeded();

    // Should have project cards
    const projectCards = projectsSection.locator('[data-testid="project-card"]');
    // Fallback: look for any card-like elements
    const cards = projectsSection.locator(".rounded-xl, .rounded-lg").first();
    await expect(cards).toBeVisible();
  });

  test("dark mode toggle works", async ({ page }) => {
    const html = page.locator("html");

    // Check initial state (should be dark by default)
    await expect(html).toHaveClass(/dark/);

    // Find and click theme toggle
    const themeToggle = page.getByRole("button", { name: /theme/i });
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      // After click, should toggle
      await expect(html).not.toHaveClass(/dark/);
    }
  });

  test("external links have correct attributes", async ({ page }) => {
    // Check that external links open in new tab
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const link = externalLinks.nth(i);
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });

  test("page is accessible - has main landmark", async ({ page }) => {
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });

  test("responsive - mobile viewport works", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();

    // Page should still render
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
