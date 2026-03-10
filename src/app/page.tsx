import Link from "next/link";

export default function Home() {
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
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center px-8 pb-32">
        <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
          Web3 Marketing<br />
          <span className="text-zinc-400">+ Brand Strategy</span>
        </h1>
        <p className="mt-8 text-zinc-500 text-lg">
          Building crypto brands. Based in London.
        </p>
      </div>

      {/* Footer */}
      <footer className="p-8 flex items-center justify-between text-sm text-zinc-400">
        <span>© {new Date().getFullYear()} Blue Clarity</span>
        <div className="flex gap-6">
          <a href="https://x.com/blueclarityone" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
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
