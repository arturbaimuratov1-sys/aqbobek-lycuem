"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/kk/site";

const SEEN_KEY = "aqbobek-intro-seen";
/** Brand beat only — the page behind is already loaded. */
const INTRO_MS = 3400;
const EXIT_MS = 600;

/** Decided during render (lazy init), never set synchronously in an effect. */
function shouldShowIntro(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (window.sessionStorage.getItem(SEEN_KEY) === "1") return false;
  } catch {
    return true;
  }
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        window.sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* private mode — harmless */
      }
      return false;
    }
  } catch {
    /* matchMedia unavailable — show intro */
  }
  return true;
}

/**
 * First-visit brand intro (~3.5s). Runs once per session via sessionStorage;
 * later navigations render immediately. Content behind preloads normally,
 * so the intro never delays the actual page load.
 */
export function IntroGate({ children }: { children: React.ReactNode }) {
  // Always match the server on first render (no overlay), then decide after
  // mount. Reading sessionStorage during render would hydrate differently.
  const [show, setShow] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    if (shouldShowIntro()) {
      // Mount-gated external-store read — the standard exception to
      // refraining from setState in effects; runs once per session.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    document.documentElement.style.overflow = "hidden";
    const t1 = window.setTimeout(() => setShow(false), INTRO_MS);
    const t2 = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignore */
      }
      document.documentElement.style.overflow = "";
    }, INTRO_MS + EXIT_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  return (
    <>
      {/* Page renders immediately behind the overlay — intro never blocks load. */}
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            key="intro"
            role="status"
            aria-label="Aqbobek Lyceum"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950"
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }}
          >
            <div className="flex flex-col items-center px-6 text-center">
              <motion.div
                initial={{ opacity: 0, transform: "scale(0.97)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {logoOk ? (
                  <Image
                    src={site.brand.logo}
                    alt={site.brand.latin}
                    width={447}
                    height={447}
                    onError={() => setLogoOk(false)}
                    className="h-auto w-52 [mask-image:radial-gradient(closest-side,black_96%,transparent_100%)] md:w-64"
                    priority
                  />
                ) : (
                  <p className="font-display text-4xl text-white md:text-5xl">
                    Aqbobek Lyceum
                  </p>
                )}
              </motion.div>
              <motion.div
                aria-hidden="true"
                className="mt-8 h-px w-24 origin-center bg-white/40"
                initial={{ opacity: 0, transform: "scaleX(0)" }}
                animate={{ opacity: 1, transform: "scaleX(1)" }}
                transition={{ duration: 1.0, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.p
                className="mt-5 text-[11px] font-medium uppercase tracking-[0.32em] text-white/60"
                initial={{ opacity: 0, transform: "translateY(6px)" }}
                animate={{ opacity: 1, transform: "translateY(0)" }}
                transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Boarding Lyceum · Aktobe
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
