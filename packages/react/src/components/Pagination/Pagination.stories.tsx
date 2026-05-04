import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination.js";

const meta: Meta<typeof Pagination> = { title: "Components/Pagination", component: Pagination, tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div className="space-y-2 text-center">
        <p className="text-sm text-[var(--fg-3)]">Page {page} of 10</p>
        <Pagination page={page} totalPages={10} onPageChange={setPage} />
      </div>
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination page={page} totalPages={20} onPageChange={setPage} />;
  },
};
