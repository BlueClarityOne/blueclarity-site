"use client";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function ContactPage() {
  const { colors } = useTheme();

  return (
    <main className="min-h-screen text-white relative z-10 flex flex-col">
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
          <Link href="/contact" className="text-sm font-medium transition-colors" style={{ color: colors.primary }}>contact</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 px-8 py-16 max-w-3xl">
        <div className="mb-4">
          <span className="text-sm font-mono tracking-widest uppercase" style={{ color: colors.primary }}>Get in touch</span>
        </div>
        <h1 className="text-4xl font-light mb-12">Contact</h1>
        
        <p className="text-zinc-400 text-lg leading-relaxed mb-12">
          Available for consulting, advisory, and full-time opportunities in web3 marketing and brand strategy.
        </p>
        
        <div className="space-y-8">
          <div className="border-l-2 pl-6" style={{ borderColor: `${colors.primary}50` }}>
            <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Email</span>
            <p className="mt-1">
              <a href="mailto:hello@blueclarity.xyz" className="transition-colors hover:opacity-80" style={{ color: colors.primary }}>
                hello@blueclarity.xyz
              </a>
            </p>
          </div>
          
          <div className="border-l-2 pl-6" style={{ borderColor: `${colors.primary}50` }}>
            <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">X / Twitter</span>
            <p className="mt-1">
              <a href="https://x.com/blue_clarity" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: colors.primary }}>
                @blue_clarity
              </a>
            </p>
          </div>
          
          <div className="border-l-2 pl-6" style={{ borderColor: `${colors.primary}50` }}>
            <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">LinkedIn</span>
            <p className="mt-1">
              <a href="https://www.linkedin.com/in/matt-f-50189439/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: colors.primary }}>
                Matt Flinders
              </a>
            </p>
          </div>
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
    </main>
  );
}
