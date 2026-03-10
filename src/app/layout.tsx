import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, ThemeSwitcher } from "@/components/ThemeProvider";
import { LinesBackground } from "@/components/LinesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Clarity | Web3 Marketing & Strategy",
  description: "Building crypto brands. Narrative strategy, GTM, 0→1 builds.",
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
    creator: "@blue_clarity",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0a1628]`}>
        <ThemeProvider>
          <LinesBackground />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
