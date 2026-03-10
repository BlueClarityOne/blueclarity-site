"use client";

export function LinesBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1628]" />
      
      {/* Simple SVG lines - full viewport */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Right corner lines only */}
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={`r-${i}`}
            x1="100%"
            y1="0"
            x2={`${100 - i * 2.5}%`}
            y2="100%"
            stroke="url(#fadeRight)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
