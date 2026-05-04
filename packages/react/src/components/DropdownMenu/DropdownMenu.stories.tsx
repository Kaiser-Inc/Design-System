import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./DropdownMenu.js";
import { Button } from "../Button/Button.js";

const meta: Meta = { title: "Components/DropdownMenu", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild><Button variant="outline">Options ▾</Button></DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Account</DropdownMenu.Label>
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item destructive>Delete Account</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};
