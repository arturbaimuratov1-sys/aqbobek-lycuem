import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  lead?: string;
  /** Visual identity per page: mist default, navy for statement pages. */
  tone?: "mist" | "navy";
}

/** Compact editorial page header: small caps kicker, serif title, lead. */
export function PageHero({ kicker, title, lead, tone = "mist" }: PageHeroProps) {
  const dark = tone === "navy";
  return (
    <section className={cn("border-b", dark ? "border-line-dark bg-navy-900" : "border-line bg-mist")}>
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:py-20">
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.24em]",
            dark ? "text-frost-500" : "text-steel-600",
          )}
        >
          {kicker}
        </p>
        <h1
          className={cn(
            "mt-4 max-w-5xl font-display text-4xl leading-[1.06] font-medium text-balance md:text-6xl",
            dark ? "text-white" : "text-navy-900",
          )}
        >
          {title}
        </h1>
        {lead && (
          <p
            className={cn(
              "mt-5 max-w-[68ch] text-[16.5px] leading-relaxed",
              dark ? "text-frost-100" : "text-ink-600",
            )}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
