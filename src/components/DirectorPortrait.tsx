"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

interface DirectorPortraitProps {
  portraits: string[];
  alt: string;
}

/**
 * Three-state portrait interaction: 1 → 2 → 3 → 1 → …
 * Advances exactly ONCE per pointer ENTER (mouse) or tap (touch),
 * never cycles while the pointer rests on the photo.
 * Missing files degrade gracefully via onError (skipped in rotation).
 */
export function DirectorPortrait({ portraits, alt }: DirectorPortraitProps) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<ReadonlySet<number>>(new Set());

  const advance = useCallback(() => {
    setIndex((current) => {
      for (let step = 1; step <= portraits.length; step++) {
        const next = (current + step) % portraits.length;
        if (!failed.has(next)) return next;
      }
      return current;
    });
  }, [failed, portraits.length]);

  const available = portraits.filter((_, i) => !failed.has(i)).length;

  return (
    <figure className="relative">
      <button
        type="button"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") advance();
        }}
        onPointerUp={(e) => {
          if (e.pointerType !== "mouse") advance();
        }}
        onClick={(e) => {
          // Keyboard activation (Enter/Space) carries detail === 0.
          if (e.detail === 0) advance();
        }}
        aria-label={`${alt}. Интерактивті портрет${available > 1 ? " — басып, келесі суретті көруге болады" : ""}`}
        className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-card bg-navy-100 text-left"
      >
        {portraits.map((src, i) =>
          failed.has(i) ? null : (
            <Image
              key={src}
              src={src}
              alt={i === 0 ? alt : ""}
              aria-hidden={i === 0 ? undefined : true}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={i === 0}
              onError={() =>
                setFailed((prev) => {
                  if (prev.has(i)) return prev;
                  const next = new Set(prev);
                  next.add(i);
                  return next;
                })
              }
              className="object-cover transition-opacity duration-500 ease-out"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ),
        )}
        {/* Subtle frame + state hint */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border border-navy-900/10"
        />
        {available > 1 && (
          <span
            aria-hidden="true"
            className="absolute right-3 bottom-3 flex gap-1.5 bg-navy-950/55 px-2.5 py-2 backdrop-blur-sm"
          >
            {portraits.map((src, i) =>
              failed.has(i) ? null : (
                <span
                  key={src}
                  className={`h-1 w-5 transition-colors duration-300 ${
                    i === index ? "bg-gold-500" : "bg-white/40"
                  }`}
                />
              ),
            )}
          </span>
        )}
      </button>
      <span className="sr-only" role="status">
        {`Сурет ${index + 1} / ${available}`}
      </span>
    </figure>
  );
}
