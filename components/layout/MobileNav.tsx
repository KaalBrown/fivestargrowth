"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return <div className="md:hidden"><button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="text-2xl">☰</button>{open && <div className="absolute inset-x-0 top-full border-b border-white/10 bg-ink p-5">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-white/80">{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="block py-3 font-bold text-lime">Get your plan →</Link></div>}</div>;
}
