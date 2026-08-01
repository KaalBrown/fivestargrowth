import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, { title: string; intro: string }> = {
  "christchurch-local-seo-guide": { title: "The Christchurch Local SEO Guide", intro: "Local SEO is how you become the clear choice for customers searching nearby." },
  "get-more-google-reviews": { title: "How to Get More Google Reviews", intro: "Great reviews come from a reliable process, not good luck." },
  "website-conversion-basics": { title: "Website Conversion Basics for Local Businesses", intro: "A strong local website makes a customer’s next action simple and low-risk." },
};
export function generateStaticParams() { return Object.keys(articles).map((slug) => ({ slug })); }
export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = articles[slug]; if (!article) notFound(); return <article className="mx-auto max-w-3xl px-5 py-20"><Link href="/blog" className="text-sm text-lime">← All insights</Link><p className="mt-10 font-bold uppercase tracking-widest text-sky">Local growth playbook</p><h1 className="mt-4 text-5xl font-black leading-tight">{article.title}</h1><p className="mt-8 text-xl leading-9 text-white/70">{article.intro}</p><div className="mt-10 space-y-5 leading-8 text-white/75"><p>Customers are already looking for the services you offer. The work is making your value clear, your proof visible, and your next step easy.</p><p>Start with the fundamentals, measure the response, then keep improving the system that turns attention into real enquiries.</p></div></article>; }
