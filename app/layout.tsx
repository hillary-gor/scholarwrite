import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: {
    default: "ScholarWrite - Professional Essay Writing Service",
    template: "%s | ScholarWrite",
  },
  description:
    "Get A+ essays from expert writers. Plagiarism-free, on-time delivery, 24/7 support.",
  generator: "ScholarWrite",
  icons: {
    icon: "/logo/scholarwrite.ico",
    shortcut: "/logo/scholarwrite.ico",
    apple: "/logo/scholarwrite.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ScholarWrite - Professional Essay Writing Service",
    description:
      "Get A+ essays from expert writers. Plagiarism-free, on-time delivery, 24/7 support.",
    url: "https://scholarwrite.org",
    siteName: "ScholarWrite",
    images: [
      {
        url: "/logo/scholarwrite.ico",
        width: 1200,
        height: 630,
        alt: "ScholarWrite - Professional Essay Writing Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarWrite - Professional Essay Writing Service",
    description:
      "Get A+ essays from expert writers. Plagiarism-free, on-time delivery, 24/7 support.",
    images: ["/logo/scholarwrite.ico"],
  },
};

export default function RootLayout({
  children,y
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <main>{children}</main>
        </Suspense>
        <FloatingCTA />
        <Analytics />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
