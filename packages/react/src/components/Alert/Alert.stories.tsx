import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert.js";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "New update available",
    children: "Version 2.0 is now available. Refresh to get the latest features.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Payment confirmed",
    children: "Your subscription has been activated successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Storage almost full",
    children: "You've used 90% of your storage. Consider upgrading your plan.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Action required",
    children: "Your payment method has expired. Please update it to avoid interruption.",
  },
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
      return (
        <button
          className="text-sm text-[var(--fg-4)]"
          onClick={() => setVisible(true)}
        >
          Show alert again
        </button>
      );
    }
    return (
      <Alert
        variant="info"
        title="Dismissible alert"
        onDismiss={() => setVisible(false)}
      >
        Click the X button to dismiss this alert.
      </Alert>
    );
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info" title="Information" onDismiss={() => {}}>
        This is an informational message.
      </Alert>
      <Alert variant="success" title="Success">
        The operation completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning" onDismiss={() => {}}>
        Please review before continuing.
      </Alert>
      <Alert variant="danger" title="Error">
        Something went wrong. Try again.
      </Alert>
    </div>
  ),
};
