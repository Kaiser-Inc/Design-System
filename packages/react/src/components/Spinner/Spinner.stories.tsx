import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner.js";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: "md", variant: "default" },
};

export const Brand: Story = {
  args: { size: "md", variant: "brand" },
};

export const White: Story = {
  args: { size: "md", variant: "white" },
  parameters: { backgrounds: { default: "dark" } },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" label="Small spinner" />
      <Spinner size="md" label="Medium spinner" />
      <Spinner size="lg" label="Large spinner" />
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <p className="flex items-center gap-2 text-sm text-[var(--fg-2)]">
      <Spinner size="sm" />
      Loading data, please wait…
    </p>
  ),
};
