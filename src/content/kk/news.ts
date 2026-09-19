/**
 * News data layer.
 *
 * NOTE: these are clearly-marked PLACEHOLDER items so the ticker, homepage
 * and /news page have structured data to render. Replace with real newsroom
 * content (or connect a CMS/API returning this same shape).
 *
 * Shape contract for a future CMS:
 * { slug, title, date (ISO), category, excerpt, image?, body? }
 */

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  /** Temporary: real editorial images replace these. */
  image?: string;
  placeholder: boolean;
}

export const news: NewsItem[] = [
  {
    slug: "grant-exam-2026",
    title: "2026–2027 оқу жылына грант: қабылдау емтиханы 4 сәуір",
    date: "2026-03-10",
    category: "Қабылдау",
    excerpt:
      "7–8–9 сынып оқушылары грант негізінде оқу мүмкіндігіне ие. Қатысу үшін өтініш формасын толтыру қажет.",
    image: "/images/hero/background1.jpg",
    placeholder: true,
  },
  {
    slug: "olympiad-preparation",
    title: "Олимпиадаға дайындық: қысқы дайындық кезеңі басталды",
    date: "2026-02-18",
    category: "Олимпиада",
    excerpt:
      "Математика, физика және информатика бағыттары бойынша дайындық топтары жаңа кестемен жұмыс істейді.",
    image: "/images/hero/background2.jpg",
    placeholder: true,
  },
  {
    slug: "open-day",
    title: "Ашық есік күні: лицейді өз көзіңізбен көріңіз",
    date: "2026-02-02",
    category: "Лицей өмірі",
    excerpt:
      "Ата-аналар мен оқушылар кампусты, жатақхананы және зертханаларды аралап, ұстаздармен таныса алады.",
    image: "/images/hero/background3.jpg",
    placeholder: true,
  },
  {
    slug: "ielts-sat-results",
    title: "IELTS және SAT дайындық топтарына жаңа қабылдау",
    date: "2026-01-22",
    category: "Білім беру",
    excerpt:
      "Жоғары сынып оқушыларына арналған халықаралық емтихандарға дайындық курстарына тіркелу ашық.",
    image: "/images/hero/background4.jpg",
    placeholder: true,
  },
  {
    slug: "clubs-showcase",
    title: "Үйірмелер жәрмеңкесі: Web, Arduino, 3D-модельдеу",
    date: "2026-01-15",
    category: "Лицей өмірі",
    excerpt:
      "IT бағытындағы үш тегін үйірме мен Art Club, «Şyraq» волонтерлар қозғалысы өз жұмысын таныстырды.",
    image: "/images/hero/background5.jpg",
    placeholder: true,
  },
  {
    slug: "winter-camp",
    title: "Қысқы математика мектебі өз мәресіне жетті",
    date: "2025-12-28",
    category: "Олимпиада",
    excerpt:
      "Қатысушылар қарқынды дайындықтан өтіп, қорытынды сынақ тапсырмаларын орындады.",
    image: "/images/hero/background7.jpg",
    placeholder: true,
  },
];

export function getNews(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

/** dd.mm.yyyy — Kazakh date format used across the site. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
