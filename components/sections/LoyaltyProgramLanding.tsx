"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  Gift,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Store,
  TimerReset,
  Truck,
  WalletCards,
  Zap,
} from "lucide-react";

const orange = "#FF6B00";

const problems = [
  { icon: Gift, title: "Lost stamp cards", copy: "Paper cards disappear in wallets, never give you a contact detail, and are forgotten before the next visit." },
  { icon: MessageSquareText, title: "Awkward review requests", copy: "Your team should not have to chase reviews or hope customers remember once they get home." },
  { icon: CircleDollarSign, title: "Third-party commissions", copy: "Marketplaces own the customer relationship while taking a cut of customers you already earned." },
];

const uses = [
  { icon: Store, title: "Cafés", metric: "+140%", label: "Repeat visits", copy: "Reward morning regulars without slowing down the queue." },
  { icon: Star, title: "Restaurants", metric: "45+", label: "Reviews / month", copy: "Turn a great meal into fresh, credible Google proof." },
  { icon: WalletCards, title: "Retail", metric: "100%", label: "Wallet compatible", copy: "Give shoppers a reason to come back without another app." },
];

const offerItems = [
  "Premium counter-top NFC Smart Scanner stand",
  "Two-tap loyalty and Google review automation engine",
  "Native Apple Wallet and Google Wallet loyalty pass",
  "Optional SMS customer-capture engine",
  "White-glove setup, branding, and launch support",
];

const checkoutUrls = {
  monthly: process.env.NEXT_PUBLIC_LOYALTY_STRIPE_MONTHLY_PAYMENT_LINK,
  annual: process.env.NEXT_PUBLIC_LOYALTY_STRIPE_ANNUAL_PAYMENT_LINK,
};

function ScanGraphic({ returnVisit = false }: { returnVisit?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-orange-500/35 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5 shadow-[0_0_48px_rgba(255,107,0,.12)] sm:p-6">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">{returnVisit ? "Return visit" : "First visit"}</p>
          <p className="mt-2 text-lg font-extrabold text-white">{returnVisit ? "A quick tap unlocks the review." : "A quick tap starts the relationship."}</p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-orange-400/40 bg-orange-500/10 text-orange-400"><Smartphone size={21} /></div>
      </div>
      <div className="relative mt-6 grid grid-cols-[1fr_auto] gap-3 rounded-2xl border border-white/10 bg-black/55 p-4">
        <div>
          <div className="h-2 w-20 rounded bg-white/20" />
          <div className="mt-3 h-2 w-32 rounded bg-white/10" />
          <div className="mt-2 h-2 w-24 rounded bg-white/10" />
        </div>
        <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-dashed border-orange-400 bg-orange-500/10 text-orange-300"><Zap size={27} /></div>
      </div>
      <div className="relative mt-4 flex items-center gap-2 text-sm font-bold text-white">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-orange-500 text-black"><Check size={15} strokeWidth={3} /></span>
        {returnVisit ? "Review prompt sent at the right moment" : "+50 VIP points added instantly"}
      </div>
    </div>
  );
}

