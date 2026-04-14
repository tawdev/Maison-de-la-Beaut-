import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison de la Beauté | Institut et Spa",
  description: "Découvrez nos soins esthétiques, massages, soins visage, capillaires, épilation laser et amincissement à la Maison de la Beauté.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-background text-foreground">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
