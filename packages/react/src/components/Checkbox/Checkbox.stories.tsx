import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox.js";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "I agree",
    onChange: () => {},
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Select all (partial)",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Unavailable option",
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox defaultChecked label="Default checked" />
      <Checkbox checked label="Controlled checked" onChange={() => {}} />
      <Checkbox indeterminate label="Indeterminate" />
      <Checkbox disabled label="Disabled unchecked" />
      <Checkbox checked disabled label="Disabled checked" onChange={() => {}} />
      <div className="flex gap-4 items-center">
        <Checkbox size="sm" label="Small" />
        <Checkbox size="md" label="Medium" />
      </div>
    </div>
  ),
};
