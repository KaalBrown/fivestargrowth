import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Christchurch Local SEO" };
export default function SeoPage() { return <section className="mx-auto max-w-5xl px-5 py-24"><p className="font-bold uppercase tracking-widest text-sky">Christchurch local SEO</p><h1 className="mt-4 max-w-3xl text-5xl font-black">Be the business customers find when they’re ready to buy.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">We connect your Google presence, local content, and website so you become the obvious nearby choice.</p><div className="mt-10 grid gap-4 sm:grid-cols-3">{["Google Business Profile", "Local content strategy", "Technical SEO foundation"].map((item) => <Card key={item}><h2 className="font-bold text-lime">{item}</h2></Card>)}</div><Button className="mt-10" variant="glow">Talk local SEO</Button></section>; }
