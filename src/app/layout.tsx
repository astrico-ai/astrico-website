import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Astrico - Enterprise Knowledge Management Platform",
  description: "Unify your enterprise knowledge across marketing, sales, and customer service tools. Work smarter with Astrico's intelligent data integration platform.",
  keywords: "enterprise knowledge management, marketing analytics, sales intelligence, customer service tools, data integration",
  verification: {
    google: "Bur3gLfsXuPqIZ9yDE-swIKQSDd4DWcqZ6BxGwiRpks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
