import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    colors: "src/js/colors.ts",
    typography: "src/js/typography.ts",
    spacing: "src/js/spacing.ts",
    radii: "src/js/radii.ts",
    shadows: "src/js/shadows.ts",
    motion: "src/js/motion.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
});
