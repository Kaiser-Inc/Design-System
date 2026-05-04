import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "./TopBar.js";
import { Button } from "../Button/Button.js";
import { Avatar } from "../Avatar/Avatar.js";

const meta: Meta<typeof TopBar> = {
  title: "Components/TopBar",
  component: TopBar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    breadcrumb: [{ label: "Home", href: "#" }, { label: "Dashboard" }],
    actions: (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="ghost">Help</Button>
        <Avatar fallback="AS" size="sm" />
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: { title: "Settings" },
};

export const WithActions: Story = {
  render: () => (
    <TopBar
      title="Projects"
      breadcrumb={[{ label: "Home", href: "#" }, { label: "Projects" }]}
      actions={
        <div className="flex items-center gap-2">
          <Button size="sm" variant="secondary">Import</Button>
          <Button size="sm">New Project</Button>
        </div>
      }
    />
  ),
};
