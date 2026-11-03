import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ToastHost } from "@/components/ui/ToastHost";
import { FloatingChat } from "@/components/ui/FloatingChat";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LAPPY — Technology, chosen better | Curated Indian Laptop Retailer",
  description: "Curated flagship workstations, creative notebooks, and executive laptops for serious buyers in India. Authentic brand warranty, 18% B2B GST tax credit, and insured air logistics.",
  keywords: ["Laptops India", "MacBook Pro", "ThinkPad X1 Carbon", "Dell XPS", "Workstations", "B2B GST Laptop"],
  openGraph: {
    title: "LAPPY — Technology, chosen better",
    description: "Curated flagship workstations, creative notebooks, and executive laptops.",
    url: "https://lappy.in",
    siteName: "LAPPY",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LAPPY Technologies",
    alternateName: "LAPPY",
    url: "https://lappy.in",
    logo: "https://lappy.in/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-800-000-5277",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LAPPY",
    url: "https://lappy.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lappy.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="font-outfit text-[#172033] bg-[#FAF8F3] min-h-screen flex flex-col antialiased selection:bg-[#0066B3]/20 selection:text-[#071A33]">
        {/* Skip to Content Link (Accessibility Rule 13) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#071A33] text-white px-4 py-2 rounded text-xs"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Slide-out Shopping Bag */}
        <CartDrawer />

        {/* Global Bottom-Center Toast Notifications */}
        <ToastHost />

        {/* Global Floating Support Chat Widget */}
        <FloatingChat />
      </body>
    </html>
  );
}
