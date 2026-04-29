import type { Config } from "tailwindcss";
import { colors, spacing, radii, shadows, fontFamily, fontSize, fontWeight } from "@kaiserinc/tokens";

/**
 * KaiserInc Tailwind v3 preset.
 * Para Tailwind v4, use `@import "@kaiserinc/tailwind/v4-theme.css"` no seu CSS.
 */
export const kaiserPreset: Partial<Config> = {
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
        mono: [...fontFamily.mono],
      },
      fontSize: Object.fromEntries(Object.entries(fontSize).map(([k, v]) => [k, v])),
      fontWeight: fontWeight,
      colors: {
        purple: colors.purple,
        gray: colors.gray,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
        // Semantic tokens — referenciam CSS vars para suporte a dark/light mode
        fg: {
          1: "var(--fg-1)",
          2: "var(--fg-2)",
          3: "var(--fg-3)",
          4: "var(--fg-4)",
          5: "var(--fg-5)",
        },
        bg: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
        },
        border: {
          subtle: "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
        },
        brand: {
          subtle: "var(--brand-subtle)",
          muted: "var(--brand-muted)",
          DEFAULT: "var(--brand)",
          hover: "var(--brand-hover)",
          active: "var(--brand-active)",
        },
      },
      spacing: Object.fromEntries(
        Object.entries(spacing).map(([k, v]) => [k, v])
      ),
      borderRadius: {
        none: radii.none,
        xs: radii.xs,
        sm: radii.sm,
        DEFAULT: radii.md,
        md: radii.md,
        lg: radii.lg,
        xl: radii.xl,
        "2xl": radii["2xl"],
        "3xl": radii["3xl"],
        pill: radii.pill,
        full: radii.full,
      },
      boxShadow: shadows,
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.22, 1, 0.36, 1)",
        "ease-in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        fast: "120ms",
        base: "200ms",
        slow: "320ms",
        slower: "500ms",
      },
    },
  },
};

export default kaiserPreset;
