import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

function getInitials(fallback: string): string {
  const words = fallback.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function Avatar({ src, alt = "", fallback, size = "md", className, ...props }: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-full overflow-hidden",
        "bg-[var(--bg-elevated)] border border-[var(--border-default)]",
        "flex-shrink-0 select-none",
        sizeClasses[size],
        className
      )}
      aria-label={alt || fallback}
      role="img"
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
          {...props}
        />
      ) : fallback ? (
        <span className="font-medium text-[var(--fg-2)] leading-none">
          {getInitials(fallback)}
        </span>
      ) : (
        <svg
          className="h-3/5 w-3/5 text-[var(--fg-4)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
    </span>
  );
}
