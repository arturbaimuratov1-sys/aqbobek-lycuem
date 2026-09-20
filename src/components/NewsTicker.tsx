import Link from "next/link";
import { WireMarquee } from "@/components/WireMarquee";
import { notices } from "@/content/kk/news";

interface NewsTickerProps {
  slugs?: string[];
}

/**
 * Editorial information wire: LATEST marker + verified notices.
 * Visually distinct from the news section (dense wire vs magazine grid).
 * Dateless by design — no fabricated dates or events.
 */
export function NewsTicker({ slugs }: NewsTickerProps) {
  const items = slugs
    ? slugs.flatMap((s) => notices.filter((n) => n.slug === s))
    : notices;

  return (
    <section aria-label="Хабарландырулар лентасы" className="news-wire border-y border-line-dark bg-abyss">
      <div className="mx-auto flex max-w-[1440px] items-stretch">
        <p className="flex shrink-0 items-center gap-3 border-r border-line-dark px-5 py-4 md:px-10">
          <span aria-hidden="true" className="inline-block h-2 w-2 bg-steel-500" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
            Latest
          </span>
        </p>
        <WireMarquee ariaLabel="Соңғы хабарландырулар" className="flex-1">
          {items.map((item) => (
            <span key={item.slug} className="flex shrink-0 items-center">
              <Link
                href={`/news/${item.slug}`}
                className="group flex items-baseline gap-3 px-7 py-4 text-[14.5px] whitespace-nowrap"
              >
                <span className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-steel-500">
                  {item.kicker}
                </span>
                <span className="text-white/85 underline-offset-4 transition-colors duration-150 group-hover:text-white group-hover:underline">
                  {item.title}
                </span>
              </Link>
              <span aria-hidden="true" className="text-white/25">
                /
              </span>
            </span>
          ))}
        </WireMarquee>
      </div>
    </section>
  );
}
