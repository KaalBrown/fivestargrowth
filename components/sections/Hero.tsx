import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return <section className="relative overflow-hidden px-5 py-24 sm:py-32"><div className="absolute -right-40 -top-24 h-96 w-96 rounded-full bg-sky/15 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Badge>Automated local marketing</Badge><h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.88] tracking-tight sm:text-7xl">The All-In-One <span className="text-[#ff5a1f]">Local Growth</span> Smart Engine</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Tired of empty website traffic and bad Google search standing? We transform your online reputation and turn local searches into paying customers.</p><a href="/contact?reason=video-audit&cta=hero" className="mt-8 inline-flex bg-[#ff5a1f] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white">Free video audit ↗</a></div></section>;
}
