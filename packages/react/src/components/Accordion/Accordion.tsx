"use client";
import { createContext, useContext, useState, useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn.js";

interface AccordionCtx { openItems: Set<string>; toggle: (id: string) => void; multiple: boolean; baseId: string; }
const AccordionContext = createContext<AccordionCtx | null>(null);
function useAccordionCtx() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion sub-components must be used within <Accordion>");
  return ctx;
}

interface AccordionItemCtx { itemId: string; isOpen: boolean; }
const AccordionItemContext = createContext<AccordionItemCtx | null>(null);
function useAccordionItemCtx() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) throw new Error("AccordionTrigger/Content must be used within <Accordion.Item>");
  return ctx;
}

export interface AccordionRootProps { children: ReactNode; multiple?: boolean; defaultOpen?: string | string[]; className?: string; }
function AccordionRoot({ children, multiple = false, defaultOpen, className }: AccordionRootProps) {
  const baseId = useId();
  const initial = new Set(Array.isArray(defaultOpen) ? defaultOpen : defaultOpen ? [defaultOpen] : []);
  const [openItems, setOpenItems] = useState<Set<string>>(initial);
  function toggle(id: string) {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { if (!multiple) next.clear(); next.add(id); }
      return next;
    });
  }
  return (
    <AccordionContext.Provider value={{ openItems, toggle, multiple, baseId }}>
      <div className={cn("divide-y divide-[var(--border-subtle)]", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps { value: string; children: ReactNode; className?: string; }
function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { openItems } = useAccordionCtx();
  return (
    <AccordionItemContext.Provider value={{ itemId: value, isOpen: openItems.has(value) }}>
      <div className={cn("py-1", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export interface AccordionTriggerProps { children: ReactNode; className?: string; }
function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { toggle, baseId } = useAccordionCtx();
  const { itemId, isOpen } = useAccordionItemCtx();
  return (
    <button
      type="button"
      id={`${baseId}-t-${itemId}`}
      aria-expanded={isOpen}
      aria-controls={`${baseId}-c-${itemId}`}
      onClick={() => toggle(itemId)}
      className={cn(
        "flex w-full items-center justify-between py-3 px-1 text-sm font-medium text-left",
        "text-[var(--fg-1)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--brand)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] rounded-[var(--radius-sm)]",
        className
      )}
    >
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)" }} className={cn("flex-shrink-0", isOpen && "rotate-180")}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

export interface AccordionContentProps { children: ReactNode; className?: string; }
function AccordionContent({ children, className }: AccordionContentProps) {
  const { baseId } = useAccordionCtx();
  const { itemId, isOpen } = useAccordionItemCtx();
  return (
    <div
      id={`${baseId}-c-${itemId}`}
      role="region"
      aria-labelledby={`${baseId}-t-${itemId}`}
      style={{
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className={cn("overflow-hidden text-sm text-[var(--fg-3)]", className)}>
        <div className="pb-3 px-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export const Accordion = Object.assign(AccordionRoot, { Item: AccordionItem, Trigger: AccordionTrigger, Content: AccordionContent });
export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent };
