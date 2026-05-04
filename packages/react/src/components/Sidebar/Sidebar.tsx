"use client";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export interface SidebarItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
  badge?: string;
  onClick?: () => void;
}

export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  sections: SidebarSection[];
  logo?: ReactNode;
  footer?: ReactNode;
  collapsed?: boolean;
}

export function Sidebar({ sections, logo, footer, collapsed = false, className, ...props }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-[var(--bg-surface)]",
        "transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]",
        collapsed ? "w-16" : "w-64",
        className
      )}
      {...props}
    >
      {logo && (
        <div
          className={cn(
            "flex items-center h-16 flex-shrink-0 px-4",
            "border-b border-[var(--border-subtle)]"
          )}
        >
          {logo}
        </div>
      )}

      <nav className="flex-1 overflow-y-auto py-4 space-y-6 px-2">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && !collapsed && (
              <p className="px-3 mb-1 text-xs font-medium text-[var(--fg-5)] uppercase tracking-wider">
                {section.title}
              </p>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <SidebarNavItem item={item} collapsed={collapsed} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {footer && (
        <div className="flex-shrink-0 p-4 border-t border-[var(--border-subtle)]">
          {footer}
        </div>
      )}
    </aside>
  );
}

interface SidebarNavItemProps {
  item: SidebarItem;
  collapsed: boolean;
}

function SidebarNavItem({ item, collapsed }: SidebarNavItemProps) {
  const Tag = item.href ? "a" : "button";

  return (
    <Tag
      href={item.href}
      onClick={item.onClick}
      title={collapsed ? item.label : undefined}
      className={cn(
        "flex items-center gap-3 w-full rounded-[var(--radius-md)]",
        "text-sm font-medium transition-all duration-[var(--duration-fast)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]",
        collapsed ? "h-10 justify-center px-2" : "h-9 px-3",
        item.active
          ? "bg-[var(--brand-subtle)] text-[var(--brand)]"
          : "text-[var(--fg-3)] hover:bg-[var(--bg-elevated)] hover:text-[var(--fg-1)]"
      )}
    >
      {item.icon && (
        <span className={cn("flex-shrink-0", item.active ? "text-[var(--brand)]" : "text-[var(--fg-4)]")}>
          {item.icon}
        </span>
      )}
      {!collapsed && (
        <>
          <span className="flex-1 text-left truncate">{item.label}</span>
          {item.badge && (
            <span className="flex-shrink-0 text-xs bg-[var(--brand-subtle)] text-[var(--brand)] px-1.5 py-0.5 rounded-[var(--radius-pill)]">
              {item.badge}
            </span>
          )}
        </>
      )}
    </Tag>
  );
}
