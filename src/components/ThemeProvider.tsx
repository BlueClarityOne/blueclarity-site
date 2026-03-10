"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "blue" | "cyan" | "purple" | "green" | "orange";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: {
    primary: string;
    secondary: string;
    gradient: string;
  };
}

const themes = {
  blue: {
    primary: "#3b82f6",
    secondary: "#06b6d4",
    gradient: "from-blue-400 to-cyan-400",
  },
  cyan: {
    primary: "#06b6d4",
    secondary: "#22d3d1",
    gradient: "from-cyan-400 to-teal-400",
  },
  purple: {
    primary: "#8b5cf6",
    secondary: "#d946ef",
    gradient: "from-violet-400 to-fuchsia-400",
  },
  green: {
    primary: "#22c55e",
    secondary: "#84cc16",
    gradient: "from-green-400 to-lime-400",
  },
  orange: {
    primary: "#f97316",
    secondary: "#eab308",
    gradient: "from-orange-400 to-yellow-400",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("blue");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as Theme;
    if (saved && themes[saved]) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme,
    colors: themes[theme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export function ThemeSwitcher() {
  const { theme, setTheme, colors } = useTheme();
  const [open, setOpen] = useState(false);

  const themeOptions: Theme[] = ["blue", "cyan", "purple", "green", "orange"];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-14 right-0 bg-zinc-900/90 backdrop-blur border border-zinc-700 rounded-lg p-3 flex gap-2">
          {themeOptions.map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t);
                setOpen(false);
              }}
              className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                theme === t ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-900" : ""
              }`}
              style={{ backgroundColor: themes[t].primary }}
              title={t.charAt(0).toUpperCase() + t.slice(1)}
            />
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-zinc-900/80 backdrop-blur border border-zinc-700 hover:border-zinc-500 transition-colors"
        style={{ boxShadow: `0 0 20px ${colors.primary}40` }}
      >
        <div
          className="w-6 h-6 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          }}
        />
      </button>
    </div>
  );
}
