"use client";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

interface Post {
  title: string;
  date: string;
  content: string;
}

export default function PostClient({ post }: { post: Post }) {
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
          <Link href="/writing" className="text-sm font-medium transition-colors" style={{ color: colors.primary }}>writing</Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">contact</Link>
        </div>
      </nav>

      {/* Content */}
      <article className="flex-1 px-8 py-16 max-w-3xl">
        <Link 
          href="/writing" 
          className="text-sm text-zinc-500 hover:opacity-80 mb-8 inline-flex items-center gap-2 transition-colors"
        >
          <span>←</span> Back to writing
        </Link>
        
        <header className="mb-12 mt-8">
          <span className="text-sm text-zinc-500 font-mono">{post.date}</span>
          <h1 className="text-4xl font-light mt-2">{post.title}</h1>
        </header>

        <div className="prose prose-invert prose-zinc max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (!paragraph.trim()) return null;
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-medium mt-12 mb-4 text-white">{paragraph.slice(3)}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={i} className="text-xl font-medium mt-8 mb-3 text-white">{paragraph.slice(4)}</h3>;
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="list-none space-y-2 my-4">
                  {items.map((item, j) => (
                    <li 
                      key={j} 
                      className="text-zinc-400 pl-4 border-l-2"
                      style={{ borderColor: `${colors.primary}50` }}
                    >
                      {item.slice(2)}
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i} className="text-zinc-400 leading-relaxed mb-4">{paragraph}</p>;
          })}
        </div>
      </article>

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
