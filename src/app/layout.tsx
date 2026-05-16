import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenprintfarmers.org"),
  title: "The Greenprint Farmers Initiative",
  description:
    "A continental programme to transform Africa's food systems — beginning with 72 agro-industrial hubs across Nigeria's 36 states.",
  keywords: [
    "Greenprint Farmers Initiative",
    "Nigeria agriculture",
    "food sovereignty",
    "African Union",
    "African Union Commission Simulation",
  ],
  openGraph: {
    title: "The Greenprint Farmers Initiative",
    description:
      "Born in Nigeria. Built for the African continent. A 15-year programme transforming Africa's food systems.",
    type: "website",
    url: "https://greenprintfarmers.org",
    siteName: "The Greenprint Farmers Initiative",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Greenprint Farmers Initiative — Feeding Africa. Growing Prosperity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Greenprint Farmers Initiative",
    description: "Born in Nigeria. Built for the African continent.",
    images: ["/images/brand/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/images/Group 209.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..700,0..100,0..1;1,9..144,300..700,0..100,0..1&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
