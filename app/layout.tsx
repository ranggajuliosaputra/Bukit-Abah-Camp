import type { Metadata, Viewport } from "next";
import { Anton, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = `${siteConfig.name} — ${siteConfig.tagline} | Camping di Klungkung, Bali`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description: siteConfig.description,
  keywords: [
    "camping Bali",
    "camping ground Klungkung",
    "Gumi Abah",
    "Bukit Abah",
    "Desa Besan",
    "glamping Bali timur",
    "Monkey Bar",
  ],
  openGraph: {
    title,
    description: siteConfig.description,
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1b3227",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${anton.variable} ${poppins.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
