"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#cerita", label: "Cerita" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#paket", label: "Paket" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-forest/90 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Gumi Abah — kembali ke atas">
          <Image
            src="/brand/logo-cream.png"
            alt=""
            width={800}
            height={469}
            className="h-8 w-auto sm:h-9"
            priority
          />
          <span className="font-heading text-xl uppercase tracking-wide text-sand sm:text-2xl">
            Gumi Abah
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-sand/80 transition-colors hover:text-sand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "sand", size: "sm", className: "hidden sm:inline-flex" })}
          >
            <WhatsAppIcon />
            Reservasi
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full text-sand hover:bg-sand/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-sand/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-sand/90 hover:bg-sand/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "sand", className: "w-full" })}
                >
                  <WhatsAppIcon />
                  Reservasi via WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
