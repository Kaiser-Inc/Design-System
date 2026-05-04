"use client";
import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Quando `true`, adiciona efeito de hover (borda mais forte + translateY sutil).
   */
  hoverable?: boolean;
  /**
   * Remove o padding padrão do card.
   */
  noPadding?: boolean;
}

export function Card({ hoverable = false, noPadding = false, children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] bg-[var(--bg-surface)]",
        "border border-[var(--border-subtle)]",
        !noPadding && "p-6",
        hoverable && [
          "transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]",
          "hover:border-[var(--border-default)] hover:-translate-y-px hover:shadow-[var(--shadow-md)]",
          "cursor-pointer",
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn("text-base font-bold text-[var(--fg-1)] leading-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div className={cn("text-sm text-[var(--fg-3)]", className)} {...props}>
      {children}
    </div>
  );
}
