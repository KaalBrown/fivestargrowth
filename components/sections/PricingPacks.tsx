import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter Pack",
    price: "Starts from $99/mo",
    tagline: "For local businesses looking for a solid online foundation.",
    features: [
      "Smart Website Hosting",
      "Total analysis of your business online standing reports",
      "Google Business Profile tune-up every month",
      "Direct WhatsApp chat box setup for your site",
      "Chat box sends messages directly to your WhatsApp",
    ],
    cta: "Get Started with Starter",
  },
  {
    name: "Growth Pack",
    price: "Starts from $120/mo",
    tagline: "For businesses ready to generate predictable local leads.",
    features: [
      "Includes EVERYTHING in Starter",
      "Smart Review Automation System",
      "Advanced monthly business standing & performance reports",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Custom Plan",
    price: "Custom / Flexible",
    tagline: "Tailored packages built around your exact business goals.",
    description: "We understand every local business has unique requirements. Book a friendly 1-on-1 strategy meeting with us to discuss your needs so we can tailor an offer specifically for your growth.",
    features: [],
    cta: "Book a Strategy Call",
  },
];

export function PricingPacks() {
  return <section id="pricing" className="px-5 py-16 lg:px-9 lg:py-24"><div className="mx-auto max-w-[1440px]"><div className="grid gap-8 lg:grid-cols-2"><div><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/55">Ways to work / 08</p><h2 className="mt-4 text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">Start with a plan that makes sense.</h2></div><p className="max-w-md self-end text-lg leading-7 text-black/60">Each offer gives you a practical place to start. We can tailor the scope once we understand what will make the greatest difference.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{plans.map((plan, index) => <article key={plan.name} className={`flex min-h-[460px] flex-col border p-6 ${plan.featured ? "border-[#ff5a1f] bg-[#ff5a1f] text-white" : "border-black/20"}`}><p className="fsg-mono text-[10px] uppercase tracking-[.16em] opacity-65">0{index + 1} / {plan.name}</p><h3 className="mt-7 text-3xl font-extrabold leading-tight tracking-[-.07em]">{plan.price}</h3><p className="mt-3 max-w-xs leading-7 opacity-75">{plan.tagline}</p>{plan.description && <p className="mt-5 max-w-sm text-sm leading-6 opacity-75">{plan.description}</p>}{plan.features.length > 0 && <ul className="mt-9 space-y-3 border-t border-current/20 pt-5 text-sm">{plan.features.map((feature) => <li key={feature}>✦ {feature}</li>)}</ul>}<Button className={`mt-auto w-full ${plan.featured ? "border-white text-white hover:bg-white hover:text-[#101010]" : ""}`} variant={plan.featured ? "outline" : "solid"}>{plan.cta}</Button></article>)}</div></div></section>;
}
