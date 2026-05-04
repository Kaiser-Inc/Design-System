import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton.js";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = { render: () => <div className="space-y-2 w-64"><Skeleton height={16} /><Skeleton height={16} width="75%" /><Skeleton height={16} width="50%" /></div> };
export const Card: Story = { render: () => <div className="w-64 space-y-3"><Skeleton height={160} rounded="lg" /><Skeleton height={16} /><Skeleton height={16} width="66%" /></div> };
export const Avatar: Story = { render: () => <div className="flex items-center gap-3"><Skeleton width={40} height={40} rounded="full" /><div className="space-y-2"><Skeleton width={120} height={14} /><Skeleton width={80} height={12} /></div></div> };
