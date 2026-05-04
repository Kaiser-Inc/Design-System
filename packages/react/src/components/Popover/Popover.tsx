"use client";
import { createContext, useContext, useRef, useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn.js";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

interface PopoverContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentId: string;
  triggerId: string;
}
const PopoverContext = createContext<PopoverContextValue | null>(null);
function usePopoverContext() {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Popover sub-components must be used within <Popover>");
  return ctx;
}

export interface PopoverRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}
function PopoverRoot({ open: controlledOpen, defaultOpen = false, onOpenChange, children }: PopoverRootProps) {
  const isControlled = controlledOpen !== undefined;
  const [internal, setInternal] = useState(defaultOpen);
  const open = isControlled ? controlledOpen! : internal;
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentId = useId();
  const triggerId = useId();

  function setOpen(v: boolean) {
    if (!isControlled) setInternal(v);
    onOpenChange?.(v);
  }

  return (
    <PopoverContext.Provider value={{ open, onOpenChange: setOpen, triggerRef, contentId, triggerId }}>
      <div style={{ position: "relative", display: "inline-block" }}>{children}</div>
    </PopoverContext.Provider>
  );
}

export interface PopoverTriggerProps { children: ReactNode; asChild?: boolean; }
function PopoverTrigger({ children, asChild = false }: PopoverTriggerProps) {
  const { onOpenChange, open, triggerRef, contentId, triggerId } = usePopoverContext();
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={triggerRef as React.Ref<HTMLButtonElement>}
      id={triggerId}
      type={asChild ? undefined : "button"}
      aria-expanded={open}
      aria-controls={contentId}
      onClick={() => onOpenChange(!open)}
    >
      {children}
    </Comp>
  );
}

export interface PopoverContentProps {
  children: ReactNode;
  className?: string;
  placement?: PopoverPlacement;
  align?: "start" | "center" | "end";
}
function PopoverContent({ children, className, placement = "bottom", align = "start" }: PopoverContentProps) {
  const { open, onOpenChange, contentId, triggerId } = usePopoverContext();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        const triggerEl = document.getElementById(triggerId);
        if (triggerEl && triggerEl.contains(e.target as Node)) return;
        onOpenChange(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange, triggerId]);

  if (!open) return null;

  const placementClass = {
    bottom: "top-full mt-2",
    top: "bottom-full mb-2",
    left: "right-full mr-2 top-0",
    right: "left-full ml-2 top-0",
  }[placement];

  const alignClass = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0",
  }[align];

  return (
    <div
      ref={ref}
      id={contentId}
      role="dialog"
      className={cn(
        "absolute z-50 min-w-[200px]",
        "bg-[var(--bg-surface)] border border-[var(--border-default)]",
        "rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]",
        "p-1",
        placementClass,
        alignClass,
        className
      )}
    >
      {children}
    </div>
  );
}

export const Popover = Object.assign(PopoverRoot, { Trigger: PopoverTrigger, Content: PopoverContent });
export { PopoverRoot, PopoverTrigger, PopoverContent };
