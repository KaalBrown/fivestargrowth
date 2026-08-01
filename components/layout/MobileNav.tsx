"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return <div className="md:hidden"><button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="border border-black p-2 text-sm leading-none">{open ? "×" : "☰"}</button>{open && <div className="absolute inset-x-0 top-full border-b border-black/15 bg-[#f7f7f3] p-5">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wider">{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block bg-[#ff5a1f] px-4 py-3 text-sm font-bold text-white">Get a growth plan ↗</Link></div>}</div>;
}
