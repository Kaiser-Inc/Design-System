import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table.js";
import { Badge } from "../Badge/Badge.js";

const meta: Meta = { title: "Components/Table", tags: ["autodocs"], parameters: { layout: "padded" } };
export default meta;
type Story = StoryObj;

const users = [
  { name: "Alice Silva", email: "alice@ex.com", role: "Admin", status: "active" },
  { name: "Bob Santos", email: "bob@ex.com", role: "Editor", status: "inactive" },
  { name: "Carol Lima", email: "carol@ex.com", role: "Viewer", status: "active" },
  { name: "David Reis", email: "david@ex.com", role: "Editor", status: "pending" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Header><Table.Row><Table.Head>Name</Table.Head><Table.Head>Email</Table.Head><Table.Head>Role</Table.Head><Table.Head>Status</Table.Head></Table.Row></Table.Header>
      <Table.Body>
        {users.map((u, i) => (
          <Table.Row key={i} index={i}>
            <Table.Cell className="font-medium text-[var(--fg-1)]">{u.name}</Table.Cell>
            <Table.Cell>{u.email}</Table.Cell>
            <Table.Cell>{u.role}</Table.Cell>
            <Table.Cell><Badge variant={u.status === "active" ? "success" : u.status === "pending" ? "warning" : "default"}>{u.status}</Badge></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table striped hoverable>
      <Table.Header><Table.Row><Table.Head>Name</Table.Head><Table.Head>Email</Table.Head><Table.Head>Role</Table.Head></Table.Row></Table.Header>
      <Table.Body>
        {users.map((u, i) => (
          <Table.Row key={i} index={i}><Table.Cell>{u.name}</Table.Cell><Table.Cell>{u.email}</Table.Cell><Table.Cell>{u.role}</Table.Cell></Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};
