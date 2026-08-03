import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "Google", icon: MapPin },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Facebook", icon: Facebook },
];

export function Footer() {
  return <footer className="border-t border-black/15 bg-[#f7f7f3] text-[#101010]"><div className="mx-auto max-w-[1440px] px-5 py-9 lg:px-9"><div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"><div><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/70">Industries we serve</p><p className="mt-3 max-w-2xl text-base leading-7 text-black/70">Five Star Growth brings together statisticians, computer scientists, and web developers to turn local business data into practical growth systems.</p></div><div className="grid gap-2 sm:grid-cols-2"><Link href="/for-clinics" className="inline-flex min-h-11 items-center justify-center bg-[#101010] px-4 text-center text-xs font-extrabold uppercase tracking-[.05em] text-white transition hover:bg-[#b9380a]">For Medical &amp; Health Clinics ↗</Link><Link href="/for-tradies" className="inline-flex min-h-11 items-center justify-center bg-[#101010] px-4 text-center text-xs font-extrabold uppercase tracking-[.05em] text-white transition hover:bg-[#b9380a]">For Tradies &amp; Field Services ↗</Link></div></div><div className="mt-8 flex flex-col gap-5 border-t border-black/15 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap items-center gap-x-4 gap-y-3"><p className="fsg-mono text-black/70">© {new Date().getFullYear()} KAAL GROUP LIMITED</p><a href="mailto:hello@fivestargrowth.nz" className="font-semibold text-black/70 transition hover:text-[#b9380a]">hello@fivestargrowth.nz</a><div className="flex items-center gap-2">{socialLinks.map(({ label, icon: Icon }) => <Link key={label} href="/contact" aria-label={label} className="grid h-7 w-7 place-items-center rounded-full border border-black/20 text-black/70 transition hover:border-[#b9380a] hover:bg-[#b9380a] hover:text-white"><Icon size={13} strokeWidth={2} /></Link>)}</div></div><nav aria-label="Footer navigation" className="flex gap-6 text-xs font-extrabold uppercase tracking-[.1em]"><Link href="/contact" className="transition hover:text-[#b9380a]">Contact</Link><Link href="/blog" className="transition hover:text-[#b9380a]">Blog</Link></nav></div></div></footer>;
}
