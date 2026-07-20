import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hashim Tech — Digital Craftsmanship for Modern Businesses",
  description:
    "Hashim Tech is a modern technology agency crafting high-performance websites, applications, and digital experiences for startups and enterprises.",
  keywords: [
    "web development",
    "app development",
    "UI/UX design",
    "SEO",
    "digital agency",
    "Next.js",
    "React",
    "Hashim Tech",
  ],
  authors: [{ name: "Hashim Tech" }],
  openGraph: {
    title: "Hashim Tech — Digital Craftsmanship",
    description: "High-performance websites, apps, and digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim Tech",
    description: "Digital Craftsmanship for Modern Businesses",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
