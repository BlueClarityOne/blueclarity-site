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
          <Link href="/writing" className="text-sm font-medium text-blue-600">
            writing
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            contact
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 px-8 py-16 max-w-3xl">
        <h1 className="text-4xl font-light mb-16">Writing</h1>
        
        {posts.length === 0 ? (
          <p className="text-zinc-500">Coming soon.</p>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-t border-zinc-200 pt-8">
                <Link href={`/writing/${post.slug}`} className="group">
                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="text-xl font-medium group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <span className="text-sm text-zinc-400">{post.date}</span>
                  </div>
                  {post.excerpt && (
                    <p className="text-zinc-500">{post.excerpt}</p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
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
