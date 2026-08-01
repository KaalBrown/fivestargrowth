import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = { href?: string; children: React.ReactNode; variant?: "solid" | "outline" | "glow"; className?: string };

export function Button({ href = "/contact", children, variant = "solid", className }: ButtonProps) {
  const styles = {
    solid: "bg-lime text-ink hover:bg-white",
    outline: "border border-white/25 text-white hover:border-lime hover:text-lime",
    glow: "bg-sky text-ink shadow-glow hover:bg-lime",
  };
  return <Link href={href} className={cn("inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition", styles[variant], className)}>{children}</Link>;
}
