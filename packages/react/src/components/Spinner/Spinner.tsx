"use client";
import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "default" | "brand" | "white";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
}

const sizeClasses: Record<SpinnerSize, string> = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3",
};

const variantClasses: Record<SpinnerVariant, string> = {
  default: "bg-[var(--fg-3)]",
  brand:   "bg-[var(--brand)]",
  white:   "bg-white",
};

export function Spinner({ size = "md", variant = "brand", label = "Loading", className, ...props }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className={cn("inline-flex items-center gap-1", className)} {...props}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={cn("rounded-full animate-bounce", sizeClasses[size], variantClasses[variant])}
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
        />
      ))}
    </span>
  );
}
