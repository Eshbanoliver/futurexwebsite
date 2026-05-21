import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FutureX Digital Marketing | High-End SEO & Web Development Agency",
  description: "Accelerate your lead funnels. We specialize in custom web applications, video editing, SMM, technical SEO, and paid advertising. Book a free audit!",
  metadataBase: new URL("https://futurexwebsite.com"), // Fallback domain
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <head>
        {/* Preconnect for Google Fonts to maximize LCP scores */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col justify-between">
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

