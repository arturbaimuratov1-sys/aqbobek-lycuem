import Link from "next/link";
import { formatDate, type NewsItem } from "@/content/kk/news";

interface NewsTickerProps {
  items: NewsItem[];
}

/**
 * Professional news strip: label block + continuous horizontal loop.
 * - Pure CSS animation (off main thread), pauses on hover/focus.
 * - Items are real links; second half is aria-hidden to avoid SR duplication.
 * - Under reduced-motion the CSS collapses to a static wrapped list.
 */
export function NewsTicker({ items }: NewsTickerProps) {
  const renderHalf = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={`${hidden ? "b" : "a"}-${item.slug}`} className="flex items-center">
          <Link
            href={`/news/${item.slug}`}
            tabIndex={hidden ? -1 : undefined}
            className="group flex items-baseline gap-3 px-6 py-3.5 text-[15px] whitespace-nowrap text-white/90 transition-colors duration-150 ease-out hover:text-white"
          >
            <span className="shrink-0 text-[13px] font-medium tabular-nums text-gold-500">
              {formatDate(item.date)}
            </span>
            <span className="underline-offset-4 group-hover:underline">
              {item.title}
            </span>
          </Link>
          <span aria-hidden="true" className="text-gold-500/70">
            →
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section aria-label="Соңғы жаңалықтар" className="ticker bg-navy-950">
      <div className="mx-auto flex max-w-[1400px] items-stretch">
        <div className="flex shrink-0 items-center gap-2.5 border-r border-white/10 px-5 py-3.5 md:px-8">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            Жаңалықтар
          </p>
        </div>
        <div className="ticker-mask relative flex-1">
          <div className="ticker-track">
            {renderHalf(false)}
            {renderHalf(true)}
          </div>
        </div>
        <Link
          href="/news"
          className="hidden shrink-0 items-center border-l border-white/10 px-6 text-[13px] font-medium text-white/70 transition-colors duration-150 ease-out hover:text-white sm:flex"
        >
          Барлығы →
        </Link>
      </div>
    </section>
  );
}
