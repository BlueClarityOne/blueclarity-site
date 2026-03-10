"use client";

export function LinesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Top-right curved mesh */}
      <svg
        className="absolute -top-20 -right-20 w-[600px] h-[400px] opacity-40"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved horizontal lines */}
        {Array.from({ length: 25 }).map((_, i) => (
          <path
            key={`h-${i}`}
            d={`M 0 ${i * 16} Q 300 ${i * 16 + 40} 600 ${i * 16 - 20}`}
            stroke="url(#meshGradient)"
            strokeWidth="0.8"
            fill="none"
          />
        ))}
        {/* Curved vertical lines */}
        {Array.from({ length: 35 }).map((_, i) => (
          <path
            key={`v-${i}`}
            d={`M ${i * 18} 0 Q ${i * 18 + 20} 200 ${i * 18 - 10} 400`}
            stroke="url(#meshGradient)"
            strokeWidth="0.8"
            fill="none"
          />
        ))}
        <defs>
          <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom-right curved mesh */}
      <svg
        className="absolute -bottom-10 -right-10 w-[500px] h-[350px] opacity-30"
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved horizontal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <path
            key={`h2-${i}`}
            d={`M 0 ${i * 18} Q 250 ${i * 18 - 30} 500 ${i * 18 + 20}`}
            stroke="url(#meshGradient2)"
            strokeWidth="0.8"
            fill="none"
          />
        ))}
        {/* Curved vertical lines */}
        {Array.from({ length: 30 }).map((_, i) => (
          <path
            key={`v2-${i}`}
            d={`M ${i * 17} 0 Q ${i * 17 - 15} 175 ${i * 17 + 10} 350`}
            stroke="url(#meshGradient2)"
            strokeWidth="0.8"
            fill="none"
          />
        ))}
        <defs>
          <linearGradient id="meshGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
