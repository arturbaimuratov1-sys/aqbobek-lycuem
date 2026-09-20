import { Reveal } from "@/components/Reveal";
import { admissionSteps, tuition } from "@/content/kk/admissions";
import { site } from "@/content/kk/site";

/**
 * Admissions closing moment: large navy statement, real process facts,
 * evergreen wording (no expired dates), one primary + one contact CTA.
 */
export function AdmissionsClimax() {
  return (
    <section aria-labelledby="admissions-title" className="bg-navy-900">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500">
                Қабылдау ашық
              </p>
              <h2
                id="admissions-title"
                className="mt-5 max-w-[14ch] font-display text-4xl leading-[1.06] font-medium text-balance text-white md:text-6xl"
              >
                Болашақ осында басталады
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[54ch] text-[16px] leading-relaxed text-frost-100">
                Оқу ақысы — {tuition.monthly} {tuition.period}: негізгі бағдарлама,
                қосымша сабақтар және күніне төрт мезгіл тамақтану. Дарынды
                оқушыларға гранттар мен жеңілдіктер қарастырылған.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.contacts.examForm}
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-white px-8 py-4 text-[15px] font-semibold text-abyss transition-[background-color,color,transform] duration-150 ease-out hover:bg-frost-100 active:scale-[0.97]"
              >
                Өтініш қалдыру
              </a>
              <a
                href={site.contacts.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-white/25 px-8 py-4 text-[15px] font-semibold text-white transition-[border-color,color,transform] duration-150 ease-out hover:border-white active:scale-[0.97]"
              >
                WhatsApp арқылы жазу
              </a>
            </Reveal>
          </div>
          <ol className="lg:col-span-5">
            {admissionSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={Math.min(i * 0.06, 0.18)}>
                <div className="flex gap-5 border-t border-line-dark py-6 last:border-b">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-medium text-frost-500"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-white">{step.title}</h3>
                    <p className="mt-1 text-[14.5px] text-frost-100">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
