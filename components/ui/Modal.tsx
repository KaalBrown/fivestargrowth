"use client";

import { useEffect } from "react";

export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => { if (open) document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, [open]);
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-ink/85 p-5" onClick={onClose}><div className="relative w-full max-w-lg rounded-2xl bg-navy p-7" onClick={(event) => event.stopPropagation()}><button onClick={onClose} className="absolute right-4 top-3 text-xl text-white/60">×</button>{children}</div></div>;
}
