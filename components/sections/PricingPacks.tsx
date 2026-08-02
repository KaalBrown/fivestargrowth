"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type ContractType = "sixMonth" | "monthly";

const plans = [
  {
    name: "Starter Pack",
    price: "$99/mo",
    tagline: "Essential online foundation & lead capture for local practices.",
    features: (contract: ContractType) => [
      `Custom Smart Website Included (${contract === "sixMonth" ? "Free on 6-month term" : "$300 setup on no-contract"})`,
      "Direct WhatsApp Lead Capture Widget setup",
      "Monthly Google Business Profile tune-ups & local SEO",
      "Monthly search standing & performance reports",
    ],
    cta: "GET STARTED WITH STARTER",
  },
  {
    name: "Growth Pack",
    price: "$139/mo",
    tagline: "Our flagship engine designed to rank #1 on Google Maps and automate 5-star reviews.",
    features: () => [
      "Includes EVERYTHING in Starter Pack",
      "Automated 5-Star Google Review Generation Engine",
      "1 Practice-Tailored SEO Blog Post written & published monthly",
      "Advanced Google Maps ranking & review acceleration",
    ],
    cta: "CLAIM GROWTH ENGINE",
    featured: true,
  },
  {
    name: "Custom / Fully Managed",
    price: "Custom / Flexible",
    tagline: "End-to-end growth partner for practices wanting complete social & web management.",
    features: () => [
      "Full Social Media Management (turning client/clinic photos & Google reviews into regular posts)",
      "Custom lead capture & patient scheduling integrations",
      "Dedicated 1-on-1 monthly strategy partner",
    ],
    cta: "BOOK A STRATEGY CALL",
  },
];

export function PricingPacks() {
  const [contract, setContract] = useState<ContractType>("sixMonth");
  const isSixMonth = contract === "sixMonth";

  return (
    <section id="pricing" className="px-5 py-16 lg:px-9 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/55">Ways to work / 08</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">Start with a plan that makes sense.</h2>
          </div>
          <p className="max-w-md self-end text-lg leading-7 text-black/60">Each offer gives you a practical place to start. We can tailor the scope once we understand what will make the greatest difference.</p>
        </div>

        <div className="mt-12 border border-black/20 bg-[#e7e4dd] p-4 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-5">
          <div>
            {isSixMonth && <span className="inline-flex bg-[#ff5a1f] px-2 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Recommended (Best Value)</span>}
            <p className="mt-2 text-lg font-extrabold tracking-[-.04em]">{isSixMonth ? "$0 Setup Fee + FREE Custom Smart Website Included" : "$300 One-off Setup Fee (or $0 setup if connecting an existing site)"}</p>
            <p className="mt-1 text-sm text-black/60">{isSixMonth ? "6-month agreement" : "Month-to-month option"}</p>
          </div>
          <button type="button" onClick={() => setContract(isSixMonth ? "monthly" : "sixMonth")} aria-pressed={!isSixMonth} className="mt-4 inline-flex border border-black bg-[#f7f7f3] px-4 py-3 text-xs font-extrabold uppercase tracking-[.08em] transition hover:bg-black hover:text-white sm:mt-0">{isSixMonth ? "Need No Contract? View Month-to-Month Rates" : "View 6-Month Best Value Rates"}</button>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article key={plan.name} className={`flex min-h-[500px] flex-col border p-6 ${plan.featured ? "border-[#ff5a1f] bg-[#ff5a1f] text-white" : "border-black/20"}`}>
              <p className="fsg-mono text-[10px] uppercase tracking-[.16em] opacity-65">0{index + 1} / {plan.name}</p>
              <h3 className="mt-7 text-3xl font-extrabold leading-tight tracking-[-.07em]">{plan.price}</h3>
              <p className="mt-3 max-w-xs leading-7 opacity-75">{plan.tagline}</p>
              <ul className="mt-9 space-y-3 border-t border-current/20 pt-5 text-sm leading-6">
                {plan.features(contract).map((feature) => <li key={feature}>✦ {feature}</li>)}
              </ul>
              <Button className={`mt-auto w-full ${plan.featured ? "border-white text-white hover:bg-white hover:text-[#101010]" : ""}`} variant={plan.featured ? "outline" : "solid"}>{plan.cta}</Button>
            </article>
          ))}
        </div>

        <p className="mt-5 max-w-4xl text-xs leading-5 text-black/50">* All plans include ongoing website hosting, speed updates, and technical maintenance. $0 setup fee requires a 6-month agreement. Month-to-month plans require a $199-$300 setup fee for new custom website builds.</p>
      </div>
    </section>
  );
}
