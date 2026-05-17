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
  metadataBase: new URL("https://srujan-and-priyanka.vercel.app"),
  title: "Srujan and Priyanka",
  description:
    "Srujan and Lakshmi Priyanka are getting married on 03 July 2026 in Warangal. We would love to have your blessings.",

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Srujan and Priyanka",
    description:
      "Srujan and Lakshmi Priyanka are getting married on 03 July 2026 in Warangal. We would love to have your blessings.",
    url: "https://srujan-and-priyanka.vercel.app",
    siteName: "Srujan and Priyanka",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Srujan and Priyanka wedding invitation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Srujan and Priyanka",
    description:
      "Srujan and Lakshmi Priyanka are getting married on 03 July 2026 in Warangal. We would love to have your blessings.",
    images: ["/opengraph-image.jpg"],
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