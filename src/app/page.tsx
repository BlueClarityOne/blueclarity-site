import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white relative overflow-hidden">
      {/* Geometric Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Precision lines radiating from corner */}
          {Array.from({ length: 60 }).map((_, i) => (
            <line
              key={i}
              x1="800"
              y1="0"
              x2={800 - i * 25}
              y2="800"
              stroke="url(#blueGradient)"
              strokeWidth="1"
            />
          ))}
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav className="flex items-center justify-between p-8">
          <Link href="/" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors tracking-wide">
            BLUE CLARITY
          </Link>
          <div className="flex gap-8">
            <Link href="/work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              work
            </Link>
            <Link href="/writing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              writing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              contact
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center px-8 pb-32 max-w-4xl">
          <div className="mb-6">
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">
              Web3 Marketing
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8">
            Brand Strategy
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              + Market Positioning
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Building crypto brands. Based in London.
          </p>
          
          {/* Accent line */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <span className="text-zinc-500 text-sm font-mono">EST. 2021</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 flex items-center justify-between text-sm border-t border-zinc-800/50">
          <span className="text-zinc-600">© {new Date().getFullYear()}</span>
          <div className="flex gap-6">
            <a 
              href="https://x.com/blue_clarity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              X
            </a>
            <a 
              href="https://www.linkedin.com/in/matt-f-50189439/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
