"use client";
import Link from "next/link";

const work = [
  {
    company: "LayerZero Labs",
    role: "Marketing & Social Lead",
    period: "2025 – 2026",
    description: "Led partner GTM across 50+ co-marketing activations. Scaled LinkedIn, YouTube, paid with consecutive monthly highs.",
  },
  {
    company: "Stargate Finance",
    role: "Narrative Lead / First Marketing Hire",
    period: "2025",
    description: "Built marketing from scratch. Repositioned from 'omnichain transport protocol' to 'global liquidity layer'. Full brand revitalisation.",
  },
  {
    company: "Trader Joe (LFJ)",
    role: "Founding Marketing Lead",
    period: "2021 – 2025",
    description: "3rd hire. Built marketing team to 6. Grew from 5k to 150k+ tokenholders. >80% Avalanche DEX market share at peak.",
  },
];

export default function WorkPage() {
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
            <Link href="/work" className="text-sm font-medium text-blue-400">work</Link>
            <Link href="/writing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">writing</Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">contact</Link>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 px-8 py-16 max-w-4xl">
          <div className="mb-4">
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Experience</span>
          </div>
          <h1 className="text-4xl font-light mb-16">Work</h1>
          
          <div className="space-y-12">
            {work.map((item, i) => (
              <div key={i} className="border-l-2 border-blue-500/30 pl-8 py-2 hover:border-blue-400 transition-colors">
                <div className="flex items-baseline justify-between mb-2">
                  <h2 className="text-xl font-medium">{item.company}</h2>
                  <span className="text-sm text-zinc-500 font-mono">{item.period}</span>
                </div>
                <p className="text-blue-400 text-sm mb-3">{item.role}</p>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
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
