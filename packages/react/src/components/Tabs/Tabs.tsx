import {
  createContext,
  useContext,
  useState,
  useId,
} from "react";
import type { ReactNode, KeyboardEvent } from "react";
import { cn } from "../../utils/cn.js";

// ─── Context ─────────────────────────────────────────────────────────────────

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tab components must be used within a <Tabs> component.");
  }
  return ctx;
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export function Tabs({
  value,
  defaultValue = "",
  onChange,
  children,
  className,
}: TabsProps) {
  const baseId = useId();
  const isControlled = value !== undefined;
  const [internalActive, setInternalActive] = useState(defaultValue);
  const activeTab = isControlled ? value : internalActive;

  function setActiveTab(next: string) {
    if (!isControlled) setInternalActive(next);
    onChange?.(next);
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
      <div className={cn("flex flex-col", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

// ─── TabList ──────────────────────────────────────────────────────────────────

export interface TabListProps {
  children: ReactNode;
  className?: string;
}

export function TabList({ children, className }: TabListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex border-b border-[var(--border-subtle)]",
        className
      )}
    >
      {children}
    </div>
  );
}

// ─── Tab ──────────────────────────────────────────────────────────────────────

export interface TabProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Tab({ value, children, disabled = false, className }: TabProps) {
  const { activeTab, setActiveTab, baseId } = useTabsContext();
  const isActive = activeTab === value;

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) setActiveTab(value);
    }
  }

  return (
    <button
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-controls={`${baseId}-panel-${value}`}
      aria-selected={isActive}
      disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      onClick={() => !disabled && setActiveTab(value)}
      onKeyDown={handleKeyDown}
      className={cn(
        "relative px-4 py-2 text-sm font-medium whitespace-nowrap",
        "transition-colors duration-[var(--duration-base)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        isActive
          ? [
              "text-[var(--fg-1)]",
              "after:absolute after:bottom-[-1px] after:left-0 after:right-0",
              "after:h-0.5 after:bg-[var(--brand)]",
            ].join(" ")
          : "text-[var(--fg-3)] hover:text-[var(--fg-2)]",
        className
      )}
    >
      {children}
    </button>
  );
}

// ─── TabPanel ─────────────────────────────────────────────────────────────────

export interface TabPanelProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabPanel({ value, children, className }: TabPanelProps) {
  const { activeTab, baseId } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      hidden={!isActive}
      className={cn("py-4", !isActive && "hidden", className)}
    >
      {isActive ? children : null}
    </div>
  );
}
