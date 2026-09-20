"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/kk/site";
import { cn } from "@/lib/cn";

/**
 * Midnight Editorial header: transparent over the dark homepage hero,
 * compact abyss bar everywhere else + after scrolling.
 * Mobile: full-screen abyss menu, staggered links, Escape to close.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  // Close the mobile menu on navigation — render-phase adjustment pattern.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <div id="header-sentinel" aria-hidden="true" className="h-0" />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          solid
            ? "border-b border-line-dark bg-abyss/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 md:h-20 md:px-10">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Басты бет — Aqbobek Lyceum">
            <Image
              src={site.brand.logo}
              alt=""
              width={160}
              height={64}
              className="h-10 w-auto outline outline-1 outline-white/15 outline-offset-4 md:h-11"
              priority
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-[13px] font-medium tracking-wide text-white">
                {site.brand.full}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-frost-500">
                Лицей-интернат
              </span>
            </span>
          </Link>

          <nav aria-label="Негізгі навигация" className="hidden items-center gap-8 xl:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-150",
                    active ? "text-white" : "text-white/65 hover:text-white",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-white transition-transform duration-200 ease-out",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.contacts.phonePrimary.replace(/[^+\d]/g, "")}`}
              className="hidden text-[13.5px] font-medium text-white/70 transition-colors duration-150 hover:text-white lg:inline"
            >
              {site.contacts.phonePrimary}
            </a>
            <Link
              href="/admissions"
              className="hidden bg-white px-5 py-2.5 text-[13.5px] font-semibold text-abyss transition-all duration-150 ease-out hover:bg-frost-100 active:scale-[0.97] sm:inline-flex"
            >
              Оқуға қабылдау
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
              className="inline-flex h-11 w-11 items-center justify-center text-white xl:hidden"
            >
              <span aria-hidden="true" className="relative block h-4 w-6">
                <span className={cn("absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-200 ease-out", open && "translate-y-[7px] rotate-45")} />
                <span className={cn("absolute inset-x-0 top-[7px] h-0.5 bg-current transition-opacity duration-150", open && "opacity-0")} />
                <span className={cn("absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform duration-200 ease-out", open && "-translate-y-[7px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Мәзір"
            className="fixed inset-0 z-40 flex flex-col bg-abyss pt-24 pb-10 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Мобильді навигация" className="mx-auto w-full max-w-[1440px] flex-1 overflow-y-auto px-6">
              <ul className="divide-y divide-line-dark">
                <li>
                  <Link href="/" className="flex items-center justify-between py-4 font-display text-xl font-medium text-white">
                    Басты бет <span aria-hidden="true" className="text-steel-500">→</span>
                  </Link>
                </li>
                {site.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, transform: "translateY(10px)" }}
                    animate={{ opacity: 1, transform: "translateY(0)" }}
                    transition={{ duration: 0.3, delay: 0.04 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 font-display text-xl font-medium text-white"
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-steel-500">→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/admissions" className="bg-white px-5 py-3.5 text-center text-[15px] font-semibold text-abyss">
                  Оқуға қабылдау
                </Link>
                <a
                  href={`tel:${site.contacts.phonePrimary.replace(/[^+\d]/g, "")}`}
                  className="border border-line-dark px-5 py-3.5 text-center text-[15px] font-medium text-white"
                >
                  {site.contacts.phonePrimary}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
