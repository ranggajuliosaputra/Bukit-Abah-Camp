"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/reveal";
import { whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// TODO: sesuaikan jawaban dengan kebijakan resmi Gumi Abah.
const faqs = [
  {
    q: "Apa saja yang perlu saya bawa?",
    a: "Untuk paket Ready Tent, cukup bawa pakaian ganti, jaket (udara malam di bukit cukup dingin), perlengkapan mandi, senter, dan obat pribadi. Perlengkapan tidur sudah kami siapkan.",
  },
  {
    q: "Boleh bawa tenda sendiri?",
    a: "Boleh! Pilih paket Bring Your Own Tent. Kamu tetap bisa menikmati fasilitas umum camping ground dan memesan minuman atau BBQ dari Monkey Bar.",
  },
  {
    q: "Apakah cocok untuk keluarga dengan anak-anak?",
    a: "Cocok. Area camp ramah keluarga — tetap awasi anak-anak di sekitar area api unggun dan tepian bukit.",
  },
  {
    q: "Bagaimana jika hujan?",
    a: "Tenda kami tahan hujan. Jika cuaca ekstrem, hubungi kami untuk opsi reschedule.",
  },
  {
    q: "Bagaimana cara pembayaran dan DP?",
    a: "Setelah slot dikonfirmasi via WhatsApp, kamu akan menerima detail pembayaran DP untuk mengamankan reservasi. Pelunasan bisa dilakukan saat check-in.",
  },
  {
    q: "Bisa untuk acara rombongan atau gathering?",
    a: "Bisa. Kami melayani gathering kantor, komunitas, ulang tahun, hingga acara kecil lainnya. Hubungi kami untuk paket khusus rombongan.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-sand-2 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering ditanya" />

        <div className="mt-12 divide-y divide-forest/10 rounded-3xl border border-forest/10 bg-cream px-5 sm:px-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-forest sm:text-lg"
                  >
                    {f.q}
                    <span
                      className={cn(
                        "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-forest/20 transition-all duration-300",
                        isOpen && "rotate-45 bg-forest text-sand"
                      )}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm leading-relaxed text-ink/70 sm:text-base">{f.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink/60">
          Masih ada pertanyaan?{" "}
          <a
            href={whatsappLink("Halo Gumi Abah! Saya punya pertanyaan seputar camping di sana.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-forest underline underline-offset-4"
          >
            Tanya langsung via WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
