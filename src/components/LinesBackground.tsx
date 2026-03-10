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
        className="absolute -top-32 -right-32 w-[1000px] h-[1000px] opacity-50"
        style={{
          maskImage: 'radial-gradient(ellipse 100% 100% at 100% 0%, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 100% 0%, black 0%, transparent 80%)',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          {Array.from({ length: 70 }).map((_, i) => (
            <line
              key={`r-${i}`}
              x1="1000"
              y1="0"
              x2={1000 - i * 20}
              y2="1000"
              stroke={lineColor}
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
          ))}
        </svg>
      </div>

      {/* Left side lines */}
      <div 
        className="absolute -bottom-32 -left-32 w-[800px] h-[800px] opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 100% 100% at 0% 100%, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 0% 100%, black 0%, transparent 80%)',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          fill="none"
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <line
              key={`l-${i}`}
              x1="0"
              y1="800"
              x2={i * 20}
              y2="0"
              stroke={lineColor2}
              strokeWidth="1.5"
              strokeOpacity="0.7"
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
