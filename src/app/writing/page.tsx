import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WritingClient from "./WritingClient";

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
  return <WritingClient posts={posts} />;
}
