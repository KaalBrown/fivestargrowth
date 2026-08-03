"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { blogArticles, blogFilters, getBlogArticleCategories, getBlogCategoryLabel, type BlogCategory } from "@/lib/blog";

export function BlogHub() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const activeFilter = blogFilters.some((filter) => filter.value === filterParam) ? filterParam as "all" | BlogCategory : "all";
  const visibleArticles = activeFilter === "all" ? blogArticles : blogArticles.filter((article) => getBlogArticleCategories(article).includes(activeFilter));

  return <div className="mx-auto max-w-[1440px]"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/55">Five Star Growth / Blog</p><h1 className="mt-5 max-w-5xl text-5xl font-extrabold leading-[.9] tracking-[-.08em] sm:text-7xl">Practical growth playbooks for local businesses.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">Clear ways to improve local visibility, customer trust, and the path from a search to a call, booking, or job.</p><nav aria-label="Filter articles" className="mt-10 flex flex-wrap gap-2">{blogFilters.map((filter) => <Link key={filter.value} scroll={false} href={filter.value === "all" ? "/blog" : `/blog?filter=${filter.value}`} aria-current={activeFilter === filter.value ? "page" : undefined} className={`inline-flex min-h-10 items-center justify-center border px-4 text-xs font-extrabold uppercase tracking-[.08em] transition ${activeFilter === filter.value ? "border-[#ff5a1f] bg-[#ff5a1f] text-white" : "border-black/20 bg-white hover:border-[#ff5a1f] hover:text-[#ff5a1f]"}`}>{filter.label}</Link>)}</nav><div className="mt-8 grid gap-4 md:grid-cols-2">{visibleArticles.map((article, index) => <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex min-h-80 flex-col border border-black/15 bg-white p-6 transition hover:-translate-y-1 hover:border-[#ff5a1f] hover:shadow-[8px_8px_0_#ff5a1f]"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff5a1f]">0{index + 1} / {getBlogArticleCategories(article).map(getBlogCategoryLabel).join(" · ")}</p><h2 className="mt-8 max-w-xl text-2xl font-extrabold leading-tight tracking-[-.05em] sm:text-3xl">{article.title}</h2><p className="mt-5 max-w-xl text-sm leading-6 text-black/60">{article.audience}</p><span className="mt-auto pt-8 text-xs font-bold uppercase tracking-[.08em]">Read article <span className="text-[#ff5a1f]">↗</span></span></Link>)}</div>{visibleArticles.length === 0 && <p className="mt-10 border border-black/15 bg-white p-6 text-black/60">More articles for this topic are on the way.</p>}</div>;
}
