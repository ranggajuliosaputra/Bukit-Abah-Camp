"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site-config";

/** Sticky booking button that appears once the hero CTA has scrolled away. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservasi via WhatsApp"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-forest py-3 pl-4 pr-5 text-sm font-semibold text-sand shadow-2xl shadow-black/30 ring-1 ring-sand/20 transition-colors hover:bg-forest-2"
        >
          <span className="relative inline-flex">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-sand/40" />
            <WhatsAppIcon className="relative size-5" />
          </span>
          Reservasi
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
