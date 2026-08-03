import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles, getBlogArticle, getBlogArticleCategories, getBlogCategoryLabel } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return blogArticles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  return article ? { title: article.title, description: article.intro } : {};
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const articleCategories = getBlogArticleCategories(article);
  const sharedAcrossIndustries = articleCategories.length > 1;

  return <article className="min-h-screen bg-[#f7f7f3] px-5 py-16 text-[#101010] lg:px-9 lg:py-24"><div className="mx-auto max-w-3xl"><Link href={sharedAcrossIndustries ? "/blog" : `/blog?filter=${article.category}`} className="text-xs font-bold uppercase tracking-[.08em] text-[#ff5a1f]">← {sharedAcrossIndustries ? "All industry articles" : `${getBlogCategoryLabel(article.category)} articles`}</Link><p className="fsg-mono mt-12 text-[10px] uppercase tracking-[.16em] text-black/55">{articleCategories.map(getBlogCategoryLabel).join(" · ")} growth playbook</p><h1 className="mt-5 text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">{article.title}</h1><p className="mt-8 border-l-4 border-[#ff5a1f] pl-5 text-xl leading-8 text-black/70">{article.intro}</p><div className="mt-12 space-y-10">{article.sections.map((section, index) => <section key={section.heading} className="border-t border-black/15 pt-6"><p className="fsg-mono text-[10px] text-[#ff5a1f]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-3 text-2xl font-extrabold tracking-[-.05em] sm:text-3xl">{section.heading}</h2><p className="mt-4 text-lg leading-8 text-black/65">{section.body}</p>{section.sources && <div className="mt-4 flex flex-wrap gap-3">{section.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-[.08em] text-[#ff5a1f] underline decoration-[#ff5a1f]/35 underline-offset-4 hover:text-[#101010]">{source.label} ↗</a>)}</div>}</section>)}</div><aside className="mt-16 border border-[#101010] bg-[#101010] p-7 text-white sm:p-10"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">Next step / {article.service}</p><h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-.06em]">Put this growth system to work for your business.</h2><p className="mt-4 max-w-xl leading-7 text-white/65">Talk with Five Star Growth about a practical plan matched to your business, customer journey, and local market.</p><div className="mt-7 flex flex-wrap gap-3"><Link href={article.ctaHref ?? "/contact"} className="inline-flex bg-[#ff5a1f] px-5 py-3 text-xs font-bold uppercase tracking-[.08em] transition hover:bg-white hover:text-[#101010]">{article.cta} <span className="ml-2">↗</span></Link>{article.secondaryCta && <Link href={article.secondaryCta.href} className="inline-flex border border-white/35 px-5 py-3 text-xs font-bold uppercase tracking-[.08em] transition hover:border-white hover:bg-white hover:text-[#101010]">{article.secondaryCta.label} <span className="ml-2">↗</span></Link>}</div></aside></div></article>;
}
