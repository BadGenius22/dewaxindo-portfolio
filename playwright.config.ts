import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    // Blank the analytics IDs so the Pixel and GA scripts are never rendered
    // during tests. Without this, a headless run reports fake PageView traffic
    // and fake conversions into the live Meta dataset.
    env: {
      NEXT_PUBLIC_META_PIXEL_ID: "",
      NEXT_PUBLIC_GA_ID: "",
      META_CAPI_ACCESS_TOKEN: "",
    },
  },
});
