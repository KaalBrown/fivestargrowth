import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

const links = [{ href: "/services/seo", label: "SEO" }, { href: "/services/smart-website", label: "Websites" }, { href: "/services/review-request", label: "Reviews" }, { href: "/blog", label: "Insights" }];

export function Navbar() {
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur"><nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4"><Link href="/" className="text-xl font-black tracking-tight">5<span className="text-lime">★</span> GROWTH</Link><div className="hidden items-center gap-6 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-lime">{link.label}</Link>)}<Button className="px-4 py-2">Get your plan</Button></div><MobileNav links={links} /></nav></header>;
}
