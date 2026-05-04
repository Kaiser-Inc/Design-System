"use client";
import { createContext, useContext, useId } from "react";
import type { ReactNode, FormHTMLAttributes, LabelHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

// ─── Context ─────────────────────────────────────────────────────────────────
interface FormFieldContextValue {
  fieldId: string;
  errorId: string;
  hintId: string;
  hasError: boolean;
}
const FormFieldContext = createContext<FormFieldContextValue | null>(null);
function useFormFieldContext() {
  return useContext(FormFieldContext);
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> { children: ReactNode; }
function FormRoot({ children, className, ...props }: FormRootProps) {
  return <form className={cn("space-y-4", className)} {...props}>{children}</form>;
}

// ─── Field ────────────────────────────────────────────────────────────────────
export interface FormFieldProps { children: ReactNode; error?: string; hint?: string; className?: string; }
function FormField({ children, error, hint, className }: FormFieldProps) {
  const fieldId = useId();
  const errorId = `${fieldId}-error`;
  const hintId = `${fieldId}-hint`;
  const hasError = Boolean(error);

  return (
    <FormFieldContext.Provider value={{ fieldId, errorId, hintId, hasError }}>
      <div className={cn("flex flex-col gap-1.5", className)}>
        {children}
        {error && <p id={errorId} role="alert" className="text-xs text-[var(--danger-500)]">{error}</p>}
        {hint && !error && <p id={hintId} className="text-xs text-[var(--fg-4)]">{hint}</p>}
      </div>
    </FormFieldContext.Provider>
  );
}

// ─── Label ────────────────────────────────────────────────────────────────────
export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> { children: ReactNode; required?: boolean; }
function FormLabel({ children, required, className, ...props }: FormLabelProps) {
  const ctx = useFormFieldContext();
  return (
    <label htmlFor={ctx?.fieldId} className={cn("text-sm font-medium text-[var(--fg-2)]", className)} {...props}>
      {children}
      {required && <span className="ml-1 text-[var(--danger-500)]" aria-hidden="true">*</span>}
    </label>
  );
}

// ─── Control ─────────────────────────────────────────────────────────────────
export interface FormControlProps { children: ReactNode; }
function FormControl({ children }: FormControlProps) {
  return <>{children}</>;
}

// ─── Message ─────────────────────────────────────────────────────────────────
export interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> { children: ReactNode; }
function FormMessage({ children, className, ...props }: FormMessageProps) {
  return <p className={cn("text-xs text-[var(--fg-4)]", className)} {...props}>{children}</p>;
}

// ─── Submit ──────────────────────────────────────────────────────────────────
export interface FormSubmitProps { children: ReactNode; loading?: boolean; className?: string; }
function FormSubmit({ children, loading, className }: FormSubmitProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 h-10 px-4",
        "bg-[var(--brand)] text-white text-sm font-medium",
        "rounded-[var(--radius-md)] transition-colors duration-[var(--duration-base)]",
        "hover:bg-[var(--brand-hover)] active:bg-[var(--brand-active)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />}
      {children}
    </button>
  );
}

// ─── Compound export ──────────────────────────────────────────────────────────
export const Form = Object.assign(FormRoot, {
  Field: FormField, Label: FormLabel, Control: FormControl, Message: FormMessage, Submit: FormSubmit,
});
export { FormRoot, FormField, FormLabel, FormControl, FormMessage, FormSubmit };
export { useFormFieldContext };
