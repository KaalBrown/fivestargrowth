/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { TeamCard } from "@/lib/teamCards";
import { Download, Globe2, Linkedin, Mail, MapPin, MessageCircle, Phone, QrCode } from "lucide-react";

type Props = { card: TeamCard };

export function DigitalVisitingCard({ card }: Props) {
  const cardUrl = `https://fivestargrowth.nz/${card.slug}`;
  const qrCodeUrl = card.qrCodeUrl ?? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&format=svg&margin=8&data=${encodeURIComponent(cardUrl)}`;

  return (
    <main className="min-h-screen bg-[#f7f7f3] px-4 py-8 text-[#101010] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-xl">
        <Link href="/" className="inline-flex items-center text-lg font-extrabold tracking-[-.08em]" aria-label="Five Star Growth home">
          FIVE<span className="text-[#ff5a1f]">★</span>GROWTH
        </Link>

        <section className="mt-5 overflow-hidden border border-black/15 bg-[#101010] p-6 text-white shadow-[12px_12px_0_#ff5a1f] sm:p-9">
          <p className="fsg-mono text-[10px] uppercase tracking-[.22em] text-[#ff7a48]">Digital visiting card</p>
          <div className="mt-8 flex items-center gap-5">
            <div className="size-20 shrink-0 overflow-hidden rounded-full border-2 border-[#ff5a1f] bg-[#f7f7f3] text-xl font-extrabold tracking-[-.08em] text-[#101010]">
              {card.imageUrl ? <img src={card.imageUrl} alt={card.name} className="size-full object-cover object-center" /> : <span className="flex size-full items-center justify-center">{card.initials}</span>}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-[-.06em] sm:text-4xl">{card.name}</h1>
              <p className="mt-1 text-sm font-semibold text-[#ff7a48]">{card.title} · Five Star Growth</p>
            </div>
          </div>
          <p className="mt-8 max-w-sm text-xl font-semibold leading-snug sm:text-2xl">{card.tagline}</p>

          <a href={card.vCardUrl} download className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#ff5a1f] px-5 text-xs font-extrabold uppercase tracking-[.12em] transition-colors hover:bg-white hover:text-[#101010]">
            <Download size={16} /> Save contact
          </a>
        </section>

        <section className="mt-10 border border-black/15 bg-white p-4 sm:p-6" aria-label="Contact Karan">
          <p className="fsg-mono text-[10px] uppercase tracking-[.2em] text-neutral-500">Connect with Karan</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <ContactLink href={`tel:${card.phoneHref}`} icon={<Phone size={18} />} label="Call" value={card.phone} />
            <ContactLink href={card.whatsappUrl} icon={<MessageCircle size={18} />} label="WhatsApp" value="Start a conversation" external />
            <ContactLink href={`mailto:${card.email}`} icon={<Mail size={18} />} label="Email" value={card.email} />
            <ContactLink href={card.website} icon={<Globe2 size={18} />} label="Website" value="fivestargrowth.nz" external />
            <ContactLink href={card.mapsUrl} icon={<MapPin size={18} />} label="Location" value="Christchurch, NZ" external />
            {card.linkedInUrl && <ContactLink href={card.linkedInUrl} icon={<Linkedin size={18} />} label="LinkedIn" value="Connect professionally" external />}
          </div>
        </section>

        <section className="mt-6 grid gap-5 border border-black/15 bg-[#ecebe6] p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[.1em]"><QrCode size={18} className="text-[#ff5a1f]" /> Share this card</div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">Scan this code to open Karan&apos;s card on any phone and save the details directly to contacts.</p>
          </div>
          <img className="mx-auto size-28 bg-white p-1 sm:mx-0" src={qrCodeUrl} alt={`QR code for ${card.name}'s digital visiting card`} />
        </section>

        <p className="mt-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Five Star Growth · Christchurch, New Zealand</p>
      </div>
    </main>
  );
}

function ContactLink({ href, icon, label, value, external = false }: { href: string; icon: React.ReactNode; label: string; value: string; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex min-h-20 items-center gap-3 border border-black/10 p-4 transition-colors hover:border-[#ff5a1f] hover:bg-[#fff4ef]">
      <span className="flex size-9 shrink-0 items-center justify-center bg-[#101010] text-white transition-colors group-hover:bg-[#ff5a1f]">{icon}</span>
      <span className="min-w-0"><span className="block text-[10px] font-extrabold uppercase tracking-[.14em] text-neutral-500">{label}</span><span className="mt-1 block truncate text-sm font-semibold">{value}</span></span>
    </a>
  );
}
