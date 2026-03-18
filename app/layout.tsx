import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be Still Visual Studio | Forensic Architecture & Kinetic Rendering",
  description: "Strict dark-mode tactical portfolio enforcing absolute forensic truth in architectural visualization.",
  keywords: ["portfolio", "3d", "architecture", "forensic", "kinetic rendering", "be still visual studio"],
  openGraph: {
    title: "Be Still Visual Studio",
    description: "The Protocol of Material Truth. Zero Mandate rendering and kinetic visualization.",
    url: "https://bestillvisualstudio.com",
    siteName: "BSVS",
    images: [
      {
        url: "/ella_editorial_bsvs_220001.png",
        width: 1200,
        height: 630,
        alt: "Be Still Visual Studio Cover",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
