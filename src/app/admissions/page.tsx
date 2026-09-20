import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { admissionSteps, entranceExams, tuition } from "@/content/kk/admissions";
import { site } from "@/content/kk/site";

export const metadata: Metadata = { title: "Қабылдау" };

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Қабылдау"
        title="Лицейге қабылдану"
        lead="Қабылдау төрт кезең арқылы жүзеге асырылады. Дарынды оқушыларға гранттар мен жеңілдіктер қарастырылған."
      />

      <section aria-labelledby="steps" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <SectionHeading title={<span id="steps">Қабылдау кезеңдері</span>} />
          <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 0.06, 0.18)} className="bg-white p-8">
                <p aria-hidden="true" className="font-display text-4xl text-steel-600">{i + 1}</p>
                <h3 className="mt-3 font-display text-xl text-navy-900">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="tuition" className="border-y border-line bg-mist">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <SectionHeading title={<span id="tuition">Оқу ақысы</span>} />
            <Reveal className="mt-6">
              <p className="font-display text-5xl text-navy-900">{tuition.monthly}</p>
              <p className="mt-1 text-[14px] text-ink-500">{tuition.period}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="divide-y divide-line border-y border-line">
                {tuition.includes.map((item) => (
                  <li key={item} className="flex gap-4 py-4 text-[15.5px] text-ink-900">
                    <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-gold-500" />
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

      <section aria-labelledby="exams" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <SectionHeading
            title={<span id="exams">Қабылдау емтиханы</span>}
            lead="Өткен жылдардағы емтихан тапсырмаларымен танысып, мұқият дайындалуға кеңес береміз."
          />
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {entranceExams.map((exam, i) => (
              <Reveal key={exam.subject} delay={Math.min(i * 0.06, 0.12)} className="bg-white p-8">
                <h3 className="font-display text-2xl text-navy-900">{exam.subject}</h3>
                <p className="mt-2 text-[15px] text-ink-600">{exam.format}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.contacts.examForm}
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-navy-900 px-7 py-3.5 text-[15px] font-semibold text-white transition-[background-color,border-color,color,transform] duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
            >
              Емтиханға тіркелу
            </a>
            <a
              href={site.contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-navy-900/25 px-7 py-3.5 text-[15px] font-semibold text-navy-900 transition-[background-color,border-color,color,transform] duration-150 ease-out hover:border-navy-900 hover:bg-mist active:scale-[0.97]"
            >
              WhatsApp арқылы жазу
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
