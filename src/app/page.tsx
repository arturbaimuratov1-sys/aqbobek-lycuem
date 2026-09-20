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
import { formatDate } from "@/content/kk/news";
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
                className="mt-6 inline-flex items-center gap-2 py-2.5 -my-2.5 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
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
                <p aria-hidden="true" className="font-display text-[2.6rem] leading-none font-semibold text-white/15 md:text-7xl">
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
              <span aria-hidden="true" className="block h-0.5 w-12 bg-steel-600" />
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
      <section aria-labelledby="teachers-title" className="border-t border-line bg-mist">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title={<span id="teachers-title">Ұстаздар мен кураторлар</span>}
              lead="Өз ісіне адал, тәжірибелі ұстаздар — әр мұғалім оқушының тұлғалық дамуына үлес қосады."
            />
            <Link
              href="/teachers"
              className="inline-flex shrink-0 items-center gap-2 border border-navy-900/25 px-6 py-3 text-[14.5px] font-semibold text-navy-900 transition-[background-color,border-color,color,transform] duration-150 ease-out hover:border-navy-900 hover:bg-white active:scale-[0.97]"
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

      {/* Campus — typographic facility index (photo slots reserved for official imagery) */}
      <section aria-labelledby="campus-title" className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  title={<span id="campus-title">Оқу мен өмірге қолайлы кампус</span>}
                  lead="Заманауи кампус студенттердің оқуы мен өмір сүруіне барлық жағдай жасайды."
                />
                <Link
                  href="/campus"
                  className="mt-6 inline-flex items-center gap-2 py-2.5 -my-2.5 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
                >
                  Кампус туралы толығырақ <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <dl className="grid sm:grid-cols-2 lg:col-span-8">
              {campusFacilities.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={Math.min(i * 0.05, 0.15)}
                  className="border-t border-ink-900/10 px-2 py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-6 sm:[&:nth-child(even)]:pl-6 [&:last-child]:border-b sm:[&:nth-last-child(2)]:border-b"
                >
                  <dt className="font-display text-[22px] font-medium text-navy-900">{f.title}</dt>
                  <dd className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{f.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Latest news — 1 major + 2 secondary */}
      <section aria-labelledby="news-title" className="border-t border-line bg-mist">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title={<span id="news-title">Соңғы жаңалықтар</span>} />
            <Link
              href="/news"
              className="inline-flex shrink-0 items-center gap-2 py-2.5 -my-2.5 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
            >
              Барлық жаңалықтар <span aria-hidden="true">→</span>
            </Link>
          </div>
          {(() => {
            const [major, ...rest] = homeNews.slice(0, 3);
            if (!major) return null;
            return (
              <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
                <Reveal>
                  <article className="group flex flex-col border border-line bg-paper">
                    {major.image && (
                      <div className="overflow-hidden">
                        <Image
                          src={major.image}
                          alt=""
                          width={1000}
                          height={560}
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-7 md:p-9">
                      <p className="text-[12px] font-medium tracking-wide text-ink-500">
                        <span className="text-steel-600">{major.category}</span>
                        <span aria-hidden="true"> · </span>
                        <time dateTime={major.date}>{formatDate(major.date)}</time>
                      </p>
                      <h3 className="mt-3 font-display text-2xl leading-snug font-medium text-balance text-navy-900 md:text-[1.7rem]">
                        <Link href={`/news/${major.slug}`} className="underline-offset-4 group-hover:underline">
                          {major.title}
                        </Link>
                      </h3>
                      <p className="mt-3 max-w-[62ch] flex-1 text-[15px] leading-relaxed text-ink-600">{major.excerpt}</p>
                    </div>
                  </article>
                </Reveal>
                <div className="grid gap-6">
                  {rest.map((item, i) => (
                    <Reveal key={item.slug} delay={Math.min(i * 0.07, 0.15)} className="h-full">
                      <NewsCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
