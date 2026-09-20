import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { campusFacilities, daySchedule, mealsNote, transportNote } from "@/content/kk/campus";

export const metadata: Metadata = { title: "Кампус" };

export default function CampusPage() {
  return (
    <>
      <PageHero
        kicker="Кампус"
        title="Кампус және өмір сүру жағдайлары"
        lead="Заманауи кампус студенттердің оқуы мен өмір сүруіне қолайлы жағдай жасайды."
      />

      <section aria-labelledby="facilities" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Image
                src="/images/hero/background3.jpg"
                alt="Лицей кампусы"
                width={1000}
                height={750}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <div className="lg:col-span-7">
              <SectionHeading title={<span id="facilities">Кампус және жатақхана</span>} />
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {campusFacilities.map((f) => (
                  <div key={f.title} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-4">
                    <dt className="font-display text-lg text-navy-900">{f.title}</dt>
                    <dd className="text-[14.5px] leading-relaxed text-ink-600">{f.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Тамақтану және көлік" className="border-y border-line bg-mist">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl text-navy-900">Тамақтану</h2>
            <p className="mt-3 max-w-[60ch] text-[15.5px] leading-relaxed text-ink-600">{mealsNote}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl text-navy-900">Көлік</h2>
            <p className="mt-3 max-w-[60ch] text-[15.5px] leading-relaxed text-ink-600">{transportNote}</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="schedule" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <SectionHeading
            title={<span id="schedule">Күн тәртібінің үлгісі</span>}
            lead="Лицей-интернаттың күнделікті тәртібі — сабақ, тамақтану, үйірмелер және демалыс теңгерімі."
          />
          <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
            {daySchedule.map((item) => (
              <li
                key={`${item.time}-${item.label}`}
                className="flex items-baseline gap-5 border-t border-line py-3.5 last:border-b md:[&:nth-last-child(2)]:border-b"
              >
                <span className="w-14 shrink-0 font-display text-[17px] tabular-nums text-steel-600">{item.time}</span>
                <span className="text-[15px] text-ink-900">{item.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
