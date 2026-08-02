"use client";

import { motion, useReducedMotion } from "framer-motion";

const tiles = ["Smart Website", "Automated Reviews", "Maps Ranking"];

/** Reusable animated proof visual for the primary landing-page hero. */
export function HeroGrowthAnimation() {
  const reduceMotion = useReducedMotion();

  return <div aria-label="Animated local growth preview" className="relative mx-auto w-full max-w-[260px] overflow-hidden border border-white/20 bg-white/[.04] p-3 sm:max-w-[290px] sm:p-5"><div className="absolute inset-x-0 top-0 h-px bg-[#ff5a1f]" /><div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[.16em] text-white/55"><span>Live local growth</span><motion.span animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }} transition={{ duration: 1.7, repeat: Infinity }}>● Active</motion.span></div><div className="mt-3 space-y-2 sm:mt-5">{tiles.map((tile, index) => <motion.div key={tile} initial={reduceMotion ? false : { opacity: 0, x: 22 }} animate={reduceMotion ? undefined : { opacity: [0.78, 1, 0.78], x: [0, 4, 0] }} transition={{ duration: 2.4, delay: index * 0.22, repeat: Infinity, ease: "easeInOut" }} className="flex items-center justify-between bg-[#ff5a1f] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.08em] text-white"><span>{tile}</span><span>↗</span></motion.div>)}</div><div className="mt-4 hidden grid-cols-2 gap-2 border-t border-white/15 pt-4 text-center sm:grid"><div className="bg-white/[.06] p-2"><motion.p animate={reduceMotion ? undefined : { y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-lg font-extrabold text-[#ff8a5d]">#3</motion.p><p className="mt-1 text-[8px] uppercase tracking-[.1em] text-white/55">Maps result</p></div><div className="bg-white/[.06] p-2"><motion.p animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-lg font-extrabold text-[#ff8a5d]">4.9 ★</motion.p><p className="mt-1 text-[8px] uppercase tracking-[.1em] text-white/55">Trust score</p></div></div></div>;
}
