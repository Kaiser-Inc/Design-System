import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

export type TextareaResize = "none" | "vertical" | "both";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  resize?: TextareaResize;
}

const resizeClass: Record<TextareaResize, string> = {
  none: "resize-none",
  vertical: "resize-y",
  both: "resize",
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, resize = "vertical", className, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    const hasError = Boolean(error);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-[var(--fg-2)] leading-none"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
          }
          className={cn(
            "w-full min-h-[80px] rounded-[var(--radius-md)] bg-[var(--bg-elevated)]",
            "border border-[var(--border-default)] text-[var(--fg-1)] text-sm",
            "px-3 py-2",
            "placeholder:text-[var(--fg-5)]",
            "transition-colors duration-[var(--duration-fast)]",
            "focus:outline-none focus:border-[var(--brand)]",
            "focus:shadow-[var(--shadow-focus)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            resizeClass[resize],
            hasError && "border-[var(--danger-500)] focus:shadow-[0_0_0_3px_rgba(247,90,104,0.4)]",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-xs text-[var(--danger-500)]">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="text-xs text-[var(--fg-4)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
