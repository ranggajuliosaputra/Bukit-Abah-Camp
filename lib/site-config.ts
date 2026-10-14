/**
 * Konten & kontak utama landing page.
 * TODO: ganti nilai bertanda TODO dengan data resmi sebelum go-live.
 */
export const siteConfig = {
  name: "Gumi Abah Camping Ground",
  shortName: "Gumi Abah",
  presenter: "Monkey Bar",
  tagline: "Back to Nature",
  description:
    "Camping ground di perbukitan Desa Besan, Klungkung, Bali. Tenda siap pakai, api unggun, sunrise di atas bukit, dan minuman racikan Monkey Bar — presented by Monkey Bar.",
  url: "https://gumiabah.com", // TODO: domain resmi
  location: {
    village: "Desa Besan",
    district: "Kecamatan Dawan",
    regency: "Kabupaten Klungkung",
    province: "Bali",
    full: "Desa Besan, Kec. Dawan, Kab. Klungkung, Bali",
    mapsQuery: "Desa Besan, Dawan, Klungkung, Bali",
  },
  /** Nomor WhatsApp format internasional tanpa "+", mis. "62812xxxxxxx". TODO: isi nomor resmi. */
  whatsappNumber: "",
  instagram: "", // TODO: mis. "https://instagram.com/gumiabah.camp"
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      `Halo ${siteConfig.shortName}! Saya ingin reservasi camping. Boleh info ketersediaan tanggal & paketnya?`
  );
  const base = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}`
    : "https://wa.me/";
  return `${base}?text=${text}`;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.location.mapsQuery
  )}`;
}
