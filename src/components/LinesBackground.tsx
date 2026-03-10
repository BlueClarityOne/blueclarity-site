"use client";
import { useTheme } from "./ThemeProvider";

export function LinesBackground() {
  const { theme } = useTheme();
  const bgColor = theme === "black" ? "#000000" : "#0a1628";

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: bgColor }} />
      
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
          <linearGradient id="fadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Right corner lines */}
        {Array.from({ length: 50 }).map((_, i) => (
          <line
            key={`r-${i}`}
            x1="100%"
            y1="0"
            x2={`${100 - i * 3}%`}
            y2="100%"
            stroke="url(#fadeRight)"
            strokeWidth="1"
          />
        ))}
        
        {/* Left corner lines */}
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={`l-${i}`}
            x1="0"
            y1="100%"
            x2={`${i * 3}%`}
            y2="0"
            stroke="url(#fadeLeft)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
