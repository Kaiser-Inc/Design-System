import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress.js";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 60,
    label: "Upload progress",
    showValue: true,
  },
};

export const Variants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Progress value={65} variant="default" label="Default" showValue />
      <Progress value={82} variant="success" label="Success" showValue />
      <Progress value={38} variant="warning" label="Warning" showValue />
      <Progress value={15} variant="danger" label="Danger" showValue />
    </div>
  ),
};

export const Sizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Progress value={50} size="sm" label="Small" />
      <Progress value={50} size="md" label="Medium" />
      <Progress value={50} size="lg" label="Large" />
    </div>
  ),
};

export const EdgeCases: Story = {
  name: "Edge Cases",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Progress value={0} label="Not started" showValue />
      <Progress value={50} label="In progress" showValue />
      <Progress value={100} variant="success" label="Complete" showValue />
    </div>
  ),
};
