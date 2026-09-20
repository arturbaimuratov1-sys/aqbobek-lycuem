import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { teachers } from "@/content/kk/teachers";

/**
 * People of Aqbobek: one large featured teacher + a horizontal rail.
 * Real staff data only; portraits fall back to typographic initials
 * (never fabricated people).
 */
const [featured, ...rest] = teachers.filter((t) =>
  ["baktygulov_a", "nazarov_d", "zhadyrassyn_y", "dauletbaeva_s"].includes(t.id),
);
const rail = rest.slice(0, 6);

export function PeopleRail() {
  if (!featured) return null;
  return (
    <section aria-labelledby="people-title" className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Ұжым"
            title={<span id="people-title">Aqbobek адамдары</span>}
            lead="Ұстаздар мен кураторлар — лицейдің ең үлкен байлығы."
          />
          <Link
            href="/teachers"
            className="inline-flex shrink-0 items-center gap-2 border border-navy-900/25 px-6 py-3 text-[14.5px] font-semibold text-navy-900 transition-[background-color,border-color,color,transform] duration-150 ease-out hover:border-navy-900 hover:bg-paper active:scale-[0.97]"
          >
            Барлық ұстаздар <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <article>
              <div className="overflow-hidden bg-steel-100">
                <Image
                  src={featured.photo}
                  alt={`${featured.name} портреті`}
                  width={720}
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <p className="mt-5 font-display text-2xl font-medium text-navy-900">
                {featured.name}
              </p>
              <p className="mt-1.5 text-[14px] font-medium text-steel-600">{featured.role}</p>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink-600">
                {featured.bio}
              </p>
            </article>
          </Reveal>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {rail.map((t, i) => (
                <Reveal as="li" key={t.id} delay={Math.min(i * 0.05, 0.2)}>
                  <Link
                    href={`/teachers#${t.id}`}
                    className="group flex items-center gap-5 border-t border-ink-900/10 py-5 last:border-b"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy-900 font-display text-base font-medium text-white"
                    >
                      {t.name.split(" ")[0]?.slice(0, 1)}
                      {t.name.split(" ")[1]?.slice(0, 1)}
                    </span>
                    <span>
                      <span className="block font-display text-[17px] font-medium text-navy-900 underline-offset-4 group-hover:underline">
                        {t.name}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-ink-500">{t.role}</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
