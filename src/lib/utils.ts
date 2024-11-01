import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateString = (string: string, slice?: number) => {
  return string.slice(0, slice || 30) + "...";
};

export function formatViews(views: number): string {
  if (views < 1000) return views.toString();

  const suffixes = ['k', 'M', 'B'];
  const index = Math.floor(Math.log10(views) / 3) - 1; 
  const formattedValue = Math.round(views / Math.pow(1000, index + 1));

  return `${formattedValue}${suffixes[index]}`;
}