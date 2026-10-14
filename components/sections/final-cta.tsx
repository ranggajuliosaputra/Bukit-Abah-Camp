import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { SparkleIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="bg-cream px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
      <Reveal>
        <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-center text-sand sm:px-12 sm:py-24">
          <Image
            src="/brand/logo-cream.png"
            alt=""
            width={800}
            height={469}
            className="pointer-events-none absolute -bottom-16 -right-16 w-80 opacity-[0.07] sm:w-[34rem]"
          />
          <SparkleIcon className="mx-auto size-8 text-sand/80" />
          <h2 className="mt-6 font-heading text-5xl uppercase leading-[0.95] sm:text-7xl">
            Saatnya <br className="sm:hidden" />
            Back to Nature
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand/75 sm:text-lg">
            Slot akhir pekan cepat penuh. Amankan tanggalmu sekarang dan rasakan malam yang lebih
            pelan di Gumi Abah.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "sand", size: "lg", className: "w-full sm:w-auto" })}
            >
              <WhatsAppIcon />
              Reservasi via WhatsApp
            </a>
            <a href="#paket" className={buttonVariants({ variant: "ghostLight", size: "lg", className: "w-full sm:w-auto" })}>
              Bandingkan Paket
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
