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
 * Midnight Editorial hero: navy type panel overlapping the full-bleed
 * real graduates photo. Photo is shown uncropped (natural 16:9).
 */
export function HomeHero({ image, imageAlt }: HomeHeroProps) {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(22px)" },
          animate: { opacity: 1, transform: "translateY(0)" },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative overflow-hidden bg-abyss" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pt-28 pb-14 md:px-10 lg:grid-cols-12 lg:gap-0 lg:pt-36 lg:pb-20">
        <div className="relative z-10 lg:col-span-6 lg:-mr-24 lg:bg-abyss lg:py-10 lg:pr-10">
          <motion.p
            {...anim(0)}
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500"
          >
            Aqbobek Lyceum · Ақтөбе
          </motion.p>
          <motion.h1
            {...anim(0.08)}
            id="hero-title"
            className="mt-5 font-display text-[2.4rem] leading-[1.08] font-medium text-balance text-white sm:text-6xl lg:text-[3.9rem]"
          >
            Дарындылар мектебі — болашақ осында
          </motion.h1>
          <motion.p {...anim(0.16)} className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-frost-100">
            Батыс өңірінде теңдесі жоқ, дарынды балаларға арналған IT
            бағытындағы лицей-интернат. Математика, ағылшын тілі және
            ақпараттық технологияларға басымдық.
          </motion.p>
          <motion.div {...anim(0.24)} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex bg-white px-7 py-3.5 text-[15px] font-semibold text-abyss transition-all duration-150 ease-out hover:bg-frost-100 active:scale-[0.97]"
            >
              Оқуға қабылдау
            </Link>
            <Link
              href="/about"
              className="inline-flex border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 ease-out hover:border-white active:scale-[0.97]"
            >
              Лицей туралы
            </Link>
          </motion.div>
          <motion.dl
            {...anim(0.32)}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line-dark pt-6"
          >
            {[
              ["7–11", "сыныптар"],
              ["IT", "бағыт"],
              ["100", "жатақхана орны"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-2.5">
                <dd className="order-1 font-display text-[26px] font-medium text-white">{value}</dd>
                <dt className="order-2 text-[13.5px] text-frost-500">{label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.figure
          {...anim(0.2)}
          className="lg:col-span-6"
        >
          <Image
            src={image}
            alt={imageAlt}
            width={1672}
            height={941}
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="aspect-video w-full object-cover"
          />
          <figcaption className="flex items-center justify-between border-t border-line-dark px-1 py-3 text-[13px] text-frost-500">
            <span>«Ақбөбек» түлектері · AL26</span>
            <Link href="/campus" className="font-medium text-white underline-offset-4 hover:underline">
              Кампус →
            </Link>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
