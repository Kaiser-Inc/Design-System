"use client";
import { createContext, useContext, useEffect, useId } from "react";
import type { ReactNode, Ref } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn.js";
import { Portal } from "../../utils/portal.js";
import { useFocusTrap } from "../../utils/useFocusTrap.js";

export type SheetPlacement = "left" | "right" | "top" | "bottom";

interface SheetContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  placement: SheetPlacement;
  titleId: string;
}
const SheetContext = createContext<SheetContextValue | null>(null);
function useSheetContext() {
  const ctx = useContext(SheetContext);
  if (!ctx) throw new Error("Sheet sub-components must be used within <Sheet>");
  return ctx;
}

export interface SheetRootProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  placement?: SheetPlacement;
  children: ReactNode;
}
function SheetRoot({ open, onOpenChange, placement = "right", children }: SheetRootProps) {
  const titleId = useId();
  return <SheetContext.Provider value={{ open, onOpenChange, placement, titleId }}>{children}</SheetContext.Provider>;
}

export interface SheetTriggerProps { children: ReactNode; asChild?: boolean; }
function SheetTrigger({ children, asChild = false }: SheetTriggerProps) {
  const { onOpenChange } = useSheetContext();
  const Comp = asChild ? Slot : "button";
  return <Comp type={asChild ? undefined : "button"} onClick={() => onOpenChange(true)}>{children}</Comp>;
}

const placementClasses: Record<SheetPlacement, { panel: string; enter: string }> = {
  right: { panel: "right-0 top-0 h-full w-80 max-w-full", enter: "translate-x-0" },
  left:  { panel: "left-0 top-0 h-full w-80 max-w-full", enter: "-translate-x-0" },
  top:   { panel: "top-0 left-0 w-full max-h-[50vh]", enter: "translate-y-0" },
  bottom:{ panel: "bottom-0 left-0 w-full max-h-[50vh]", enter: "translate-y-0" },
};

export interface SheetContentProps { children: ReactNode; className?: string; }
function SheetContent({ children, className }: SheetContentProps) {
  const { open, onOpenChange, placement, titleId } = useSheetContext();
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

  const pc = placementClasses[placement];

  return (
    <Portal>
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" aria-hidden="true" onClick={() => onOpenChange(false)} />
      <div
        ref={trapRef as unknown as Ref<HTMLDivElement>}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "fixed z-50 flex flex-col bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-[var(--shadow-md)]",
          pc.panel,
          className
        )}
      >
        {children}
      </div>
    </Portal>
  );
}

export interface SheetHeaderProps { children: ReactNode; className?: string; }
function SheetHeader({ children, className }: SheetHeaderProps) {
  return <div className={cn("flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]", className)}>{children}</div>;
}

export interface SheetTitleProps { children: ReactNode; className?: string; }
function SheetTitle({ children, className }: SheetTitleProps) {
  const { titleId } = useSheetContext();
  return <h2 id={titleId} className={cn("text-base font-semibold text-[var(--fg-1)]", className)}>{children}</h2>;
}

export interface SheetBodyProps { children: ReactNode; className?: string; }
function SheetBody({ children, className }: SheetBodyProps) {
  return <div className={cn("flex-1 overflow-y-auto px-6 py-4", className)}>{children}</div>;
}

export interface SheetFooterProps { children: ReactNode; className?: string; }
function SheetFooter({ children, className }: SheetFooterProps) {
  return <div className={cn("flex items-center gap-3 justify-end px-6 py-4 border-t border-[var(--border-subtle)]", className)}>{children}</div>;
}

export interface SheetCloseProps { children: ReactNode; asChild?: boolean; }
function SheetClose({ children, asChild = false }: SheetCloseProps) {
  const { onOpenChange } = useSheetContext();
  const Comp = asChild ? Slot : "button";
  return <Comp type={asChild ? undefined : "button"} onClick={() => onOpenChange(false)}>{children}</Comp>;
}

export const Sheet = Object.assign(SheetRoot, {
  Trigger: SheetTrigger, Content: SheetContent, Header: SheetHeader, Title: SheetTitle, Body: SheetBody, Footer: SheetFooter, Close: SheetClose,
});
export { SheetRoot, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetBody, SheetFooter, SheetClose };
