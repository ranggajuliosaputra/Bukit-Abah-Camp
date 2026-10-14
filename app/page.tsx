import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Experiences } from "@/components/sections/experiences";
import { Packages } from "@/components/sections/packages";
import { HowToBook } from "@/components/sections/how-to-book";
import { Location } from "@/components/sections/location";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Campground",
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Desa Besan, Dawan",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  brand: { "@type": "Brand", name: siteConfig.presenter },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Experiences />
        <Packages />
        <HowToBook />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
