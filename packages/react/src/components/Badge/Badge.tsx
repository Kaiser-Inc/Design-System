import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

export type BadgeVariant = "default" | "success" | "warning" | "danger" | "brand";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[var(--bg-elevated)] text-[var(--fg-2)] border border-[var(--border-default)]",
  success: "bg-[rgba(0,179,126,0.12)] text-[var(--success-500)] border border-[rgba(0,179,126,0.3)]",
  warning: "bg-[rgba(251,169,76,0.12)] text-[var(--warning-500)] border border-[rgba(251,169,76,0.3)]",
  danger: "bg-[rgba(247,90,104,0.12)] text-[var(--danger-500)] border border-[rgba(247,90,104,0.3)]",
  brand: "bg-[var(--brand-subtle)] text-[var(--brand)] border border-[var(--brand-muted)]",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-1.5 py-0.5 text-xs",
  md: "px-2 py-1 text-xs",
};

export function Badge({
  variant = "default",
  size = "md",
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
