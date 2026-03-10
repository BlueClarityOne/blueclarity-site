"use client";
import ReactMarkdown from "react-markdown";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-zinc max-w-none">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-medium mt-12 mb-4 text-white">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-medium mt-8 mb-3 text-white">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-zinc-400 leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-none space-y-2 my-4">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="text-zinc-400 pl-4 border-l-2 border-blue-500/30">{children}</li>
          ),
          em: ({ children }) => (
            <em className="text-zinc-300 italic">{children}</em>
          ),
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-blue-400 hover:text-blue-300 underline">{children}</a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-blue-500 pl-4 italic text-zinc-400">{children}</blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
