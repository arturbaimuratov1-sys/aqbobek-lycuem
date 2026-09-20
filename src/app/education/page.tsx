import type { Metadata } from "next";
import { EducationTabs } from "@/components/EducationTabs";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { programmeSubjects } from "@/content/kk/programs";

export const metadata: Metadata = { title: "Білім беру" };

/**
 * Education: statement hero + shared pathway tabs + subject architecture.
 */
export default function EducationPage() {
  return (
    <>
      <PageHero
        tone="navy"
        kicker="Білім беру"
        title="Тереңдетілген білім — 7-сыныптан 11-сыныпқа дейін"
        lead="Бағдарламалар білімнің практикалық қолданылуына баса назар аудара отырып, негізгі пәндерді тереңдетіп оқытуға бағытталған."
      />
      <EducationTabs />
      <section aria-labelledby="subjects" className="border-t border-line bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
              Пән архитектурасы
            </p>
            <h2 id="subjects" className="mt-4 max-w-[20ch] font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.6rem]">
              Басым бағыттар
            </h2>
          </Reveal>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3">
            {programmeSubjects.map((s, i) => (
              <Reveal as="li" key={s} delay={Math.min(i * 0.04, 0.2)}>
                <p className="flex items-baseline gap-4 border-t border-ink-900/10 py-5 font-display text-xl font-medium text-navy-900 last:border-b">
                  <span aria-hidden="true" className="text-sm text-steel-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
