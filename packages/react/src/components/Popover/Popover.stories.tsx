import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover.js";
import { Button } from "../Button/Button.js";

const meta: Meta = { title: "Components/Popover", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild><Button variant="outline">Open Popover</Button></Popover.Trigger>
      <Popover.Content>
        <div className="p-3 space-y-2">
          <p className="text-sm font-semibold text-[var(--fg-1)]">Popover Title</p>
          <p className="text-xs text-[var(--fg-3)]">This is the popover content. Click outside to close.</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
};
