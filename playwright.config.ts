import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./qa",
  timeout: 60_000,
  fullyParallel: false,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
  },
});
