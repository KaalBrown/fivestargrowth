"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return <section className="mx-auto max-w-3xl px-5 py-32 text-center"><p className="text-5xl text-lime">✓</p><h1 className="mt-5 text-4xl font-black">Thanks—your growth plan is on its way.</h1><p className="mt-4 text-white/65">We’ll be in touch shortly.</p></section>;
  return <section className="mx-auto max-w-3xl px-5 py-20"><p className="font-bold uppercase tracking-widest text-sky">Let’s talk growth</p><h1 className="mt-4 text-5xl font-black">Tell us where you want to go.</h1><p className="mt-5 text-white/65">Complete the short form and we’ll map the most practical next move.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-10 space-y-4"><Input required name="name" placeholder="Your name" /><Input required type="email" name="email" placeholder="Email address" /><Input name="business" placeholder="Business name" /><textarea name="message" placeholder="What would better growth look like?" className="min-h-32 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-sky" /><button className="rounded-full bg-lime px-6 py-3 font-bold text-ink">Send my details</button></form><div className="mt-8 flex gap-5 text-sm text-white/60"><a href="mailto:hello@fivestargrowth.nz">Email us</a><a href="https://wa.me/64204510002">WhatsApp us</a></div></section>;
}
