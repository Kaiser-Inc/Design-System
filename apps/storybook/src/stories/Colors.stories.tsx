import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "@kaiserinc/tokens";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Paleta de cores do KaiserInc Design System. Todos os valores são exportados pelo pacote `@kaiserinc/tokens`.",
      },
    },
  },
};

export default meta;

type Scale = Record<string | number, string>;

function ColorSwatch({
  name,
  scale,
  cssPrefix,
}: {
  name: string;
  scale: Scale;
  cssPrefix: string;
}) {
  return (
    <div className="mb-8">
      <h3
        style={{
          color: "var(--fg-2)",
          fontSize: "14px",
          fontWeight: 600,
          textTransform: "capitalize",
          marginBottom: "12px",
        }}
      >
        {name}
      </h3>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {Object.entries(scale).map(([step, value]) => (
          <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <div
              title={`${cssPrefix}-${step}: ${value}`}
              style={{
                width: "64px",
                height: "40px",
                backgroundColor: value,
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            <span style={{ fontSize: "11px", color: "var(--fg-4)" }}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SemanticRow({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
      <div
        style={{
          width: "48px",
          height: "32px",
          backgroundColor: `var(${cssVar})`,
          borderRadius: "6px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />
      <div>
        <div style={{ fontSize: "13px", color: "var(--fg-1)", fontFamily: "monospace" }}>{cssVar}</div>
        <div style={{ fontSize: "12px", color: "var(--fg-4)" }}>{name}</div>
      </div>
    </div>
  );
}

export const Palette: StoryObj = {
  render: () => (
    <div style={{ padding: "32px", backgroundColor: "var(--bg-base)" }}>
      <h2 style={{ color: "var(--fg-1)", fontSize: "20px", fontWeight: 700, marginBottom: "24px" }}>
        Color Palette
      </h2>
      <ColorSwatch name="Purple (Brand)" scale={colors.purple} cssPrefix="--purple" />
      <ColorSwatch name="Gray (Neutral)" scale={colors.gray} cssPrefix="--gray" />
      <ColorSwatch name="Success" scale={colors.success} cssPrefix="--success" />
      <ColorSwatch name="Warning" scale={colors.warning} cssPrefix="--warning" />
      <ColorSwatch name="Danger" scale={colors.danger} cssPrefix="--danger" />
    </div>
  ),
};

export const SemanticTokens: StoryObj = {
  name: "Semantic Tokens",
  render: () => (
    <div style={{ padding: "32px", backgroundColor: "var(--bg-base)" }}>
      <h2 style={{ color: "var(--fg-1)", fontSize: "20px", fontWeight: 700, marginBottom: "24px" }}>
        Semantic Tokens
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
        <div>
          <h4 style={{ color: "var(--fg-3)", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Foreground</h4>
          <SemanticRow name="Primary text" cssVar="--fg-1" />
          <SemanticRow name="Secondary text" cssVar="--fg-2" />
          <SemanticRow name="Tertiary text" cssVar="--fg-3" />
          <SemanticRow name="Placeholder" cssVar="--fg-4" />
          <SemanticRow name="Disabled" cssVar="--fg-5" />
        </div>
        <div>
          <h4 style={{ color: "var(--fg-3)", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Background</h4>
          <SemanticRow name="App shell" cssVar="--bg-base" />
          <SemanticRow name="Cards / panels" cssVar="--bg-surface" />
          <SemanticRow name="Modals / popovers" cssVar="--bg-elevated" />
        </div>
        <div>
          <h4 style={{ color: "var(--fg-3)", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Brand</h4>
          <SemanticRow name="Primary accent" cssVar="--brand" />
          <SemanticRow name="Hover state" cssVar="--brand-hover" />
          <SemanticRow name="Subtle bg" cssVar="--brand-subtle" />
          <SemanticRow name="Muted bg" cssVar="--brand-muted" />
        </div>
      </div>
    </div>
  ),
};
