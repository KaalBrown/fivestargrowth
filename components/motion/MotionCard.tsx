"use client";
import { motion } from "framer-motion";
export function MotionCard({ children }: { children: React.ReactNode }) { return <motion.div whileHover={{ y: -5, borderColor: "rgba(216,251,99,.45)" }} className="rounded-2xl border border-white/10 transition-colors">{children}</motion.div>; }
