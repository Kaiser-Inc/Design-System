import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    base: "src/base.ts",
    react: "src/react.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["eslint", "typescript"],
});
