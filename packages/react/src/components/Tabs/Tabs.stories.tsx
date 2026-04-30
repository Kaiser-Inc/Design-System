import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs.js";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="analytics">Analytics</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        <TabPanel value="overview">
          <p className="text-sm text-[var(--fg-2)]">
            This is the Overview tab content.
          </p>
        </TabPanel>
        <TabPanel value="analytics">
          <p className="text-sm text-[var(--fg-2)]">
            Analytics data will appear here.
          </p>
        </TabPanel>
        <TabPanel value="settings">
          <p className="text-sm text-[var(--fg-2)]">
            Configure your settings here.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="active">
        <TabList>
          <Tab value="active">Active</Tab>
          <Tab value="disabled" disabled>Disabled</Tab>
          <Tab value="another">Another</Tab>
        </TabList>
        <TabPanel value="active">
          <p className="text-sm text-[var(--fg-2)]">Active tab content.</p>
        </TabPanel>
        <TabPanel value="another">
          <p className="text-sm text-[var(--fg-2)]">Another tab content.</p>
        </TabPanel>
      </Tabs>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    // This would require useState — shown as a static render for illustration
    return (
      <div className="w-96">
        <Tabs value="tab2" onChange={() => {}}>
          <TabList>
            <Tab value="tab1">Tab One</Tab>
            <Tab value="tab2">Tab Two</Tab>
            <Tab value="tab3">Tab Three</Tab>
          </TabList>
          <TabPanel value="tab1">Content for tab one.</TabPanel>
          <TabPanel value="tab2">
            <p className="text-sm text-[var(--fg-2)]">Tab Two is active (controlled).</p>
          </TabPanel>
          <TabPanel value="tab3">Content for tab three.</TabPanel>
        </Tabs>
      </div>
    );
  },
};
