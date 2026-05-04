"use client";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center py-12 px-6", className)}>
      <div className="text-[var(--fg-5)] mb-4">{icon ?? <SearchIcon />}</div>
      <h3 className="text-base font-semibold text-[var(--fg-1)] mb-1">{title}</h3>
      {description && <p className="text-sm text-[var(--fg-3)] max-w-sm mb-6">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
