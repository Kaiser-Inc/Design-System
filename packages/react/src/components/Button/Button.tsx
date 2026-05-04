"use client";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--brand)] text-[var(--fg-1)]",
    "hover:bg-[var(--brand-hover)]",
    "active:bg-[var(--brand-active)]",
    "focus-visible:shadow-[var(--shadow-focus)]",
  ].join(" "),
  secondary: [
    "bg-[var(--bg-elevated)] text-[var(--fg-2)]",
    "border border-[var(--border-default)]",
    "hover:border-[var(--border-strong)] hover:text-[var(--fg-1)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--fg-3)]",
    "hover:bg-[var(--bg-elevated)] hover:text-[var(--fg-1)]",
  ].join(" "),
  danger: [
    "bg-transparent text-[var(--danger-500)]",
    "border border-[var(--danger-500)]",
    "hover:bg-[var(--danger-500)] hover:text-white",
  ].join(" "),
  outline: [
    "bg-transparent text-[var(--brand)]",
    "border border-[var(--brand)]",
    "hover:bg-[var(--brand-subtle)]",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          "inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium",
          "transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]",
          "focus-visible:outline-none",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "select-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : (
          leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
