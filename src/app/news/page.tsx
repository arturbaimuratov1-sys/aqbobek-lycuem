import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { notices } from "@/content/kk/news";

export const metadata: Metadata = { title: "Жаңалықтар" };

/**
 * Notice board: standing verified announcements (dateless by design).
 * Dated newsroom articles will extend this index when available.
 */
export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="Ақпарат"
        title="Хабарландыру тақтасы"
        lead="Лицейдің ресми хабарландырулары: қабылдау, гранттар, үйірмелер, емтихандар. Толық жаңалықтар мұрағаты дайындалуда."
      />
      <div className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {notices.map((item, i) => (
              <Reveal key={item.slug} delay={Math.min(i * 0.05, 0.15)} className="h-full">
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
