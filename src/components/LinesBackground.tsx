"use client";
import { useTheme } from "./ThemeProvider";

export function LinesBackground() {
  const { colors } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Full screen diagonal lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.4" />
            <stop offset="50%" stopColor={colors.secondary} stopOpacity="0.2" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.secondary} stopOpacity="0.3" />
            <stop offset="50%" stopColor={colors.primary} stopOpacity="0.15" />
            <stop offset="100%" stopColor={colors.secondary} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Lines from top-left to bottom-right */}
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={`tl-${i}`}
            x1={-200 + i * 60}
            y1="0"
            x2={i * 60}
            y2="1000"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
          />
        ))}

        {/* Lines from top-right to bottom-left */}
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={`tr-${i}`}
            x1={1200 - i * 60}
            y1="0"
            x2={1000 - i * 60}
            y2="1000"
            stroke="url(#lineGradient2)"
            strokeWidth="0.5"
          />
        ))}

        {/* Horizontal accent lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={100 + i * 120}
            x2="1000"
            y2={100 + i * 120}
            stroke={colors.primary}
            strokeWidth="0.3"
            strokeOpacity="0.1"
          />
        ))}
      </svg>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary}80 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary}80 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: `radial-gradient(circle, ${colors.secondary}, transparent)`,
        }}
      />
    </div>
  );
}
