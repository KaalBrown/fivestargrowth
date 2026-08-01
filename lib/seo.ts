export const business = {
  name: "Five Star Growth",
  url: "https://fivestargrowth.co.nz",
  email: "hello@fivestargrowth.co.nz",
  city: "Christchurch",
  country: "NZ",
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    url: business.url,
    email: business.email,
    address: { "@type": "PostalAddress", addressLocality: business.city, addressCountry: business.country },
    areaServed: { "@type": "City", name: business.city },
  };
}
