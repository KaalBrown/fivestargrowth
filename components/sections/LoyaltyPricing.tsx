"use client";

import { Check, HelpCircle, Minus, Plus, Sparkles } from "lucide-react";

export type LoyaltyPlan = "starter" | "growth";

export type LoyaltyConfiguration = {
  plan: LoyaltyPlan;
  unlimitedCustomers: boolean;
  extraStands: number;
};

type LoyaltyPricingProps = {
  value: LoyaltyConfiguration;
  onChange: (configuration: LoyaltyConfiguration) => void;
};

const plans = [
  {
    id: "starter" as const,
    name: "Starter",
    price: 49,
    description: "A simple, app-free loyalty system that gets customers coming back.",
    features: ["Visit-based loyalty points", "Apple & Google Wallet passes", "1 free Smart Counter Stand", "Up to 500 active customers"],
  },
  {
    id: "growth" as const,
    name: "Growth",
    price: 89,
    description: "For shops ready to build repeat visits and a stronger Google reputation.",
    features: ["Everything in Starter", "Automated Google review requests", "Lock-screen push offers", "Spend-based points ($1 = 1 point)"],
  },
];

export function loyaltyMonthlyTotal(configuration: LoyaltyConfiguration) {
  const plan = plans.find((item) => item.id === configuration.plan) ?? plans[0];
  return plan.price + (configuration.unlimitedCustomers ? 20 : 0) + (configuration.extraStands * 10);
}

export function LoyaltyPricing({ value, onChange }: LoyaltyPricingProps) {
  const total = loyaltyMonthlyTotal(value);
  const update = (patch: Partial<LoyaltyConfiguration>) => onChange({ ...value, ...patch });

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        {plans.map((plan) => {
          const active = value.plan === plan.id;
          return (
            <button key={plan.id} type="button" onClick={() => update({ plan: plan.id })} className={`relative min-h-full rounded-2xl border p-5 text-left transition focus:outline-none focus:ring-2 focus:ring-orange-300 ${active ? "border-orange-500 bg-orange-500/10 shadow-[0_0_32px_rgba(255,107,0,.12)]" : "border-white/15 bg-black hover:border-white/35"}`}>
              {plan.id === "growth" && <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black"><Sparkles size={12} /> Most popular</span>}
              <div className="flex items-start justify-between gap-3"><div><h3 className="text-2xl font-black text-white">{plan.name}</h3><p className="mt-1 text-sm leading-relaxed text-zinc-400">{plan.description}</p></div><span aria-hidden className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${active ? "border-orange-400" : "border-zinc-600"}`}>{active && <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />}</span></div>
              <p className="mt-6 text-4xl font-black tracking-[-.06em] text-white">${plan.price}<span className="ml-1 text-base font-bold tracking-normal text-zinc-400">NZD/mo</span></p>
              <ul className="mt-5 grid gap-2.5">{plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-zinc-200"><Check size={16} className="mt-0.5 shrink-0 text-orange-400" />{feature}</li>)}</ul>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-white/15 bg-black p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-sm font-black text-white">Your setup is ready by default.</p><p className="mt-1 text-sm leading-relaxed text-zinc-400">Every plan includes <strong className="font-bold text-zinc-200">1 free Smart Counter Stand</strong> and <strong className="font-bold text-zinc-200">up to 500 active customers</strong>.</p></div><span className="rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200">Included for most shops</span></div>
        <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex items-center gap-2"><p className="font-bold text-white">Unlimited customers</p><span className="group relative"><HelpCircle size={16} className="cursor-help text-zinc-500" /><span role="tooltip" className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden w-64 -translate-x-1/2 rounded-lg border border-white/15 bg-zinc-900 p-3 text-xs font-medium leading-relaxed text-zinc-200 shadow-xl group-hover:block group-focus-within:block">Most local cafés serving under 80 coffees a day stay below 500 active members for their first 6–12 months. Choose Unlimited only when your customer base grows beyond that.</span></span></div><p className="mt-1 text-sm text-zinc-400">More than 500 active loyalty members.</p></div><button type="button" role="switch" aria-checked={value.unlimitedCustomers} onClick={() => update({ unlimitedCustomers: !value.unlimitedCustomers })} className={`inline-flex min-h-11 items-center gap-2 self-start rounded-full border px-3 text-sm font-bold transition sm:self-auto ${value.unlimitedCustomers ? "border-orange-500 bg-orange-500 text-black" : "border-white/20 bg-zinc-900 text-zinc-200 hover:border-white/40"}`}><span className={`h-5 w-9 rounded-full p-0.5 transition ${value.unlimitedCustomers ? "bg-black/30" : "bg-zinc-700"}`}><span className={`block h-4 w-4 rounded-full bg-white transition ${value.unlimitedCustomers ? "translate-x-4" : "translate-x-0"}`} /></span> +$20 / mo</button></div>
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold text-white">Extra counter stands</p><p className="mt-1 text-sm text-zinc-400">Add stands for another counter, location, or service point. Maximum 10 total.</p></div><div className="flex min-h-11 items-center self-start rounded-full border border-white/20 bg-zinc-900 sm:self-auto"><button type="button" onClick={() => update({ extraStands: Math.max(0, value.extraStands - 1) })} disabled={value.extraStands === 0} aria-label="Remove one extra counter stand" className="grid h-11 w-11 place-items-center rounded-l-full text-zinc-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"><Minus size={17} /></button><span className="min-w-24 text-center text-sm font-bold text-white">{value.extraStands} <span className="font-medium text-zinc-400">× $10</span></span><button type="button" onClick={() => update({ extraStands: Math.min(9, value.extraStands + 1) })} disabled={value.extraStands === 9} aria-label="Add one extra counter stand" className="grid h-11 w-11 place-items-center rounded-r-full text-zinc-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"><Plus size={17} /></button></div></div>
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-bold text-zinc-300">Your monthly total</p><p className="mt-1 text-4xl font-black tracking-[-.06em] text-white">${total}<span className="ml-1 text-base font-bold tracking-normal text-zinc-400">NZD / mo</span></p></div><p className="max-w-52 text-right text-xs leading-relaxed text-zinc-500">No unnecessary add-ons. Start with the included setup and upgrade only when the business needs it.</p></div>
      </div>
    </div>
  );
}
