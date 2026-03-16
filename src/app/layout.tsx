import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18019381987"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18019381987');
          `}
        </Script>
        <Script id="bing-uet-tag" strategy="afterInteractive">
          {`
            (function(w, d, t, u, o) {
              w[u] = w[u] || [], o.ts = (new Date).getTime();
              var n = d.createElement(t);
              n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),
              n.async = 1, n.onload = n.onreadystatechange = function() {
                var s = this.readyState;
                s && "loaded" !== s && "complete" !== s || (o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"), n.onload = n.onreadystatechange = null);
              };
              var i = d.getElementsByTagName(t)[0];
              i.parentNode.insertBefore(n, i);
            })(window, document, "script", "uetq", {ti: "97234408", enableAutoSpaTracking: true});
          `}
        </Script>
        <Script id="bing-uet-consent" strategy="afterInteractive">
          {`
            window.uetq = window.uetq || [];
            window.uetq.push('consent', 'default', {'ad_storage': 'denied'});
            window.uetq.push('consent', 'update', {'ad_storage': 'granted'});
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
