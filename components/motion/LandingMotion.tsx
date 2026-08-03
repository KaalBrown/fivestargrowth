"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionChildren = { children: React.ReactNode; className?: string; delay?: number };

const ease = [0.22, 1, 0.36, 1] as const;

/** Shared landing-page motion primitives. Reuse these instead of creating page-specific animation code. */
export function Reveal({ children, className, delay = 0 }: MotionChildren) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.7, delay, ease }}>{children}</motion.div>;
}

export function Stagger({ children, className }: Omit<MotionChildren, "delay">) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, show: { transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.12, delayChildren: 0.06 } } }}>{children}</motion.div>;
}

export function StaggerItem({ children, className }: Omit<MotionChildren, "delay">) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} variants={{ hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.62, ease } } }}>{children}</motion.div>;
}

export function HeroReveal({ children, className, delay = 0 }: MotionChildren) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay, ease }}>{children}</motion.div>;
}

export function HeroCardMotion({ children, className, delay = 0.3 }: MotionChildren) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 78, rotate: 1.5, scale: 0.96 }} animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }} transition={{ duration: 0.95, delay, ease }} whileHover={reduceMotion ? undefined : { y: -7, rotate: -0.35, transition: { duration: 0.28 } }}>{children}</motion.div>;
}

export function HoverPanel({ children, className }: Omit<MotionChildren, "delay">) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={cn("h-full", className)} whileHover={reduceMotion ? undefined : { y: -8, transition: { duration: 0.24, ease } }}>{children}</motion.div>;
}

/** Gives unwrapped landing sections the same reveal rhythm without duplicating observers per page. */
export function LandingMotionScope({ children, className }: Omit<MotionChildren, "delay">) {
  const scope = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !scope.current) return;
    const sections = Array.from(scope.current.children).filter((child): child is HTMLElement => child instanceof HTMLElement && child.matches("section:not([data-motion-managed])"));
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
        const section = entry.target as HTMLElement;
        section.animate([{ opacity: 0, transform: "translateY(34px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 680, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" });
        section.querySelectorAll<HTMLElement>("article, details").forEach((card, index) => {
          card.animate([{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 520, delay: 90 + index * 75, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" });
        });
        observer.unobserve(section);
      });
    }, { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [reduceMotion]);

  return <div ref={scope} className={className}>{children}</div>;
}
