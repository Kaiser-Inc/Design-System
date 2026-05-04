"use client";
import { forwardRef } from "react";
import type { ChangeEvent } from "react";
import { cn } from "../../utils/cn.js";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      placeholder,
      label,
      hint,
      error,
      disabled = false,
      id,
      name,
      className,
    },
    ref
  ) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    const hasError = Boolean(error);

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
      onChange?.(e.target.value);
    }

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-[var(--fg-2)] leading-none"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            name={name}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={handleChange}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
            }
            className={cn(
              "w-full h-10 rounded-[var(--radius-md)] bg-[var(--bg-elevated)]",
              "border border-[var(--border-default)] text-[var(--fg-1)] text-sm",
              "pl-3 pr-9",
              "appearance-none",
              "transition-colors duration-[var(--duration-fast)]",
              "focus:outline-none focus:border-[var(--brand)]",
              "focus:shadow-[var(--shadow-focus)]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              hasError && "border-[var(--danger-500)] focus:shadow-[0_0_0_3px_rgba(247,90,104,0.4)]",
              className
            )}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Chevron icon */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--fg-4)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="text-xs text-[var(--danger-500)]">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${selectId}-hint`} className="text-xs text-[var(--fg-4)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
