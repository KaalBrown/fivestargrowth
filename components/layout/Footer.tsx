import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "Google", icon: MapPin },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Facebook", icon: Facebook },
];

export function Footer() {
  return <footer className="border-t border-black/15 bg-[#f7f7f3] text-[#101010]"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 text-xs lg:px-9"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap items-center gap-4"><p className="fsg-mono text-black/55">© {new Date().getFullYear()} KAAL GROUP LIMITED · NZBN: 9429050000000</p><a href="mailto:hello@fivestargrowth.nz" className="font-semibold text-black/65 transition hover:text-[#ff5a1f]">hello@fivestargrowth.nz</a><div className="flex items-center gap-2">{socialLinks.map(({ label, icon: Icon }) => <Link key={label} href="/contact" aria-label={label} className="grid h-7 w-7 place-items-center rounded-full border border-black/15 text-black/55 transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-white"><Icon size={13} strokeWidth={2} /></Link>)}</div></div><div className="flex gap-5 font-bold uppercase tracking-wider"><Link href="/contact">Contact</Link><Link href="/blog">Blog</Link></div></div><div className="flex flex-col gap-3 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/55">Industries we serve</p><div className="flex flex-col gap-2 font-bold text-black/70 sm:flex-row sm:gap-5"><Link href="/for-clinics" className="transition hover:text-[#ff5a1f]">For Medical &amp; Health Clinics ↗</Link><Link href="/for-tradies" className="transition hover:text-[#ff5a1f]">For Tradies &amp; Field Services ↗</Link></div></div><p className="max-w-2xl text-sm leading-6 text-black/60">Five Star Growth brings together statisticians, computer scientists, and web developers to turn local business data into practical growth systems.</p></div></footer>;
}
