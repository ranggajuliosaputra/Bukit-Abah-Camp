import { Car, Clock, MapPin, Navigation } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { mapsLink, siteConfig } from "@/lib/site-config";

const info = [
  {
    icon: MapPin,
    title: "Alamat",
    body: `${siteConfig.location.village}, ${siteConfig.location.district}, ${siteConfig.location.regency}, ${siteConfig.location.province}`,
  },
  {
    icon: Car,
    title: "Akses",
    body: "Sekitar 1–1,5 jam berkendara dari Denpasar via Jalan Bypass Ida Bagus Mantra. Bisa dijangkau mobil & motor.",
  },
  {
    icon: Clock,
    title: "Check-in / Check-out",
    body: "Check-in mulai sore hari, check-out keesokan siang. Konfirmasi jam pastinya saat reservasi.",
  },
];

export function Location() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.location.mapsQuery
  )}&z=13&output=embed`;

  return (
    <section id="lokasi" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Lokasi"
            title="Di perbukitan Bali Timur"
            description="Cukup jauh dari keramaian untuk mendengar suara alam, cukup dekat untuk escape akhir pekan."
          />
          <div className="mt-10 space-y-6">
            {info.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i}>
                <div className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-forest text-sand">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-forest">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <a
              href={mapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ className: "mt-10" })}
            >
              <Navigation />
              Buka di Google Maps
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3" y={40}>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-border bg-sand shadow-2xl shadow-forest/10 sm:h-[28rem] lg:h-full lg:min-h-[32rem]">
            <iframe
              title={`Peta lokasi ${siteConfig.name}`}
              src={embedSrc}
              className="absolute inset-0 h-full w-full grayscale-[35%] sepia-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
