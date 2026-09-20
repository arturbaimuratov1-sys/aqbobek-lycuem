import { chromium } from "@playwright/test";

const targets = process.argv.slice(2);
const shots = {
  mission: "section[aria-label='Миссия, көзқарас, құндылықтар']",
  why: "section[aria-labelledby='why-title']",
  edu: "section[aria-labelledby='edu-title']",
};

const browser = await chromium.launch();
for (const width of [1440, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(4500);
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
  });
  await page.waitForTimeout(600);
  for (const name of targets) {
    const el = page.locator(shots[name]).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await el.screenshot({ path: `qa/screenshots/sections/${name}-${width}.png` });
  }
  await page.close();
}
await browser.close();
console.log("done");
