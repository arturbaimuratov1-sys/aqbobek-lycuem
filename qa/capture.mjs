/**
 * Visual capture: scrolls through the page so scroll-reveals fire,
 * then screenshots key sections at desktop + mobile widths.
 * Run: node qa/capture.js  (dev server must be on :3000)
 */
import { chromium } from "@playwright/test";

const SECTIONS = [
  ["hero", "section:has(h1)"],
  ["director", "section[aria-labelledby='director-title']"],
  ["ticker", "section.ticker"],
  ["teachers", "section[aria-labelledby='teachers-title']"],
  ["campus", "section[aria-labelledby='campus-title']"],
  ["latest-news", "section[aria-labelledby='news-title']"],
  ["cta", "section[aria-labelledby='cta-title']"],
];

(async () => {
  const browser = await chromium.launch();
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    // Scroll through in steps so every Reveal fires.
    await page.evaluate(async () => {
      const h = document.documentElement.scrollHeight;
      for (let y = 0; y < h; y += 500) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    for (const [name, sel] of SECTIONS) {
      const el = page.locator(sel).first();
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await el.screenshot({ path: `qa/screenshots/sections/${name}-${width}.png` });
    }
    await page.close();
  }
  await browser.close();
  console.log("captured");
})();
