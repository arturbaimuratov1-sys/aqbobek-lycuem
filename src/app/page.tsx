import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { DirectorPortrait } from "@/components/DirectorPortrait";
import { HomeHero } from "@/components/HomeHero";
import { NewsCard } from "@/components/NewsCard";
import { NewsTicker } from "@/components/NewsTicker";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeacherCard } from "@/components/TeacherCard";
import { director } from "@/content/kk/director";
import { campusFacilities } from "@/content/kk/campus";
import { clubs, programmes } from "@/content/kk/programs";
import { homeNews } from "@/lib/home-news";
import { stats, whyLyceum } from "@/content/kk/home";
import { featuredTeachers } from "@/content/kk/teachers";
import { site } from "@/content/kk/site";

export default function Home() {
  return (
    <>
      <HomeHero
        image="/images/hero/aqbobek-students-hero.png"
        imageAlt="«Ақбөбек» лицейінің түлектері — AL26"
      />

      {/* Mission / Vision / Values — light editorial 01/02/03 */}
      <section aria-label="Миссия, көзқарас, құндылықтар" className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-3 md:px-10 lg:py-24">
          {[
            { n: "01", k: "Миссия", v: site.mission },
            { n: "02", k: "Көзқарас", v: site.vision },
            { n: "03", k: "Құндылықтар", v: site.values.join(" · ") },
          ].map((item, i) => (
            <Reveal key={item.n} delay={Math.min(i * 0.08, 0.16)}>
              <p aria-hidden="true" className="font-display text-6xl font-semibold text-steel-100 md:text-7xl">
                {item.n}
              </p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-600">{item.k}</p>
              <p className="mt-2 font-display text-xl leading-snug font-medium text-navy-900">{item.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Aqbobek — mist band, sticky heading + numbered rows */}
      <section aria-labelledby="why-title" className="bg-mist">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-10 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                title={<span id="why-title">Не үшін «Ақбөбек» лицейі?</span>}
                lead="Заманауи білім беру талаптарына сай, оқушы тұлғасының жан-жақты дамуына жағдай жасайтын білім ордасы."
              />
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
              >
                Лицей туралы толығырақ <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {whyLyceum.map((item, i) => (
              <Reveal as="li" key={item.title} delay={Math.min(i * 0.05, 0.15)} className="group flex gap-6 border-t border-ink-900/10 py-7 transition-colors duration-200 last:border-b hover:bg-paper">
                <span aria-hidden="true" className="font-display text-lg font-medium text-steel-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[22px] font-medium text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 max-w-[60ch] text-[15px] leading-relaxed text-ink-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Education — navy statement band, giant grades */}
      <section aria-labelledby="edu-title" className="bg-navy-900">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <SectionHeading
            dark
            title={<span id="edu-title">7–11 сыныптарға арналған тереңдетілген білім</span>}
            lead="Негізгі пәндерді тереңдетіп оқытуға және білімнің практикалық қолданылуына баса назар аударамыз."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
            {programmes.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08} className="border-t border-line-dark pt-8">
                <p aria-hidden="true" className="font-display text-6xl font-semibold text-white/15 md:text-7xl">
                  {p.stage}
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium text-white">{p.title}</h3>
                <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-frost-100">{p.lead}</p>
                <ul className="mt-6 space-y-3">
                  {p.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14.5px] leading-relaxed text-frost-100">
                      <span aria-hidden="true" className="mt-[9px] h-1 w-4 shrink-0 bg-steel-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line-dark pt-8">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-frost-500">Үйірмелер:</span>
            {clubs.map((c) => (
              <span key={c.name} className="text-[15px] font-medium text-white">{c.name}</span>
            ))}
            <Link href="/education" className="text-[15px] font-semibold text-white underline-offset-4 hover:underline">
              Барлық бағдарламалар →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Director */}
      <section aria-labelledby="director-title" className="bg-white">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <Reveal className="lg:col-span-4">
            <DirectorPortrait portraits={director.portraits} alt={director.portraitAlt} />
            <p className="mt-5">
              <span aria-hidden="true" className="block h-0.5 w-12 bg-gold-500" />
              <span className="mt-3 block font-display text-lg text-navy-900">{director.name}</span>
              <span className="mt-0.5 block text-[13.5px] text-ink-500">{director.title}</span>
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Лицей басшылығы"
              title={<span id="director-title">Директордың сәлемі</span>}
            />
            <Reveal delay={0.08}>
              <p className="mt-6 font-display text-[22px] leading-relaxed text-navy-900 md:text-2xl">
                {director.intro}
              </p>
            </Reveal>
            {director.message.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="mt-5 max-w-[68ch] text-[16px] leading-relaxed text-ink-600">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal delay={0.15}>
              <p className="mt-7 font-display text-lg text-navy-900 italic">Ізгі ниетпен, {director.name}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <NewsTicker items={homeNews} />

      {/* Stats */}
      <section aria-label="Лицей сандарда" className="bg-white">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px px-5 py-14 md:px-8 lg:grid-cols-4 lg:py-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="border-l border-line pl-6 first:border-l-0 first:pl-0 max-lg:[&:nth-child(3)]:border-l-0 max-lg:[&:nth-child(3)]:pl-0">
              <dd className="font-display text-4xl text-navy-900 md:text-5xl">{s.value}</dd>
              <dt className="mt-2 text-[14px] text-ink-500">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Teachers */}
      <section aria-labelledby="teachers-title" className="border-t border-line bg-parchment">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title={<span id="teachers-title">Ұстаздар мен кураторлар</span>}
              lead="Өз ісіне адал, тәжірибелі ұстаздар — әр мұғалім оқушының тұлғалық дамуына үлес қосады."
            />
            <Link
              href="/teachers"
              className="inline-flex shrink-0 items-center gap-2 border border-navy-900/25 px-6 py-3 text-[14.5px] font-semibold text-navy-900 transition-all duration-150 ease-out hover:border-navy-900 hover:bg-white active:scale-[0.97]"
            >
              Барлық ұстаздар <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {featuredTeachers.map((t, i) => (
              <Reveal key={t.id} delay={Math.min(i * 0.06, 0.18)}>
                <TeacherCard teacher={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campus teaser */}
      <section aria-labelledby="campus-title" className="bg-white">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <Reveal className="lg:col-span-6">
            <figure>
              <Image
                src="/images/hero/background2.jpg"
                alt="Лицей кампусы"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="mt-3 text-[13px] text-ink-500">
                Заманауи кабинеттер, компьютерлік сыныптар, спорт инфрақұрылымы
              </figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-6">
            <SectionHeading
              title={<span id="campus-title">Оқу мен өмірге қолайлы кампус</span>}
              lead="Заманауи кампус студенттердің оқуы мен өмір сүруіне барлық жағдай жасайды."
            />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {campusFacilities.slice(0, 4).map((f) => (
                <li key={f.title} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-display text-lg text-navy-900">{f.title}</span>
                  <span className="text-right text-[14px] text-ink-500">{f.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/campus"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
            >
              Кампус туралы толығырақ <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section aria-labelledby="news-title" className="border-t border-line bg-parchment">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title={<span id="news-title">Соңғы жаңалықтар</span>} />
            <Link
              href="/news"
              className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
            >
              Барлық жаңалықтар <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeNews.slice(0, 3).map((item, i) => (
              <Reveal key={item.slug} delay={Math.min(i * 0.07, 0.15)} className="h-full">
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
