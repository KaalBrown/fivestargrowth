import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return <section className="relative overflow-hidden px-5 py-24 sm:py-32"><div className="absolute -right-40 -top-24 h-96 w-96 rounded-full bg-sky/15 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Badge>Christchurch’s local growth engine</Badge><h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.96] tracking-tight sm:text-7xl">More calls. More bookings. <span className="text-lime">More five-star growth.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">We build the visible, trusted, conversion-ready online presence that makes local customers choose you first.</p><div className="mt-8 flex flex-wrap gap-3"><Button variant="glow">Get a growth plan</Button><Button href="#pricing" variant="outline">See the offers</Button></div><p className="mt-6 text-sm text-white/45">No long-term lock-ins · Built for Christchurch businesses</p></div></section>;
}
