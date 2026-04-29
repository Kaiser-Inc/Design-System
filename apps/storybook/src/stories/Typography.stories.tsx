import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Escala tipográfica do KaiserInc Design System. Fonte principal: **Roboto** (sans) + **Roboto Mono** (mono).",
      },
    },
  },
};

export default meta;

const fontSizeScale = [
  { name: "2xs", size: "10px", var: "--text-2xs", usage: "Labels, captions" },
  { name: "xs",  size: "12px", var: "--text-xs",  usage: "Helper text, badges" },
  { name: "sm",  size: "14px", var: "--text-sm",  usage: "Body secondary, table cells" },
  { name: "base",size: "16px", var: "--text-base", usage: "Body primary" },
  { name: "lg",  size: "18px", var: "--text-lg",  usage: "Lead text" },
  { name: "xl",  size: "20px", var: "--text-xl",  usage: "Card titles, subheadings" },
  { name: "2xl", size: "24px", var: "--text-2xl", usage: "Section headings" },
  { name: "3xl", size: "32px", var: "--text-3xl", usage: "Page headings" },
  { name: "4xl", size: "40px", var: "--text-4xl", usage: "Hero subheadings" },
  { name: "5xl", size: "48px", var: "--text-5xl", usage: "Hero titles" },
  { name: "6xl", size: "64px", var: "--text-6xl", usage: "Display / landing" },
];

export const Scale: StoryObj = {
  render: () => (
    <div style={{ padding: "32px", backgroundColor: "var(--bg-base)" }}>
      <h2 style={{ color: "var(--fg-1)", fontSize: "20px", fontWeight: 700, marginBottom: "24px" }}>
        Font Size Scale
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {fontSizeScale.map((item) => (
          <div key={item.name} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <div style={{ width: "80px", fontSize: "12px", color: "var(--fg-4)", fontFamily: "monospace", flexShrink: 0 }}>
              {item.size}
            </div>
            <div
              style={{
                fontSize: item.size,
                color: "var(--fg-1)",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              KaiserInc — Knowledge & Tech
            </div>
            <div style={{ fontSize: "12px", color: "var(--fg-5)", flexShrink: 0 }}>{item.usage}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Weights: StoryObj = {
  render: () => (
    <div style={{ padding: "32px", backgroundColor: "var(--bg-base)" }}>
      <h2 style={{ color: "var(--fg-1)", fontSize: "20px", fontWeight: 700, marginBottom: "24px" }}>Font Weights</h2>
      {[
        { name: "Regular", weight: 400 },
        { name: "Medium", weight: 500 },
        { name: "Bold", weight: 700 },
        { name: "Black", weight: 900 },
      ].map((item) => (
        <div key={item.weight} style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "80px", fontSize: "12px", color: "var(--fg-4)", fontFamily: "monospace" }}>{item.weight}</span>
            <span style={{ fontSize: "24px", color: "var(--fg-1)", fontFamily: "Roboto, sans-serif", fontWeight: item.weight }}>
              {item.name} — KaiserInc Design System
            </span>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Mono: StoryObj = {
  render: () => (
    <div style={{ padding: "32px", backgroundColor: "var(--bg-base)" }}>
      <h2 style={{ color: "var(--fg-1)", fontSize: "20px", fontWeight: 700, marginBottom: "24px" }}>Monospace (Roboto Mono)</h2>
      <pre style={{
        fontFamily: '"Roboto Mono", monospace',
        fontSize: "14px",
        color: "var(--fg-2)",
        backgroundColor: "var(--bg-elevated)",
        padding: "24px",
        borderRadius: "8px",
        border: "1px solid var(--border-subtle)",
        lineHeight: 1.6,
      }}>
{`import { Button } from "@kaiserinc/react";

export function App() {
  return (
    <Button variant="primary" size="md">
      Get Started
    </Button>
  );
}`}
      </pre>
    </div>
  ),
};
