import { chromium } from "@playwright/test";

const browser = await chromium.launch();
for (const [w, h, tag] of [[1440, 900, "hero-full-1440"], [390, 844, "hero-full-390"]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(4500);
  await page.locator("section:has(h1)").first().screenshot({ path: `qa/screenshots/${tag}.png` });
  await page.close();
}
await browser.close();
console.log("done");
