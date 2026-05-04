"use client";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  breadcrumb?: BreadcrumbItem[];
  actions?: ReactNode;
  logo?: ReactNode;
}

export function TopBar({ title, breadcrumb, actions, logo, className, ...props }: TopBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-16",
        "flex items-center justify-between gap-4 px-6",
        "bg-[var(--bg-base)] border-b border-[var(--border-subtle)]",
        "backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4 min-w-0">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        <div className="min-w-0">
          {breadcrumb && breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs text-[var(--fg-4)]">
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-[var(--fg-2)] transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-[var(--fg-2)] font-medium">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {title && (
            <h1 className="text-base font-bold text-[var(--fg-1)] leading-tight truncate">
              {title}
            </h1>
          )}
        </div>
      </div>
      {actions && (
        <div className="flex items-center gap-2 flex-shrink-0">{actions}</div>
      )}
    </header>
  );
}
