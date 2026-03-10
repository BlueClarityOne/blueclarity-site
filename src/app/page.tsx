"use client";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { colors } = useTheme();

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav className="flex items-center justify-between p-8">
          <Link 
            href="/" 
            className="text-sm font-medium hover:opacity-80 transition-opacity tracking-wide"
            style={{ color: colors.primary }}
          >
            BLUE CLARITY
          </Link>
          <div className="flex gap-8">
            <Link href="/work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">work</Link>
            <Link href="/writing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">writing</Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">contact</Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center px-8 pb-48 pt-16 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light leading-[1.1] mb-8">
            <span style={{ color: colors.primary }}>Web3 Marketing</span>
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
            >
              & Brand Strategy
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Building crypto brands. Based in London.
          </p>
          
          {/* Accent line */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-16" style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }} />
            <span className="text-zinc-500 text-sm font-mono">EST. 2021</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 flex items-center justify-between text-sm border-t border-zinc-800/50">
          <span className="text-zinc-600">© {new Date().getFullYear()}</span>
          <div className="flex gap-6">
            <a href="https://x.com/blue_clarity" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">X</a>
            <a href="https://www.linkedin.com/in/matt-f-50189439/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
