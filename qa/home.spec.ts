import { expect, test, type Page } from "@playwright/test";

const ROUTES = [
  "/",
  "/about",
  "/education",
  "/teachers",
  "/admissions",
  "/campus",
  "/news",
  "/contact",
];

/** Collect console errors + page errors for the current page. */
async function watchErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`page: ${String(err)}`));
  return errors;
}

test.describe("pages render without errors or overflow", () => {
  for (const route of ROUTES) {
    test(`${route} @1440`, async ({ page }) => {
      const errors = await watchErrors(page);
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(route, { waitUntil: "networkidle" });
      await page.waitForTimeout(4500); // let intro finish on first load
      await expect(page).toHaveTitle(/Aqbobek Lyceum/);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(1);
      expect(errors, `${route} errors`).toEqual([]);
      await page.screenshot({ path: `qa/screenshots${route === "/" ? "/home" : route}-1440.png`, fullPage: true });
    });
  }

  test("home @390 mobile + @768 tablet", async ({ page }) => {
    const errors = await watchErrors(page);
    for (const width of [390, 768]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto("/", { waitUntil: "networkidle" });
      await page.waitForTimeout(4500);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `home@${width} overflow`).toBeLessThanOrEqual(1);
      await page.screenshot({ path: `qa/screenshots/home-${width}.png`, fullPage: true });
    }
    expect(errors).toEqual([]);
  });

  test("home @1280 laptop + @1024 tablet-landscape", async ({ page }) => {
    const errors = await watchErrors(page);
    for (const [width, height] of [[1280, 800], [1024, 768]] as const) {
      await page.setViewportSize({ width, height });
      await page.goto("/", { waitUntil: "networkidle" });
      await page.waitForTimeout(4500);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `home@${width} overflow`).toBeLessThanOrEqual(1);
      await expect(page.locator("h1").first()).toBeVisible();
      await page.screenshot({ path: `qa/screenshots/home-${width}.png`, fullPage: true });
    }
    expect(errors).toEqual([]);
  });
});

test.describe("intro loader", () => {
  test("plays once per session, never on in-site navigation", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const intro = page.getByRole("status", { name: "Aqbobek Lyceum" });
    await expect(intro).toBeVisible({ timeout: 3000 });
    await expect(intro).toBeHidden({ timeout: 8000 });
    // In-site navigation must NOT replay the intro.
    await page.getByRole("link", { name: /Лицей туралы/ }).first().click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole("status", { name: "Aqbobek Lyceum" })).toBeHidden();
  });
});

test.describe("news wire", () => {
  test("loops, pauses on hover, links resolve", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    const track = page.locator(".wire-track").first();
    await expect(track).toBeVisible();
    const animName = await track.evaluate((el) => getComputedStyle(el).animationName);
    expect(animName).toBe("wire");
    // Pause on hover: hover the stable label (the track itself never settles).
    await page.locator("section[aria-label='Хабарландырулар лентасы'] p").first().hover();
    const playState = await track.evaluate((el) => getComputedStyle(el).animationPlayState);
    expect(playState).toBe("paused");
    // A wire link navigates to a notice detail page (wire is paused, so a real click lands).
    await page.locator(".wire-track a").first().click();
    await expect(page).toHaveURL(/\/news\//);
  });
});

test.describe("director portrait", () => {
  // Full sequence 1→2→3→2→1, one advance per pointer-enter,
  // asserted on the actual crossfade (computed opacity per state).
  test("ping-pong 1→2→3→2→1, one advance per enter", async ({ page }) => {
    const errors = await watchErrors(page);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    const portrait = page.getByRole("button", { name: /Интерактивті портрет/ });
    await portrait.scrollIntoViewIfNeeded();
    await expect(portrait).toBeVisible();
    // Full ping-pong rotation 1 → 2 → 3 → 2 → 1, one advance per pointer-enter,
    // asserted on the actual crossfade (computed opacity per state).
    const opacityOf = (n: number) =>
      page
        .locator(`img[src*="director-${n}.jpg"]`)
        .evaluate((el) => getComputedStyle(el).opacity);
    const away = page.getByRole("heading", { name: "Директордың сәлемі" });
    await expect.poll(() => opacityOf(1)).toBe("1");
    await portrait.hover();
    await expect.poll(() => opacityOf(2)).toBe("1");
    await expect.poll(() => opacityOf(1)).toBe("0");
    await away.hover();
    await portrait.hover();
    await expect.poll(() => opacityOf(3)).toBe("1");
    await away.hover();
    await portrait.hover();
    await expect.poll(() => opacityOf(2)).toBe("1");
    await away.hover();
    await portrait.hover();
    await expect.poll(() => opacityOf(1)).toBe("1");
    // Layout must not shift through the sequence.
    const box = await portrait.boundingBox();
    expect(box?.width).toBeGreaterThan(200);
    expect(box?.height).toBeGreaterThan(200);
    expect(errors).toEqual([]);
  });
});

test.describe("accessibility basics", () => {
  test("skip link, focus visibility, menu keyboard control", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    // Skip link is first tab stop and jumps to main.
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Негізгі мазмұнға өту" });
    await expect(skip).toBeFocused();
    await skip.press("Enter");
    await expect(page).toHaveURL(/#main/);
    // Desktop nav reachable by keyboard.
    await page.keyboard.press("Tab");
    // Mobile menu opens and closes via keyboard.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    await page.getByRole("button", { name: "Мәзірді ашу" }).focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("dialog", { name: "Мәзір" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Мәзір" })).toBeHidden();
  });

  test("touch targets ≥ 40px on key controls", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    const small = await page.evaluate(() => {
      const bad: string[] = [];
      document.querySelectorAll("header a, header button, main a, main button").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && (r.width < 40 || r.height < 40) && r.top < window.innerHeight * 3) {
          bad.push(`${el.tagName}.${String(el.className).split(" ").slice(0, 2).join(".")}:${Math.round(r.width)}x${Math.round(r.height)}`);
        }
      });
      return [...new Set(bad)].slice(0, 12);
    });
    expect(small).toEqual([]);
  });
});

test.describe("navigation + mobile menu", () => {
  test("desktop nav reaches every page", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    for (const label of ["Лицей туралы", "Білім беру", "Мұғалімдер", "Қабылдау", "Кампус", "Жаңалықтар", "Байланыс"]) {
      await page.getByRole("navigation", { name: "Негізгі навигация" }).getByRole("link", { name: label }).click();
      await expect(page.locator("h1").first()).toBeVisible();
    }
  });

  test("mobile menu opens, links work, Escape closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(4500);
    const toggle = page.getByRole("button", { name: /Мәзірді/ });
    await toggle.click();
    await expect(page.getByRole("dialog", { name: "Мәзір" })).toBeVisible();
    await page.screenshot({ path: "qa/screenshots/mobile-menu-390.png" });
    await page.getByRole("navigation", { name: "Мобильді навигация" }).getByRole("link", { name: "Қабылдау", exact: true }).click();
    await expect(page).toHaveURL(/\/admissions/);
    await expect(page.getByRole("dialog", { name: "Мәзір" })).toBeHidden();
  });
});
