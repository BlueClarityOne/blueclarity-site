import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Clarity | Web3 Marketing & Strategy",
  description: "Building brands in crypto. Narrative strategy, GTM, 0→1 builds.",
  openGraph: {
    title: "Blue Clarity",
    description: "Web3 Marketing & Strategy",
    url: "https://blueclarity.xyz",
    siteName: "Blue Clarity",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blue Clarity",
    description: "Web3 Marketing & Strategy",
    creator: "@blueclarityone",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
