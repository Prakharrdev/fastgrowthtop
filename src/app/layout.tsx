import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased selection:bg-[#1261F5]/20 selection:text-[#0D1F3C]">
        {children}
      </body>
    </html>
  );
}
