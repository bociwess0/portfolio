import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseGlowWrapper from "./animation/MauseGlowWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bogdan Djordjevic | Frontend Developer",
  description:
    "Frontend developer specializing in scalable, high-performance web applications using Next.js, TypeScript, and modern technologies.",

  openGraph: {
    title: "Bogdan Djordjevic Portfolio",
    description:
      "Building scalable, full-stack web applications with focus on performance and user experience.",
    url: "https://tvoj-sajt.vercel.app",
    siteName: "Bogdan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bogdan Djordjevic Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MouseGlowWrapper>{children}</MouseGlowWrapper>
      </body>
    </html>
  );
}
