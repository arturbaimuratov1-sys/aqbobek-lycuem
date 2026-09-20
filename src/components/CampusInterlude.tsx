import Link from "next/link";
import { Reveal } from "@/components/Reveal";

/**
 * Campus story interlude: a full-bleed typographic moment (no fabricated
 * photography) with a horizontal facts rail. Real facility facts only.
 */
const rail = [
  { label: "Кабинеттер", text: "Интерактивті тақта" },
  { label: "IT", text: "Компьютерлік сыныптар" },
  { label: "Жатақхана", text: "100 орын" },
  { label: "Асхана", text: "Күніне 4 мезгіл" },
  { label: "Спорт", text: "Зал + ашық алаң" },
  { label: "Кітапхана", text: "Оқу қоры" },
];

export function CampusInterlude() {
  return (
    <section aria-labelledby="campus-title" className="overflow-hidden bg-abyss">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 md:px-10 lg:pt-28">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500">
            Кампус · Ақтөбе
          </p>
          <h2
            id="campus-title"
            className="mt-5 max-w-[16ch] font-display text-4xl leading-[1.06] font-medium text-balance text-white md:text-6xl lg:text-7xl"
          >
            Оқу мен өмірге қолайлы кампус
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-frost-100">
            Заманауи кампус студенттердің оқуы мен өмір сүруіне барлық жағдай
            жасайды: кабинеттер, зертханалар, жатақхана, асхана, спорт,
            кітапхана.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <Link
            href="/campus"
            className="mt-8 inline-flex items-center gap-2 py-2.5 -my-2.5 text-[15px] font-semibold text-white underline-offset-4 hover:underline"
          >
            Кампус туралы <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 pb-20 md:px-10 lg:pb-28">
        <div className="mt-14 grid grid-cols-2 border-t border-line-dark sm:grid-cols-3 lg:grid-cols-6">
          {rail.map((cell, i) => (
            <Reveal
              key={cell.label}
              delay={Math.min(i * 0.05, 0.2)}
              className="border-b border-r border-line-dark px-5 py-7 first:border-l last:border-r-0 max-sm:odd:border-l sm:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(3n+1)]:border-l-0 lg:first:border-l max-lg:[&:nth-child(n+4)]:border-b-0"
            >
              <p className="font-display text-xl font-medium text-white">{cell.label}</p>
              <p className="mt-1.5 text-[13.5px] text-frost-500">{cell.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
