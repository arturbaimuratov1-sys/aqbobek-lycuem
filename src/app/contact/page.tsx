import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/kk/site";

export const metadata: Metadata = { title: "Байланыс" };

const rows = [
  { label: "Телефон", value: site.contacts.phonePrimary, href: `tel:${site.contacts.phonePrimary.replace(/[^+\d]/g, "")}` },
  { label: "Қосымша телефон", value: site.contacts.phoneSecondary, href: `tel:${site.contacts.phoneSecondary.replace(/[^+\d]/g, "")}` },
  { label: "Email", value: site.contacts.email, href: `mailto:${site.contacts.email}` },
  { label: "Мекенжай", value: site.contacts.address },
  { label: "Жұмыс уақыты", value: site.contacts.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Байланыс"
        title="Бізді қалай табуға болады"
        lead="Сұрақтарыңыз болса — қабылдау бөліміне жазыңыз немесе қоңырау шалыңыз."
      />
      <div className="bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <dl className="divide-y divide-line border-y border-line">
              {rows.map((row) => (
                <div key={row.label} className="grid gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    {row.label}
                  </dt>
                  <dd className="font-display text-[22px] text-navy-900">
                    {row.href ? (
                      <a href={row.href} className="underline-offset-4 hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="bg-navy-900 p-8 md:p-10">
              <h2 className="font-display text-2xl text-white">Тікелей байланыс</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-frost-100">
                Лицейге қабылдау шарттарын нақтылағыңыз келсе — WhatsApp арқылы жазыңыз, жауап береміз.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={site.contacts.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center bg-white px-6 py-3.5 text-[15px] font-semibold text-abyss transition-all duration-150 ease-out hover:bg-frost-100 active:scale-[0.97]"
                >
                  WhatsApp арқылы жазу
                </a>
                <a
                  href={site.contacts.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 ease-out hover:border-white active:scale-[0.97]"
                >
                  Instagram — aqbobek_lyceum
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
