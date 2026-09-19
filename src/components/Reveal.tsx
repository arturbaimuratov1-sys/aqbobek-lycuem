"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds (keep 0–0.18). */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure";
}

/**
 * Restrained scroll reveal: opacity + 16px rise, once, ease-out.
 * Renders statically under prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as as "div";
    return <Tag className={className}>{children}</Tag>;
  }
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, transform: "translateY(16px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </MotionTag>
  );
}
