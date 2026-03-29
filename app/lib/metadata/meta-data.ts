import { Metadata } from "next";

export const siteMetadata: Metadata = {
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