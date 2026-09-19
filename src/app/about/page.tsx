import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/kk/site";
import { whyLyceum } from "@/content/kk/home";

export const metadata: Metadata = { title: "Лицей туралы" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Aqbobek Lyceum"
        title="Заманауи талаптарға сай білім ордасы"
        lead="«Ақбөбек» лицейі — оқушы тұлғасының жан-жақты дамуына жағдай жасайтын, сапалы білім берумен қатар әр баланың дарыны мен қабілетін ашуға бағытталған жеке тәсілді ұстанатын мектеп."
      />

      <section aria-label="Миссия және құндылықтар" className="bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <SectionHeading title="Миссия, көзқарас, құндылықтар" />
            <dl className="mt-8 space-y-6">
              <Reveal className="border-t-2 border-navy-900 pt-4">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-500">Миссия</dt>
                <dd className="mt-1 font-display text-[22px] leading-snug text-navy-900">{site.mission}</dd>
              </Reveal>
              <Reveal className="border-t-2 border-navy-900 pt-4">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-500">Көзқарас</dt>
                <dd className="mt-1 font-display text-[22px] leading-snug text-navy-900">{site.vision}</dd>
              </Reveal>
            </dl>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="border border-line bg-parchment p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-500">Құндылықтар</p>
              <ul className="mt-4 space-y-3">
                {site.values.map((v) => (
                  <li key={v} className="flex items-center gap-3 font-display text-lg text-navy-900">
                    <span aria-hidden="true" className="h-1 w-1 bg-gold-500" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="about-why" className="border-t border-line bg-parchment">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <SectionHeading
            title={<span id="about-why">Лицейдің басты артықшылықтары</span>}
            lead="«Ақбөбек» лицейі — балаңыздың табысты болашағының кепілі."
          />
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {whyLyceum.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.05, 0.15)} className="bg-white p-8">
                <p aria-hidden="true" className="font-display text-sm text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl text-navy-900">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{item.text}</p>
              </Reveal>
            ))}
            <Reveal className="flex flex-col justify-between bg-navy-900 p-8">
              <div>
                <h3 className="font-display text-xl text-white">Бізбен бірге білім әлеміне сенімді қадам жасаңыз</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-navy-100">
                  Қабылдау шарттарымен танысып, өтініш қалдырыңыз.
                </p>
              </div>
              <Link
                href="/admissions"
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-gold-500 underline-offset-4 hover:underline"
              >
                Қабылдау <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
