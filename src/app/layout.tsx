import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schrader.co — Digital Marketing & Automation | Traverse City, MI",
  description:
    "Independent creative studio based in Traverse City, Michigan. High-end web design, SEO, lead generation, and automations that bring real business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-[#C99A3A]/20 selection:text-[#18202A]">
        {children}
      </body>
    </html>
  );
}
