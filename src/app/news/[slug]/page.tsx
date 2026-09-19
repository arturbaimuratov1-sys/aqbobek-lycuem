import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { formatDate, getNews, news } from "@/content/kk/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  return { title: item ? item.title : "Жаңалық табылмады" };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  const related = news.filter((n) => n.slug !== item.slug).slice(0, 2);

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-5 pt-12 pb-8 md:pt-16">
        <Link
          href="/news"
          className="text-[14px] font-semibold text-navy-900 underline-offset-4 hover:underline"
        >
          ← Барлық жаңалықтар
        </Link>
        <p className="mt-6 text-[13px] font-medium tracking-wide text-ink-500">
          <span className="text-gold-600">{item.category}</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-balance text-navy-900 md:text-[2.75rem] md:leading-[1.15]">
          {item.title}
        </h1>
        <p className="mt-5 border border-line bg-parchment p-5 text-[16.5px] leading-relaxed text-ink-900">
          {item.excerpt}
        </p>
      </div>

      {item.image && (
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Image
            src={item.image}
            alt=""
            width={1200}
            height={675}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Reveal className="border border-line bg-parchment p-6 text-[14px] leading-relaxed text-ink-600">
          Бұл — толтырғыш мақала. Нақты редакциялық мәтін CMS қосылғанда осы жерде жарияланады.
          Толық ақпарат үшін қабылдау бөліміне хабарласыңыз.
        </Reveal>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-2xl text-navy-900">Қосымша жаңалықтар</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <NewsCard key={r.slug} item={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
