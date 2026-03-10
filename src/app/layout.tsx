import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LinesBackground } from "@/components/LinesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Clarity | Web3 Marketing & Strategy",
  description: "Building crypto brands. Narrative strategy, GTM, 0→1 builds.",
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
