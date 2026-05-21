import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import ScrollToTop from "@/components/ScrollToTop";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#602dee",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "only light",
};

export const metadata: Metadata = {
  title: "FutureX Digital Marketing | High-End SEO & Web Development Agency",
  description: "Accelerate your lead funnels. We specialize in custom web applications, video editing, SMM, technical SEO, and paid advertising. Book a free audit!",
  metadataBase: new URL("https://futurexdigitalmarketing.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "FutureX Digital Marketing",
    "FutureX Udaipur",
    "Digital Marketing Udaipur",
    "SEO Agency Udaipur",
    "Web Development Company Udaipur",
    "Video Editing Udaipur",
    "Social Media Management Udaipur",
    "Technical SEO Agency",
    "PPC Campaigns Google Ads",
    "Corporate Visual Branding",
    "Paid Advertising Campaign Managers",
    "UI UX App Development Agency"
  ],
  authors: [{ name: "FutureX Team", url: "https://futurexdigitalmarketing.com" }],
  creator: "FutureX Digital Marketing",
  publisher: "FutureX Digital Marketing",
  openGraph: {
    title: "FutureX Digital Marketing | High-End SEO & Web Development Agency",
    description: "Accelerate your lead funnels. We specialize in custom web applications, video editing, SMM, technical SEO, and paid advertising. Book a free audit!",
    url: "https://futurexdigitalmarketing.com",
    siteName: "FutureX Digital Marketing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://futurexdigitalmarketing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FutureX Digital Marketing Overview",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureX Digital Marketing | High-End SEO & Web Development Agency",
    description: "Accelerate your lead funnels. We specialize in custom web applications, video editing, SMM, technical SEO, and paid advertising. Book a free audit!",
    creator: "@Futurex2330751",
    images: ["https://futurexdigitalmarketing.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`} style={{ colorScheme: "only light" }}>
      <head>
        {/* Preconnect for Google Fonts to maximize LCP scores */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col justify-between">
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <FloatingElements />
        <Footer />
      </body>
    </html>
  );
}

