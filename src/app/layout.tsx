import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Greenprint Initiative — Nigeria's $8.7B Agro-Industrial Programme",
  description:
    "The Greenprint Initiative is Africa's most comprehensive agro-industrial, reforestation, and food security programme. 72 Hubs. 36 States. 500 Million Trees.",
  keywords: [
    "Greenprint Initiative",
    "Nigeria agriculture",
    "agro-industrial",
    "food security",
    "reforestation",
    "African development",
    "AU Agenda 2063",
  ],
  openGraph: {
    title: "The Greenprint Initiative",
    description:
      "Nigeria's $8.7 Billion Agro-Industrial, Reforestation & Food Security Programme",
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
        <link rel="icon" href="/images/Favicon.png" type="image/png" />
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
