import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator.js";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64 flex flex-col gap-3">
      <p className="text-sm text-[var(--fg-2)]">Section above</p>
      <Separator />
      <p className="text-sm text-[var(--fg-2)]">Section below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-64 flex flex-col gap-3">
      <p className="text-sm text-[var(--fg-2)]">Content above</p>
      <Separator label="OR" />
      <p className="text-sm text-[var(--fg-2)]">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-3 h-8">
      <span className="text-sm text-[var(--fg-2)]">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-[var(--fg-2)]">Right</span>
    </div>
  ),
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6 w-72">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[var(--fg-4)]">Horizontal</span>
        <Separator />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[var(--fg-4)]">With label</span>
        <Separator label="OR CONTINUE WITH" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[var(--fg-4)]">Vertical</span>
        <div className="flex items-center gap-3 h-8">
          <span className="text-sm">Item A</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Item B</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Item C</span>
        </div>
      </div>
    </div>
  ),
};
