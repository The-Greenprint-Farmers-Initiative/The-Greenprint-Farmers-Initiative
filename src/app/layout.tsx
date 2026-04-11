import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Greenprint Farmers Initiative — Feeding Africa. Growing Prosperity. Planting the Future.",
  description:
    "A 15-year, $8.7 billion vision to build 72 agro-industrial hubs across Nigeria's 36 states — creating 2.4 million jobs, planting 500 million trees, and transforming Africa's food systems.",
  keywords: [
    "Greenprint Farmers Initiative",
    "Nigeria agriculture",
    "food sovereignty",
    "African Union",
    "Agenda 2063",
    "reforestation",
    "agro-industrial",
  ],
  openGraph: {
    title: "The Greenprint Farmers Initiative",
    description:
      "A 15-year vision to transform Africa's food systems. 72 Hubs. 36 States. 500 Million Trees.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/images/Group 209.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
