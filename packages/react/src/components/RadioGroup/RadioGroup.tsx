"use client";
import { createContext, useContext, useId } from "react";
import type { ReactNode, InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

function useRadioGroupContext() {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioItem must be used within RadioGroup");
  return ctx;
}

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  name?: string;
}

export function RadioGroup({ value, onChange, label, disabled, children, className, name }: RadioGroupProps) {
  const generatedName = useId();
  const groupName = name ?? generatedName;

  return (
    <RadioGroupContext.Provider value={{ name: groupName, value, onChange, disabled }}>
      <fieldset className={cn("border-0 p-0 m-0", className)} disabled={disabled}>
        {label && (
          <legend className="text-sm font-medium text-[var(--fg-2)] mb-2">{label}</legend>
        )}
        <div className="flex flex-col gap-2">{children}</div>
      </fieldset>
    </RadioGroupContext.Provider>
  );
}

export interface RadioItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  value: string;
  label: string;
  hint?: string;
}

export function RadioItem({ value, label, hint, className, disabled: itemDisabled, ...props }: RadioItemProps) {
  const ctx = useRadioGroupContext();
  const id = useId();
  const isDisabled = ctx.disabled || itemDisabled;

  return (
    <label
      htmlFor={id}
      className={cn(
        "flex items-start gap-3 cursor-pointer",
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <input
        {...props}
        id={id}
        type="radio"
        name={ctx.name}
        value={value}
        checked={ctx.value !== undefined ? ctx.value === value : undefined}
        disabled={isDisabled}
        onChange={() => ctx.onChange?.(value)}
        className="mt-0.5 h-4 w-4 accent-[var(--brand)] cursor-pointer"
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[var(--fg-1)]">{label}</span>
        {hint && <span className="text-xs text-[var(--fg-4)]">{hint}</span>}
      </div>
    </label>
  );
}
