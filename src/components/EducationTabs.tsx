"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { clubs, programmes } from "@/content/kk/programs";
import { cn } from "@/lib/cn";

/**
 * Education pathways: 7–9 vs 10–11 in an accessible tab interface.
 * Radix Tabs primitive (the shadcn Tabs foundation), fully restyled into
 * the Aqbobek system — square geometry, hairlines, no default aesthetics.
 */
export function EducationTabs() {
  const [value, setValue] = useState(programmes[0]?.id ?? "middle");

  return (
    <section aria-labelledby="edu-title" className="bg-navy-900">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500">
                Білім беру
              </p>
              <h2
                id="edu-title"
                className="mt-5 font-display text-3xl leading-[1.12] font-medium text-balance text-white md:text-[2.9rem]"
              >
                Екі сатылы тереңдетілген жол
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[42ch] text-[15.5px] leading-relaxed text-frost-100">
                Негізгі пәндерді тереңдетіп оқыту және білімнің практикалық
                қолданылуы — 7-сыныптан 11-сыныпқа дейін.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Tabs.Root value={value} onValueChange={setValue}>
              <Tabs.List
                aria-label="Сынып сатылары"
                className="grid grid-cols-2 border border-line-dark"
              >
                {programmes.map((p) => {
                  const active = p.id === value;
                  return (
                    <Tabs.Trigger
                      key={p.id}
                      value={p.id}
                      className={cn(
                        "group flex flex-col items-start gap-1 px-6 py-5 text-left outline-none transition-colors duration-200",
                        "focus-visible:bg-white/10",
                        active ? "bg-white text-navy-900" : "bg-transparent text-white hover:bg-white/5",
                      )}
                    >
                      <span
                        className={cn(
                          "font-display text-2xl font-semibold md:text-3xl",
                          active ? "text-navy-900" : "text-white",
                        )}
                      >
                        {p.stage}
                      </span>
                      <span
                        className={cn(
                          "text-[13px] font-medium",
                          active ? "text-ink-600" : "text-frost-500",
                        )}
                      >
                        {p.title}
                      </span>
                    </Tabs.Trigger>
                  );
                })}
              </Tabs.List>

              {programmes.map((p) => (
                <Tabs.Content
                  key={p.id}
                  value={p.id}
                  className="tabs-panel border border-t-0 border-line-dark px-6 py-8 outline-none md:px-10 md:py-10"
                >
                  <p className="max-w-[64ch] text-[16px] leading-relaxed text-frost-100">
                    {p.lead}
                  </p>
                  <ul className="mt-7 grid gap-x-10 md:grid-cols-2">
                    {p.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 border-t border-line-dark py-4 text-[14.5px] leading-relaxed text-white"
                      >
                        <span aria-hidden="true" className="mt-[9px] h-1 w-4 shrink-0 bg-steel-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Tabs.Content>
              ))}
            </Tabs.Root>

            <Reveal className="mt-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-frost-500">
                Үйірмелер мен бірлестіктер
              </p>
              <dl className="mt-4">
                {clubs.map((c) => (
                  <div
                    key={c.name}
                    className="grid gap-1 border-t border-line-dark py-4 last:border-b sm:grid-cols-[220px_1fr] sm:gap-6"
                  >
                    <dt className="font-display text-lg font-medium text-white">{c.name}</dt>
                    <dd className="text-[14.5px] leading-relaxed text-frost-100">{c.description}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/education"
                className="mt-7 inline-flex items-center gap-2 py-2.5 -my-2.5 text-[15px] font-semibold text-white underline-offset-4 hover:underline"
              >
                Білім беру беті <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
