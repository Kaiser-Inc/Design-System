import { cn } from "../../utils/cn.js";

export type ProgressSize = "sm" | "md" | "lg";
export type ProgressVariant = "default" | "success" | "danger" | "warning";

export interface ProgressProps {
  value: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  label?: string;
  showValue?: boolean;
  className?: string;
}

const sizeClasses: Record<ProgressSize, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

const fillClasses: Record<ProgressVariant, string> = {
  default: "bg-[var(--brand)]",
  success: "bg-[var(--success-500)]",
  danger: "bg-[var(--danger-500)]",
  warning: "bg-[var(--warning-500)]",
};

export function Progress({
  value,
  max = 100,
  size = "md",
  variant = "default",
  label,
  showValue = false,
  className,
}: ProgressProps) {
  const clamped = Math.min(Math.max(0, value), max);
  const percentage = Math.round((clamped / max) * 100);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-sm text-[var(--fg-2)]">{label}</span>
          )}
          {showValue && (
            <span className="text-xs text-[var(--fg-4)] tabular-nums">{percentage}%</span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        className={cn(
          "w-full rounded-full bg-[var(--bg-elevated)] overflow-hidden",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-300 ease-out",
            fillClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
