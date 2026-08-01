import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-sky", className)} {...props} />;
}
