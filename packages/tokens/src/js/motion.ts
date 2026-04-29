export const easing = {
  linear: "linear",
  in: "cubic-bezier(0.65, 0, 0.35, 1)",
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

export const duration = {
  instant: "0ms",
  fast: "120ms",
  base: "200ms",
  slow: "320ms",
  slower: "500ms",
} as const;

export type Easing = typeof easing;
export type Duration = typeof duration;
