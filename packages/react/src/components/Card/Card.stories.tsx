import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardBody } from "./Card.js";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Project Alpha</CardTitle>
        </CardHeader>
        <CardBody>
          Dashboard for managing all KaiserInc projects and team members.
        </CardBody>
      </>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <CardHeader>
          <CardTitle>Hoverable Card</CardTitle>
        </CardHeader>
        <CardBody>Hover to see the lift effect.</CardBody>
      </>
    ),
  },
};
