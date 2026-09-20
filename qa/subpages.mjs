import { chromium } from "@playwright/test";

const routes = ["about", "education", "teachers", "admissions", "campus", "news", "contact"];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const r of routes) {
  await page.goto(`http://localhost:3000/${r}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(4500);
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 600) {
      window.scrollTo(0, y);
      await new Promise((res) => setTimeout(res, 90));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: `qa/screenshots/sub-${r}-1440.png`, fullPage: true });
  console.log("shot", r);
}
await browser.close();
