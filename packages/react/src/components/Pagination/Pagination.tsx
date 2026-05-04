"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn.js";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

function getPages(page: number, total: number, sibling: number): (number | "...")[] {
  const range: (number | "...")[] = [];
  const left = Math.max(2, page - sibling);
  const right = Math.min(total - 1, page + sibling);

  range.push(1);
  if (left > 2) range.push("...");
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push("...");
  if (total > 1) range.push(total);

  return range;
}

export function Pagination({ page, totalPages, onPageChange, siblingCount = 1, className }: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = getPages(page, totalPages, siblingCount);

  const btnBase = cn(
    "inline-flex items-center justify-center h-8 min-w-[2rem] px-2",
    "text-sm rounded-[var(--radius-md)]",
    "transition-colors duration-[var(--duration-fast)]",
    "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        className={cn(btnBase, "text-[var(--fg-3)] hover:bg-[var(--bg-elevated)] hover:text-[var(--fg-1)]")}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} aria-hidden="true" />
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="px-2 text-sm text-[var(--fg-4)]">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              btnBase,
              p === page
                ? "bg-[var(--brand)] text-white font-semibold"
                : "text-[var(--fg-3)] hover:bg-[var(--bg-elevated)] hover:text-[var(--fg-1)]"
            )}
          >
            {p}
          </button>
        )
      )}

      <button
        className={cn(btnBase, "text-[var(--fg-3)] hover:bg-[var(--bg-elevated)] hover:text-[var(--fg-1)]")}
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </nav>
  );
}
