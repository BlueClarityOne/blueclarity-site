"use client";

export function LinesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Corner lines radiating from top-right */}
      <svg
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={i}
            x1="800"
            y1="0"
            x2={800 - i * 25}
            y2="800"
            stroke="url(#blueGradient)"
            strokeWidth="1"
          />
        ))}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
}
