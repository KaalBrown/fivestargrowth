"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";

const trackingKeys = ["reason", "source", "article", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "cta"];

export function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [requestAudit, setRequestAudit] = useState(() => searchParams.get("reason") === "video-audit");
  const trackingValues = trackingKeys.map((key) => [key, searchParams.get(key) ?? ""] as const);

  if (submitted) return <section className="mx-auto max-w-3xl px-5 py-32 text-center"><p className="text-5xl text-lime">✓</p><h1 className="mt-5 text-4xl font-black">{requestAudit ? "Thanks—your free audit video is on its way." : "Thanks—your growth plan is on its way."}</h1><p className="mt-4 text-white/65">{requestAudit ? "Our team will review your online presence and be in touch with your personalised next steps." : "We’ll be in touch shortly."}</p></section>;

  return <section className="mx-auto max-w-3xl px-5 py-20"><p className="font-bold uppercase tracking-widest text-sky">Let’s talk growth</p><h1 className="mt-4 text-5xl font-black">{requestAudit ? "Request your free 5-min video audit." : "Tell us where you want to go."}</h1><p className="mt-5 text-white/65">{requestAudit ? "Your audit request is pre-selected below. Keep it checked for a personalised video breakdown, or uncheck it if you would prefer a general conversation." : "Complete the short form and we’ll map the most practical next move."}</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-10 space-y-4">{trackingValues.map(([key, value]) => value && <input key={key} type="hidden" name={key} value={value} />)}<Input required name="name" placeholder="Your name" /><Input required type="email" name="email" placeholder="Email address" /><Input name="business" placeholder="Business name" /><label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4 text-sm font-semibold text-white"><input type="checkbox" name="request_video_audit" checked={requestAudit} onChange={(event) => setRequestAudit(event.target.checked)} className="mt-0.5 size-4 accent-[#ff5a1f]" /><span><span className="block">Request a free 5-minute audit video</span><span className="mt-1 block font-normal leading-6 text-white/60">We&apos;ll review your local visibility, reviews, and website conversion path.</span></span></label>{requestAudit && <div className="grid gap-4 sm:grid-cols-2"><Input required name="website" placeholder="Website URL" /><Input required type="tel" name="mobile" placeholder="Mobile for WhatsApp delivery" /></div>}<textarea name="message" placeholder={requestAudit ? "Anything specific you’d like us to review?" : "What would better growth look like?"} className="min-h-32 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-sky" /><button className="rounded-full bg-lime px-6 py-3 font-bold text-ink">{requestAudit ? "Request my free audit video" : "Send my details"}</button></form><div className="mt-8 flex gap-5 text-sm text-white/60"><a href="mailto:hello@fivestargrowth.nz">Email us</a><a href="https://wa.me/64204510002">WhatsApp us</a></div></section>;
}
