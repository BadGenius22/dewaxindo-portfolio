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
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Section order matches the nav numbering, § 01 through § 06.
    for (const id of ["capabilities", "process", "works", "audits", "log", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("work cards display correctly", async ({ page }) => {
    const works = page.locator("#works");
    await works.scrollIntoViewIfNeeded();

    const cards = works.locator(".work-card");
    expect(await cards.count()).toBeGreaterThan(0);
    await expect(cards.first()).toBeVisible();

    // Exactly one card carries the featured treatment.
    await expect(works.locator(".work-card.featured")).toHaveCount(1);
  });

  test("credential cards render in the security section", async ({ page }) => {
    const audits = page.locator("#audits");
    await audits.scrollIntoViewIfNeeded();

    const cards = audits.locator(".cred-card");
    await expect(cards).toHaveCount(2);
    await expect(cards.first()).toBeVisible();
    await expect(cards.last()).toBeVisible();
  });

  test("language switcher routes between locales", async ({ page }) => {
    // localePrefix is "as-needed", so the default locale serves from "/" unprefixed.
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page.getByRole("button", { name: "Bahasa Indonesia" }).click();

    await expect(page).toHaveURL(/\/id\/?$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "id");
  });

  test("external links have correct attributes", async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      // noreferrer also severs window.opener, so it covers reverse tabnabbing
      // on its own. Either token is acceptable here.
      await expect(externalLinks.nth(i)).toHaveAttribute("rel", /noreferrer|noopener/);
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
