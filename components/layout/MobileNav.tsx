"use client";

import Link from "next/link";
import { useState } from "react";
import { VideoAuditRequestButton } from "@/components/ui/VideoAuditRequestButton";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return <div className="flex items-center gap-2 md:hidden"><VideoAuditRequestButton className="min-h-10 rounded-full px-3 py-2 text-[9px]">Free video audit ↗</VideoAuditRequestButton><button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="border border-black p-2 text-sm leading-none">{open ? "×" : "☰"}</button>{open && <div className="absolute inset-x-0 top-full border-b border-black/15 bg-[#f7f7f3] p-5">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wider">{link.label}</Link>)}<div className="mt-3 border-y border-black/15 py-4 text-sm"><a href="tel:0204510002" className="block font-bold">020 451 0002</a><a href="mailto:hello@fivestargrowth.nz" className="mt-2 block text-black/65">hello@fivestargrowth.nz</a></div><Link href="/contact" onClick={() => setOpen(false)} className="mt-4 block bg-[#ff5a1f] px-4 py-3 text-sm font-bold text-white">Contact us ↗</Link></div>}</div>;
}
