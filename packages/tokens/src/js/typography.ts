export const fontFamily = {
  sans: ["Roboto", "Roboto Flex", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  mono: ["Roboto Mono", "Cascadia Code", "Fira Code", "monospace"],
} as const;

export const fontSize = {
  "2xs": "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.5rem",
  "5xl": "3rem",
  "6xl": "4rem",
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  bold: "700",
  black: "900",
} as const;

export const lineHeight = {
  tight: "1.1",
  snug: "1.25",
  normal: "1.5",
  loose: "1.6",
} as const;

export const letterSpacing = {
  tight: "-0.03em",
  snug: "-0.01em",
  normal: "0em",
  wide: "0.05em",
  wider: "0.08em",
} as const;

export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
