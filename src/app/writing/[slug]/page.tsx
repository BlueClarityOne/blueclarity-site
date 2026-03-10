import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/posts", `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  
  return {
    title: data.title || "Untitled",
    date: data.date || "",
    content,
  };
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/posts");
  
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

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
      <article className="flex-1 px-8 py-16 max-w-3xl">
        <Link href="/writing" className="text-sm text-zinc-400 hover:text-blue-600 mb-8 inline-block">
          ← Back to writing
        </Link>
        
        <header className="mb-12">
          <time className="text-sm text-zinc-400">{post.date}</time>
          <h1 className="text-4xl font-light mt-2">{post.title}</h1>
        </header>

        <div className="prose prose-zinc max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (!paragraph.trim()) return null;
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-medium mt-12 mb-4">{paragraph.slice(3)}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={i} className="text-xl font-medium mt-8 mb-3">{paragraph.slice(4)}</h3>;
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc list-inside space-y-2 my-4 text-zinc-600">
                  {items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}
                </ul>
              );
            }
            return <p key={i} className="text-zinc-600 leading-relaxed mb-4">{paragraph}</p>;
          })}
        </div>
      </article>

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
