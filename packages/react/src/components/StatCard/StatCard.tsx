import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export type TrendDirection = "up" | "down" | "neutral";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  trend?: {
    value: string;
    direction: TrendDirection;
  };
  icon?: ReactNode;
  description?: string;
}

const trendClasses: Record<TrendDirection, string> = {
  up: "text-[var(--success-500)]",
  down: "text-[var(--danger-500)]",
  neutral: "text-[var(--fg-4)]",
};

const trendIcons: Record<TrendDirection, string> = {
  up: "↑",
  down: "↓",
  neutral: "→",
};

export function StatCard({
  label,
  value,
  trend,
  icon,
  description,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] bg-[var(--bg-surface)]",
        "border border-[var(--border-subtle)] p-5",
        "flex flex-col gap-3",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--fg-3)]">{label}</span>
        {icon && (
          <span className="flex items-center justify-center h-8 w-8 rounded-[var(--radius-lg)] bg-[var(--brand-subtle)] text-[var(--brand)]">
            {icon}
          </span>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-[var(--fg-1)] leading-none">{value}</span>
        {trend && (
          <span className={cn("text-sm font-medium leading-none mb-0.5", trendClasses[trend.direction])}>
            {trendIcons[trend.direction]} {trend.value}
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-[var(--fg-4)]">{description}</p>
      )}
    </div>
  );
}
