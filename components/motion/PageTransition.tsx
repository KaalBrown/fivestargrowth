"use client";
import { motion } from "framer-motion";
export function PageTransition({ children }: { children: React.ReactNode }) { return <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }}>{children}</motion.main>; }
