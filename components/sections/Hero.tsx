import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return <section className="relative overflow-hidden px-5 py-24 sm:py-32"><div className="absolute -right-40 -top-24 h-96 w-96 rounded-full bg-sky/15 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Badge>Christchurch’s local growth engine</Badge><h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.96] tracking-tight sm:text-7xl">Turn everyday Google searches into booked appointments and lifelong clients.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Built specifically for local businesses, medical practices, and professional service providers.</p><div className="mt-8"><Button href="#pricing" variant="outline">Plans ↘</Button></div></div></section>;
}
