import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/kk/site";
import { whyLyceum } from "@/content/kk/home";

export const metadata: Metadata = { title: "Лицей туралы" };

/**
 * About as institutional story: navy opening statement, mission/vision
 * woven into narrative, values as editorial typography, story chapters.
 */
export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500">
              Лицей туралы
            </p>
            <h1 className="mt-5 max-w-[20ch] font-display text-4xl leading-[1.06] font-medium text-balance text-white md:text-6xl">
              Батыс өңірінде теңдесі жоқ IT лицей-интернат
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[64ch] text-[16.5px] leading-relaxed text-frost-100">
              «Ақбөбек» лицейі — заманауи білім беру талаптарына сай, оқушы
              тұлғасының жан-жақты дамуына жағдай жасайтын білім ордасы. Біз
              сапалы білім берумен қатар, әр баланың дарыны мен қабілетін ашуға
              бағытталған жеке тәсілді ұстанамыз.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Миссия және көзқарас" className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <p aria-hidden="true" className="font-display text-7xl font-semibold text-steel-100">
              I
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-navy-900">Миссия</h2>
            <p className="mt-4 max-w-[48ch] font-display text-[22px] leading-relaxed text-navy-900">
              {site.mission}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p aria-hidden="true" className="font-display text-7xl font-semibold text-steel-100">
              II
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-navy-900">Көзқарас</h2>
            <p className="mt-4 max-w-[48ch] font-display text-[22px] leading-relaxed text-navy-900">
              {site.vision}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values" className="border-y border-line bg-mist">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
              Құндылықтар
            </p>
            <h2 id="values" className="sr-only">
              Лицей құндылықтары
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {site.values.map((v, i) => (
              <Reveal as="li" key={v} delay={Math.min(i * 0.04, 0.2)}>
                <p className="flex items-baseline gap-4 border-t border-ink-900/10 py-5 font-display text-2xl font-medium text-navy-900">
                  <span aria-hidden="true" className="text-sm text-steel-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {v}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="about-why" className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <Reveal>
            <h2 id="about-why" className="max-w-[18ch] font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.9rem]">
              Неге ата-аналар «Ақбөбекті» таңдайды
            </h2>
          </Reveal>
          <div className="mt-10">
            {whyLyceum.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.04, 0.15)}>
                <div className="grid gap-2 border-t border-ink-900/10 py-8 last:border-b md:grid-cols-12 md:gap-6">
                  <p aria-hidden="true" className="font-display text-lg font-medium text-steel-600 md:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl font-medium text-navy-900 md:col-span-4">
                    {item.title}
                  </h3>
                  <p className="max-w-[58ch] text-[15.5px] leading-relaxed text-ink-600 md:col-span-6">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/admissions"
              className="inline-flex bg-navy-900 px-8 py-4 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
            >
              Қабылдау шарттары
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
