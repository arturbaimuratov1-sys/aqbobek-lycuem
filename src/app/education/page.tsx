import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { clubs, programmes, programmeSubjects } from "@/content/kk/programs";

export const metadata: Metadata = { title: "Білім беру" };

export default function EducationPage() {
  return (
    <>
      <PageHero
        kicker="Білім беру"
        title="Негізгі пәндерді тереңдетіп оқыту"
        lead="Бағдарламалар 7–11 сынып оқушыларына арналған және білімнің практикалық қолданылуына баса назар аударады."
      />

      {programmes.map((p, pi) => (
        <section key={p.id} aria-labelledby={`prog-${p.id}`} className={pi % 2 === 0 ? "bg-white" : "border-y border-line bg-mist"}>
          <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-14 md:px-8 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-600">{p.stage}</p>
              <h2 id={`prog-${p.id}`} className="mt-2 font-display text-3xl text-navy-900 md:text-4xl">
                {p.title}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="max-w-[68ch] text-[16px] leading-relaxed text-ink-600">{p.lead}</p>
              </Reveal>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-4 py-4 text-[15.5px] leading-relaxed text-ink-900">
                    <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-steel-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="clubs" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <SectionHeading
            title={<span id="clubs">Үйірмелер мен бірлестіктер</span>}
            lead="IT бағытында үш тегін үйірме, шығармашылық және волонтерлық қозғалыстар."
          />
          <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((c, i) => (
              <Reveal key={c.name} delay={Math.min(i * 0.05, 0.15)} className="bg-white p-8">
                <dt className="font-display text-xl text-navy-900">{c.name}</dt>
                <dd className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{c.description}</dd>
              </Reveal>
            ))}
            <Reveal className="bg-navy-900 p-8">
              <dt className="font-display text-xl text-white">Бағыттар</dt>
              <dd className="mt-2 text-[14.5px] leading-relaxed text-frost-100">
                {programmeSubjects.join(" · ")}
              </dd>
            </Reveal>
          </dl>
          <Reveal className="mt-8">
            <Link href="/admissions" className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline">
              Қабылдау шарттары <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
