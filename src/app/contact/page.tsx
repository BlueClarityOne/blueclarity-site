import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white relative">
      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav className="flex items-center justify-between p-8">
          <Link href="/" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors tracking-wide">
            BLUE CLARITY
          </Link>
          <div className="flex gap-8">
            <Link href="/work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">work</Link>
            <Link href="/writing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">writing</Link>
            <Link href="/contact" className="text-sm font-medium text-blue-400">contact</Link>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 px-8 py-16 max-w-3xl">
          <div className="mb-4">
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Get in touch</span>
          </div>
          <h1 className="text-4xl font-light mb-12">Contact</h1>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            Available for consulting, advisory, and full-time opportunities in web3 marketing and brand strategy.
          </p>
          
          <div className="space-y-8">
            <div className="border-l-2 border-blue-500/30 pl-6">
              <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Email</span>
              <p className="mt-1">
                <a href="mailto:hello@blueclarity.xyz" className="text-blue-400 hover:text-blue-300 transition-colors">
                  hello@blueclarity.xyz
                </a>
              </p>
            </div>
            
            <div className="border-l-2 border-blue-500/30 pl-6">
              <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">X / Twitter</span>
              <p className="mt-1">
                <a href="https://x.com/blue_clarity" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  @blue_clarity
                </a>
              </p>
            </div>
            
            <div className="border-l-2 border-blue-500/30 pl-6">
              <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">LinkedIn</span>
              <p className="mt-1">
                <a href="https://www.linkedin.com/in/matt-f-50189439/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
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
            <a href="https://x.com/blue_clarity" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors">X</a>
            <a href="https://www.linkedin.com/in/matt-f-50189439/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
