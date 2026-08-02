import { Suspense } from "react";
import type { Metadata } from "next";
import { BlogHub } from "@/components/sections/BlogHub";

export const metadata: Metadata = { title: "Blog | Local Business Growth" };

export default function BlogPage() {
  return <section className="min-h-screen bg-[#f7f7f3] px-5 py-16 text-[#101010] lg:px-9 lg:py-24"><Suspense fallback={<div className="mx-auto max-w-[1440px]"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/55">Five Star Growth / Blog</p><h1 className="mt-5 text-5xl font-extrabold tracking-[-.08em] sm:text-7xl">Practical growth playbooks for local businesses.</h1></div>}><BlogHub /></Suspense></section>;
}
