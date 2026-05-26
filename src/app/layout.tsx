import type { Metadata, Viewport } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Manavatty Kondotty | Best Fancy Shop & Premium Flower Decor in Kondotty",
  description: "Discover Manavatty Kondotty, the best fancy shop and premium flower decoration atelier in Kondotty, Kerala. We specialize in traditional gold-plated temple jewelry, Kasavu ornaments, fresh bridal bouquets, and wedding car decorations. Visit us at Shop No 1, Thangals Road, Kondotty!",
  keywords: [
    "best fancy shop kondotty",
    "best flower decor kondotty",
    "fancy shop in kondotty",
    "flower decoration in kondotty",
    "Manavatty Kondotty",
    "wedding car decoration kondotty",
    "bridal jewelry shop kondotty",
    "traditional kasavu ornaments kondotty",
    "bridal hand bouquet kondotty",
    "wedding flower garlands kondotty",
    "Kerala bridal accessories store",
    "bridal makeup cosmetics kondotty",
  ],
  authors: [{ name: "Manavatty Kondotty Atelier" }],
  openGraph: {
    title: "Manavatty Kondotty | Best Fancy Shop & Premium Flower Decor in Kondotty",
    description: "Your ultimate destination for the best fancy ornaments and elite flower decoration in Kondotty, Kerala. Handcrafted bridal hand bouquets, premium gold-plated temple jewelry, and custom event stages.",
    url: "https://manavatty-kondotty.in", // Placeholder/demo URL
    siteName: "Manavatty Kondotty",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAESp2UDbbqrUNzm4sztRY43hicZsgKS-XChpgHSGIWAtZLWSpGYK4j7VjvaN0YOSL_xk93t8NCjTO_msbM9iF7UIHQ4qgBHllgxXpkFVK2czCaVCN6cohgklTO9OIj8Nn5jXnEEtkppPZhuw7uDx8fsmV1mFWTCxGySqdbhkFHOZn6gtyvmBchOLoPqet1rFri2cb9ONjW1BYY7Amvb4KDG-SxvZLWFhDjXD9kjGQOFHD7xJ3SdBn4yBDwWNveU9Pdve_PsQJzgd1--",
        width: 1200,
        height: 630,
        alt: "Manavatty Kondotty Wedding Stage Decor & Ornaments",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/manavatty-main-icon.png" type="image/png" />
        {/* Playfair Display and Montserrat fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        {/* Material Symbols Outlined icons */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#fef8f3] text-[#1d1b19] font-sans antialiased selection:bg-rose-100">
        {children}
      </body>
    </html>
  );
}
