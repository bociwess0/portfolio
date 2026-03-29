import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseGlowWrapper from "./animation/MauseGlowWrapper";
import { siteMetadata } from "./lib/metadata/meta-data";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = siteMetadata;

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
