import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes CSS com suporte a merge inteligente de classes Tailwind.
 * Usa clsx para expressões condicionais e tailwind-merge para resolver conflitos.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-brand", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
