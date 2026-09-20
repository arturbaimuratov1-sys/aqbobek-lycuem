import type { ReactNode } from "react";

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  lead?: string;
}

/** Compact editorial page header: small caps kicker, serif title, lead. */
export function PageHero({ kicker, title, lead }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 lg:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-steel-600">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.08] text-balance text-navy-900 md:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-4 max-w-[68ch] text-[16.5px] leading-relaxed text-ink-600">{lead}</p>
        )}
      </div>
    </section>
  );
}
