const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "64204510002").replace(/\D/g, "");
const message = encodeURIComponent("Hi Five Star Growth, I would like to discuss a growth plan for my business.");

/** Shared WhatsApp entry point. Set NEXT_PUBLIC_WHATSAPP_NUMBER in your deployment environment. */
export function WhatsAppChat() {
  return <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat with Five Star Growth on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(0,0,0,.24)] transition hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"><svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current"><path d="M16 3.1a12.8 12.8 0 0 0-10.9 19.5L3.8 28.9l6.5-1.7A12.9 12.9 0 1 0 16 3.1Zm0 23.3c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.8 1 1-3.7-.3-.4A10.6 10.6 0 1 1 16 26.4Zm5.8-7.9c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.3-.6.1a8.7 8.7 0 0 1-2.6-1.6 9.6 9.6 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.6a12.1 12.1 0 0 0 4.7 4.2c.7.3 1.3.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4s.3-1.3.2-1.4-.3-.2-.6-.4Z" /></svg><span className="sr-only">WhatsApp</span></a>;
}
