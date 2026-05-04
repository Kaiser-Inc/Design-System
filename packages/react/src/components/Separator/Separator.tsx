"use client";
import { cn } from "../../utils/cn.js";

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  label?: string;
  className?: string;
}

export function Separator({
  orientation = "horizontal",
  decorative = true,
  label,
  className,
}: SeparatorProps) {
  const ariaProps = decorative
    ? { role: "none" as const }
    : { role: "separator" as const, "aria-orientation": orientation };

  if (orientation === "vertical") {
    return (
      <div
        {...ariaProps}
        className={cn("h-full w-px bg-[var(--border-subtle)] flex-shrink-0", className)}
      />
    );
  }

  if (label) {
    return (
      <div
        {...ariaProps}
        className={cn("flex items-center gap-3 w-full", className)}
      >
        <div className="flex-1 h-px bg-[var(--border-subtle)]" />
        <span className="text-xs text-[var(--fg-4)] whitespace-nowrap select-none">
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--border-subtle)]" />
      </div>
    );
  }

  return (
    <div
      {...ariaProps}
      className={cn("w-full h-px bg-[var(--border-subtle)]", className)}
    />
  );
}
