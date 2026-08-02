"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const fieldClass = "w-full border border-white/25 bg-white/[.04] px-4 py-3 text-sm outline-none placeholder:text-white/45 focus:border-[#ff5a1f]";
const labelClass = "mb-1.5 block text-xs font-semibold text-white/75";

export function VideoAuditRequestButton({ className = "", children = "Free video audit ↗" }: { className?: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  const close = () => {
    setOpen(false);
    setSubmitted(false);
  };

  const modal = open && typeof document !== "undefined" ? createPortal(<div role="dialog" aria-modal="true" aria-labelledby="video-audit-title" className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 sm:p-6" onClick={close}><div className="w-full max-w-xl max-h-[calc(100dvh-2rem)] overflow-y-auto border border-white/20 bg-[#101010] p-6 text-white shadow-[12px_12px_0_#ff5a1f] sm:p-8" onClick={(event) => event.stopPropagation()}><div className="sticky top-0 z-10 -mt-3 -mr-3 flex justify-end bg-[#101010] pb-2 sm:-mt-4 sm:-mr-4"><button type="button" onClick={close} aria-label="Close video audit request" className="grid h-10 w-10 place-items-center text-2xl text-white/60 transition hover:bg-white hover:text-[#101010]">×</button></div>{submitted ? <div className="py-6"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">Request received</p><h2 id="video-audit-title" className="mt-4 text-3xl font-extrabold leading-tight tracking-[-.06em]">Thanks! Our team is reviewing your online presence and will send your personalised audit video to your email and WhatsApp shortly.</h2><button type="button" onClick={close} className="mt-7 border border-white/30 px-4 py-3 text-xs font-bold uppercase tracking-[.08em] transition hover:bg-white hover:text-[#101010]">Close</button></div> : <><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">Personalised video audit</p><h2 id="video-audit-title" className="mt-4 text-3xl font-extrabold leading-[.98] tracking-[-.06em]">Request your free audit video.</h2><p className="mt-4 max-w-lg leading-7 text-white/65">A real member of our team will review how your practice shows up online and send the most practical next moves.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-7 grid gap-4"><label><span className="sr-only">Practice name</span><input required name="practice" type="text" autoComplete="organization" placeholder="Practice name" className={fieldClass} /></label><label><span className="sr-only">Website URL</span><input required name="website" type="text" inputMode="url" placeholder="practice.co.nz" className={fieldClass} /></label><label><span className="sr-only">Mobile number for WhatsApp delivery</span><input required name="mobile" type="tel" autoComplete="tel" placeholder="Mobile number for WhatsApp delivery" className={fieldClass} /></label><label><span className="sr-only">Email address</span><input required name="email" type="email" autoComplete="email" placeholder="Email address" className={fieldClass} /></label><label><span className={labelClass}>What would you most like to improve? <span className="text-[#ff8a5d]">*</span></span><select required name="goal" defaultValue="" className={fieldClass}><option value="" disabled>Select an option</option><option>Get more bookings</option><option>Rank higher on Google Maps</option><option>Get more 5-star reviews</option><option>Improve our website</option><option>Not sure — I&apos;d like advice</option></select></label><label><span className={labelClass}>How did you hear about Five Star Growth? <span className="font-normal text-white/45">(optional)</span></span><select name="source" defaultValue="" className={fieldClass}><option value="">Select an option</option><option>Google search</option><option>Instagram / Facebook</option><option>Referral</option><option>Another local business</option><option>Other</option></select></label><label><span className={labelClass}>Anything specific you&apos;d like us to review? <span className="font-normal text-white/45">(optional)</span></span><textarea name="notes" rows={4} placeholder="For example: low bookings, poor Google ranking, or review issues." className={fieldClass} /></label><button type="submit" className="mt-2 w-full bg-[#ff5a1f] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-white hover:text-[#101010]">Send my free audit request ↗</button></form></>}</div></div>, document.body) : null;

  return <>{<button type="button" onClick={() => setOpen(true)} className={`inline-flex items-center justify-center bg-[#ff5a1f] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-white hover:text-[#101010] ${className}`}>{children}</button>}{modal}</>;
}
