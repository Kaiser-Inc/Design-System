import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Sheet } from "./Sheet.js";
import { Button } from "../Button/Button.js";

const meta: Meta = { title: "Components/Sheet", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen} placement="right">
        <Sheet.Trigger asChild><Button>Open Right Sheet</Button></Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header><Sheet.Title>Settings</Sheet.Title></Sheet.Header>
          <Sheet.Body><p className="text-sm text-[var(--fg-3)]">Sheet content goes here. This slides in from the right.</p></Sheet.Body>
          <Sheet.Footer><Sheet.Close asChild><Button variant="ghost">Close</Button></Sheet.Close><Button>Save Changes</Button></Sheet.Footer>
        </Sheet.Content>
      </Sheet>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen} placement="left">
        <Sheet.Trigger asChild><Button variant="outline">Open Left Sheet</Button></Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header><Sheet.Title>Navigation</Sheet.Title></Sheet.Header>
          <Sheet.Body><p className="text-sm text-[var(--fg-3)]">Navigation panel content.</p></Sheet.Body>
        </Sheet.Content>
      </Sheet>
    );
  },
};
