export type BlogArticle = {
  slug: string;
  title: string;
  audience: string;
  intro: string;
  sections: { heading: string; body: string }[];
  service: string;
  cta: string;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "empty-appointment-slot-killer",
    title: "The Empty Appointment Slot Killer: How Smart Medical Websites Fill Cancellations Automatically",
    audience: "Medical practice owners losing revenue to last-minute patient cancellations.",
    intro: "A cancellation does not have to stay empty. The right website turns urgent, after-hours patient intent into a practical next-day booking opportunity.",
    sections: [
      { heading: "Why static clinic websites miss urgent demand", body: "A brochure-style website tells a patient what a practice offers, but it rarely gives them a useful next move when they need care quickly. If availability is hidden behind a call during office hours, late-night browsers often leave and keep searching." },
      { heading: "Make availability visible when intent is highest", body: "A Smart Website can surface a live, interactive booking calendar where the patient is already deciding. Timely availability prompts can also highlight a newly opened slot, giving the patient a clear route from search to booking without an extra phone tag." },
      { heading: "Your virtual receptionist after hours", body: "The result is an active digital front desk: it acknowledges urgent intent, makes a suitable appointment path visible, and captures the request while your team is offline. It is designed to help practices convert more browsers into booked morning appointments." },
    ],
    service: "Smart Website Framework",
    cta: "Build a smarter booking path",
  },
  {
    slug: "outrank-medical-practice-down-the-road",
    title: "How to Outrank the Medical Practice Down the Road: A Local SEO Blueprint for Clinics",
    audience: "Doctors frustrated that geographic competitors dominate local Google search results.",
    intro: "Local search visibility is not won by chance. It comes from connecting the language patients use with the local proof, service pages, and technical signals Google needs to see.",
    sections: [
      { heading: "Start with the searches patients actually make", body: "High-intent searches are specific and local: phrases such as “emergency dentist near me” or “sciatica chiropractor open Saturday” reveal both the service and the urgency. A clinic should map those needs to clear, useful pages rather than relying on one generic homepage." },
      { heading: "Earn a stronger place in the Google Map Pack", body: "An accurate, consistently maintained Google Business Profile, complete services, current photos, and a reliable flow of recent patient feedback all strengthen local trust signals. The goal is to make it easy for Google and a prospective patient to understand where you are, what you do, and why you are credible." },
      { heading: "Build the technical proof behind the pages", body: "Localised service landing pages, clean site architecture, and appropriate medical business schema markup help search engines connect a practice with its services and area. Together, they form a repeatable local SEO blueprint rather than a one-off ranking tactic." },
    ],
    service: "Local SEO & Lead Generation",
    cta: "Claim more local searches",
  },
  {
    slug: "patient-trust-engine-automated-reviews",
    title: "The Patient Trust Engine: How Automated Reviews Drive High-Value Appointments Hands-Free",
    audience: "Busy practitioners needing patient reviews without sacrificing time or risking compliance.",
    intro: "Fresh, authentic feedback helps a hesitant new patient feel more confident. The key is having a consistent, considerate way to ask without adding work to the front desk.",
    sections: [
      { heading: "The simplest moment to ask", body: "A post-appointment SMS or email can gently invite appropriate feedback while the experience is still fresh. The request is timed, branded, and easy for the patient to act on—rather than relying on staff to remember a manual follow-up." },
      { heading: "Why fresh reviews carry more weight", body: "A steady pattern of recent five-star reviews gives prospective patients visible proof that people like them had a positive experience. It supports trust at the point where they are comparing nearby options and deciding whether to make contact." },
      { heading: "A set-and-forget social-proof asset", body: "Review Automation provides the workflow behind the request, follow-up, and reporting so the team can focus on patients. It should always be configured to suit a practice’s policies and applicable privacy or platform requirements." },
    ],
    service: "Review Automation",
    cta: "Set up your trust engine",
  },
  {
    slug: "anatomy-high-converting-clinic-page",
    title: "Anatomy of a High-Converting Clinic Page: Why 90% of Medical Websites Lose New Patients",
    audience: "Practices with decent website traffic but low online booking conversion rates.",
    intro: "Getting a visit is only half the job. A clinic page has to answer a worried patient’s practical questions quickly and make the next step feel safe and obvious.",
    sections: [
      { heading: "The friction that quietly loses patients", body: "Slow-loading pages, hard-to-find phone numbers, unclear services, and vague calls to action all add hesitation. A prospective patient who cannot tell what to do in a few seconds may return to search and choose a more direct competitor." },
      { heading: "Design every page around the next action", body: "Clear service information, prominent click-to-call and booking actions, mobile-first speed, and visible location details reduce that friction. Embedded reviews and concise proof points help reinforce confidence before a patient commits." },
      { heading: "A website built for local patient intent", body: "The Smart Website Framework combines clean code, conversion-led structure, and local trust signals so a clinic can make a stronger first impression. It is engineered to help turn local searches into meaningful enquiries and physical appointments." },
    ],
    service: "Smart Website Framework",
    cta: "Audit your clinic page",
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
