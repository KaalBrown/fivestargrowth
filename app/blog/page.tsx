import Link from "next/link";
import type { Metadata } from "next";
import { blogArticles } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog | Medical Practice Growth" };

export default function BlogPage() {
  return <section className="min-h-screen bg-[#f7f7f3] px-5 py-16 text-[#101010] lg:px-9 lg:py-24"><div className="mx-auto max-w-[1440px]"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/55">Five Star Growth / Blog</p><h1 className="mt-5 max-w-5xl text-5xl font-extrabold leading-[.9] tracking-[-.08em] sm:text-7xl">Practical growth playbooks for medical practices.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">Clear ways to improve visibility, patient trust, and the path from a local search to an appointment.</p><div className="mt-14 grid gap-4 md:grid-cols-2">{blogArticles.map((article, index) => <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex min-h-80 flex-col border border-black/15 bg-white p-6 transition hover:-translate-y-1 hover:border-[#ff5a1f] hover:shadow-[8px_8px_0_#ff5a1f]"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff5a1f]">0{index + 1} / Medical practice growth</p><h2 className="mt-8 max-w-xl text-2xl font-extrabold leading-tight tracking-[-.05em] sm:text-3xl">{article.title}</h2><p className="mt-5 max-w-xl text-sm leading-6 text-black/60">{article.audience}</p><span className="mt-auto pt-8 text-xs font-bold uppercase tracking-[.08em]">Read article <span className="text-[#ff5a1f]">↗</span></span></Link>)}</div></div></section>;
}
