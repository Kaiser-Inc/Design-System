import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo.js";

const meta: Meta<typeof Logo> = {
  title: "Brand/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "light", "square"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: { variant: "default", size: "md" },
};

export const Light: Story = {
  args: { variant: "light", size: "md" },
};

export const Square: Story = {
  args: { variant: "square", size: "md" },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6 items-start p-6 bg-[var(--bg-base)] rounded-[var(--radius-lg)]">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[var(--fg-4)] uppercase tracking-widest">Default (transparent bg)</span>
        <Logo variant="default" size="lg" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[var(--fg-4)] uppercase tracking-widest">Light</span>
        <Logo variant="light" size="lg" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[var(--fg-4)] uppercase tracking-widest">Square / Icon</span>
        <Logo variant="square" size="lg" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex flex-col gap-4 items-start p-6 bg-[var(--bg-base)] rounded-[var(--radius-lg)]">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="text-xs text-[var(--fg-4)] w-6">{size}</span>
          <Logo variant="default" size={size} />
        </div>
      ))}
    </div>
  ),
};
