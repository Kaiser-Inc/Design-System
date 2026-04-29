export const shadows = {
  xs: "0 1px 2px rgba(0, 0, 0, 0.25)",
  sm: "0 1px 4px rgba(0, 0, 0, 0.3)",
  md: "0 4px 12px rgba(0, 0, 0, 0.35)",
  lg: "0 8px 24px rgba(0, 0, 0, 0.4)",
  xl: "0 24px 64px rgba(0, 0, 0, 0.55)",
  glow: "0 0 0 4px rgba(130, 87, 230, 0.25)",
  focus: "0 0 0 3px rgba(130, 87, 230, 0.4)",
} as const;

export type Shadows = typeof shadows;
