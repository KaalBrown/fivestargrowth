import Link from "next/link";
import { Suspense } from "react";
import { VideoAuditRequestButton } from "@/components/ui/VideoAuditRequestButton";
import { PricingPacks } from "@/components/sections/PricingPacks";
import { InstantAudit } from "@/components/sections/InstantAudit";

type IndustryLandingProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  callout: string;
  outcomes: [string, string, string];
  serviceLabels: [string, string, string];
};

export function IndustryLanding({ eyebrow, headline, subheadline, callout, outcomes, serviceLabels }: IndustryLandingProps) {
  return <main className="fsg-home"><section className="border-b border-black/15 px-5 py-14 sm:py-20 lg:px-9 lg:py-24"><div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-end"><div><p className="fsg-mono text-[10px] uppercase tracking-[.18em] text-[#ff5a1f]">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.86] tracking-[-.08em] sm:text-7xl">{headline}</h1><p className="mt-7 max-w-2xl text-xl font-semibold leading-8">{subheadline}</p><div className="mt-9 flex flex-wrap gap-3"><Suspense fallback={<Link href="/contact?reason=video-audit&cta=industry-page" className="inline-flex items-center justify-center bg-[#ff5a1f] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white">Free video audit ↗</Link>}><VideoAuditRequestButton source="industry-page">Free video audit ↗</VideoAuditRequestButton></Suspense><a href="#pricing" className="inline-flex min-h-11 items-center justify-center border border-[#101010] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-[#101010] transition hover:bg-[#101010] hover:text-white">Plans ↘</a></div></div><aside className="border-l-2 border-[#ff5a1f] pl-5 text-lg font-medium leading-8 text-black/80">{callout}</aside></div></section><section className="bg-[#101010] px-5 py-14 text-white lg:px-9 lg:py-20"><div className="mx-auto max-w-[1200px]"><p className="fsg-mono text-[10px] uppercase tracking-[.18em] text-[#ff8a5d]">Your local growth system</p><div className="mt-7 grid gap-px bg-white/20 md:grid-cols-3">{outcomes.map((outcome, index) => <article key={outcome} className={`min-h-52 p-6 ${index === 1 ? "bg-[#ff5a1f]" : "bg-[#101010]"}`}><p className="fsg-mono text-[10px] text-white/60">0{index + 1}</p><h2 className="mt-14 text-2xl font-extrabold leading-tight tracking-[-.06em]">{outcome}</h2></article>)}</div></div></section><section className="px-5 py-14 lg:px-9 lg:py-20"><div className="mx-auto max-w-[1200px]"><p className="fsg-mono text-[10px] uppercase tracking-[.18em] text-[#ff5a1f]">What we build</p><div className="mt-6 grid gap-px bg-black/15 md:grid-cols-3">{serviceLabels.map((service, index) => <article key={service} className="bg-[#f7f7f3] p-6"><p className="fsg-mono text-xs text-[#ff5a1f]">0{index + 1}</p><h2 className="mt-12 text-2xl font-extrabold tracking-[-.06em]">{service}</h2><p className="mt-4 leading-7 text-black/60">A connected system built to make the next customer action easier.</p></article>)}</div><Link href="/contact" className="mt-8 inline-flex border-b border-black pb-1 text-xs font-bold uppercase tracking-[.12em] transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]">Talk through your growth plan ↗</Link></div></section><PricingPacks /><InstantAudit /></main>;
}
