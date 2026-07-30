import { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://bogdandjordjevic.com"),

  title: "Bogdan Djordjevic | Frontend Developer",
  description:
    "Frontend developer specializing in scalable, high-performance web applications using Next.js, TypeScript, and modern technologies.",

  openGraph: {
    title: "Bogdan Djordjevic Portfolio",
    description:
      "Building scalable, full-stack web applications with focus on performance and user experience.",
    url: "https://bogdandjordjevic.com",
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

  twitter: {
    card: "summary_large_image",
    title: "Bogdan Djordjevic Portfolio",
    description:
      "Building scalable, full-stack web applications with focus on performance and user experience.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/bdj_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/bdj_logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/bdj_logo.png",
    shortcut: "/bdj_logo.png",
  },
};