import { chromium } from "@playwright/test";

// Asset-integration QA: hero crop desktop/mobile, director ping-pong
// with real photos (director-2 missing → expect 1↔3 rotation).
const browser = await chromium.launch();

// 1. Hero desktop + mobile
for (const [w, h, tag] of [[1440, 900, "hero-1440"], [390, 844, "hero-390"]]) {
  const p = await browser.newPage({ viewport: { width: w, height: h } });
  const errors = [];
  p.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  p.on("pageerror", (e) => errors.push(String(e)));
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await p.waitForTimeout(4500);
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  const heroImg = await p.evaluate(() => {
    const img = document.querySelector("section:has(h1) img");
    return img ? { w: img.naturalWidth, h: img.naturalHeight, src: img.currentSrc.slice(-40) } : null;
  });
  console.log(tag, "overflow=" + overflow, "hero=" + JSON.stringify(heroImg), "errors=" + errors.length);
  await p.locator("section:has(h1)").first().screenshot({ path: `qa/screenshots/asset-${tag}.png` });
  await p.close();
}

// 2. Director rotation
{
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await p.waitForTimeout(4500);
  const btn = p.getByRole("button", { name: /портрет/ });
  await btn.scrollIntoViewIfNeeded();
  const op = (n) => p.locator(`img[src*="director-${n}.jpg"]`).evaluate((el) => getComputedStyle(el).opacity).catch(() => "missing");
  const seq = [];
  seq.push("init1=" + (await op(1)));
  await btn.hover(); seq.push("h1->" + (await p.waitForFunction(() => true).then(() => op(3)).catch(() => "?")));
  await p.getByRole("heading", { name: "Директордың сәлемі" }).hover();
  await btn.hover();
  seq.push("h2->1=" + (await op(1)));
  console.log("director seq:", seq.join(" "), "count2filtrado");
  const n2 = await p.locator('img[src*="director-2.jpg"]').count();
  console.log("director-2 rendered imgs:", n2);
  await btn.scrollIntoViewIfNeeded();
  await p.waitForTimeout(400);
  await p.locator("section[aria-labelledby='director-title']").first().screenshot({ path: "qa/screenshots/asset-director-1440.png" });
  await p.close();
}
await browser.close();
console.log("done");
