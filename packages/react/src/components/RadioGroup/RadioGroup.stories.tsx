import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup, RadioItem } from "./RadioGroup.js";

const meta: Meta = { title: "Components/RadioGroup", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState("option1");
    return (
      <RadioGroup label="Choose an option" value={v} onChange={setV}>
        <RadioItem value="option1" label="Option 1" hint="Description for option 1" />
        <RadioItem value="option2" label="Option 2" hint="Description for option 2" />
        <RadioItem value="option3" label="Option 3 (disabled)" disabled />
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup label="Disabled group" value="a" disabled>
      <RadioItem value="a" label="Alpha" />
      <RadioItem value="b" label="Beta" />
    </RadioGroup>
  ),
};
