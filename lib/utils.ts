import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusBadgeClass(status: string) {
  const base = "px-3 py-1.5 rounded-full text-[11px] font-bold uppercase";

  switch (status) {
    case "NEW":
      return `${base} bg-info text-info-foreground`;

    case "PRE CHECK-IN":
      return `${base} bg-brand-subtle text-primary border border-primary`;

    case "IN PROGRESS":
      return `${base} bg-primary text-primary-foreground`;

    case "FINISHED":
      return `${base} bg-success text-white`;

    default:
      return `${base} bg-brand-subtle text-primary`;
  }
}