import Image from "next/image";
import Link from "next/link";
import { formatDate, type NewsItem } from "@/content/kk/news";

/** Editorial news card: image, dateline, serif title, excerpt. */
export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-white">
      {item.image && (
        <div className="overflow-hidden">
          <Image
            src={item.image}
            alt=""
            width={800}
            height={500}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[12px] font-medium tracking-wide text-ink-500">
          <span className="text-gold-600">{item.category}</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
        <h3 className="mt-2.5 font-display text-[21px] leading-snug text-navy-900">
          <Link href={`/news/${item.slug}`} className="underline-offset-4 group-hover:underline">
            {item.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-600">{item.excerpt}</p>
      </div>
    </article>
  );
}
