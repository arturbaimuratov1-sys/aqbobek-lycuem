import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { campusFacilities, daySchedule, mealsNote, transportNote } from "@/content/kk/campus";

export const metadata: Metadata = { title: "Кампус" };

/**
 * Campus: oversized statement hero, facility mosaic, meals/transport
 * duo, and the day schedule as a proper vertical timeline.
 */
export default function CampusPage() {
  return (
    <>
      <PageHero
        tone="navy"
        kicker="Кампус"
        title="Оқу мен өмірге арналған кеңістік"
        lead="Заманауи кампус студенттердің оқуы мен өмір сүруіне қолайлы жағдай жасайды: кабинеттер, зертханалар, жатақхана, асхана, спорт, кітапхана."
      />

      <section aria-labelledby="facilities" className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <Reveal>
            <h2 id="facilities" className="max-w-[18ch] font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.6rem]">
              Кампус және жатақхана
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3">
            {campusFacilities.map((f, i) => (
              <Reveal
                key={f.title}
                delay={Math.min(i * 0.05, 0.2)}
                className="border-t border-ink-900/10 px-2 py-8 first:border-t-2 first:border-navy-900 sm:px-6 lg:[&:nth-child(3n+1)]:border-l-0"
              >
                <p aria-hidden="true" className="font-display text-sm font-medium text-steel-600">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-[22px] font-medium text-navy-900">{f.title}</h3>
                <p className="mt-2 max-w-[44ch] text-[14.5px] leading-relaxed text-ink-600">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Тамақтану және көлік" className="border-y border-line-dark bg-navy-900">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500">
              01 — Тамақтану
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-white">Күніне төрт мезгіл</h2>
            <p className="mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-frost-100">{mealsNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500">
              02 — Көлік
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-white">Мектеп автобусы</h2>
            <p className="mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-frost-100">{transportNote}</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="schedule" className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
                  Күн тәртібі
                </p>
                <h2 id="schedule" className="mt-4 font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.6rem]">
                  Бір күн лицейде
                </h2>
                <p className="mt-4 max-w-[42ch] text-[15.5px] leading-relaxed text-ink-600">
                  Сабақ, тамақтану, үйірмелер және демалыс теңгерімі — таңғы 7-ден түнгі 10-ға дейін.
                </p>
              </Reveal>
            </div>
          </div>
          <ol className="relative lg:col-span-7 lg:col-start-6">
            <span aria-hidden="true" className="absolute top-3 bottom-3 left-[92px] w-px bg-ink-900/15 sm:left-[100px]" />
            {daySchedule.map((item, i) => (
              <Reveal as="li" key={`${item.time}-${item.label}`} delay={Math.min(i * 0.02, 0.2)} className="relative flex items-baseline gap-5 py-3.5">
                <span className="w-[68px] shrink-0 text-right font-display text-[16px] font-medium tabular-nums text-navy-900 sm:w-[76px] sm:text-[17px]">
                  {item.time}
                </span>
                <span aria-hidden="true" className="relative z-10 h-2 w-2 shrink-0 self-center bg-steel-600" />
                <span className="text-[15px] text-ink-900">{item.label}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 py-12 md:px-10">
          <Reveal>
            <p className="font-display text-2xl font-medium text-navy-900">
              Кампусқа саяхат жасағыңыз келе ме?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/contact"
              className="inline-flex bg-navy-900 px-8 py-4 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
            >
              Байланысу
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
