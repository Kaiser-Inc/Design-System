import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input.js";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
    value: "invalid-email",
    error: "Please enter a valid email address.",
    onChange: () => {},
  },
};

export const WithHint: Story = {
  args: {
    label: "Username",
    placeholder: "your_username",
    hint: "Only letters, numbers, and underscores.",
  },
};

export const Disabled: Story = {
  args: {
    label: "API Key",
    value: "sk-xxxxxxxxxxxxxxxxxxxxxxxx",
    disabled: true,
    onChange: () => {},
  },
};

export const WithLeftElement: Story = {
  name: "With Left Element (Search)",
  args: {
    placeholder: "Search...",
    leftElement: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input label="Default" placeholder="Type something..." />
      <Input label="With hint" placeholder="username" hint="Letters and numbers only." />
      <Input
        label="With error"
        placeholder="you@example.com"
        value="bad-value"
        error="This field is required."
        onChange={() => {}}
      />
      <Input label="Disabled" value="Cannot edit" disabled onChange={() => {}} />
      <Input
        placeholder="Search..."
        leftElement={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        }
      />
    </div>
  ),
};
