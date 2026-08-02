"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { deliverFormSubmission } from "@/lib/form-delivery";

const trackingKeys = ["reason", "source", "article", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "cta"];

export function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [requestAudit, setRequestAudit] = useState(() => searchParams.get("reason") === "video-audit");
  const trackingValues = trackingKeys.map((key) => [key, searchParams.get(key) ?? ""] as const);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formData.entries()) as Record<string, string>;
    fields.request_video_audit = requestAudit ? "Yes" : "No";
    fields.marketing_consent = formData.get("marketing_consent") === "yes" ? "Yes — opted in to useful local growth tips" : "No";

    try {
      await deliverFormSubmission(
        requestAudit ? "New Five Star Growth Local Growth Video request" : "New Five Star Growth contact enquiry",
        fields,
      );
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <section className="mx-auto max-w-3xl px-5 py-32 text-center"><p className="text-5xl text-lime">✓</p><h1 className="mt-5 text-4xl font-black">{requestAudit ? "Thanks—your free Local Growth Video is on its way." : "Thanks—your growth plan is on its way."}</h1><p className="mt-4 text-white/65">{requestAudit ? "Our team will review your online presence and be in touch with your personalised next steps." : "We’ll be in touch shortly."}</p></section>;
  }

  return <section className="mx-auto max-w-3xl px-5 py-20"><p className="font-bold uppercase tracking-widest text-sky">Let’s talk growth</p><h1 className="mt-4 text-5xl font-black">{requestAudit ? "Get your free Local Growth Video." : "Tell us where you want to go."}</h1><p className="mt-5 text-white/65">{requestAudit ? "Your free Local Growth Video is selected below. Keep it checked and we’ll show you the clearest opportunities for more local calls, bookings, and trust." : "Complete the short form and we’ll map the most practical next move."}</p><form onSubmit={submitForm} className="mt-10 space-y-4">{trackingValues.map(([key, value]) => value && <input key={key} type="hidden" name={key} value={value} />)}<Input required name="name" placeholder="Your name" /><Input required type="email" name="email" placeholder="Email address" /><Input name="business" placeholder="Business name" /><label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4 text-sm font-semibold text-white"><input type="checkbox" name="request_video_audit" checked={requestAudit} onChange={(event) => setRequestAudit(event.target.checked)} className="mt-0.5 size-4 accent-[#ff5a1f]" /><span><span className="block">Yes — send me my free Local Growth Video</span><span className="mt-1 block font-normal leading-6 text-white/60">A focused 5-minute review of your website, Google visibility, and reviews, with clear next steps.</span></span></label>{requestAudit && <div className="grid gap-4 sm:grid-cols-2"><Input required name="website" placeholder="Website URL" /><Input required type="tel" name="mobile" placeholder="Mobile for WhatsApp delivery" /></div>}<textarea name="message" placeholder={requestAudit ? "Anything specific you’d like us to review?" : "What would better growth look like?"} className="min-h-32 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-sky" /><label className="flex cursor-pointer items-start gap-3 text-sm text-white/70"><input type="checkbox" name="marketing_consent" value="yes" className="mt-0.5 size-4 accent-[#ff5a1f]" /><span><span className="font-semibold text-white">Send me the occasional useful local growth tip.</span><span className="mt-1 block leading-6 text-white/55">Practical ideas for getting found, earning reviews, and winning more enquiries. No spam—unsubscribe anytime.</span></span></label><button disabled={submitting} className="rounded-full bg-lime px-6 py-3 font-bold text-ink transition disabled:cursor-wait disabled:opacity-60">{submitting ? "Sending..." : requestAudit ? "Send my free video" : "Send my details"}</button>{submitError && <p role="alert" className="text-sm text-[#ff8a5d]">We couldn’t send that just now. Please email us at hello@fivestargrowth.nz or try again shortly.</p>}</form><div className="mt-8 flex gap-5 text-sm text-white/60"><a href="mailto:hello@fivestargrowth.nz">Email us</a><a href="https://wa.me/64204510002">WhatsApp us</a></div></section>;
}
