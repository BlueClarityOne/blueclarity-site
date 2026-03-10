import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function getPosts(): Post[] {
  const postsDir = path.join(process.cwd(), "content/posts");
  
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  
  const posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    
    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled",
      date: data.date || "",
      excerpt: data.excerpt || "",
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function WritingPage() {
  const posts = getPosts();

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
            <Link href="/writing" className="text-sm font-medium text-blue-400">writing</Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">contact</Link>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 px-8 py-16 max-w-3xl">
          <div className="mb-4">
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Thoughts</span>
          </div>
          <h1 className="text-4xl font-light mb-16">Writing</h1>
          
          {posts.length === 0 ? (
            <p className="text-zinc-500">Coming soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="border-l-2 border-blue-500/30 pl-8 py-2 hover:border-blue-400 transition-colors">
                  <Link href={`/writing/${post.slug}`} className="group">
                    <div className="flex items-baseline justify-between mb-2">
                      <h2 className="text-xl font-medium group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <span className="text-sm text-zinc-500 font-mono">{post.date}</span>
                    </div>
                    {post.excerpt && (
                      <p className="text-zinc-400">{post.excerpt}</p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
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
