export type ServiceKey = "website" | "trust" | "growth" | "social";

export type ServiceDetail = {
  key: ServiceKey;
  href: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  whoItsFor: string;
  problem: string;
  includes: string[];
  before: string;
  after: string;
  faqs: { question: string; answer: string }[];
  colour: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    key: "website", href: "/services/smart-website", navLabel: "Smart Website Pack", eyebrow: "Smart website design", colour: "#b9380a",
    title: "A custom website that makes your next customer act.",
    summary: "A fast, mobile-first website built around clarity, trust, and a simple path to call, enquire, or book.",
    whoItsFor: "Local businesses, clinics, tradies, and professional services whose current site looks acceptable but does not reliably turn visits into enquiries.",
    problem: "Customers decide quickly. A slow site, vague message, or buried contact action gives them a reason to leave and choose the next result.",
    includes: ["Custom web design shaped around your service and ideal customer", "Mobile optimisation with clear call, form, and WhatsApp paths", "Fast hosting, security, ongoing updates, and technical maintenance", "Basic analytics so you can see which pages create enquiries", "Dedicated support from a local growth partner"],
    before: "A generic online brochure with hidden contact details and no reason to choose you today.",
    after: "A clear digital salesperson: service proof, trust signals, obvious next steps, and a fast route to enquiry.",
    faqs: [{ question: "Can you work with our existing branding?", answer: "Yes. We can refine what is working or create a clearer visual system while keeping the business recognisable." }, { question: "Will we own the website?", answer: "You own your business content and brand assets. We explain the practical setup before work starts." }, { question: "How long does a new site take?", answer: "Most websites can be built within days. Larger business websites with more pages, services, or locations can take up to a week." }],
  },
  {
    key: "trust", href: "/services/review-request", navLabel: "Trust Engine", eyebrow: "Reviews & Google Maps", colour: "#0f6b4f",
    title: "Build the proof local customers look for before they call.",
    summary: "A practical review and Google Business Profile system that helps make genuine customer feedback visible and consistent.",
    whoItsFor: "Small, family-owned businesses and local teams with good service but too few recent reviews, inconsistent ratings, or weak Google Maps presence.",
    problem: "Customers compare star ratings before they contact anyone. When recent proof is thin, even a great business can look like the riskier choice.",
    includes: ["Google Business Profile optimisation for accurate, useful local information", "Automated review-request workflow for eligible customers after genuine service", "Review widget to bring credible feedback onto your website", "Basic citation building to strengthen business-name and location consistency", "Simple reporting on review momentum and Maps visibility"],
    before: "Old reviews, inconsistent information, and no repeatable way to ask happy customers for public feedback.",
    after: "A reliable trust loop: accurate listing details, fresh genuine reviews, and proof visible where people decide.",
    faqs: [{ question: "Is review automation safe for Google?", answer: "We use compliant request flows that ask for honest feedback. We do not filter customers based on whether they may leave a positive review." }, { question: "Do we need a large customer list?", answer: "No. Consistent requests after genuine jobs, visits, or appointments are usually more useful than a one-off blast." }, { question: "Can you help us respond to reviews?", answer: "Yes. We can provide practical response guidance and templates that still sound human." }],
  },
  {
    key: "growth", href: "/services/seo", navLabel: "Growth Engine", eyebrow: "Local SEO & Google Maps", colour: "#1d5f9e",
    title: "Be easier to find when local customers are ready to choose.",
    summary: "A focused local-search system that connects your website, Google Business Profile, and service pages to real purchase-intent searches.",
    whoItsFor: "Growing teams that want dependable work from Google Maps and Search rather than relying only on referrals or ads.",
    problem: "When competitors own the map results and your key service pages are missing, prospective customers never reach the point of comparing you.",
    includes: ["High-conversion local SEO priorities based on your services and service area", "Keyword optimisation for the searches your best customers already use", "Monthly reporting that turns ranking and enquiry data into clear next steps", "Advanced Google Business Profile strategy and ongoing local signal improvements", "Technical and on-page improvements that make your website easier for Google and people to understand"],
    before: "A business that may be excellent in person but is difficult to discover in local search results.",
    after: "A clearer route from a high-intent local search to an informative page, credible proof, and an enquiry.",
    faqs: [{ question: "Can you guarantee a #1 ranking?", answer: "No responsible SEO provider can guarantee an exact position. We focus on the durable local signals that improve your ability to compete." }, { question: "How soon will we see results?", answer: "The first improvements can be visible in weeks, while competitive local SEO compounds over months." }, { question: "Do we need to write all the content?", answer: "We guide the process and can create the useful service-led content with your subject-matter input." }],
  },
  {
    key: "social", href: "/services/social-media", navLabel: "Social Presence", eyebrow: "Social media management", colour: "#6b3fa0",
    title: "Turn the work you already do into social proof people remember.",
    summary: "A managed social presence that turns real jobs, team moments, customer feedback, and useful advice into consistent local visibility.",
    whoItsFor: "Teams with great work, photos, results, and customer stories—but no time or repeatable process for sharing them consistently.",
    problem: "Quiet social pages make an active, trusted business look inactive. Random posting does not build the familiarity needed before someone enquires.",
    includes: ["Content themes built around your services, customers, and local area", "On-brand post creation from approved photos, projects, and review stories", "Publishing plan for the channels your customers actually use", "Simple approval workflow that does not burden your team", "Performance review and ideas for the next content cycle"],
    before: "An infrequently updated profile that asks prospects to take a leap of faith.",
    after: "A recognisable stream of work, team expertise, reviews, and local proof that supports every other marketing channel.",
    faqs: [{ question: "Do we need to be on every platform?", answer: "No. We prioritise the platforms your customers use and the content your team can realistically support." }, { question: "Can you use our existing project photos?", answer: "Yes, with your approval and appropriate customer permissions." }, { question: "Will every post sound automated?", answer: "No. The system keeps production organised, but every content plan is shaped around your business and voice." }],
  },
];

export const serviceByKey = Object.fromEntries(serviceDetails.map((service) => [service.key, service])) as Record<ServiceKey, ServiceDetail>;
