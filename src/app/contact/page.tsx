import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between p-8">
        <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
          about
        </Link>
        <div className="flex gap-8">
          <Link href="/work" className="text-sm font-medium hover:text-blue-600 transition-colors">
            work
          </Link>
          <Link href="/writing" className="text-sm font-medium hover:text-blue-600 transition-colors">
            writing
          </Link>
          <Link href="/contact" className="text-sm font-medium text-blue-600">
            contact
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 px-8 py-16 max-w-3xl">
        <h1 className="text-4xl font-light mb-12">Contact</h1>
        
        <div className="space-y-8">
          <p className="text-zinc-600 text-lg leading-relaxed">
            Available for consulting, advisory, and full-time opportunities in web3 marketing and brand strategy.
          </p>
          
          <div className="space-y-4">
            <div>
              <span className="text-zinc-400 text-sm">Email</span>
              <p>
                <a href="mailto:hello@blueclarity.xyz" className="text-blue-600 hover:underline">
                  hello@blueclarity.xyz
                </a>
              </p>
            </div>
            
            <div>
              <span className="text-zinc-400 text-sm">X / Twitter</span>
              <p>
                <a href="https://x.com/blue_clarity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  @blueclarityone
                </a>
              </p>
            </div>
            
            <div>
              <span className="text-zinc-400 text-sm">LinkedIn</span>
              <p>
                <a href="https://www.linkedin.com/in/matt-f-50189439/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Matt Flinders
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-8 flex items-center justify-between text-sm text-zinc-400">
        <span>© {new Date().getFullYear()} Blue Clarity</span>
        <div className="flex gap-6">
          <a href="https://x.com/blue_clarity" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
            X
          </a>
          <a href="https://www.linkedin.com/in/matt-f-50189439/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
