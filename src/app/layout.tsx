import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Greenprint Farmers Initiative",
  description:
    "A 15-year, $8.7 billion vision to build 72 agro-industrial hubs across Nigeria's 36 states.",
  keywords: [
    "Greenprint Farmers Initiative",
    "Nigeria agriculture",
    "food sovereignty",
    "African Union",
    "Agenda 2063",
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
