import Image from "next/image";
import { Mountain, Tent } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const meanings = [
  {
    icon: Mountain,
    title: "Garis Topografi",
    body: "Lekuk garis pada logo menggambarkan keindahan topografi tebing dan perbukitan alami Bukit Abah yang kokoh serta asri.",
  },
  {
    icon: Tent,
    title: "Tenda di Kaki Bukit",
    body: "Segitiga kecil di dasar logo adalah tenda — tempat kamu pulang setelah seharian menjelajah, beristirahat dalam pelukan alam.",
  },
];

export function Story() {
  return (
    <section id="cerita" className="relative overflow-hidden bg-sand-2 py-24 sm:py-32">
      <div aria-hidden className="topo-lines absolute inset-0 text-forest" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-square max-w-md rounded-[2.5rem] bg-sand p-10 shadow-2xl shadow-forest/10 ring-1 ring-forest/10 sm:p-14">
            <Image
              src="/brand/logo-green.png"
              alt="Logo Gumi Abah: siluet bukit dengan garis topografi dan tenda di kakinya"
              width={800}
              height={469}
              className="h-full w-full object-contain"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-6 py-2.5 text-sm font-medium tracking-[0.2em] text-sand shadow-lg">
              Back to Nature
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Cerita Kami"
            title={
              <>
                Bukit yang kokoh, <br className="hidden sm:block" />
                malam yang tenang
              </>
            }
            description="Gumi Abah — “tanah Abah” — adalah camping ground di perbukitan Desa Besan, Klungkung. Dipersembahkan oleh Monkey Bar, kami mengajakmu melambat sejenak: lepas dari layar, duduk di depan api unggun, dan bangun disambut kabut pagi di atas bukit."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {meanings.map((m, i) => (
              <Reveal key={m.title} delay={0.1 * i}>
                <div className="h-full rounded-2xl border border-forest/10 bg-cream/70 p-6 backdrop-blur">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-forest text-sand">
                    <m.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-xl uppercase tracking-wide text-forest">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
