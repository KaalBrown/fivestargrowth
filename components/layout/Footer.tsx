import Link from "next/link";

export function Footer() {
  return <footer className="border-t border-white/10"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Kaal Group Limited. NZBN: 9429050000000</p><div className="flex gap-5"><Link href="/contact">Contact</Link><Link href="/blog">Blog</Link></div></div></footer>;
}
