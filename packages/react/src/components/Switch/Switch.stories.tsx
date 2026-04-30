import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch.js";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Dark mode",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "This option is unavailable",
  },
};

export const Sizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
    </div>
  ),
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch label="Unchecked" />
      <Switch defaultChecked label="Default checked" />
      <Switch checked label="Controlled checked" onChange={() => {}} />
      <Switch disabled label="Disabled unchecked" />
      <Switch checked disabled label="Disabled checked" onChange={() => {}} />
    </div>
  ),
};
