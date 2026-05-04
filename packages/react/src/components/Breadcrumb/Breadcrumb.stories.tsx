import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb.js";

const meta: Meta<typeof Breadcrumb> = { title: "Components/Breadcrumb", component: Breadcrumb, tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = { args: { items: [{ label: "Home", href: "#" }, { label: "Projects", href: "#" }, { label: "KaiserInc Design System" }] } };
export const Short: Story = { args: { items: [{ label: "Dashboard", href: "#" }, { label: "Settings" }] } };
export const Single: Story = { args: { items: [{ label: "Dashboard" }] } };
