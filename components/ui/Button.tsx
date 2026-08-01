import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = { href?: string; children: React.ReactNode; variant?: "solid" | "outline" | "glow"; className?: string };

export function Button({ href = "/contact", children, variant = "solid", className }: ButtonProps) {
  const styles = {
    solid: "bg-[#101010] text-white hover:bg-[#ff5a1f]",
    outline: "border border-current text-current hover:bg-[#101010] hover:text-white",
    glow: "bg-[#ff5a1f] text-white hover:bg-[#101010]",
  };
  return <Link href={href} className={cn("inline-flex items-center justify-center gap-2 rounded-none px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] transition", styles[variant], className)}>{children}<span aria-hidden>↗</span></Link>;
}
