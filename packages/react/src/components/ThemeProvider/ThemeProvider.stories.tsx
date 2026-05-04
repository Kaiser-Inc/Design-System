import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, useTheme } from "./ThemeProvider.js";
import { Button } from "../Button/Button.js";

const meta: Meta<typeof ThemeProvider> = {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof ThemeProvider>;

function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
      <p className="text-sm text-[var(--fg-2)]">Current theme: <strong className="text-[var(--fg-1)]">{theme}</strong></p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <ThemeDemo />
    </ThemeProvider>
  ),
};
