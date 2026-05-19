import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Botica Raizeira | Fitoterapia, Banhos Botânicos e Autocuidado Sensorial",
  description:
    "Produtos naturais artesanais para rituais de autocuidado, bem-estar e conexão com a natureza. Banhos botânicos, escalda-pés, sprays e tinturas preparados com intenção.",
  keywords: [
    "fitoterapia",
    "banhos botânicos",
    "autocuidado",
    "ervas naturais",
    "bem-estar",
    "ritual natural",
    "fitoenergética",
  ],
  openGraph: {
    title: "Botica Raizeira | Ritual Natural Contemporâneo",
    description:
      "Produtos naturais artesanais para rituais de autocuidado e bem-estar.",
    type: "website",
    locale: "pt_BR",
    siteName: "Botica Raizeira",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
