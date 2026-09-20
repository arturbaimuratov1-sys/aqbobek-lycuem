"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface HomeHeroProps {
  image: string;
  imageAlt: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Full-bleed cinematic hero: the graduates photo covers the whole first
 * screen as a background layer (no card, no frame, no caption).
 * Typography sits directly on the image over a subtle readability scrim;
 * the text area itself is fully transparent. Faces stay visible via
 * center-aware object positioning per breakpoint.
 */
export function HomeHero({ image, imageAlt }: HomeHeroProps) {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(26px)" },
          animate: { opacity: 1, transform: "translateY(0)" },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-abyss"
    >
      {/* Photographic layer — true full background */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] lg:object-center"
        />
        {/* Readability scrims — subtle, no cheap gradient look. */}
        <div className="absolute inset-0 bg-abyss/55 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/90 via-abyss/45 to-abyss/10" />
      </div>
      <span className="sr-only">{imageAlt}</span>

      {/* Typography layer — transparent background */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-36 pb-10 md:px-10 lg:pb-14">
        <div className="max-w-[640px]">
          <motion.p
            {...anim(0)}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-frost-100"
          >
            Aqbobek Lyceum — Boarding School
          </motion.p>
          <motion.h1
            {...anim(0.1)}
            id="hero-title"
            className="mt-6 font-display text-[2.7rem] leading-[1.04] font-medium text-balance text-white sm:text-7xl lg:text-[4.6rem]"
          >
            Дарындылар мектебі — болашақ осында
          </motion.h1>
          <motion.p
            {...anim(0.2)}
            className="mt-7 max-w-[52ch] text-[16.5px] leading-relaxed text-frost-100"
          >
            Батыс өңірінде теңдесі жоқ, дарынды балаларға арналған IT
            бағытындағы лицей-интернат. Математика, ағылшын тілі және
            ақпараттық технологияларға басымдық.
          </motion.p>
          <motion.div {...anim(0.3)} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex bg-white px-8 py-4 text-[15px] font-semibold text-abyss transition-[background-color,color,transform] duration-150 ease-out hover:bg-frost-100 active:scale-[0.97]"
            >
              Өтініш қалдыру
            </Link>
            <Link
              href="/about"
              className="inline-flex border border-white/30 px-8 py-4 text-[15px] font-semibold text-white transition-[border-color,color,transform] duration-150 ease-out hover:border-white active:scale-[0.97]"
            >
              Лицей туралы
            </Link>
          </motion.div>
        </div>

        {/* Proof bar — integrated into the hero, not a separate section */}
        <motion.dl
          {...anim(0.4)}
          className="mt-14 flex flex-wrap gap-x-12 gap-y-3 border-t border-white/15 pt-6"
        >
          {[
            ["7–11", "сыныптар"],
            ["IT", "бағыт"],
            ["100", "жатақхана орны"],
          ].map(([value, label]) => (
            <div key={label} className="flex items-baseline gap-2.5">
              <dd className="font-display text-[22px] font-medium text-white">{value}</dd>
              <dt className="text-[13px] text-frost-100">{label}</dt>
            </div>
          ))}
          <p className="ml-auto hidden self-center text-[11px] uppercase tracking-[0.24em] text-frost-100/70 lg:block">
            Boarding Lyceum · Aktobe
          </p>
        </motion.dl>
      </div>
    </section>
  );
}
