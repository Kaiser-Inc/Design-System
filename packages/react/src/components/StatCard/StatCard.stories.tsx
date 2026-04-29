import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard.js";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    label: "Total Revenue",
    value: "R$ 48.290",
    trend: { value: "+12.5%", direction: "up" },
    description: "Compared to last month",
  },
};

export const Negative: Story = {
  args: {
    label: "Churn Rate",
    value: "3.2%",
    trend: { value: "+0.4%", direction: "down" },
    description: "Compared to last month",
  },
};

export const DashboardRow: Story = {
  name: "Dashboard Row",
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-[720px]">
      <StatCard label="Users" value="1,284" trend={{ value: "+8.1%", direction: "up" }} />
      <StatCard label="Revenue" value="R$ 48k" trend={{ value: "+12.5%", direction: "up" }} />
      <StatCard label="Churn" value="3.2%" trend={{ value: "+0.4%", direction: "down" }} />
    </div>
  ),
};
