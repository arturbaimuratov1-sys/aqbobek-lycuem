import { news } from "@/content/kk/news";

/** Homepage + ticker feed: newest first. Swap with CMS query later. */
export const homeNews = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
