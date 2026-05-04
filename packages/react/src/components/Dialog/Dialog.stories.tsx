import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog } from "./Dialog.js";
import { Button } from "../Button/Button.js";

const meta: Meta = { title: "Components/Dialog", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild><Button>Open Dialog</Button></Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Confirm Action</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>Are you sure you want to proceed? This action cannot be undone.</Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<"sm" | "md" | "lg" | null>(null);
    return (
      <div className="flex gap-3">
        {(["sm", "md", "lg"] as const).map(s => (
          <Button key={s} variant="outline" onClick={() => setSize(s)}>Open {s.toUpperCase()}</Button>
        ))}
        <Dialog open={size !== null} onOpenChange={() => setSize(null)}>
          <Dialog.Content size={size ?? "md"}>
            <Dialog.Header><Dialog.Title>Dialog {size?.toUpperCase()}</Dialog.Title></Dialog.Header>
            <Dialog.Body><p>This is a {size} dialog.</p></Dialog.Body>
            <Dialog.Footer><Dialog.Close asChild><Button>Close</Button></Dialog.Close></Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </div>
    );
  },
};
