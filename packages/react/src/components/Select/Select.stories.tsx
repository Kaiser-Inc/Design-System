import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select.js";

const FRAMEWORKS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: FRAMEWORKS,
    placeholder: "Select a framework...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Framework",
    options: FRAMEWORKS,
    placeholder: "Select a framework...",
  },
};

export const WithHint: Story = {
  args: {
    label: "Framework",
    options: FRAMEWORKS,
    defaultValue: "react",
    hint: "Choose the framework for your project.",
  },
};

export const WithError: Story = {
  args: {
    label: "Framework",
    options: FRAMEWORKS,
    value: "",
    error: "Please select a framework.",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "Framework",
    options: FRAMEWORKS,
    value: "react",
    disabled: true,
    onChange: () => {},
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Select label="Default" options={FRAMEWORKS} placeholder="Choose..." />
      <Select label="With hint" options={FRAMEWORKS} defaultValue="vue" hint="Select your preferred framework." />
      <Select label="With error" options={FRAMEWORKS} value="" error="Selection is required." onChange={() => {}} />
      <Select label="Disabled" options={FRAMEWORKS} value="react" disabled onChange={() => {}} />
    </div>
  ),
};
