"use client";
import { useState, useRef, useEffect, useId, useCallback } from "react";
import type { KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
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

export function Select({
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
}: SelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  const listboxId = `${selectId}-listbox`;

  // controlled vs uncontrolled
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const current = value !== undefined ? value : internalValue;

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const hasError = Boolean(error);
  const selectedOption = options.find((o) => o.value === current);
  const displayLabel = selectedOption?.label ?? "";
  const showPlaceholder = !selectedOption;

  // close on outside click
  useEffect(() => {
    if (!open) return;
    function handleMouseDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const select = useCallback((val: string) => {
    if (value === undefined) setInternalValue(val);
    onChange?.(val);
    setOpen(false);
    triggerRef.current?.focus();
  }, [value, onChange]);

  function handleTriggerKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        const items = listRef.current?.querySelectorAll<HTMLElement>('[role="option"]:not([aria-disabled="true"])');
        const active = listRef.current?.querySelector<HTMLElement>('[role="option"][aria-selected="true"]');
        (active ?? items?.[0])?.focus();
      });
    }
  }

  function handleListKeyDown(e: KeyboardEvent<HTMLUListElement>) {
    const items = Array.from(
      listRef.current?.querySelectorAll<HTMLElement>('[role="option"]:not([aria-disabled="true"])') ?? []
    );
    const idx = items.indexOf(document.activeElement as HTMLElement);

    if (e.key === "ArrowDown") { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }
    if (e.key === "ArrowUp")   { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
    if (e.key === "Home")      { e.preventDefault(); items[0]?.focus(); }
    if (e.key === "End")       { e.preventDefault(); items[items.length - 1]?.focus(); }
    if (e.key === "Tab")       { setOpen(false); }
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

      <div ref={rootRef} style={{ position: "relative" }} className={className}>
        {/* Hidden input for form submit */}
        {name && <input type="hidden" name={name} value={current} />}

        {/* Trigger */}
        <button
          ref={triggerRef}
          id={selectId}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
          }
          disabled={disabled}
          onClick={() => !disabled && setOpen((v) => !v)}
          onKeyDown={handleTriggerKeyDown}
          className={cn(
            "h-11 w-full min-w-[180px] flex items-center justify-between",
            "rounded-[var(--radius-md)] bg-[var(--bg-elevated)]",
            "border border-[var(--border-default)]",
            "text-sm pl-4 pr-3 text-left",
            "transition-colors duration-[var(--duration-fast)]",
            "focus:outline-none focus:border-[var(--brand)] focus:shadow-[var(--shadow-focus)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            hasError && "border-[var(--danger-500)] focus:shadow-[0_0_0_3px_rgba(247,90,104,0.4)]",
            showPlaceholder ? "text-[var(--fg-4)]" : "text-[var(--fg-1)]"
          )}
        >
          <span className="truncate">
            {showPlaceholder ? (placeholder ?? "Select…") : displayLabel}
          </span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={cn(
              "flex-shrink-0 text-[var(--fg-4)] transition-transform duration-[var(--duration-fast)]",
              open && "rotate-180"
            )}
          />
        </button>

        {/* Listbox */}
        {open && (
          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            aria-label={label}
            onKeyDown={handleListKeyDown}
            className={cn(
              "absolute top-full mt-1 z-50 w-full min-w-[180px]",
              "bg-[var(--bg-surface)] border border-[var(--border-default)]",
              "rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]",
              "py-1.5 max-h-60 overflow-y-auto",
              "focus:outline-none"
            )}
          >
            {options.map((option) => {
              const isSelected = option.value === current;
              const isDisabled = Boolean(option.disabled);
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={isDisabled}
                  tabIndex={isDisabled ? -1 : 0}
                  onClick={() => !isDisabled && select(option.value)}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
                      e.preventDefault();
                      select(option.value);
                    }
                  }}
                  className={cn(
                    "flex items-center px-4 py-2.5 text-sm cursor-pointer",
                    "transition-colors duration-[var(--duration-fast)]",
                    "focus:outline-none focus:bg-[var(--bg-elevated)]",
                    "hover:bg-[var(--bg-elevated)]",
                    isSelected
                      ? "font-medium text-[var(--brand)]"
                      : "text-[var(--fg-1)]",
                    isDisabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {option.label}
                  {isSelected && (
                    <svg
                      className="ml-auto flex-shrink-0 text-[var(--brand)]"
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </li>
              );
            })}
          </ul>
        )}
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
