export const business = {
  name: "Five Star Growth",
  url: "https://fivestargrowth.nz",
  email: "hello@fivestargrowth.nz",
  telephone: "+64204510002",
  streetAddress: "27 Tepihopa Way, Aidanfield",
  city: "Christchurch",
  region: "Canterbury",
  country: "NZ",
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": `${business.url}/#organization`,
        name: business.name,
        url: business.url,
        email: business.email,
        telephone: business.telephone,
        description: "Smart websites, Google review automation, and local SEO for businesses, tradies, clinics, and professional service providers in Christchurch and Canterbury.",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.streetAddress,
          addressLocality: business.city,
          addressRegion: business.region,
          postalCode: "8025",
          addressCountry: business.country,
        },
        areaServed: [
          { "@type": "City", name: business.city },
          { "@type": "AdministrativeArea", name: business.region },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: business.telephone,
          email: business.email,
          contactType: "sales",
          areaServed: "NZ",
          availableLanguage: "en",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Local growth services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart website design and conversion optimisation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google review request automation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Christchurch and Canterbury local SEO" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${business.url}/#website`,
        url: business.url,
        name: business.name,
        publisher: { "@id": `${business.url}/#organization` },
        inLanguage: "en-NZ",
      },
    ],
  };
}
