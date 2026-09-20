import type { Metadata } from "next";
import { FaqAccordion, type Faq } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { admissionSteps, entranceExams, tuition } from "@/content/kk/admissions";
import { site } from "@/content/kk/site";

export const metadata: Metadata = { title: "Қабылдау" };

/** FAQ answers below restate standing facts from admissions/campus content. */
const faqs: Faq[] = [
  {
    q: "Оқу ақысына не кіреді?",
    a: "Негізгі бағдарлама бойынша оқыту, қосымша сабақтар (ағылшын, информатика, математика, екінші шет тілі және т.б.) және күнділік төрт мезгіл тамақтану кіреді.",
  },
  {
    q: "Гранттар мен жеңілдіктер бар ма?",
    a: "Иә. Дарынды оқушыларға арналған гранттар мен жеңілдіктер қарастырылған — шарттарын қабылдау бөлімінен нақтылаңыз.",
  },
  {
    q: "Қабылдау емтиханы қандай пәндерден тұрады?",
    a: "Математика (90 минут, 30 тапсырма), ағылшын тілі (60 минут, 40 тапсырма), қазақ тілі (90 минут, 25 тапсырма).",
  },
  {
    q: "Жатақханада тұру жағдайы қандай?",
    a: "100 орындық жатақхана: 2–4 адамға арналған жайлы бөлмелер, кешкі ас және екінші кешкі ас, тәрбиешілер бақылауы.",
  },
  {
    q: "Мектеп автобусы бар ма?",
    a: "Жатақханада тұрмайтын оқушылар үшін қаланың негізгі аудандарына қатынайтын мектеп автобусы қарастырылған (ақылы, орын саны шектеулі).",
  },
];

/**
 * Admissions: navy statement hero, vertical timeline, pricing emphasis,
 * exam structure, evergreen FAQ. No expired dates.
 */
export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        tone="navy"
        kicker="Қабылдау"
        title="Лицейге қабылдану"
        lead="Төрт кезең, ашық шарттар, дарынды оқушыларға гранттар. Өтініш қалдырыңыз — қабылдау бөлімі хабарласады."
      />

      <section aria-labelledby="steps" className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
                  Үдеріс
                </p>
                <h2 id="steps" className="mt-4 font-display text-3xl leading-[1.12] font-medium text-navy-900 md:text-[2.6rem]">
                  Төрт қадам
                </h2>
              </Reveal>
            </div>
          </div>
          <ol className="relative lg:col-span-8">
            <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-ink-900/15" />
            {admissionSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={Math.min(i * 0.05, 0.15)} className="relative pl-12 pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 left-0 flex h-[15px] w-[15px] items-center justify-center border-2 border-navy-900 bg-paper"
                >
                  <span className="h-[5px] w-[5px] bg-steel-600" />
                </span>
                <p aria-hidden="true" className="font-display text-sm font-medium text-steel-600">
                  0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium text-navy-900">{step.title}</h3>
                <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-ink-600">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="tuition" className="border-y border-line bg-mist">
        <div className="mx-auto grid max-w-[1440px] items-end gap-10 px-5 py-16 md:px-10 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
                Оқу ақысы
              </p>
              <p className="mt-4 font-display leading-none font-semibold text-navy-900">
                <span id="tuition" className="block text-6xl md:text-8xl">{tuition.monthly}</span>
                <span className="mt-3 block text-[15px] font-normal text-ink-500">{tuition.period}</span>
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
                {tuition.includes.map((item) => (
                  <li key={item} className="flex gap-3 py-3.5 text-[15px] text-ink-900">
                    <span aria-hidden="true" className="mt-[10px] h-1 w-4 shrink-0 bg-steel-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 bg-steel-100 px-5 py-4 text-[15px] leading-relaxed text-ink-900">
                {tuition.grantsNote}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="exams" className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
              Емтихан құрылымы
            </p>
            <h2 id="exams" className="mt-4 max-w-[20ch] font-display text-3xl leading-[1.12] font-medium text-balance text-navy-900 md:text-[2.6rem]">
              Үш пән, ашық формат
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3">
            {entranceExams.map((exam, i) => (
              <Reveal
                key={exam.subject}
                delay={Math.min(i * 0.06, 0.12)}
                className="border-t-2 border-navy-900 px-2 py-7 first:border-t-2 md:px-6"
              >
                <h3 className="font-display text-2xl font-medium text-navy-900">{exam.subject}</h3>
                <p className="mt-2 font-display text-lg text-steel-600">{exam.format}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.contacts.examForm}
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-navy-900 px-8 py-4 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
            >
              Өтініш қалдыру
            </a>
            <a
              href={site.contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-navy-900/25 px-8 py-4 text-[15px] font-semibold text-navy-900 transition-[border-color,background-color,transform] duration-150 ease-out hover:border-navy-900 hover:bg-mist active:scale-[0.97]"
            >
              Қабылдау бөлімімен байланысу
            </a>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="faq" className="border-t border-line bg-mist">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-10 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-600">
                  Сұрақ-жауап
                </p>
                <h2 id="faq" className="mt-4 font-display text-3xl leading-[1.12] font-medium text-navy-900 md:text-[2.6rem]">
                  Жиі қойылады
                </h2>
              </Reveal>
            </div>
          </div>
          <Reveal className="lg:col-span-8" delay={0.08}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
