import Link from "next/link";
import { Suspense } from "react";
import { VideoAuditRequestButton } from "@/components/ui/VideoAuditRequestButton";
import { MobileNav } from "./MobileNav";

const links = [{ href: "/blog", label: "Blog" }];
const serviceLinks = [
  { href: "/services/smart-website", label: "Smart Website Pack" },
  { href: "/services/review-request", label: "Trust Engine" },
  { href: "/services/seo", label: "Growth Engine" },
  { href: "/services/social-media", label: "Social Presence" },
];

export function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-black/15 bg-[#f7f7f3] text-[#101010]"><nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 lg:px-9"><Link href="/" className="shrink-0 text-lg font-extrabold tracking-[-.08em]">FIVE<span className="text-[#ff5a1f]">★</span>GROWTH</Link><div className="hidden min-w-0 items-center justify-center gap-8 xl:gap-10 lg:flex">{links.map((link) => <Link key={link.href} href={link.href} className="whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-[.06em] hover:text-[#ff5a1f]">{link.label}</Link>)}</div><div className="hidden items-center gap-5 lg:flex"><Suspense fallback={<Link href="/contact?reason=video-audit&cta=desktop-header" className="inline-flex items-center justify-center rounded-full bg-[#ff5a1f] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.08em] text-white">Free video audit ↗</Link>}><VideoAuditRequestButton source="desktop-header" className="rounded-full px-3 py-2 text-[10px]">Free video audit ↗</VideoAuditRequestButton></Suspense><div className="group relative"><Link href="/services" className="inline-flex min-h-9 items-center whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-[.06em] hover:text-[#ff5a1f]">Services <span className="ml-1 text-xs">↓</span></Link><div className="invisible pointer-events-none absolute right-0 top-full z-50 mt-3 w-56 border border-black/15 bg-[#f7f7f3] p-2 opacity-0 shadow-xl transition duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">{serviceLinks.map((link) => <Link key={link.href} href={link.href} className="block px-3 py-3 text-xs font-bold uppercase tracking-[.07em] hover:bg-[#101010] hover:text-white">{link.label}</Link>)}</div></div><Link href="/contact" className="whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-[.06em] hover:text-[#ff5a1f]">Contact us</Link></div><MobileNav links={links} serviceLinks={serviceLinks} /></nav></header>;
}
