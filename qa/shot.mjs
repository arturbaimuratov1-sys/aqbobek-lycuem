import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2000);
await page.screenshot({ path: "qa/screenshots/sections/intro-v2-seamless.png" });
await browser.close();
console.log("done");
