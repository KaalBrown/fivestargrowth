"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  className?: string;
  children?: React.ReactNode;
  source?: string;
};

export function VideoAuditRequestButton({ className = "", children = "Free video audit ↗", source = "site" }: Props) {
  const searchParams = useSearchParams();
  const contactParams = new URLSearchParams(searchParams.toString());
  contactParams.set("reason", "video-audit");
  contactParams.set("cta", source);

  return <Link href={`/contact?${contactParams.toString()}`} className={`inline-flex items-center justify-center bg-[#ff5a1f] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-white hover:text-[#101010] ${className}`}>{children}</Link>;
}
