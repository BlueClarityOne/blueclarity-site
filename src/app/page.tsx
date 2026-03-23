"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav className="flex items-center justify-between p-8">
          <Link 
            href="/" 
            className="text-sm font-medium hover:opacity-80 transition-opacity tracking-wide text-blue-400"
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
        <div className="flex-1 flex flex-col justify-start px-8 pt-24 md:pt-32 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light leading-[1.1] mb-8">
            <span className="animate-gradient-text bg-gradient-to-r from-blue-400 via-cyan-400 via-purple-400 via-orange-400 to-blue-400 bg-[length:300%_100%] bg-clip-text text-transparent">
              Web3 Marketing
            </span>
            <br />
            <span className="animate-gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 via-orange-400 via-blue-400 to-cyan-400 bg-[length:300%_100%] bg-clip-text text-transparent" style={{ animationDelay: '0.5s' }}>
              & Brand Strategy
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Building crypto brands. Based in London.
          </p>
          
          {/* CTA Button */}
          <div className="mt-12">
            <a 
              href="mailto:claritydatainsights@gmail.com?subject=Enquiry" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Enquire
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          {/* Accent line */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-500" />
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

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
    </main>
  );
}
