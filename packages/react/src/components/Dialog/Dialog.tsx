"use client";
import { createContext, useContext, useEffect, useId } from "react";
import type { ReactNode, Ref } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn.js";
import { Portal } from "../../utils/portal.js";
import { useFocusTrap } from "../../utils/useFocusTrap.js";

// ─── Context ─────────────────────────────────────────────────────────────────
interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  titleId: string;
  descId: string;
}
const DialogContext = createContext<DialogContextValue | null>(null);
function useDialogContext() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog sub-components must be used within <Dialog>");
  return ctx;
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export interface DialogRootProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}
function DialogRoot({ open, onOpenChange, children }: DialogRootProps) {
  const titleId = useId();
  const descId = useId();
  return (
    <DialogContext.Provider value={{ open, onOpenChange, titleId, descId }}>
      {children}
    </DialogContext.Provider>
  );
}

// ─── Trigger ─────────────────────────────────────────────────────────────────
export interface DialogTriggerProps { children: ReactNode; asChild?: boolean; }
function DialogTrigger({ children, asChild = false }: DialogTriggerProps) {
  const { onOpenChange } = useDialogContext();
  const Comp = asChild ? Slot : "button";
  return <Comp type={asChild ? undefined : "button"} onClick={() => onOpenChange(true)}>{children}</Comp>;
}

// ─── Content ─────────────────────────────────────────────────────────────────
export interface DialogContentProps { children: ReactNode; className?: string; size?: "sm" | "md" | "lg"; }
function DialogContent({ children, className, size = "md" }: DialogContentProps) {
  const { open, onOpenChange, titleId, descId } = useDialogContext();
  const trapRef = useFocusTrap(open);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onOpenChange(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  const sizeClass = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" }[size];

  return (
    <Portal>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={() => onOpenChange(false)}
      />
      {/* Panel */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          ref={trapRef as unknown as Ref<HTMLDivElement>}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          className={cn(
            "relative w-full bg-[var(--bg-surface)] border border-[var(--border-default)]",
            "rounded-[var(--radius-xl)] shadow-[var(--shadow-md)]",
            "flex flex-col max-h-[90vh]",
            sizeClass,
            className
          )}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}

// ─── Sub-parts ────────────────────────────────────────────────────────────────
export interface DialogHeaderProps { children: ReactNode; className?: string; }
function DialogHeader({ children, className }: DialogHeaderProps) {
  return <div className={cn("flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-[var(--border-subtle)]", className)}>{children}</div>;
}

export interface DialogTitleProps { children: ReactNode; className?: string; }
function DialogTitle({ children, className }: DialogTitleProps) {
  const { titleId } = useDialogContext();
  return <h2 id={titleId} className={cn("text-lg font-semibold text-[var(--fg-1)] leading-tight", className)}>{children}</h2>;
}

export interface DialogDescriptionProps { children: ReactNode; className?: string; }
function DialogDescription({ children, className }: DialogDescriptionProps) {
  const { descId } = useDialogContext();
  return <p id={descId} className={cn("text-sm text-[var(--fg-3)]", className)}>{children}</p>;
}

export interface DialogBodyProps { children: ReactNode; className?: string; }
function DialogBody({ children, className }: DialogBodyProps) {
  return <div className={cn("flex-1 overflow-y-auto px-6 py-4 text-sm text-[var(--fg-2)]", className)}>{children}</div>;
}

export interface DialogFooterProps { children: ReactNode; className?: string; }
function DialogFooter({ children, className }: DialogFooterProps) {
  return <div className={cn("flex items-center justify-end gap-3 px-6 pb-6 pt-4 border-t border-[var(--border-subtle)]", className)}>{children}</div>;
}

export interface DialogCloseProps { children: ReactNode; asChild?: boolean; }
function DialogClose({ children, asChild = false }: DialogCloseProps) {
  const { onOpenChange } = useDialogContext();
  const Comp = asChild ? Slot : "button";
  return <Comp type={asChild ? undefined : "button"} onClick={() => onOpenChange(false)}>{children}</Comp>;
}

// ─── Compound export ──────────────────────────────────────────────────────────
export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Title: DialogTitle,
  Description: DialogDescription,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose,
});

export { DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose };
