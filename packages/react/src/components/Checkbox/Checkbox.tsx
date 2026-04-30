import { forwardRef, useState, useId, useEffect, useRef } from "react";
import type { MutableRefObject, Ref, ChangeEvent } from "react";
import { cn } from "../../utils/cn.js";

export type CheckboxSize = "sm" | "md";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  indeterminate?: boolean;
  size?: CheckboxSize;
  id?: string;
  name?: string;
  value?: string;
  className?: string;
}

const boxSize: Record<CheckboxSize, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
};

function mergeRefs<T>(
  ...refs: Array<Ref<T> | undefined>
): (instance: T | null) => void {
  return (instance) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") {
        ref(instance);
      } else {
        (ref as MutableRefObject<T | null>).current = instance;
      }
    }
  };
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked = false,
      onChange,
      disabled = false,
      label,
      indeterminate = false,
      size = "md",
      id,
      name,
      value,
      className,
    },
    ref
  ) => {
    const generatedId = useId();
    const checkboxId = id ?? generatedId;

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = isControlled ? checked : internalChecked;

    const nativeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (nativeRef.current) {
        nativeRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      if (disabled) return;
      const next = e.target.checked;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    }

    function handleCustomClick() {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    }

    const isActive = isChecked || indeterminate;

    return (
      <div className={cn("inline-flex items-center gap-2", className)}>
        <div className="relative flex items-center justify-center">
          <input
            ref={mergeRefs(nativeRef, ref)}
            id={checkboxId}
            type="checkbox"
            name={name}
            value={value}
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            className="sr-only"
          />
          <div
            aria-hidden="true"
            className={cn(
              "rounded-[var(--radius-sm)] border transition-colors duration-[var(--duration-base)]",
              "flex items-center justify-center flex-shrink-0 cursor-pointer",
              boxSize[size],
              isActive
                ? "bg-[var(--brand)] border-[var(--brand)]"
                : "bg-transparent border-[var(--border-default)]",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={handleCustomClick}
          >
            {indeterminate ? (
              <svg viewBox="0 0 10 10" fill="none" className="h-2/3 w-2/3" aria-hidden="true">
                <line
                  x1="2" y1="5" x2="8" y2="5"
                  stroke="white" strokeWidth="2" strokeLinecap="round"
                />
              </svg>
            ) : isChecked ? (
              <svg viewBox="0 0 10 10" fill="none" className="h-2/3 w-2/3" aria-hidden="true">
                <polyline
                  points="1.5,5 4,7.5 8.5,2.5"
                  stroke="white" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </div>
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              "text-sm text-[var(--fg-2)] leading-none select-none cursor-pointer",
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

Checkbox.displayName = "Checkbox";
