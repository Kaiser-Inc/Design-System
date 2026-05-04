import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion.js";

const meta: Meta = { title: "Components/Accordion", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Accordion defaultOpen="q1">
        <Accordion.Item value="q1">
          <Accordion.Trigger>What is KaiserInc Design System?</Accordion.Trigger>
          <Accordion.Content>React component library built with Tailwind CSS and design tokens for consistent UI.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q2">
          <Accordion.Trigger>How do I install it?</Accordion.Trigger>
          <Accordion.Content>Run <code>pnpm add @kaiserinc/react</code> and import components directly.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q3">
          <Accordion.Trigger>Compatible with Next.js App Router?</Accordion.Trigger>
          <Accordion.Content>Yes — all components include <code>"use client"</code> directive.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-96">
      <Accordion multiple>
        <Accordion.Item value="a"><Accordion.Trigger>Panel A</Accordion.Trigger><Accordion.Content>Multiple panels can be open at once.</Accordion.Content></Accordion.Item>
        <Accordion.Item value="b"><Accordion.Trigger>Panel B</Accordion.Trigger><Accordion.Content>Content B.</Accordion.Content></Accordion.Item>
        <Accordion.Item value="c"><Accordion.Trigger>Panel C</Accordion.Trigger><Accordion.Content>Content C.</Accordion.Content></Accordion.Item>
      </Accordion>
    </div>
  ),
};
