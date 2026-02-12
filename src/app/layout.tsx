import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExitIntentModal } from "@/components/forms/ExitIntentModal";
import { StructuredData } from "@/components/shared/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadsmaskinen.se"),
  title: {
    default: "Leadsmaskinen – Automatiserad B2B-leadgenerering",
    template: "%s | Leadsmaskinen",
  },
  description:
    "Bygg din automatiserade B2B-leadmotor. Från ICP till kvalificerat möte på 1–3 veckor. Resultatbaserad betalning.",
  keywords: [
    "B2B leadgenerering",
    "lead generation Sverige",
    "automatiserad leadmotor",
    "pay per lead",
    "B2B pipeline",
    "ICP audit",
    "outbound marketing",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Leadsmaskinen",
    title: "Leadsmaskinen – Automatiserad B2B-leadgenerering",
    description:
      "Bygg din automatiserade B2B-leadmotor. Från ICP till kvalificerat möte på 1–3 veckor.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo_L.png",
    apple: "/logo_L.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white text-graphite antialiased">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ExitIntentModal />
      </body>
    </html>
  );
}
