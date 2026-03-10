"use client";
import { useTheme } from "./ThemeProvider";

export function LinesBackground() {
  const { colors, theme } = useTheme();
  
  const lineColor = theme === "black" ? "#3b82f6" : colors.primary;
  const lineColor2 = theme === "black" ? "#06b6d4" : colors.secondary;
  const bgColor = theme === "black" ? "#000000" : "#0a1628";

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background color */}
      <div className="absolute inset-0" style={{ backgroundColor: bgColor }} />
      
      {/* Right side lines - extending off screen */}
      <svg
        className="absolute -top-32 -right-32 opacity-35"
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 80 }).map((_, i) => (
          <line
            key={`r-${i}`}
            x1="1200"
            y1="0"
            x2={1200 - i * 30}
            y2="1200"
            stroke="url(#lineGrad1)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Left side lines - extending off screen */}
      <svg
        className="absolute -bottom-32 -left-32 opacity-25"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor2} stopOpacity="0.7" />
            <stop offset="100%" stopColor={lineColor2} stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={`l-${i}`}
            x1="0"
            y1="900"
            x2={i * 25}
            y2="0"
            stroke="url(#lineGrad2)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(${lineColor}60 1px, transparent 1px),
            linear-gradient(90deg, ${lineColor}60 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
