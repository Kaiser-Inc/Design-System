"use client";
import { createContext, useContext, useRef, useEffect, useId, useState, useCallback } from "react";
import type { ReactNode, KeyboardEvent } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn.js";

interface DropdownContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerId: string;
  contentId: string;
}
const DropdownContext = createContext<DropdownContextValue | null>(null);
function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("DropdownMenu sub-components must be used within <DropdownMenu>");
  return ctx;
}

export interface DropdownMenuRootProps { children: ReactNode; }
function DropdownMenuRoot({ children }: DropdownMenuRootProps) {
  const [open, setOpenState] = useState(false);
  const triggerId = useId();
  const contentId = useId();
  const setOpen = useCallback((v: boolean) => setOpenState(v), []);
  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerId, contentId }}>
      <div style={{ position: "relative", display: "inline-block" }}>{children}</div>
    </DropdownContext.Provider>
  );
}

export interface DropdownMenuTriggerProps { children: ReactNode; asChild?: boolean; }
function DropdownMenuTrigger({ children, asChild = false }: DropdownMenuTriggerProps) {
  const { open, setOpen, triggerId, contentId } = useDropdownContext();
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      id={triggerId}
      type={asChild ? undefined : "button"}
      aria-expanded={open}
      aria-haspopup="menu"
      aria-controls={contentId}
      onClick={() => setOpen(!open)}
    >
      {children}
    </Comp>
  );
}

export interface DropdownMenuContentProps { children: ReactNode; className?: string; align?: "start" | "end"; }
function DropdownMenuContent({ children, className, align = "start" }: DropdownMenuContentProps) {
  const { open, setOpen, contentId, triggerId } = useDropdownContext();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function outside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        const trig = document.getElementById(triggerId);
        if (trig?.contains(e.target as Node)) return;
        setOpen(false);
      }
    }
    function key(e: globalThis.KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("mousedown", outside); document.removeEventListener("keydown", key); };
  }, [open, setOpen, triggerId]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const items = Array.from(ref.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([disabled])') ?? []);
    const idx = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
    if (e.key === "Home") { e.preventDefault(); items[0]?.focus(); }
    if (e.key === "End") { e.preventDefault(); items[items.length - 1]?.focus(); }
  }

  if (!open) return null;

  return (
    <div
      ref={ref}
      id={contentId}
      role="menu"
      aria-labelledby={triggerId}
      onKeyDown={handleKeyDown}
      className={cn(
        "absolute top-full mt-1 z-50 min-w-[180px]",
        align === "end" ? "right-0" : "left-0",
        "bg-[var(--bg-surface)] border border-[var(--border-default)]",
        "rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]",
        "py-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface DropdownMenuItemProps { children: ReactNode; onClick?: () => void; disabled?: boolean; destructive?: boolean; icon?: ReactNode; className?: string; }
function DropdownMenuItem({ children, onClick, disabled, destructive, icon, className }: DropdownMenuItemProps) {
  const { setOpen } = useDropdownContext();
  function handle() { if (!disabled) { onClick?.(); setOpen(false); } }
  return (
    <button
      role="menuitem"
      disabled={disabled}
      tabIndex={-1}
      onClick={handle}
      className={cn(
        "flex items-center gap-2 w-full px-3 py-2 text-sm text-left",
        "transition-colors duration-[var(--duration-fast)]",
        "focus:outline-none focus:bg-[var(--bg-elevated)]",
        "hover:bg-[var(--bg-elevated)]",
        destructive ? "text-[var(--danger-500)]" : "text-[var(--fg-1)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {icon && <span className="flex-shrink-0 text-[var(--fg-4)]">{icon}</span>}
      {children}
    </button>
  );
}

export interface DropdownMenuLabelProps { children: ReactNode; className?: string; }
function DropdownMenuLabel({ children, className }: DropdownMenuLabelProps) {
  return <div className={cn("px-3 py-1.5 text-xs font-semibold text-[var(--fg-4)] uppercase tracking-wide", className)}>{children}</div>;
}

export interface DropdownMenuSeparatorProps { className?: string; }
function DropdownMenuSeparator({ className }: DropdownMenuSeparatorProps) {
  return <div role="separator" className={cn("my-1 h-px bg-[var(--border-subtle)]", className)} />;
}

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger, Content: DropdownMenuContent, Item: DropdownMenuItem, Label: DropdownMenuLabel, Separator: DropdownMenuSeparator,
});
export { DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator };
