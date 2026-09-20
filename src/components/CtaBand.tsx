import Link from "next/link";
import { site } from "@/content/kk/site";
import { Reveal } from "./Reveal";

/** Navy admissions call-to-action band used above the footer. */
export function CtaBand() {
  return (
    <section className="bg-white px-5 pb-20 md:px-10" aria-labelledby="cta-title">
      <Reveal className="mx-auto max-w-[1440px] bg-abyss px-6 py-12 md:px-14 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-frost-500">
              2026–2027 оқу жылы
            </p>
            <h2 id="cta-title" className="mt-3 font-display text-3xl leading-tight font-medium text-balance text-white md:text-4xl">
              Грант негізінде оқу мүмкіндігін жіберіп алмаңыз
            </h2>
            <p className="mt-3 max-w-[60ch] text-[15.5px] leading-relaxed text-frost-100">
              Қабылдау емтиханы — 4 сәуір. Қатысу үшін өтініш формасын толтырыңыз немесе WhatsApp арқылы жазылыңыз.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href={site.contacts.examForm}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full justify-center bg-white px-7 py-3.5 text-[15px] font-semibold text-abyss transition-[background-color,border-color,color,transform] duration-150 ease-out hover:bg-frost-100 active:scale-[0.97] lg:w-auto"
            >
              Өтініш қалдыру
            </a>
            <Link
              href="/admissions"
              className="inline-flex w-full justify-center border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition-[background-color,border-color,color,transform] duration-150 ease-out hover:border-white active:scale-[0.97] lg:w-auto"
            >
              Қабылдау шарттары
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
