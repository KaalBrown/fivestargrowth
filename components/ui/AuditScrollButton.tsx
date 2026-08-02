"use client";

export function AuditScrollButton({ children = "Free audit ↗", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <button type="button" onClick={() => document.getElementById("free-audit")?.scrollIntoView({ behavior: "smooth" })} className={`whitespace-nowrap rounded-full bg-[#ff5a1f] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-[#101010] ${className}`}>{children}</button>;
}
