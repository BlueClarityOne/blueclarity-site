import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LinesBackground } from "@/components/LinesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Clarity | Web3 Marketing & Brand Strategy",
  description: "Building crypto brands. Narrative strategy, GTM, and 0→1 builds. Web3 marketing consultant based in London.",
  keywords: ["web3 marketing", "crypto branding", "brand strategy", "narrative strategy", "GTM", "DeFi marketing", "blockchain marketing"],
  authors: [{ name: "Blue Clarity" }],
  creator: "Blue Clarity",
  metadataBase: new URL("https://blueclarity.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://blueclarity.xyz",
    siteName: "Blue Clarity",
    title: "Blue Clarity | Web3 Marketing & Brand Strategy",
    description: "Building crypto brands. Narrative strategy, GTM, and 0→1 builds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Clarity - Web3 Marketing & Brand Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Clarity | Web3 Marketing & Brand Strategy",
    description: "Building crypto brands. Narrative strategy, GTM, and 0→1 builds.",
    creator: "@blue_clarity",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LinesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
