import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gambetta = localFont({
  src: [
    { path: "../../public/fonts/Gambetta-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Gambetta-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/Gambetta-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Gambetta-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-gambetta",
  display: "swap",
});

const synonym = localFont({
  src: [
    { path: "../../public/fonts/Synonym-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Synonym-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Synonym-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-synonym",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://top-health-spa.vercel.app"),
  title: "Top Health Spa · Massage Spa · Bloomfield NJ",
  description:
    "A quiet room, a practiced hand, and an hour that belongs to you. Top Health Spa — massage in the heart of Bloomfield, NJ. 28 Washington St. Open late, 7 days. Call (973) 743-5282.",
  openGraph: {
    title: "Top Health Spa · Exhale, Bloomfield",
    description:
      "Massage spa at 28 Washington St, Bloomfield NJ. Open late, 7 days. Call (973) 743-5282.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#16241f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gambetta.variable} ${synonym.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
