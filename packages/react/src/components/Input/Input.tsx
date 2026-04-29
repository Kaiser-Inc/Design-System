import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, leftElement, rightElement, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    const hasError = Boolean(error);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--fg-2)] leading-none"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftElement && (
            <span className="absolute left-3 flex items-center text-[var(--fg-4)] pointer-events-none">
              {leftElement}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={cn(
              "w-full h-10 rounded-[var(--radius-md)] bg-[var(--bg-elevated)]",
              "border border-[var(--border-default)] text-[var(--fg-1)] text-sm",
              "placeholder:text-[var(--fg-5)]",
              "transition-colors duration-[var(--duration-fast)]",
              "focus:outline-none focus:border-[var(--brand)]",
              "focus:shadow-[var(--shadow-focus)]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              leftElement ? "pl-9" : "pl-3",
              rightElement ? "pr-9" : "pr-3",
              hasError && "border-[var(--danger-500)] focus:shadow-[0_0_0_3px_rgba(247,90,104,0.4)]",
              className
            )}
            {...props}
          />
          {rightElement && (
            <span className="absolute right-3 flex items-center text-[var(--fg-4)]">
              {rightElement}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-[var(--danger-500)]">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-[var(--fg-4)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
