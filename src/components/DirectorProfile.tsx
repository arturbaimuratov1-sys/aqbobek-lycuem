import { DirectorPortrait } from "@/components/DirectorPortrait";
import { Reveal } from "@/components/Reveal";
import { director } from "@/content/kk/director";

/**
 * Editorial leadership profile: offset portrait + long-form message.
 * Asymmetric composition, not a two-column card.
 */
export function DirectorProfile() {
  return (
    <section aria-labelledby="director-title" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5 lg:mt-20">
            <DirectorPortrait portraits={director.portraits} alt={director.portraitAlt} />
            <p className="mt-6 flex items-baseline gap-4">
              <span aria-hidden="true" className="block h-0.5 w-12 shrink-0 bg-steel-600" />
              <span>
                <span className="block font-display text-lg font-medium text-navy-900">
                  {director.name}
                </span>
                <span className="mt-1 block text-[13.5px] text-ink-500">{director.title}</span>
              </span>
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
                Басшылық
              </p>
              <h2
                id="director-title"
                className="mt-5 font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.9rem]"
              >
                Директордың сәлемі
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <span aria-hidden="true" className="mt-8 block h-0.5 w-12 bg-steel-600" />
              <p className="mt-5 font-display text-[22px] leading-relaxed font-medium text-navy-900 md:text-[1.65rem]">
                {director.intro}
              </p>
            </Reveal>
            {director.message.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink-600">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.15}>
              <p className="mt-8 font-display text-lg text-navy-900 italic">
                Ізгі ниетпен, {director.name}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
