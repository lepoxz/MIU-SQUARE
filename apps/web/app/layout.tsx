import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "MIU SQUARE - Bien lead Facebook thanh pipeline chot sale nhanh",
  description:
    "MIU SQUARE giup SME va local business thu lead, phan loai, thong bao cho sale va theo doi conversion trong mot quy trinh co the do luong.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
