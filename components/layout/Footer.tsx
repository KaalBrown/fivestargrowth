import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "Google", icon: MapPin },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Facebook", icon: Facebook },
];

export function Footer() {
  return <footer className="border-t border-black/15 bg-[#f7f7f3] text-[#101010]"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-9"><div className="flex flex-wrap items-center gap-4"><p className="fsg-mono text-black/55">© {new Date().getFullYear()} KAAL GROUP LIMITED · NZBN: 9429050000000</p><div className="flex items-center gap-2">{socialLinks.map(({ label, icon: Icon }) => <Link key={label} href="/contact" aria-label={label} className="grid h-7 w-7 place-items-center rounded-full border border-black/15 text-black/55 transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-white"><Icon size={13} strokeWidth={2} /></Link>)}</div></div><div className="flex gap-5 font-bold uppercase tracking-wider"><Link href="/contact">Contact</Link><Link href="/blog">Blog</Link></div></div></footer>;
}
