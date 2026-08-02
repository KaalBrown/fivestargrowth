"use client";

import { motion } from "framer-motion";

export function BrushHighlight({ children }: { children: React.ReactNode }) {
  return <span className="relative inline-block isolate px-0.5 pb-2 leading-[1.15]"><motion.svg aria-hidden viewBox="0 0 200 28" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-3 w-full overflow-visible" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 0.9 }} viewport={{ once: false, amount: 0.7 }} transition={{ duration: 0.6, ease: "easeOut" }} style={{ transformOrigin: "left center" }}><path d="M4 9 C42 5, 85 11, 122 8 S172 5, 196 9" fill="none" stroke="#FF5A1F" strokeLinecap="round" strokeWidth="4" opacity="0.9" /><path d="M7 20 C48 16, 93 22, 132 18 S175 16, 192 20" fill="none" stroke="#FF5A1F" strokeLinecap="round" strokeWidth="3" opacity="0.85" /></motion.svg><span className="relative z-10">{children}</span></span>;
}
