"use client";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export interface BreadcrumbItemDef { label: string; href?: string; }

export interface BreadcrumbProps {
  items: BreadcrumbItemDef[];
  separator?: ReactNode;
  className?: string;
}

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export function Breadcrumb({ items, separator, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-1 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-[var(--fg-5)] flex-shrink-0">{separator ?? <ChevronRight />}</span>}
              {item.href && !isLast ? (
                <a href={item.href} className={cn("text-[var(--fg-3)] hover:text-[var(--fg-1)] transition-colors duration-[var(--duration-fast)]", "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] rounded")}>
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? "text-[var(--fg-1)] font-medium" : "text-[var(--fg-3)]"}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
