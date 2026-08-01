import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime", className)}>{children}</span>;
}
