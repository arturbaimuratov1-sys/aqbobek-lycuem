import Link from "next/link";
import type { Notice } from "@/content/kk/news";

/** Editorial notice card: kicker, serif title, excerpt. No dates, no images. */
export function NewsCard({ item }: { item: Notice }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-paper p-7 transition-colors duration-200 hover:border-navy-900">
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-600">
        {item.kicker}
      </p>
      <h3 className="mt-3 font-display text-[22px] leading-snug font-medium text-navy-900">
        <Link href={`/news/${item.slug}`} className="underline-offset-4 group-hover:underline">
          {item.title}
        </Link>
      </h3>
      <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-600">{item.excerpt}</p>
      <p aria-hidden="true" className="mt-4 text-[15px] font-semibold text-navy-900">
        Оқу <span aria-hidden="true">→</span>
      </p>
    </article>
  );
}
