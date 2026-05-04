import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar.js";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
  </svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const sections = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "#", icon: <HomeIcon />, active: true },
      { label: "Analytics", href: "#", icon: <ChartIcon />, badge: "New" },
      { label: "Users", href: "#", icon: <UsersIcon /> },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", href: "#", icon: <SettingsIcon /> },
    ],
  },
];

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar sections={sections} />
    </div>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar sections={sections} collapsed />
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar
        sections={sections}
        footer={<p className="text-xs text-[var(--fg-5)]">v1.0.0</p>}
      />
    </div>
  ),
};