export function LoyaltyProgramLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const checkoutUrl = checkoutUrls[billing];
    if (checkoutUrl) {
      window.location.assign(checkoutUrl);
      return;
    }
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-[#080808] text-white selection:bg-orange-500 selection:text-black">
      <section className="relative isolate border-b border-white/10 bg-[radial-gradient(circle_at_78%_12%,rgba(255,107,0,.22),transparent_24rem),radial-gradient(circle_at_20%_35%,rgba(255,85,0,.12),transparent_28rem)] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr] lg:gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/60 bg-orange-500/10 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-orange-300 sm:text-xs"><Zap size={14} /> The automated 2-tap growth engine for local shops</div>
              <h1 className="mt-7 text-4xl font-black leading-[.98] tracking-[-.065em] text-white sm:text-6xl lg:text-7xl">Turn first-time walk-ins into <span className="text-orange-500">lifetime regulars</span> &amp; automatic 5-star Google reviews.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">Tap once for instant VIP loyalty points. Tap twice on return visits to automatically trigger 5-star Google reviews. No app downloads required.</p>
              <a href="#checkout" className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-black tracking-wide text-black shadow-[0_0_30px_rgba(255,107,0,.34)] transition hover:scale-[1.02] hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-black">CLAIM YOUR SMART SCANNER NOW <ArrowRight size={18} /></a>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400"><span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-orange-400" /> No app downloads</span><span className="inline-flex items-center gap-2"><TimerReset size={16} className="text-orange-400" /> Launch-ready setup</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 rounded-[2.5rem] bg-orange-500/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-orange-500/50 bg-[#111]/90 p-4 shadow-[0_0_60px_rgba(255,107,0,.22)] sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-xs font-bold uppercase tracking-[.18em] text-zinc-400">FiveStar Smart Scanner</span><span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Live</span></div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black p-5 sm:p-7">
                  <div className="mx-auto grid aspect-square max-w-[16rem] place-items-center rounded-[2rem] border-2 border-dashed border-orange-400/80 bg-[radial-gradient(circle,rgba(255,107,0,.25),rgba(255,107,0,.02)_65%)]">
                    <div className="grid h-32 w-32 place-items-center rounded-full border border-orange-300/70 bg-orange-500/10 text-center shadow-[0_0_50px_rgba(255,107,0,.3)]"><div><Smartphone className="mx-auto text-orange-300" size={32} /><p className="mt-2 text-xs font-black uppercase tracking-wider text-orange-200">Tap to earn</p></div></div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-zinc-900 p-3"><p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">VIP points</p><p className="mt-1 text-2xl font-black text-orange-400">+50</p></div><div className="rounded-xl bg-zinc-900 p-3"><p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Google proof</p><p className="mt-1 text-2xl font-black text-white">★★★★★</p></div></div>
                </div>
                <p className="mt-4 text-center text-sm text-zinc-400">A physical scanner with a digital customer-growth engine behind it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">The local business leak</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-.05em] sm:text-5xl">You are losing 90% of your daily walk-ins the second they walk out your door.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-2xl border border-white/10 bg-[#111] p-6"><Icon className="text-orange-400" /><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-relaxed text-zinc-400">{copy}</p></article>)}
          </div>
          <div className="mt-10 grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-2">
            <div className="bg-zinc-900 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-zinc-500">Outdated paper cards</p><div className="mt-7 rotate-[-2deg] rounded-xl border border-dashed border-zinc-600 bg-zinc-800 p-5 opacity-70"><p className="text-lg font-black text-zinc-400">BUY 9, GET 1 FREE</p><div className="mt-5 flex gap-2">{Array.from({ length: 8 }).map((_, index) => <span key={index} className="h-7 w-7 rounded-full border border-zinc-600" />)}</div><p className="mt-5 text-sm text-zinc-500">No customer details. No return signal. No review request.</p></div></div>
            <div className="bg-[linear-gradient(135deg,#1b120b,#100e0c)] p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">FiveStar Smart Scanner</p><div className="mt-7 rounded-xl border border-orange-500/50 bg-black/60 p-5 shadow-[0_0_28px_rgba(255,107,0,.16)]"><div className="flex items-center justify-between"><p className="font-black">VIP loyalty pass</p><Award className="text-orange-400" /></div><p className="mt-3 text-sm text-zinc-300">Points, return visits, consented contact capture, and perfectly timed review prompts.</p><div className="mt-5 flex items-center gap-2 text-sm font-bold text-orange-300"><Check size={16} /> Built for repeat business</div></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0c0c] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">How it works</p><h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-.05em] sm:text-5xl">The 2-tap engine that converts regulars into 5-star Google reviews.</h2><div className="mt-10 grid gap-6 lg:grid-cols-2"><article><div className="mb-3 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-300">01 / Visit #1</div><h3 className="text-2xl font-extrabold">VIP onboarding — +50 points</h3><p className="mt-3 max-w-lg text-zinc-400">The customer taps your counter scanner. Their digital wallet pass appears instantly, creating a real reason to return.</p><div className="mt-5"><ScanGraphic /></div></article><article><div className="mb-3 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-300">02 / Visit #2+</div><h3 className="text-2xl font-extrabold">Automated review trigger</h3><p className="mt-3 max-w-lg text-zinc-400">On their return, the second tap recognises loyalty and presents a friendly Google review invitation at the right moment.</p><div className="mt-5"><ScanGraphic returnVisit /></div></article></div></div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">Made for local commerce</p><h2 className="mt-4 text-3xl font-black tracking-[-.05em] sm:text-5xl">Real-world visits. Measurable results.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{uses.map(({ icon: Icon, title, metric, label, copy }) => <article key={title} className="group rounded-3xl border border-white/10 bg-[#111] p-6 transition hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_0_34px_rgba(255,107,0,.12)]"><div className="flex items-start justify-between"><Icon className="text-orange-400" size={28} /><div className="rounded-xl bg-orange-500 px-3 py-2 text-right text-black"><strong className="block text-2xl font-black leading-none">{metric}</strong><span className="mt-1 block text-[10px] font-extrabold uppercase tracking-wider">{label}</span></div></div><h3 className="mt-8 text-2xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-zinc-400">{copy}</p></article>)}</div></div></section>

      <section className="relative border-y border-orange-500/25 bg-[radial-gradient(circle_at_80%_50%,rgba(255,107,0,.2),transparent_26rem)] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">The irresistible offer stack</p><h2 className="mt-4 text-3xl font-black tracking-[-.05em] sm:text-5xl">Everything needed to turn a counter tap into a growth system.</h2><ul className="mt-7 grid gap-4">{offerItems.map((item) => <li key={item} className="flex gap-3 text-lg text-zinc-200"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange-500 text-black"><Check size={14} strokeWidth={4} /></span>{item}</li>)}</ul></div><div className="rounded-[2rem] border border-orange-500/60 bg-[#111] p-6 shadow-[0_0_50px_rgba(255,107,0,.16)] sm:p-8"><div className="rounded-2xl border border-white/10 bg-black p-6"><div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[.16em] text-zinc-400">Package contents</p><Sparkles className="text-orange-400" /></div><div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-5"><Smartphone className="text-orange-300" /><p className="mt-4 font-black">NFC smart stand</p></div><div className="rounded-xl border border-white/10 bg-zinc-900 p-5"><WalletCards className="text-orange-300" /><p className="mt-4 font-black">Wallet pass</p></div><div className="col-span-2 rounded-xl border border-white/10 bg-zinc-900 p-5"><div className="flex items-center gap-3"><MessageSquareText className="text-orange-300" /><p className="font-black">Review + SMS automation engine</p></div></div></div></div><p className="mt-5 text-sm leading-relaxed text-zinc-400">Installed and branded for your business, so your team can start using it without a technical setup project.</p></div></div></section>

      <section id="checkout" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">Start your scanner package</p><h2 className="mt-4 text-3xl font-black tracking-[-.05em] sm:text-5xl">Claim your Smart Scanner package today, 100% risk-free.</h2><div className="mt-6 flex flex-wrap justify-center gap-3"><span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200"><ShieldCheck size={16} /> 30-day money-back guarantee</span><span className="inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-400/10 px-4 py-2 text-sm font-bold text-orange-200"><Truck size={16} /> Express 48h shipping</span></div></div><form onSubmit={handleCheckout} className="mx-auto mt-10 max-w-xl rounded-3xl border border-orange-500/45 bg-[#111] p-5 text-left shadow-[0_0_55px_rgba(255,107,0,.13)] sm:p-8"><div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="font-black">Secure Stripe Checkout</p><p className="mt-1 text-sm text-zinc-400">Choose the billing option that suits your business.</p></div><CreditCard className="text-orange-400" /></div><fieldset className="mt-6 grid gap-3"><legend className="text-sm font-bold text-zinc-200">Choose your package billing</legend><label className={`relative flex cursor-pointer items-center justify-between gap-4 rounded-2xl border p-4 transition ${billing === "monthly" ? "border-orange-500 bg-orange-500/10" : "border-white/15 bg-black hover:border-white/30"}`}><input className="sr-only" type="radio" name="billing" value="monthly" checked={billing === "monthly"} onChange={() => setBilling("monthly")} /><span><span className="block font-extrabold text-white">$69 NZD / month</span><span className="mt-1 block text-sm text-zinc-400">Billed monthly. Flexible month-to-month access.</span></span><span className="grid h-5 w-5 place-items-center rounded-full border border-orange-400">{billing === "monthly" && <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />}</span></label><label className={`relative flex cursor-pointer items-center justify-between gap-4 rounded-2xl border p-4 transition ${billing === "annual" ? "border-orange-500 bg-orange-500/10" : "border-white/15 bg-black hover:border-white/30"}`}><input className="sr-only" type="radio" name="billing" value="annual" checked={billing === "annual"} onChange={() => setBilling("annual")} /><span><span className="flex flex-wrap items-center gap-2 font-extrabold text-white">$59 NZD / month <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-black">Save $120/year</span></span><span className="mt-1 block text-sm text-zinc-400">Billed annually at $708 NZD / year — equivalent to $59 per month.</span></span><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-orange-400">{billing === "annual" && <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />}</span></label></fieldset><div className="mt-6 rounded-xl border border-white/15 bg-black px-4 py-4 text-sm text-zinc-400"><span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-orange-400" /> Card details open securely in Stripe after you continue.</span></div><button type="submit" className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-black tracking-wide text-black transition hover:scale-[1.01] hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-[#111]">CONTINUE WITH {billing === "annual" ? "ANNUAL" : "MONTHLY"} PLAN <ArrowRight size={18} /></button>{submitted && <p role="status" className="mt-4 rounded-xl border border-orange-400/30 bg-orange-500/10 p-4 text-sm leading-relaxed text-orange-100">Checkout is ready to connect. Add separate Stripe Payment Links as <code className="rounded bg-black px-1.5 py-0.5">NEXT_PUBLIC_LOYALTY_STRIPE_MONTHLY_PAYMENT_LINK</code> and <code className="rounded bg-black px-1.5 py-0.5">NEXT_PUBLIC_LOYALTY_STRIPE_ANNUAL_PAYMENT_LINK</code>, then the selected plan will securely open Stripe without your site ever handling card details.</p>}<p className="mt-4 text-center text-xs text-zinc-500">Payments are processed by Stripe. Five Star Growth never stores card details.</p></form></section>
    </main>
  );
}
