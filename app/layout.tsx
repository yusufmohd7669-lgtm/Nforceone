import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nforce.one"),
  title: {
    default: "NForce One | Enterprise Pega Architecture & IT Consulting",
    template: "%s | NForce One",
  },
  description:
    "NForce One is a premier B2B IT consultancy specializing in enterprise Pega Development, Pega Testing, QA Engineering, Big Data Lakehouses, Cloud DevOps, and Custom Software Solutions.",
  keywords: [
    "Pega Development",
    "Pega Testing",
    "Pega Infinity",
    "Lead System Architect",
    "QA Test Automation",
    "Big Data Lakehouse",
    "Cloud DevOps",
    "Enterprise IT Consulting",
    "B2B Software Engineering",
  ],
  authors: [{ name: "NForce One Inc." }],
  creator: "NForce One",
  publisher: "NForce One",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nforce.one",
    title: "NForce One | Enterprise Pega Architecture & IT Consulting",
    description:
      "Enterprise Pega implementation, QA test engineering, cloud data platforms, and custom software architecture.",
    siteName: "NForce One",
  },
  twitter: {
    card: "summary_large_image",
    title: "NForce One | Enterprise Pega Architecture & IT Consulting",
    description:
      "Enterprise Pega implementation, QA test engineering, cloud data platforms, and custom software architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NForce One",
    url: "https://nforce.one",
    logo: "https://nforce.one/logo.png",
    slogan: "NF1 — Let's Do IT!",
    description:
      "Enterprise B2B IT consultancy specializing in Pega platform architecture, QA test engineering, big data infrastructure, and custom software.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-972-499-6667",
      contactType: "customer service",
      areaServed: ["US", "Global"],
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text antialiased selection:bg-accent selection:text-white min-h-screen flex flex-col font-sans overflow-x-hidden">
        {/* Terminal Boot Sequence */}
        <Preloader />

        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:font-mono focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>

        <SmoothScroll>
          <Header />
          <main id="main-content" className="flex-1 pt-[72px]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
