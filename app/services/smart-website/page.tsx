import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "High-Converting Smart Websites" };
export default function SmartWebsitePage() { return <section className="mx-auto max-w-5xl px-5 py-24"><p className="font-bold uppercase tracking-widest text-sky">High-converting smart websites</p><h1 className="mt-4 max-w-3xl text-5xl font-black">A website that makes the next step feel obvious.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Designed around trust, clarity and conversion—not just a pretty homepage.</p><div className="mt-10 grid gap-4 sm:grid-cols-3">{["Clear customer journeys", "Fast mobile experience", "Lead capture systems"].map((item) => <Card key={item}><h2 className="font-bold text-lime">{item}</h2></Card>)}</div><Button className="mt-10" variant="glow">Plan my website</Button></section>; }
