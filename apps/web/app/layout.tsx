import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Manrope:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
