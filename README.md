# Gumi Abah Camping Ground — Landing Page

Landing page untuk **Gumi Abah Camping Ground** (Presented by Monkey Bar) di Desa Besan, Dawan, Klungkung, Bali. Tagline: *Back to Nature*.

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · konvensi shadcn/ui · Three.js · Framer Motion · lucide-react

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Struktur

```
app/
  layout.tsx            # font Anton + Poppins, metadata SEO
  page.tsx              # susunan section + JSON-LD (schema.org Campground)
  globals.css           # design token warna brand (Tailwind v4 @theme)
  icon.png, apple-icon.png
components/
  ui/mountain-scene.tsx # terrain generatif Three.js (shader simplex noise)
  ui/animated-group.tsx # stagger animation (motion-primitives)
  ui/button.tsx         # button ala shadcn (buttonVariants)
  sections/*            # Hero, Cerita, Pengalaman, Paket, Cara Reservasi, Lokasi, FAQ, CTA
  site-header.tsx, site-footer.tsx, whatsapp-float.tsx, reveal.tsx, icons.tsx
lib/
  site-config.ts        # nama, lokasi, nomor WhatsApp, Instagram
  utils.ts              # cn()
public/brand/           # logo (hijau & krem) diekstrak dari brand guideline
```

## Sebelum go-live

Cari `TODO` di kode dan isi dengan data resmi:

- `lib/site-config.ts` — `whatsappNumber`, `instagram`, `url` (domain).
- `components/sections/packages.tsx` — nama paket, harga & fasilitas (saat ini contoh).
- `components/sections/faq.tsx` — jawaban FAQ sesuai kebijakan.
- `components/sections/location.tsx` — jam check-in/out & estimasi waktu tempuh.
