import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./Toaster.js";
import { toast } from "sonner";
import { Button } from "../Button/Button.js";

const meta: Meta = { title: "Components/Toaster", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toaster />
      <Button onClick={() => toast("Default notification")}>Default Toast</Button>
      <Button onClick={() => toast.success("Saved successfully!")} variant="secondary">Success Toast</Button>
      <Button onClick={() => toast.error("Something went wrong")} variant="danger">Error Toast</Button>
      <Button onClick={() => toast.warning("Please review your input")} variant="outline">Warning Toast</Button>
      <Button onClick={() => toast.info("New updates available")} variant="ghost">Info Toast</Button>
      <Button onClick={() => toast.promise(new Promise(r => setTimeout(r, 2000)), { loading: "Saving...", success: "Done!", error: "Failed" })} variant="outline">
        Promise Toast
      </Button>
    </div>
  ),
};
