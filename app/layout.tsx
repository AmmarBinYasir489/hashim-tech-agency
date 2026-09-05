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
  title: "Hashim Tech | Digital & Business Solutions",
  description:
    "Hashim Tech provides professional website, SEO, business profiling, registration, banking and finance solutions to help businesses build, grow and succeed.",
  keywords: [
    "website development",
    "SEO",
    "business registration",
    "company registration",
    "business banking",
    "business loans",
    "personal loans",
    "business profiling",
    "digital agency",
    "UK business solutions",
    "Hashim Tech",
  ],
  authors: [{ name: "Hashim Tech" }],
  openGraph: {
    title: "Hashim Tech | Digital & Business Solutions",
    description: "Professional website, SEO, business registration, banking and finance solutions.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim Tech | Digital & Business Solutions",
    description: "Digital Solutions. Real Results.",
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
