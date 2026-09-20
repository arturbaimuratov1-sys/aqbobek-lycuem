"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export interface Faq {
  q: string;
  a: string;
}

/**
 * Accessible FAQ accordion: button + aria-expanded + region,
 * height-auto animation via Motion. One open at a time.
 */
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-ink-900/10">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.q} className="border-b border-ink-900/10">
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left outline-none focus-visible:bg-mist"
              >
                <span className="font-display text-xl font-medium text-navy-900">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center border border-navy-900/25 text-lg leading-none text-navy-900 transition-transform duration-300 ease-out",
                    expanded && "rotate-45 bg-navy-900 text-white",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <Reveal>
                    <p className="max-w-[64ch] pb-7 text-[15.5px] leading-relaxed text-ink-600">
                      {item.a}
                    </p>
                  </Reveal>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
