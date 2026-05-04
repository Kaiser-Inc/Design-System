"use client";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children?: ReactNode;
  icon?: ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const variantStyles: Record<
  AlertVariant,
  { container: string; iconColor: string; titleColor: string }
> = {
  info: {
    container: "bg-[var(--brand-subtle)] border-l-4 border-[var(--brand)]",
    iconColor: "text-[var(--brand)]",
    titleColor: "text-[var(--brand)]",
  },
  success: {
    container: "bg-[rgba(0,179,126,0.08)] border-l-4 border-[var(--success-500)]",
    iconColor: "text-[var(--success-500)]",
    titleColor: "text-[var(--success-500)]",
  },
  warning: {
    container: "bg-[rgba(251,169,76,0.08)] border-l-4 border-[var(--warning-500)]",
    iconColor: "text-[var(--warning-500)]",
    titleColor: "text-[var(--warning-500)]",
  },
  danger: {
    container: "bg-[rgba(247,90,104,0.08)] border-l-4 border-[var(--danger-500)]",
    iconColor: "text-[var(--danger-500)]",
    titleColor: "text-[var(--danger-500)]",
  },
};

const defaultIcons: Record<AlertVariant, ReactNode> = {
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  danger: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

export function Alert({
  variant = "info",
  title,
  children,
  icon,
  onDismiss,
  className,
}: AlertProps) {
  const styles = variantStyles[variant];
  const displayIcon = icon !== undefined ? icon : defaultIcons[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex gap-3 rounded-[var(--radius-md)] px-4 py-3",
        styles.container,
        className
      )}
    >
      {displayIcon && (
        <span className={cn("mt-0.5 flex-shrink-0", styles.iconColor)}>
          {displayIcon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <p className={cn("text-sm font-semibold leading-5 mb-0.5", styles.titleColor)}>
            {title}
          </p>
        )}
        {children && (
          <div className="text-sm text-[var(--fg-2)] leading-5">{children}</div>
        )}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className={cn(
            "flex-shrink-0 -mt-0.5 -mr-1 p-1 rounded",
            "text-[var(--fg-4)] hover:text-[var(--fg-2)]",
            "transition-colors duration-[var(--duration-base)]",
            "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]"
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
