import { Check, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// TODO: sesuaikan nama paket, harga, dan fasilitas dengan tarif resmi Gumi Abah.
const packages = [
  {
    name: "Bring Your Own Tent",
    tagline: "Untuk campers yang bawa gear sendiri",
    price: "Rp 75K",
    unit: "/ orang / malam",
    features: [
      "Area camping di perbukitan",
      "Akses toilet & air bersih",
      "Area parkir",
      "Spot api unggun bersama",
    ],
  },
  {
    name: "Ready Tent",
    tagline: "Datang, istirahat, nikmati",
    price: "Rp 350K",
    unit: "/ tenda (2 orang) / malam",
    popular: true,
    features: [
      "Tenda siap pakai untuk 2 orang",
      "Matras, sleeping bag & bantal",
      "Lampu tenda",
      "Kayu bakar api unggun",
      "Welcome drink dari Monkey Bar",
    ],
  },
  {
    name: "Monkey Bar Bundle",
    tagline: "Paket kumpul bareng geng",
    price: "Rp 1,2 jt",
    unit: "/ grup (4 orang) / malam",
    features: [
      "2 tenda siap pakai + perlengkapan tidur",
      "Paket BBQ untuk 4 orang",
      "4 minuman pilihan Monkey Bar",
      "Kayu bakar api unggun",
      "Sarapan pagi & kopi",
    ],
  },
];

export function Packages() {
  return (
    <section id="paket" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Paket & Harga"
          title="Pilih cara kamu bermalam"
          description="Harga transparan, tanpa biaya tersembunyi. Reservasi cukup lewat WhatsApp — kami bantu cek tanggal yang tersedia."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={0.08 * i} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
                  p.popular
                    ? "grain overflow-hidden bg-forest text-sand shadow-2xl shadow-forest/30 lg:-my-4 lg:py-12"
                    : "border border-border bg-sand-2 text-ink"
                )}
              >
                {p.popular ? (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-sand px-3 py-1 text-xs font-semibold text-forest">
                    <Sparkles className="size-3.5" />
                    Paling Favorit
                  </span>
                ) : null}
                <h3
                  className={cn(
                    "font-heading text-2xl uppercase tracking-wide",
                    p.popular ? "text-sand" : "text-forest"
                  )}
                >
                  {p.name}
                </h3>
                <p className={cn("mt-1 text-sm", p.popular ? "text-sand/70" : "text-ink/60")}>
                  {p.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={cn("font-heading text-5xl", p.popular ? "text-sand" : "text-forest")}>
                    {p.price}
                  </span>
                </div>
                <p className={cn("text-xs", p.popular ? "text-sand/60" : "text-ink/50")}>{p.unit}</p>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
                          p.popular ? "bg-sand text-forest" : "bg-forest text-sand"
                        )}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className={p.popular ? "text-sand/90" : "text-ink/80"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Halo Gumi Abah! Saya tertarik dengan paket "${p.name}". Boleh cek ketersediaan tanggalnya?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: p.popular ? "sand" : "default",
                    className: "mt-8 w-full",
                  })}
                >
                  <WhatsAppIcon />
                  Pesan Paket Ini
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-ink/60">
            Rombongan, gathering kantor, atau acara spesial?{" "}
            <a
              href={whatsappLink("Halo Gumi Abah! Saya ingin tanya paket untuk rombongan / acara.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest underline underline-offset-4"
            >
              Minta penawaran khusus
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
