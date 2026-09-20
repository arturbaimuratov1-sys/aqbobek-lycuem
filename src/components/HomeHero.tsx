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
 * Cinematic hero: the graduates photo is a background compositional layer
 * occupying the right ~60% edge-to-edge (no card, no frame, no caption).
 * Headline block sits on solid abyss and overlaps the image boundary.
 * Mobile: photo becomes the full-bleed backdrop under a uniform navy veil.
 * Faces stay visible: centered composition, controlled cover crop only.
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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-abyss"
    >
      {/* Photographic layer */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover object-center"
        />
        {/* Uniform readability veil — solid color only, no gradients. */}
        <div className="absolute inset-0 bg-abyss/80 lg:hidden" />
      </div>

      {/* Typography layer */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-32 pb-20 md:px-10 lg:pt-40 lg:pb-28">
        <div className="max-w-[600px]">
          <motion.p
            {...anim(0)}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-frost-500"
          >
            Aqbobek Lyceum — Boarding School
          </motion.p>
          <motion.h1
            {...anim(0.1)}
            id="hero-title"
            className="mt-6 bg-transparent font-display text-[2.7rem] leading-[1.04] font-medium text-balance text-white sm:text-7xl lg:-mr-28 lg:bg-abyss lg:py-4 lg:pr-6 lg:text-[4.6rem]"
          >
            Дарындылар мектебі — болашақ осында
          </motion.h1>
          <span className="sr-only">{imageAlt}</span>
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
              className="inline-flex border border-white/25 px-8 py-4 text-[15px] font-semibold text-white transition-[border-color,color,transform] duration-150 ease-out hover:border-white active:scale-[0.97]"
            >
              Лицей туралы
            </Link>
          </motion.div>
          <motion.p
            {...anim(0.4)}
            className="mt-12 border-t border-line-dark pt-6 text-[13px] tracking-wide text-frost-500"
          >
            7–11 сыныптар <span aria-hidden="true" className="mx-3 text-white/25">/</span> IT
            бағыт <span aria-hidden="true" className="mx-3 text-white/25">/</span> 100
            жатақхана орны
          </motion.p>
        </div>
      </div>
    </section>
  );
}
