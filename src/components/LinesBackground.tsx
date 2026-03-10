"use client";
import { useTheme } from "./ThemeProvider";

export function LinesBackground() {
  const { colors, theme } = useTheme();
  
  // Use blue colors for lines regardless of theme (visible on all backgrounds)
  const lineColor = theme === "black" ? "#3b82f6" : colors.primary;
  const lineColor2 = theme === "black" ? "#06b6d4" : colors.secondary;
  const bgColor = theme === "black" ? "#000000" : "#0a1628";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background color */}
      <div className="absolute inset-0" style={{ backgroundColor: bgColor }} />
      {/* Right side lines */}
      <svg
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-40"
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
            stroke={lineColor}
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        ))}
      </svg>

      {/* Left side lines */}
      <svg
        className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-30"
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
            stroke={lineColor2}
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        ))}
      </svg>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(${lineColor}80 1px, transparent 1px),
            linear-gradient(90deg, ${lineColor}80 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
