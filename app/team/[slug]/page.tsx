import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DigitalVisitingCard } from "@/components/team/DigitalVisitingCard";
import { teamCards } from "@/lib/teamCards";

export function generateStaticParams() {
  return Object.keys(teamCards).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = teamCards[slug];
  return card ? { title: `${card.name} | ${card.title}`, description: card.tagline } : {};
}

export default async function TeamCardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = teamCards[slug];
  if (!card) notFound();
  return <DigitalVisitingCard card={card} />;
}
