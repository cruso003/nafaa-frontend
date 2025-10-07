import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { GovernmentBanner } from "@/components/government-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ChatBot from "@/components/ChatBot";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTranslateContainer } from "@/components/google-translate-container";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "National Fisheries and Aquaculture Authority (NaFAA) | Republic of Liberia",
  description: "Official website of the National Fisheries and Aquaculture Authority (NaFAA) of the Republic of Liberia. Sustainable fisheries management, licensing, aquaculture development, and marine resource conservation.",
  keywords: [
    "NaFAA",
    "National Fisheries and Aquaculture Authority",
    "Liberia",
    "Fisheries",
    "Aquaculture",
    "Government",
    "Fishing License",
    "Marine Resources",
    "Sustainable Fishing",
    "West Africa",
  ],
  authors: [{ name: "National Fisheries and Aquaculture Authority" }],
  openGraph: {
    title: "National Fisheries and Aquaculture Authority (NaFAA)",
    description: "Sustainable fisheries management and aquaculture development in Liberia",
    url: "https://nafaa.gov.lr",
    siteName: "National Fisheries and Aquaculture Authority",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <GovernmentBanner />
          <SiteHeader />
          {children}
          <SiteFooter />
          {/* Google Translate Widget - Client-side only, after hydration */}
          <GoogleTranslateContainer />
          {/* AI ChatBot */}
          <ChatBot />
          {/* Toast Notifications */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
