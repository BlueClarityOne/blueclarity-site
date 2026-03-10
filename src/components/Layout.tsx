import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export function Layout({ children, currentPage }: LayoutProps) {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white relative">
      {/* Subtle grid */}
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
            <Link 
              href="/work" 
              className={`text-sm font-medium transition-colors ${currentPage === 'work' ? 'text-blue-400' : 'text-zinc-400 hover:text-white'}`}
            >
              work
            </Link>
            <Link 
              href="/writing" 
              className={`text-sm font-medium transition-colors ${currentPage === 'writing' ? 'text-blue-400' : 'text-zinc-400 hover:text-white'}`}
            >
              writing
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors ${currentPage === 'contact' ? 'text-blue-400' : 'text-zinc-400 hover:text-white'}`}
            >
              contact
            </Link>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1">
          {children}
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
