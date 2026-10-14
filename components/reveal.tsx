"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Fades + lifts content in once it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.3em] ${
          light ? "text-sand/70" : "text-forest/60"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl ${
          light ? "text-sand" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-sand/75" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
