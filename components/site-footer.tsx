import Image from "next/image";
import { MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { mapsLink, siteConfig, whatsappLink } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-night text-sand">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand/logo-cream.png" alt="" width={800} height={469} className="h-10 w-auto" />
            <div>
              <p className="font-heading text-2xl uppercase leading-none">Gumi Abah</p>
              <p className="text-xs tracking-[0.2em] text-sand/60">CAMPING GROUND</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/60">
            {siteConfig.tagline}. Presented by {siteConfig.presenter}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand/50">Jelajahi</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-sand/80">
            {[
              ["#cerita", "Cerita"],
              ["#pengalaman", "Pengalaman"],
              ["#paket", "Paket"],
              ["#lokasi", "Lokasi"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-sand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand/50">Hubungi</p>
          <ul className="mt-4 space-y-3 text-sm text-sand/80">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-sand">
                <WhatsAppIcon className="size-4" /> WhatsApp Reservasi
              </a>
            </li>
            {siteConfig.instagram ? (
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-sand">
                  <InstagramIcon className="size-4" /> Instagram
                </a>
              </li>
            ) : null}
            <li>
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 hover:text-sand">
                <MapPin className="mt-0.5 size-4 shrink-0" /> {siteConfig.location.full}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-sand/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-sand/40 sm:px-6 lg:px-8">
          © 2026 {siteConfig.name}. Presented by {siteConfig.presenter}.
        </p>
      </div>
    </footer>
  );
}
