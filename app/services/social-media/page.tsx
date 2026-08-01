import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Social Media Management" };
export default function SocialMediaPage() { return <section className="mx-auto max-w-5xl px-5 py-24"><p className="font-bold uppercase tracking-widest text-sky">Social media management</p><h1 className="mt-4 max-w-3xl text-5xl font-black">Show up with a voice customers remember.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Useful content and consistent presence with a direct line back to real business outcomes.</p><div className="mt-10 grid gap-4 sm:grid-cols-3">{["Content themes", "Consistent publishing", "Local community signals"].map((item) => <Card key={item}><h2 className="font-bold text-lime">{item}</h2></Card>)}</div><Button className="mt-10" variant="glow">Grow my presence</Button></section>; }
