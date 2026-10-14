"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { buttonVariants } from "@/components/ui/button";
import { SparkleIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const GenerativeMountainScene = dynamic(
  () => import("@/components/ui/mountain-scene").then((m) => m.GenerativeMountainScene),
  { ssr: false }
);

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  { value: "Sunrise", label: "dari puncak bukit" },
  { value: "Api Unggun", label: "setiap malam" },
  { value: "Monkey Bar", label: "drinks & chill" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative isolate flex min-h-dvh flex-col overflow-hidden bg-night text-sand"
    >
      {/* Sky glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_0%,#2c4a39_0%,#1b3227_45%,#0f1a14_100%)]"
      />
      {/* Moon */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease }}
        className="absolute left-[9%] top-[46%] -z-10 hidden size-32 rounded-full bg-sand/80 shadow-[0_0_80px_30px_rgba(235,229,216,0.15)] sm:block"
      />

      {/* Three.js terrain */}
      <div className="absolute inset-x-0 bottom-0 top-[35%] -z-10">
        <GenerativeMountainScene />
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-night via-night/60 to-transparent"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-28 pt-28 sm:px-6 lg:px-8"
      >
        {/* "PRESENT ... By Monkey Bar" — from the brand cover */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="flex items-center justify-between text-xs tracking-[0.25em] text-sand/70 sm:text-sm"
        >
          <span className="font-heading text-base tracking-[0.2em] text-sand sm:text-lg">PRESENT</span>
          <span>By {siteConfig.presenter}</span>
        </motion.div>

        <h1 className="relative mt-6 text-center">
          <span className="sr-only">
            {siteConfig.name} presented by {siteConfig.presenter} — {siteConfig.tagline}
          </span>
          <motion.span
            aria-hidden
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative inline-block font-heading text-[22vw] uppercase leading-[0.85] tracking-tight text-sand sm:text-[17vw] lg:text-[13rem]"
          >
            Gumi Abah
            <motion.span
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1, ease }}
              className="absolute -right-[0.08em] -top-[0.12em] block"
            >
              <SparkleIcon className="size-[0.22em] animate-pulse text-sand" />
            </motion.span>
          </motion.span>
          <motion.span
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 flex items-center justify-center gap-4 font-sans text-xl font-bold uppercase tracking-wide text-sand sm:gap-8 sm:text-4xl"
          >
            <span>Camping</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.8, ease }}
              className="block h-0.5 w-12 origin-center bg-sand/80 sm:w-40"
            />
            <span>Ground</span>
          </motion.span>
        </h1>

        <AnimatedGroup
          preset="blur-slide"
          variants={{
            container: { visible: { transition: { staggerChildren: 0.12, delayChildren: 1 } } },
          }}
          className="mt-8 flex flex-col items-center text-center"
        >
          <p className="text-lg font-light tracking-[0.3em] text-sand/90 sm:text-2xl">
            {siteConfig.tagline}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-sand/70 sm:text-base">
            Bermalam di perbukitan Bukit Abah, {siteConfig.location.village}, Klungkung. Tenda siap
            pakai, api unggun, langit penuh bintang, dan minuman racikan {siteConfig.presenter}.
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "sand", size: "lg", className: "w-full sm:w-auto" })}
            >
              <WhatsAppIcon />
              Reservasi Sekarang
            </a>
            <a
              href="#paket"
              className={buttonVariants({ variant: "ghostLight", size: "lg", className: "w-full sm:w-auto" })}
            >
              Lihat Paket
              <ArrowRight />
            </a>
          </div>
          <p className="mt-5 flex items-center gap-1.5 text-xs text-sand/60">
            <MapPin className="size-3.5" />
            {siteConfig.location.full}
          </p>
        </AnimatedGroup>
      </motion.div>

      {/* Highlights strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease }}
        className="relative mx-auto mb-8 hidden w-full max-w-4xl grid-cols-3 divide-x divide-sand/15 rounded-2xl border border-sand/15 bg-forest/40 px-2 py-4 backdrop-blur-md sm:grid"
      >
        {highlights.map((h) => (
          <div key={h.value} className="px-4 text-center">
            <p className="font-heading text-2xl uppercase text-sand">{h.value}</p>
            <p className="text-xs text-sand/60">{h.label}</p>
          </div>
        ))}
      </motion.div>

      <a
        href="#cerita"
        aria-label="Scroll ke bawah"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand/60 hover:text-sand sm:hidden"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
