"use client";
import type { ImgHTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

export type LogoVariant = "default" | "light" | "square";
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  /** Visual variant of the logo */
  variant?: LogoVariant;
  /** Preset size — overridden if you pass width/height directly */
  size?: LogoSize;
  /** Alt text (defaults to "KaiserInc") */
  alt?: string;
}

// tsup copies static assets via publicDir; for npm consumers the images
// ship inside the package. Paths resolved at runtime via the package files.
const variantSrc: Record<LogoVariant, string> = {
  default: new URL("../../assets/logo-kaiser-transparent.png", import.meta.url).href,
  light: new URL("../../assets/logo-kaiser-light.png", import.meta.url).href,
  square: new URL("../../assets/logo-kaiser-square.png", import.meta.url).href,
};

// Natural aspect ratio is roughly 4:1 for the wordmark variants, 1:1 for square.
const sizeMap: Record<LogoSize, { wordmark: string; square: string }> = {
  xs: { wordmark: "h-5",  square: "h-5 w-5" },
  sm: { wordmark: "h-6",  square: "h-6 w-6" },
  md: { wordmark: "h-8",  square: "h-8 w-8" },
  lg: { wordmark: "h-10", square: "h-10 w-10" },
  xl: { wordmark: "h-14", square: "h-14 w-14" },
};

export function Logo({
  variant = "default",
  size = "md",
  alt = "KaiserInc",
  className,
  ...props
}: LogoProps) {
  const isSquare = variant === "square";
  const sizeClass = isSquare ? sizeMap[size].square : sizeMap[size].wordmark;

  return (
    <img
      src={variantSrc[variant]}
      alt={alt}
      className={cn("object-contain select-none", sizeClass, className)}
      draggable={false}
      {...props}
    />
  );
}
