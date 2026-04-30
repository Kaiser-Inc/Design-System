import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar.js";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "Jane Doe",
    size: "md",
  },
};

export const WithFallback: Story = {
  args: {
    fallback: "Pedro Kaiser",
    size: "md",
  },
};

export const Sizes: Story = {
  args: {
    fallback: "Pedro Kaiser",
    size: "lg",
  },
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="PK" size="sm" />
      <Avatar fallback="PK" size="md" />
      <Avatar fallback="PK" size="lg" />
      <Avatar fallback="PK" size="xl" />
    </div>
  ),
};
