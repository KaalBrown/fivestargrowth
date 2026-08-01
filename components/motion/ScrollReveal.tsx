"use client";
import { motion } from "framer-motion";
export function ScrollReveal({ children }: { children: React.ReactNode }) { return <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45 }}>{children}</motion.div>; }
