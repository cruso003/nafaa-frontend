import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { GovernmentBanner } from "@/components/government-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ChatBot from "@/components/ChatBot";
import { Toaster } from "@/components/ui/toaster";

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
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,fr,es,pt,ar,zh-CN,zh-TW,ja,ko,ru,de,it,nl,hi,sw,am',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <GovernmentBanner />
          <SiteHeader />
          {children}
          <SiteFooter />
          {/* Hidden Google Translate Widget - controlled by custom switcher */}
          <div id="google_translate_element" style={{ display: 'none', position: 'absolute', left: '-9999px' }} />
          {/* AI ChatBot */}
          <ChatBot />
          {/* Toast Notifications */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
