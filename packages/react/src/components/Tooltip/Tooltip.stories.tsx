import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip.js";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <button className="px-3 py-1.5 text-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--fg-2)]">
        Hover me
      </button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  name: "All Placements",
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-12">
      <div className="flex justify-center">
        <Tooltip content="Top tooltip" placement="top">
          <button className="px-3 py-1.5 text-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--fg-2)]">
            Top
          </button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Bottom tooltip" placement="bottom">
          <button className="px-3 py-1.5 text-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--fg-2)]">
            Bottom
          </button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Left tooltip" placement="left">
          <button className="px-3 py-1.5 text-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--fg-2)]">
            Left
          </button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Right tooltip" placement="right">
          <button className="px-3 py-1.5 text-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--fg-2)]">
            Right
          </button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip content="Appears after 500ms" delay={500}>
      <button className="px-3 py-1.5 text-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--fg-2)]">
        Hover (delayed)
      </button>
    </Tooltip>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tooltip content={<span><strong>Bold</strong> and regular text</span>} placement="bottom">
      <button className="px-3 py-1.5 text-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--fg-2)]">
        Rich tooltip
      </button>
    </Tooltip>
  ),
};
