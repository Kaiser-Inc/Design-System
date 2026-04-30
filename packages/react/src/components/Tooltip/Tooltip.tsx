import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  className?: string;
}

const tooltipPositionClasses: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowPositionClasses: Record<TooltipPlacement, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-[var(--gray-800,#1f2937)]",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-[var(--gray-800,#1f2937)]",
  left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-[var(--gray-800,#1f2937)]",
  right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-[var(--gray-800,#1f2937)]",
};

export function Tooltip({
  content,
  children,
  placement = "top",
  delay = 0,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showTooltip() {
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(true);
    }
  }

  function hideTooltip() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVisible(false);
  }

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={cn(
            "absolute z-50 whitespace-nowrap",
            "bg-[var(--gray-800,#1f2937)] text-white text-xs",
            "px-2 py-1 rounded-[var(--radius-sm)] shadow-lg",
            "pointer-events-none",
            tooltipPositionClasses[placement]
          )}
        >
          {content}
          {/* Arrow */}
          <span
            aria-hidden="true"
            className={cn(
              "absolute w-0 h-0 border-4",
              arrowPositionClasses[placement]
            )}
          />
        </span>
      )}
    </span>
  );
}
