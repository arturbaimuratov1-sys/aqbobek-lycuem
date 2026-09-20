"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface WireMarqueeProps {
  children: ReactNode;
  className?: string;
  /** Pause the wire while hovered or focused. @default true */
  pauseOnHover?: boolean;
  /** Reverse scroll direction. @default false */
  reverse?: boolean;
  /** How many copies of the content to lay out for a seamless loop. @default 3 */
  repeat?: number;
  ariaLabel?: string;
}

/**
 * Editorial information wire.
 * Adapted from the Magic UI Marquee pattern (repeat-until-seamless loop,
 * pause on hover), rebuilt for the Aqbobek system: no gradients, no glows,
 * square geometry, steel accents, honoring prefers-reduced-motion
 * (collapses to a static wrapped list).
 */
export function WireMarquee({
  children,
  className,
  pauseOnHover = true,
  reverse = false,
  repeat = 3,
  ariaLabel,
}: WireMarqueeProps) {
  return (
    <div
      role={ariaLabel ? "region" : undefined}
      aria-label={ariaLabel}
      className={cn("wire group flex overflow-hidden", className)}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0 || undefined}
          className={cn(
            "wire-track flex shrink-0 items-center",
            reverse && "wire-reverse",
            pauseOnHover && "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
