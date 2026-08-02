export type TeamCard = {
  slug: string;
  name: string;
  initials: string;
  title: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  whatsappUrl: string;
  address: string;
  mapsUrl: string;
  linkedInUrl?: string;
  vCardUrl: string;
};

// Add future team members here. The shared DigitalVisitingCard component will
// render a consistent card at /team/[slug]. Add a small direct route too when
// a shorter URL (for example, /jane) is desired.
export const teamCards: Record<string, TeamCard> = {
  karan: {
    slug: "karan",
    name: "Karan Vinayak",
    initials: "KV",
    title: "Director",
    tagline: "Digital Growth Partner for Local Businesses",
    phone: "020 451 0002",
    phoneHref: "+64204510002",
    email: "karan@fivestargrowth.nz",
    website: "https://fivestargrowth.nz",
    whatsappUrl: "https://wa.me/64204510002",
    address: "27 Tepihopa Way, Aidenfield, Christchurch",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=27%20Tepihopa%20Way%2C%20Aidenfield%2C%20Christchurch",
    linkedInUrl: "https://www.linkedin.com/in/karan-vinayak-81076b8b/",
    vCardUrl: "/contacts/karan-vinayak.vcf",
  },
};
