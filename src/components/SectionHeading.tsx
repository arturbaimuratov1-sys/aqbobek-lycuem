import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  /** Use sparingly — max ~1 eyebrow per 3 sections site-wide. */
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.18em]",
            dark ? "text-gold-500" : "text-gold-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-[1.15] text-balance md:text-[2.75rem] md:leading-[1.1]",
          dark ? "text-white" : "text-navy-900",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 max-w-[65ch] text-base leading-relaxed",
            dark ? "text-navy-100" : "text-ink-600",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
