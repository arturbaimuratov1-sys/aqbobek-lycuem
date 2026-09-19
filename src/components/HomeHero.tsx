"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/kk/site";

interface HomeHeroProps {
  image: string;
  imageAlt: string;
}

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/** Left-aligned editorial hero: wordmark, serif headline, dual CTA, framed photo. */
export function HomeHero({ image, imageAlt }: HomeHeroProps) {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(18px)" },
          animate: { opacity: 1, transform: "translateY(0)" },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pt-12 pb-14 md:px-8 lg:grid-cols-12 lg:gap-14 lg:pt-20 lg:pb-20">
        <div className="lg:col-span-6">
          <motion.p
            {...anim(0)}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-600"
          >
            Aqbobek Lyceum · Ақтөбе
          </motion.p>
          <motion.h1
            {...anim(0.08)}
            className="mt-4 font-display text-[2.6rem] leading-[1.05] text-balance text-navy-900 sm:text-6xl lg:text-[4.2rem]"
          >
            Дарынды балаларға арналған лицей-интернат
          </motion.h1>
          <motion.p {...anim(0.16)} className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink-600">
            {site.tagline}. Математика, ағылшын тілі және ақпараттық технологияларға басымдық.
          </motion.p>
          <motion.div {...anim(0.24)} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex bg-navy-900 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
            >
              Оқуға қабылдау
            </Link>
            <Link
              href="/about"
              className="inline-flex border border-navy-900/25 px-7 py-3.5 text-[15px] font-semibold text-navy-900 transition-all duration-150 ease-out hover:border-navy-900 hover:bg-navy-50 active:scale-[0.97]"
            >
              Лицей туралы
            </Link>
          </motion.div>
          <motion.dl
            {...anim(0.32)}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6"
          >
            {[
              ["7–11", "сыныптар"],
              ["IT", "бағыт"],
              ["100", "жатақхана орны"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <dt className="order-2 text-[13.5px] text-ink-500">{label}</dt>
                <dd className="order-1 font-display text-2xl text-navy-900">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          {...anim(0.2)}
          className="lg:col-span-6"
        >
          <figure className="relative">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 bg-gold-500" />
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="flex items-center justify-between border border-t-0 border-line bg-parchment px-5 py-3 text-[13px] text-ink-600">
              <span>Лицей кампусы, Ақтөбе</span>
              <Link href="/campus" className="font-medium text-navy-900 underline-offset-4 hover:underline">
                Кампус →
              </Link>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
