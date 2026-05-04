import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState.js";
import { Button } from "../Button/Button.js";

const meta: Meta<typeof EmptyState> = { title: "Components/EmptyState", component: EmptyState, tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = { args: { title: "No results found", description: "Try adjusting your search or filter to find what you're looking for." } };
export const WithAction: Story = { args: { title: "No projects yet", description: "Get started by creating your first project.", action: <Button>Create Project</Button> } };
export const Minimal: Story = { args: { title: "Nothing here" } };
