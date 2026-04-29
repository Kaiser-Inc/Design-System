import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "../src/css");
const distDir = join(__dirname, "../dist");

const cssFiles = [
  "colors.css",
  "typography.css",
  "spacing.css",
  "radii.css",
  "shadows.css",
  "motion.css",
];

const banner = `/* KaiserInc Design Tokens — @kaiserinc/tokens */\n/* Gerado automaticamente. Não edite diretamente. */\n\n`;

const combined =
  banner +
  cssFiles
    .map((file) => {
      const content = readFileSync(join(srcDir, file), "utf-8");
      return `/* === ${file} === */\n${content.trim()}`;
    })
    .join("\n\n");

mkdirSync(distDir, { recursive: true });
writeFileSync(join(distDir, "index.css"), combined, "utf-8");

console.log("✓ CSS tokens bundled to dist/index.css");
