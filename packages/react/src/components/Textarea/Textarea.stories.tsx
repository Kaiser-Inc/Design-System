import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea.js";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Write something...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Description",
    placeholder: "Enter a brief description...",
  },
};

export const WithHint: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
    hint: "Maximum 280 characters.",
  },
};

export const WithError: Story = {
  args: {
    label: "Message",
    value: "",
    error: "This field is required.",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "Notes",
    value: "This content cannot be edited.",
    disabled: true,
    onChange: () => {},
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Textarea label="Default" placeholder="Write something..." />
      <Textarea label="With hint" placeholder="..." hint="Up to 500 characters." />
      <Textarea
        label="With error"
        value=""
        error="This field cannot be empty."
        onChange={() => {}}
      />
      <Textarea label="Disabled" value="Cannot edit this." disabled onChange={() => {}} />
      <Textarea label="No resize" placeholder="Fixed size..." resize="none" />
    </div>
  ),
};
