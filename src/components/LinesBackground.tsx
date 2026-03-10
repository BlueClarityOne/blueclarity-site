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
      
      {/* Right side lines */}
      <div 
        className="absolute -top-64 -right-64 w-[1400px] h-[1400px] opacity-30"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, black 0%, transparent 70%)',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 1400"
          fill="none"
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <line
              key={`r-${i}`}
              x1="1400"
              y1="0"
              x2={1400 - i * 28}
              y2="1400"
              stroke={lineColor}
              strokeWidth="1"
              strokeOpacity="0.7"
            />
          ))}
        </svg>
      </div>

      {/* Left side lines */}
      <div 
        className="absolute -bottom-64 -left-64 w-[1100px] h-[1100px] opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 80% at 0% 100%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 0% 100%, black 0%, transparent 70%)',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1100 1100"
          fill="none"
        >
          {Array.from({ length: 80 }).map((_, i) => (
            <line
              key={`l-${i}`}
              x1="0"
              y1="1100"
              x2={i * 22}
              y2="0"
              stroke={lineColor2}
              strokeWidth="1"
              strokeOpacity="0.6"
            />
          ))}
        </svg>
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
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
