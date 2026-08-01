import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Google Review Request Automation" };
export default function ReviewRequestPage() { return <section className="mx-auto max-w-5xl px-5 py-24"><p className="font-bold uppercase tracking-widest text-sky">Smart review request automation</p><h1 className="mt-4 max-w-3xl text-5xl font-black">Make asking for five-star feedback effortless.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">A thoughtful automation that turns completed work into trustworthy public proof.</p><div className="mt-10 grid gap-4 sm:grid-cols-3">{["Right-time requests", "On-brand message flow", "Reputation reporting"].map((item) => <Card key={item}><h2 className="font-bold text-lime">{item}</h2></Card>)}</div><Button className="mt-10" variant="glow">Strengthen my reviews</Button></section>; }
