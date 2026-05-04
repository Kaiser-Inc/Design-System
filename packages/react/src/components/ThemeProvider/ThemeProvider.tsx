"use client";
import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  theme?: Theme;
  onThemeChange?: (theme: Theme) => void;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  theme: controlledTheme,
  onThemeChange,
}: ThemeProviderProps) {
  const isControlled = controlledTheme !== undefined;
  const [internal, setInternal] = useState<Theme>(defaultTheme);
  const theme = isControlled ? controlledTheme : internal;

  const setTheme = useCallback((next: Theme) => {
    if (!isControlled) setInternal(next);
    onThemeChange?.(next);
  }, [isControlled, onThemeChange]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div data-theme={theme} style={{ colorScheme: theme }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
