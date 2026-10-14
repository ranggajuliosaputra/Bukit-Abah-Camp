import { Flame, Footprints, Martini, Moon, Sunrise, Tent, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Experience = {
  icon: LucideIcon;
  title: string;
  body: string;
  className?: string;
  featured?: boolean;
};

const experiences: Experience[] = [
  {
    icon: Sunrise,
    title: "Sunrise di Atas Bukit",
    body: "Bangun pagi, buka pintu tenda, dan saksikan matahari terbit perlahan di balik lanskap perbukitan Klungkung.",
    className: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Flame,
    title: "Api Unggun",
    body: "Cerita, tawa, dan hangatnya api di bawah langit malam.",
  },
  {
    icon: Martini,
    title: "Monkey Bar Drinks",
    body: "Kopi pagi hingga mocktail & cocktail racikan Monkey Bar.",
  },
  {
    icon: Tent,
    title: "Tenda Siap Pakai",
    body: "Datang tanpa repot — tenda, matras, dan perlengkapan sudah kami siapkan.",
  },
  {
    icon: Utensils,
    title: "BBQ Night",
    body: "Bakar-bakaran bareng teman & keluarga di area camp.",
  },
  {
    icon: Moon,
    title: "Stargazing",
    body: "Jauh dari polusi cahaya kota — langit malamnya jernih dan penuh bintang.",
    className: "md:col-span-2",
  },
  {
    icon: Footprints,
    title: "Jelajah Bukit",
    body: "Jalan santai menyusuri jalur perbukitan dan menghirup udara segar pedesaan Besan.",
    className: "md:col-span-2",
  },
];

export function Experiences() {
  return (
    <section id="pengalaman" className="grain relative overflow-hidden bg-forest py-24 text-sand sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Pengalaman"
          title="Yang menunggumu di Gumi Abah"
          description="Semua yang kamu butuhkan untuk kembali ke alam — tanpa meninggalkan rasa nyaman."
        />

        <div className="mt-14 grid auto-rows-[minmax(190px,auto)] gap-4 md:grid-cols-4">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={0.06 * i} className={cn("h-full", e.className)}>
              <article
                className={cn(
                  "group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl border border-sand/10 p-6 transition-colors duration-300 hover:border-sand/30 sm:p-7",
                  e.featured
                    ? "bg-[radial-gradient(90%_70%_at_70%_15%,rgba(235,229,216,0.22),transparent_60%),linear-gradient(160deg,#2f4d3b,#16281f)]"
                    : "bg-forest-2/70"
                )}
              >
                {e.featured ? (
                  <div
                    aria-hidden
                    className="absolute right-8 top-8 size-20 rounded-full bg-sand/80 shadow-[0_0_80px_30px_rgba(235,229,216,0.18)] transition-transform duration-700 group-hover:-translate-y-2"
                  />
                ) : null}
                {e.featured ? (
                  <svg
                    aria-hidden
                    viewBox="0 0 400 120"
                    preserveAspectRatio="none"
                    className="absolute inset-x-0 bottom-0 h-1/2 w-full text-night/60"
                  >
                    <path
                      fill="currentColor"
                      d="M0 90 C60 40 110 70 160 45 C210 20 250 60 300 35 C340 15 370 40 400 30 L400 120 L0 120 Z"
                    />
                  </svg>
                ) : null}
                <span className="relative mb-auto inline-flex size-12 items-center justify-center rounded-2xl bg-sand/10 text-sand ring-1 ring-sand/15 transition-colors group-hover:bg-sand group-hover:text-forest">
                  <e.icon className="size-5" />
                </span>
                <div className="relative mt-8">
                  <h3
                    className={cn(
                      "font-heading uppercase tracking-wide text-sand",
                      e.featured ? "text-3xl sm:text-4xl" : "text-xl"
                    )}
                  >
                    {e.title}
                  </h3>
                  <p className={cn("mt-2 leading-relaxed text-sand/70", e.featured ? "max-w-sm text-base" : "text-sm")}>
                    {e.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
