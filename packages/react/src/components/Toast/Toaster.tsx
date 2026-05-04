"use client";
import { Toaster as SonnerToaster } from "sonner";

export interface ToasterProps {
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  richColors?: boolean;
  closeButton?: boolean;
  duration?: number;
}

export function Toaster({ position = "bottom-right", richColors = false, closeButton = true, duration = 4000 }: ToasterProps) {
  return (
    <SonnerToaster
      theme="dark"
      position={position}
      duration={duration}
      closeButton={closeButton}
      richColors={richColors}
      toastOptions={{
        style: {
          background: "#09090a",
          border: "1px solid #29292e",
          color: "#fafafc",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "500",
        },
        classNames: {
          description: "!text-[var(--fg-3)] text-sm font-normal",
          actionButton:  "!bg-[var(--brand)] !text-white text-xs rounded-[var(--radius-sm)] px-2 py-1",
          cancelButton:  "!bg-[var(--bg-elevated)] !text-[var(--fg-2)] text-xs rounded-[var(--radius-sm)] px-2 py-1",
          closeButton:   "!text-[var(--fg-4)] hover:!text-[var(--fg-1)]",
          success: "!border-l-4 !border-l-[var(--success-500)]",
          error:   "!border-l-4 !border-l-[var(--danger-500)]",
          warning: "!border-l-4 !border-l-[var(--warning-500)]",
          info:    "!border-l-4 !border-l-[var(--brand)]",
        },
      }}
    />
  );
}
