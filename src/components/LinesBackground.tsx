"use client";
import { useTheme } from "./ThemeProvider";

export function LinesBackground() {
  const { colors } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Right side lines */}
      <svg
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30"
        viewBox="0 0 800 800"
        fill="none"
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={`r-${i}`}
            x1="800"
            y1="0"
            x2={800 - i * 25}
            y2="800"
            stroke={colors.primary}
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        ))}
      </svg>

      {/* Left side lines */}
      <svg
        className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20"
        viewBox="0 0 600 600"
        fill="none"
      >
        {Array.from({ length: 45 }).map((_, i) => (
          <line
            key={`l-${i}`}
            x1="0"
            y1="600"
            x2={i * 20}
            y2="0"
            stroke={colors.secondary}
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        ))}
      </svg>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary}80 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary}80 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
