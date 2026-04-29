/**
 * Gera o arquivo dist/v4-theme.css para uso com Tailwind v4.
 * No Tailwind v4 não há preset; o tema é configurado via CSS com @theme.
 *
 * Como usar nos projetos v4:
 *   @import "tailwindcss";
 *   @import "@kaiserinc/tokens/css";
 *   @import "@kaiserinc/tailwind/v4-theme.css";
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "../dist");

const v4Theme = `/* KaiserInc — Tailwind v4 Theme */
/* Gerado automaticamente. Não edite diretamente. */
/* Requer @kaiserinc/tokens/css importado antes. */

@import "@kaiserinc/tokens/css";

@theme {
  /* ─── Fonts ─── */
  --font-sans: Roboto, "Roboto Flex", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "Roboto Mono", "Cascadia Code", "Fira Code", monospace;

  /* ─── Colors — Purple ─── */
  --color-purple-50:  #f1ebff;
  --color-purple-100: #e0d2ff;
  --color-purple-200: #c4acff;
  --color-purple-300: #a78bfa;
  --color-purple-400: #996dff;
  --color-purple-500: #8257e6;
  --color-purple-600: #6938ee;
  --color-purple-700: #5a3fbe;
  --color-purple-800: #402090;
  --color-purple-900: #2a1466;

  /* ─── Colors — Gray ─── */
  --color-gray-50:  #fafafc;
  --color-gray-100: #e1e1e6;
  --color-gray-200: #c4c4cc;
  --color-gray-300: #8d8d99;
  --color-gray-400: #7c7c8a;
  --color-gray-500: #505059;
  --color-gray-600: #323238;
  --color-gray-700: #29292e;
  --color-gray-800: #202024;
  --color-gray-900: #121214;
  --color-gray-950: #09090a;

  /* ─── Colors — Status ─── */
  --color-success-300: #04d361;
  --color-success-500: #00b37e;
  --color-warning-300: #ffca80;
  --color-warning-500: #fba94c;
  --color-danger-300:  #fba1a8;
  --color-danger-500:  #f75a68;

  /* ─── Colors — Semantic (referenciam CSS vars) ─── */
  --color-fg-1: var(--fg-1);
  --color-fg-2: var(--fg-2);
  --color-fg-3: var(--fg-3);
  --color-fg-4: var(--fg-4);
  --color-fg-5: var(--fg-5);
  --color-bg-base:     var(--bg-base);
  --color-bg-surface:  var(--bg-surface);
  --color-bg-elevated: var(--bg-elevated);
  --color-border-subtle:  var(--border-subtle);
  --color-border-default: var(--border-default);
  --color-border-strong:  var(--border-strong);
  --color-brand:        var(--brand);
  --color-brand-subtle: var(--brand-subtle);
  --color-brand-muted:  var(--brand-muted);
  --color-brand-hover:  var(--brand-hover);

  /* ─── Spacing (4px grid) ─── */
  --spacing-px: 1px;
  --spacing-0:  0px;
  --spacing-1:  4px;
  --spacing-2:  8px;
  --spacing-3:  12px;
  --spacing-4:  16px;
  --spacing-5:  20px;
  --spacing-6:  24px;
  --spacing-7:  28px;
  --spacing-8:  32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
  --spacing-32: 128px;

  /* ─── Border Radius ─── */
  --radius-none: 0px;
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:   12px;
  --radius-2xl:  16px;
  --radius-3xl:  24px;
  --radius-pill: 999px;
  --radius-full: 9999px;

  /* ─── Shadows ─── */
  --shadow-xs:    0 1px 2px rgba(0, 0, 0, 0.25);
  --shadow-sm:    0 1px 4px rgba(0, 0, 0, 0.3);
  --shadow-md:    0 4px 12px rgba(0, 0, 0, 0.35);
  --shadow-lg:    0 8px 24px rgba(0, 0, 0, 0.4);
  --shadow-xl:    0 24px 64px rgba(0, 0, 0, 0.55);
  --shadow-glow:  0 0 0 4px rgba(130, 87, 230, 0.25);
  --shadow-focus: 0 0 0 3px rgba(130, 87, 230, 0.4);

  /* ─── Transitions ─── */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast:   120ms;
  --duration-base:   200ms;
  --duration-slow:   320ms;
  --duration-slower: 500ms;
}
`;

mkdirSync(distDir, { recursive: true });
writeFileSync(join(distDir, "v4-theme.css"), v4Theme, "utf-8");

console.log("✓ Tailwind v4 theme CSS generated at dist/v4-theme.css");
