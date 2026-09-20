import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { getNotice, notices } from "@/content/kk/news";

export function generateStaticParams() {
  return notices.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNotice(slug);
  return { title: item ? item.title : "Хабарландыру табылмады" };
}

export default async function NoticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNotice(slug);
  if (!item) notFound();

  const related = notices.filter((n) => n.slug !== item.slug).slice(0, 2);

  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 pt-14 pb-10 md:px-10 md:pt-20">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 py-2.5 -my-2.5 text-[14px] font-semibold text-navy-900 underline-offset-4 hover:underline"
        >
          ← Барлық хабарландырулар
        </Link>
        <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-600">
          {item.kicker}
        </p>
        <h1 className="mt-4 font-display text-3xl leading-[1.1] font-medium text-balance text-navy-900 md:text-5xl">
          {item.title}
        </h1>
        <p className="mt-6 border border-line bg-mist p-6 text-[16.5px] leading-relaxed text-ink-900">
          {item.excerpt}
        </p>
        <div className="mt-8 space-y-5">
          {item.body.map((paragraph, i) => (
            <p key={i} className="max-w-[68ch] text-[16px] leading-relaxed text-ink-600">
              {paragraph}
            </p>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-medium text-navy-900">
              Басқа хабарландырулар
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Reveal key={r.slug} className="h-full">
                  <NewsCard item={r} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
