import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { whyLyceum } from "@/content/kk/home";
import { site } from "@/content/kk/site";

/**
 * Aqbobek manifesto: mission + vision + values + why, merged into one
 * editorial storytelling section. Sticky statement left, numbered
 * narrative rows right, values as a typographic strip below.
 */
export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
                  Aqbobek манифесі
                </p>
                <h2
                  id="manifesto-title"
                  className="mt-5 font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.9rem]"
                >
                  {site.mission}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ink-600">
                  {site.vision}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 py-2.5 -my-2.5 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
                >
                  Лицей тарихы <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {whyLyceum.map((item, i) => (
              <Reveal as="li" key={item.title} delay={Math.min(i * 0.04, 0.12)}>
                <div className="group flex gap-6 border-t border-ink-900/10 py-8 transition-colors duration-200 last:border-b hover:bg-paper md:gap-10 md:px-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-medium tracking-wide text-steel-600 md:text-base"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-navy-900 md:text-[1.7rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-[15.5px] leading-relaxed text-ink-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal className="mt-16 border-t border-ink-900/10 pt-8 md:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
            Құндылықтар
          </p>
          <p className="mt-4 max-w-[60ch] font-display text-xl leading-relaxed font-medium text-navy-900 md:text-2xl">
            {site.values.join(" · ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
