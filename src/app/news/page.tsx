import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { homeNews } from "@/lib/home-news";

export const metadata: Metadata = { title: "Жаңалықтар" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="Ақпарат"
        title="Лицей жаңалықтары"
        lead="Хабарландырулар, олимпиадалар, қабылдау және лицей өмірі — барлығы бір жерде."
      />
      <div className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeNews.map((item, i) => (
              <Reveal key={item.slug} delay={Math.min(i * 0.05, 0.15)} className="h-full">
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 border border-line bg-parchment p-6 text-[13.5px] leading-relaxed text-ink-500">
            Ескерту: бұл бөлімдегі материалдар — құрылымды толтырғыш (placeholder). Нақты
            редакциялық мазмұн немесе CMS қосылғанда осы деректер ауыстырылады.
          </Reveal>
        </div>
      </div>
    </>
  );
}
