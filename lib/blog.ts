export type BlogCategory = "practices" | "tradies" | "local-businesses";

export const blogFilters: { value: "all" | BlogCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "practices", label: "Practices" },
  { value: "tradies", label: "Tradies" },
  { value: "local-businesses", label: "Local businesses" },
];

export function getBlogCategoryLabel(category: BlogCategory) {
  return blogFilters.find((filter) => filter.value === category)?.label ?? "Local businesses";
}

export type BlogArticle = {
  slug: string;
  category: BlogCategory;
  categories?: BlogCategory[];
  title: string;
  audience: string;
  intro: string;
  sections: { heading: string; body: string; sources?: { label: string; href: string }[] }[];
  service: string;
  cta: string;
  ctaHref?: string;
  secondaryCta?: { label: string; href: string };
};

export function getBlogArticleCategories(article: BlogArticle) {
  return article.categories ?? [article.category];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "empty-appointment-slot-killer",
    category: "practices",
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
    category: "practices",
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
    category: "practices",
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
    category: "practices",
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
  {
    slug: "competitors-stealing-best-jobs-google-maps",
    category: "tradies",
    title: "Why Your Competitors Are Stealing Your Best Jobs (And How Google Maps Hides Your Business)",
    audience: "Tradies, local service business owners, and practice managers who are losing high-intent local enquiries to more visible competitors.",
    intro: "The jobs you never get to quote can be the most expensive ones. When a nearby customer searches with a problem in hand, Google Maps often sends them to the businesses that look more relevant, trusted, and ready to help—even when you would have done the better job.",
    sections: [
      { heading: "The jobs you never get a chance to quote", body: "A homeowner searching for an emergency plumber, a practice manager looking for a local supplier, or a patient needing a nearby service is not casually browsing. They are ready to act. If your business is hard to find in that moment, the call goes to a competitor before you even know the opportunity existed. That is why local SEO for tradies is about far more than website traffic: it is about protecting the jobs already being searched for in your area." },
      { heading: "The Google Local 3-Pack decides the first calls", body: "The Google Local 3-Pack is the small group of map listings shown near the top of many local searches. It gives customers a fast way to compare nearby options, ratings, opening hours, and directions. Most businesses miss out because Google cannot clearly see consistent local relevance, strong recent proof, and a useful destination page behind their listing. Learning how to rank on Google Maps starts with making those signals easy for both Google and customers to trust." },
      { heading: "Costly mistake #1: an incomplete Google Business Profile", body: "An unfinished profile makes your business harder to understand and easier to pass over. Missing services, vague categories, old photos, inaccurate hours, unanswered questions, or weak location details all reduce confidence. A complete, actively maintained Google Business Profile gives local customers the practical information they need to choose you and gives Google clearer evidence of what you do and where you serve." },
      { heading: "Costly mistake #2: no recent five-star review momentum", body: "Ten good reviews from years ago do not create the same confidence as a steady flow of recent, genuine feedback. Customers notice recency, volume, and how a business responds. Review velocity is not about forcing reviews; it is about making a timely, straightforward request after a good job so your current service quality is visible when people compare options." },
      { heading: "Costly mistake #3: a website with no local proof behind it", body: "A slow, outdated site with generic copy leaves Google and customers guessing. Clear service pages, local area context, prominent contact paths, and appropriate local schema markup help search engines connect your business to the work people are searching for. They also make it easier for a visitor to move from a Maps listing to a phone call, job request, or booking." },
      { heading: "Turn local searches into daily booked calls", body: "Fixing these three gaps creates a connected system: a stronger listing earns attention, fresh reviews build trust, and a conversion-focused website gives customers a clear next step. That is how better local search visibility becomes more than a ranking report—it becomes more qualified calls and more jobs in the calendar." },
    ],
    service: "Local SEO, Smart Websites & Review Automation",
    cta: "Request a free 5-min video audit",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=tradies-google-maps&article=competitors-stealing-best-jobs-google-maps",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
  {
    slug: "google-business-profile-internet-real-estate",
    category: "local-businesses",
    title: "Your Google Business Profile Is Your Most Valuable Internet Real Estate—Here’s How to Own More of It",
    audience: "Local business owners who want more calls, directions, and enquiries from Google without paying for every click.",
    intro: "Your Google Business Profile is not a listing to set and forget. It is the piece of online real estate customers see when they are closest to choosing a local business—and the businesses that actively manage it earn more of that attention.",
    sections: [
      { heading: "The map result customers see before your website", body: "For many local searches, customers see the map results before they ever reach a traditional website. They compare the businesses shown by category, distance, opening hours, photos, reviews, and simple signs of trust. That makes your Google Business Profile a front door to your business, not a directory entry." },
      { heading: "How to own more space in local search", body: "Complete every accurate detail: the right primary category, useful services, up-to-date hours, service areas, photos, descriptions, and clear contact options. Keep your information consistent with your website. Each improvement helps Google understand the offer and helps a customer decide without hunting for answers." },
      { heading: "Fresh proof beats an old, polished profile", body: "Recent reviews, regular photos, and prompt, helpful responses tell customers the business is active now. The aim is not to game Google; it is to make real service quality easier to verify. A profile that answers practical questions earns more confidence than one that looks untouched." },
      { heading: "Connect the listing to a website that converts", body: "The click after a Maps result matters. A clear service page, local context, fast mobile experience, and obvious phone or enquiry path help turn profile attention into a booking, job call, or quote request. Local visibility works best when the profile and website support the same next step." },
    ],
    service: "Google Business Profile & Local SEO",
    cta: "Request a free 5-min video audit",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=google-business-profile&article=google-business-profile-internet-real-estate",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
  {
    slug: "local-search-fomo-competitors-win",
    category: "local-businesses",
    title: "Every Local Search You Miss Is a Customer Your Competitor Gets First",
    audience: "Local business owners who know their service is good but are tired of being overlooked online.",
    intro: "The painful part of weak local visibility is not a low ranking report. It is the steady stream of people who need exactly what you offer, choose a more visible competitor, and never discover you were an option.",
    sections: [
      { heading: "Local customers rarely scroll forever", body: "When someone has a burst pipe, a sore back, a cancelled appointment, or a job that needs doing, they want a trustworthy answer quickly. They usually compare a short list of nearby options. If your business is absent, unclear, or looks less current than the others, the opportunity moves on fast." },
      { heading: "Visibility without trust still loses the call", body: "Getting seen is only the first part. A thin profile, stale reviews, and a slow website can make a customer hesitate at the last moment. The most visible competitor often wins because their proof is easier to see and their next step is easier to take." },
      { heading: "The cost compounds while you wait", body: "One missed enquiry may not sound dramatic, but the effect repeats across searches, weeks, and months. A competitor gains the job, the review, the referral, and the next ranking signal. Building local visibility now creates an asset that helps you compete for the searches that will happen tomorrow too." },
      { heading: "Make choosing you feel like the obvious move", body: "Start by making your local offer clear, your reviews current, and your website fast and conversion-focused. Those improvements give customers fewer reasons to leave and give Google stronger evidence that your business is a credible result for the area." },
    ],
    service: "Local Growth System",
    cta: "Request a free 5-min video audit",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=local-search-fomo&article=local-search-fomo-competitors-win",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
  {
    slug: "tradie-business-going-broke-google-search",
    category: "tradies",
    title: "The Quiet Way Tradie Businesses Lose Ground: When Google Stops Sending the Right Jobs",
    audience: "Tradies and field-service owners worried about inconsistent enquiries, rising costs, and competitors taking the jobs they should be winning.",
    intro: "Most businesses do not lose ground in one dramatic moment. It happens job by job: fewer quote requests, more gaps in the diary, and a competitor becoming the familiar name customers see first on Google.",
    sections: [
      { heading: "The danger is an empty pipeline, not a quiet day", body: "Every trade business has slower weeks. The real risk is having no dependable source of new local enquiries when a builder finishes, a referral dries up, or a previous customer has no immediate need. When Google Maps and your website are not working together, your calendar depends too heavily on luck, word of mouth, or last-minute discounting." },
      { heading: "Why competitors can look busier than better businesses", body: "Customers searching for a plumber, electrician, builder, or repair service usually choose from the businesses they see first. A competitor with current reviews, complete Google Business Profile details, and a clear service page can appear more established—even if your workmanship is stronger. Local search visibility decides who gets the first chance to earn the call." },
      { heading: "Three signals that protect your flow of job calls", body: "Keep your Google Business Profile accurate and active, build a steady stream of genuine recent reviews, and give each high-value service a fast, mobile-friendly web page with an obvious quote or call action. These are not vanity marketing tasks. They make it easier for ready-to-buy customers to find, trust, and contact your business." },
      { heading: "Build an asset that works between jobs", body: "A well-maintained local growth system keeps creating opportunities while your team is onsite. It strengthens the path from Google search to enquiry, helps you win a healthier mix of jobs, and reduces the pressure to chase every lead at any price." },
    ],
    service: "Local SEO, Smart Websites & Review Automation",
    cta: "Protect your local job pipeline",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=tradie-job-pipeline&article=tradie-business-going-broke-google-search",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
  {
    slug: "from-local-tradie-to-national-brand",
    category: "tradies",
    title: "From Local Tradie to National Brand: The Digital Foundation That Lets You Scale Without Losing Leads",
    audience: "Ambitious tradie and service-business owners who want to grow beyond one suburb or city without their marketing becoming harder to manage.",
    intro: "Growing beyond your local area takes more than adding vans or hiring another crew. You need a digital foundation that makes every new service area easier to find, easier to trust, and easier to contact.",
    sections: [
      { heading: "A bigger team does not automatically create a bigger brand", body: "Many growing tradie businesses hit a ceiling because their online presence is built around one person, one location, or one generic homepage. As new crews, services, and suburbs are added, customers need clear proof that the business is established, available, and capable in their area." },
      { heading: "Local SEO creates repeatable market entry", body: "Investing in local SEO gives each genuine service area a clear place to compete: accurate Google Business Profile information, locally relevant service pages, consistent business details, and evidence of quality. Instead of hoping people discover you, you create a repeatable system for earning attention where you actually operate." },
      { heading: "A smart website turns new visibility into capacity", body: "More traffic is only valuable if the right jobs reach the right team. A fast, high-converting website can route quote requests, show the services you want more of, make mobile contact effortless, and give customers confidence before they call. That protects your team from a growth strategy built on low-value enquiries." },
      { heading: "Reviews make growth feel credible in every new area", body: "When a business expands, new customers do not yet know the name behind the vans. A consistent flow of genuine Google reviews creates transferable trust: visible evidence that customers value the work, communication, and reliability. Review automation makes that proof easier to maintain as job volume grows." },
      { heading: "Spend with a clear role for every channel", body: "Google Business Profile management earns local visibility, a smart website converts demand, and review automation strengthens trust. Together they form an owned growth asset rather than a series of disconnected marketing expenses. The result is a stronger platform for moving from a respected local business to a recognisable regional or national brand." },
    ],
    service: "Scalable Local Growth System",
    cta: "Plan your next growth stage",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=tradie-scale&article=from-local-tradie-to-national-brand",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
  {
    slug: "reputation-management-five-star-growth",
    category: "local-businesses",
    categories: ["practices", "tradies", "local-businesses"],
    title: "Reputation Management: How Five Star Growth Can Help.",
    audience: "Local businesses, practices, and tradies who know great service is not enough if Google shows too little proof—or the wrong first impression.",
    intro: "Before a local customer calls, they look for a reason to trust you. If your reviews are old, unanswered, or buried under a competitor’s stronger proof, the job can be lost before you ever get a chance to quote it.",
    sections: [
      { heading: "Your reputation is making the first sales call", body: "A customer searching on Google does not see your workmanship first. They see ratings, review recency, photos, responses, and whether your business looks active. When that proof is weak, even a great local business can look like the riskier choice beside a competitor with fresh five-star feedback." },
      { heading: "The quiet cost of letting reviews go stale", body: "Old reviews do not tell a customer what your business is like today. If happy customers are never asked for feedback, one disappointing review can become the loudest story on your profile. The result is not always an angry complaint—it is often a silent customer who chooses someone else." },
      { heading: "A missed review is more than a missed compliment", body: "Every genuine positive review can strengthen trust at the moment a customer compares options. It can also give you useful feedback about what people value most. Leaving review collection to memory or a busy team member means that proof arrives inconsistently, if it arrives at all." },
      { heading: "Make good service easier to see", body: "Five Star Growth helps local businesses create a practical review system: timely requests after a completed job or appointment, simple routes for customers to leave feedback, and a clearer process for monitoring and responding. It is designed to make your current service quality visible without adding another daily task to the team." },
      { heading: "Protect the trust you have worked hard to earn", body: "Reputation management is not about pretending every customer is happy. It is about responding professionally, learning from genuine feedback, and making sure the many good experiences are not invisible. A steady flow of authentic, recent proof makes it easier for local customers to choose you with confidence." },
    ],
    service: "Review Automation & Local Trust",
    cta: "Strengthen your local trust signals",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=reputation-management&article=reputation-management-five-star-growth",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
  {
    slug: "reputation-management-statistics",
    category: "local-businesses",
    categories: ["practices", "tradies", "local-businesses"],
    title: "11 Reputation Management Statistics You Need to Know",
    audience: "Local business owners, practice managers, and tradies who need a clear reason to take reviews and online trust seriously.",
    intro: "A weak reputation is not always loud. Often, it is a customer quietly choosing a better-reviewed competitor. These third-party figures show why fresh, authentic feedback should be treated as a growth asset—not an afterthought.",
    sections: [
      { heading: "1. Google holds a huge share of online reviews", body: "One widely cited estimate says 73% of online reviews sit on Google. For a local business, that makes a neglected Google Business Profile hard to ignore.", sources: [{ label: "Source: TrueList", href: "https://truelist.co/blog/reputation-management-statistics/" }] },
      { heading: "2. Many customers will review when they are asked", body: "A reported 70% of consumers say they would post a review if asked. The gap is often not customer satisfaction—it is having a simple, timely request process.", sources: [{ label: "Source: TechReport", href: "https://techreport.com/statistics/finance-marketing/reputation-management-statistics/" }] },
      { heading: "3. Reviews can carry the weight of a recommendation", body: "One study reports that 85% of consumers trust online reviews as much as personal recommendations. If your proof is thin, a searcher may give that trust to a competitor instead.", sources: [{ label: "Source: Reputation X", href: "https://www.reputationx.com/blog/online-reputation-management-statistics" }] },
      { heading: "4. Most customers check reviews before buying", body: "A reported 89% of customers read reviews before a purchase. Your service may be excellent, but a new customer cannot see that without current, credible feedback.", sources: [{ label: "Source: TrueList", href: "https://truelist.co/blog/reputation-management-statistics/" }] },
      { heading: "5. Customers compare more than one opinion", body: "Some research suggests consumers read around seven reviews before deciding. That is why one isolated five-star review is rarely enough to make a business feel like the safe choice.", sources: [{ label: "Source: TechReport", href: "https://techreport.com/statistics/finance-marketing/reputation-management-statistics/" }] },
      { heading: "6. The four-star line matters", body: "One reported figure says 49% of consumers require at least a four-star rating before using a business. Even a small rating gap can change whether a prospect calls you or keeps searching.", sources: [{ label: "Source: Reputation X", href: "https://www.reputationx.com/blog/online-reputation-management-statistics" }] },
      { heading: "7. Review recency changes the story", body: "A frequently cited figure says 86% of consumers focus on reviews from the past three months. Great feedback from years ago is useful—but it does not prove what your business feels like today.", sources: [{ label: "Source: TrueList", href: "https://truelist.co/blog/reputation-management-statistics/" }] },
      { heading: "8. Negative comments can stop a customer cold", body: "One survey reports that 60% of consumers may turn away from a brand with negative online comments. A professional response cannot erase the issue, but silence can make it look worse.", sources: [{ label: "Source: TechReport", href: "https://techreport.com/statistics/finance-marketing/reputation-management-statistics/" }] },
      { heading: "9. One bad review can have an outsized impact", body: "A widely repeated estimate puts the potential loss from a single negative review at 22% of business. Treat this as a warning, not a prediction: the right response and fresh genuine feedback can reduce the damage.", sources: [{ label: "Source: TrueList", href: "https://truelist.co/blog/reputation-management-statistics/" }] },
      { heading: "10. Rebuilding trust takes time", body: "One estimate suggests roughly 40 positive customer experiences may be needed to offset the impact of one negative review. It is far cheaper to consistently ask happy customers for feedback than to wait for a problem to dominate your profile.", sources: [{ label: "Source: TrueList", href: "https://truelist.co/blog/reputation-management-statistics/" }] },
      { heading: "11. Reputation can affect hiring too", body: "A reported 69% of applicants would reject a job offer from a business with a bad reputation, even when unemployed. Trust influences customers first, but it can also influence the people you need to grow.", sources: [{ label: "Source: Reputation X", href: "https://www.reputationx.com/blog/online-reputation-management-statistics" }] },
    ],
    service: "Review Automation & Reputation Management",
    cta: "Build stronger local trust",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=reputation-statistics&article=reputation-management-statistics",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
  {
    slug: "why-seo-matters-for-local-businesses",
    category: "local-businesses",
    categories: ["practices", "tradies", "local-businesses"],
    title: "Why SEO Matters: Is Your Website Bringing Local Enquiries—or Just Sitting There?",
    audience: "Local businesses, medical practices, and tradies who want their website to create calls, bookings, quote requests, and long-term visibility—not simply look presentable.",
    intro: "A polished website is not automatically a useful one. If Google cannot clearly understand the services, location, and next step it offers, the people already searching for your business can end up calling a competitor instead.",
    sections: [
      { heading: "SEO is how Google understands who you help", body: "Search engine optimisation gives Google clear, accurate signals about your services, service areas, business details, page structure, and relevance to a local search. Without those signals, even a well-designed website can be difficult to surface when a ready-to-buy customer searches nearby." },
      { heading: "A low score is a starting point—not a verdict", body: "A website health score can reveal potential gaps in speed, mobile experience, local SEO tags, and conversion paths. It is not a promise of rankings or revenue, but it is a useful way to identify what may be stopping the site from doing its job." },
      { heading: "Mobile speed and clarity decide whether visitors stay", body: "Most local searches happen on a phone, often when the customer needs an answer quickly. Slow loading, unclear services, buried phone numbers, or awkward pop-ups create friction. A smart page makes the offer, evidence, and next step obvious in seconds." },
      { heading: "Local SEO turns the right search into the right page", body: "A strong local presence connects an accurate Google Business Profile with useful service pages, consistent contact details, appropriate schema, genuine recent reviews, and a fast website. Each piece supports the others: the profile gets attention, the website earns confidence, and a clear call-to-action captures the enquiry." },
      { heading: "Do not accept a website that only looks nice", body: "Ask your agency what they are actively improving: page speed, local visibility, Google Business Profile consistency, technical SEO, mobile conversion paths, and review trust signals. A good answer should be specific, measurable, and connected to how a customer actually finds and contacts you." },
    ],
    service: "Smart Websites & Local SEO",
    cta: "Request a free 5-min video audit",
    ctaHref: "/contact?reason=video-audit&utm_source=blog&utm_medium=organic&utm_campaign=why-seo-matters&article=why-seo-matters-for-local-businesses",
    secondaryCta: { label: "Run an instant site scan", href: "/#free-audit" },
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
