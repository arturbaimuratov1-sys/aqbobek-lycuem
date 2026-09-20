import Link from "next/link";
import { AdmissionsClimax } from "@/components/AdmissionsClimax";
import { CampusInterlude } from "@/components/CampusInterlude";
import { DirectorProfile } from "@/components/DirectorProfile";
import { EducationTabs } from "@/components/EducationTabs";
import { HomeHero } from "@/components/HomeHero";
import { Manifesto } from "@/components/Manifesto";
import { NewsTicker } from "@/components/NewsTicker";
import { PeopleRail } from "@/components/PeopleRail";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { notices } from "@/content/kk/news";

/**
 * Homepage narrative (v2):
 * hero → proof rail → manifesto → education → campus → director →
 * people → wire → magazine news → admissions.
 */
export default function Home() {
  const [major, ...rest] = notices.slice(0, 3);

  return (
    <>
      <HomeHero
        image="/images/hero/aqbobek-students-hero-clean.png"
        imageAlt="«Ақбөбек» лицейінің түлектері"
      />

      {/* 04 — Manifesto */}
      <Manifesto />

      {/* 05 — Education pathways */}
      <EducationTabs />

      {/* 06 — Campus interlude */}
      <CampusInterlude />

      {/* 07 — Director */}
      <DirectorProfile />

      {/* 08 — People */}
      <PeopleRail />

      {/* 09a — Wire */}
      <NewsTicker />

      {/* 09b — Magazine news (verified notices, dateless by design) */}
      <section aria-labelledby="news-title" className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Хабарландыру тақтасы"
                  title={<span id="news-title">Жаңалықтар</span>}
                  lead="Лицейдің ресми хабарландырулары — қабылдау, гранттар, үйірмелер, емтихандар."
                />
                <Link
                  href="/news"
                  className="mt-8 inline-flex items-center gap-2 py-2.5 -my-2.5 text-[15px] font-semibold text-navy-900 underline-offset-4 hover:underline"
                >
                  Барлық хабарландырулар <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              {major && (
                <Reveal>
                  <article className="border-t-2 border-navy-900 pt-8">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                      {major.kicker}
                    </p>
                    <h3 className="mt-4 max-w-[22ch] font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.6rem]">
                      <Link href={`/news/${major.slug}`} className="underline-offset-4 hover:underline">
                        {major.title}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-ink-600">
                      {major.excerpt}
                    </p>
                  </article>
                </Reveal>
              )}
              <div className="mt-4 grid gap-x-10 md:grid-cols-2">
                {rest.map((item, i) => (
                  <Reveal key={item.slug} delay={Math.min(i * 0.07, 0.15)}>
                    <article className="group border-t border-ink-900/10 py-7">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                        {item.kicker}
                      </p>
                      <h3 className="mt-2.5 font-display text-[22px] leading-snug font-medium text-navy-900">
                        <Link href={`/news/${item.slug}`} className="underline-offset-4 group-hover:underline">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{item.excerpt}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — Admissions climax */}
      <AdmissionsClimax />
    </>
  );
}
