import type { MetadataRoute } from "next";
import { notices } from "@/content/kk/news";

export const dynamic = "force-static";

const BASE = "https://a1s.kz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/education", "/teachers", "/admissions", "/campus", "/news", "/contact"];
  return [
    ...routes.map((route) => ({
      url: `${BASE}${route === "" ? "/" : route}`,
      lastModified: new Date("2026-09-20"),
    })),
    ...notices.map((n) => ({
      url: `${BASE}/news/${n.slug}`,
      lastModified: new Date("2026-09-20"),
    })),
  ];
}
