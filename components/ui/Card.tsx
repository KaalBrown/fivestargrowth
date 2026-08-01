import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-white/10 bg-white/[.04] p-6", className)}>{children}</div>;
}
