import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

const links = [
  { href: "/services/smart-website", label: "Smart Website" },
  { href: "/services/review-request", label: "Review Automation" },
  { href: "/services/seo", label: "Local SEO" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  return <header className="sticky top-0 z-40 border-b border-black/15 bg-[#f7f7f3]/95 text-[#101010] backdrop-blur"><nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 lg:px-9"><Link href="/" className="shrink-0 text-lg font-extrabold tracking-[-.08em]">FIVE<span className="text-[#ff5a1f]">★</span>GROWTH</Link><div className="hidden min-w-0 items-center justify-center gap-8 xl:gap-10 lg:flex">{links.map((link) => <Link key={link.href} href={link.href} className="whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-[.06em] hover:text-[#ff5a1f]">{link.label}</Link>)}</div><div className="hidden lg:block"><Button className="whitespace-nowrap px-4 py-2" variant="outline">Get a growth plan</Button></div><MobileNav links={links} /></nav></header>;
}
