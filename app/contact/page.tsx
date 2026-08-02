import { Suspense } from "react";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return <Suspense fallback={<section className="mx-auto max-w-3xl px-5 py-20"><p className="font-bold uppercase tracking-widest text-sky">Let’s talk growth</p><h1 className="mt-4 text-5xl font-black">Tell us where you want to go.</h1></section>}><ContactForm /></Suspense>;
}
