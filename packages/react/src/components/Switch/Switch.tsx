"use client";
import { forwardRef, useState, useId } from "react";
import { cn } from "../../utils/cn.js";

export type SwitchSize = "sm" | "md";

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: SwitchSize;
  id?: string;
  className?: string;
}

const trackSize: Record<SwitchSize, string> = {
  sm: "w-8 h-4",
  md: "w-11 h-6",
};

const thumbSize: Record<SwitchSize, string> = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
};

const thumbTranslate: Record<SwitchSize, { on: string; off: string }> = {
  sm: { on: "translate-x-4", off: "translate-x-0.5" },
  md: { on: "translate-x-6", off: "translate-x-1" },
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onChange,
      disabled = false,
      label,
      size = "md",
      id,
      className,
    },
    ref
  ) => {
    const generatedId = useId();
    const switchId = id ?? generatedId;

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = isControlled ? checked : internalChecked;

    function handleClick() {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    }

    return (
      <div className={cn("inline-flex items-center gap-2", className)}>
        <button
          ref={ref}
          id={switchId}
          type="button"
          role="switch"
          aria-checked={isChecked}
          disabled={disabled}
          onClick={handleClick}
          className={cn(
            "relative inline-flex flex-shrink-0 items-center rounded-full",
            "transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)]",
            "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            trackSize[size],
            isChecked ? "bg-[var(--brand)]" : "bg-[var(--border-default)]"
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "rounded-full bg-white shadow transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)]",
              thumbSize[size],
              isChecked ? thumbTranslate[size].on : thumbTranslate[size].off
            )}
          />
        </button>
        {label && (
          <label
            htmlFor={switchId}
            className={cn(
              "text-sm text-[var(--fg-2)] leading-none select-none",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";
