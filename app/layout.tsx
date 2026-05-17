import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anime-wedding-invitation.vercel.app"),
  title: "Srujan & Lakshmi Priyanka | Wedding Invitation",
  description:
    "With love, blessings, and the promise of forever, we invite you to celebrate the wedding of Srujan and Lakshmi Priyanka on 03 July 2026 in Warangal.",
  openGraph: {
    title: "Srujan & Lakshmi Priyanka | Wedding Invitation",
    description:
      "Join us as we begin our next chapter together on 03 July 2026 in Warangal.",
    url: "https://anime-wedding-invitation.vercel.app",
    siteName: "Srujan & Lakshmi Priyanka Wedding Invitation",
    images: [
      {
        url: "/images/hero-couple.jpg",
        width: 1200,
        height: 630,
        alt: "Srujan and Lakshmi Priyanka wedding invitation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srujan & Lakshmi Priyanka | Wedding Invitation",
    description:
      "Join us as we begin our next chapter together on 03 July 2026 in Warangal.",
    images: ["/images/hero-couple.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}