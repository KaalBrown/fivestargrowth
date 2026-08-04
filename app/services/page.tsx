import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  ServiceVisual,
  ServicesCta,
  SocialMarks,
} from "@/components/sections/ServiceDetail";
import { serviceDetails } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Websites, Reviews, SEO & Social",
  description:
    "Explore Five Star Growth services for local businesses, clinics, tradies, and professional services across Christchurch and Canterbury.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f7f3] text-[#101010]">
      <section className="px-5 py-16 lg:px-9 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <p className="fsg-mono text-xs uppercase tracking-[.14em] text-[#b9380a]">
            Services / one connected growth system
          </p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[.92] tracking-[-.075em] sm:text-7xl">
              Choose the part of your local growth that needs fixing first.
            </h1>
            <p className="self-end max-w-lg text-lg leading-8 text-black/65">
              Start with your website, reputation, local visibility, or social
              proof. Each service is designed to stand alone—and work better
              together.
            </p>
          </div>
          <div className="mt-10">
            <ServicesCta />
          </div>
        </div>
      </section>
      <section className="border-t border-black/15 bg-[#e7e4dd] px-5 py-16 lg:px-9 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group border border-black/15 bg-[#f7f7f3] p-5 transition hover:-translate-y-1 hover:border-black sm:p-6"
            >
              <div className="flex items-start justify-between">
                <p
                  className="fsg-mono text-xs uppercase tracking-[.14em]"
                  style={{ color: service.colour }}
                >
                  {service.eyebrow}
                </p>
                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="mt-5">
                <ServiceVisual serviceKey={service.key} />
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-[-.06em]">
                {service.navLabel}
              </h2>
              <p className="mt-3 max-w-md leading-7 text-black/65">
                {service.summary}
              </p>
              <span
                className="mt-6 inline-block text-xs font-extrabold uppercase tracking-[.1em]"
                style={{ color: service.colour }}
              >
                Explore service ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="px-5 py-16 lg:px-9">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 border border-black/15 bg-[#101010] p-7 text-white sm:p-10 md:flex-row md:items-end">
          <div>
            <p className="fsg-mono text-xs uppercase tracking-[.14em] text-[#ff8a5d]">
              Not sure where to start?
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-.06em] sm:text-4xl">
              Get a practical video review of the gaps holding local growth
              back.
            </h2>
            <div className="mt-6">
              <SocialMarks />
            </div>
          </div>
          <ServicesCta href="/contact?reason=video-audit&cta=services-bottom" />
        </div>
      </section>
    </main>
  );
}
