import { CalendarCheck, MessageCircle, Tent } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Chat WhatsApp",
    body: "Kirim tanggal, jumlah orang, dan paket pilihanmu.",
  },
  {
    icon: CalendarCheck,
    title: "Konfirmasi & DP",
    body: "Kami cek ketersediaan, lalu amankan slot dengan pembayaran DP.",
  },
  {
    icon: Tent,
    title: "Datang & Camping",
    body: "Check-in di lokasi — tenda siap, api unggun menunggu.",
  },
];

export function HowToBook() {
  return (
    <section className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Cara Reservasi" title="Tiga langkah menuju bukit" />
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden border-t-2 border-dashed border-forest/25 md:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={0.12 * i} className="flex flex-col items-center text-center">
                  <span className="relative inline-flex size-16 items-center justify-center rounded-full bg-forest text-sand shadow-xl shadow-forest/20 ring-8 ring-sand">
                    <s.icon className="size-6" />
                    <span className="absolute -right-1 -top-1 inline-flex size-6 items-center justify-center rounded-full bg-sand-2 font-heading text-sm text-forest ring-2 ring-forest">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 font-heading text-2xl uppercase tracking-wide text-forest">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/70">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
