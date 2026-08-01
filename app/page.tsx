import { Button } from "@/components/ui/Button";
import { HeroCardMotion, HeroReveal, HoverPanel, LandingMotionScope, Reveal, Stagger, StaggerItem } from "@/components/motion/LandingMotion";
import { PricingPacks } from "@/components/sections/PricingPacks";
import { localBusinessJsonLd } from "@/lib/seo";

const services = [
  ["01", "Get discovered", "Local SEO that puts you in the searches that matter before the competition does."],
  ["02", "Get chosen", "Web experiences that make your value clear, credible and easy to act on."],
  ["03", "Stay remembered", "Review and content systems that keep your reputation working between jobs."],
];

const outcomes = [
  ["Local visibility", "Be the obvious nearby answer."],
  ["Better enquiries", "Turn the right attention into action."],
  ["More proof", "Make excellent service impossible to miss."],
];

const process = [
  ["Listen", "We get clear on the business, the customer and the opportunity hiding in plain sight."],
  ["Prioritise", "We find the one or two moves most likely to create meaningful momentum."],
  ["Build", "We create the pages, proof and pathways that make your offer easier to choose."],
  ["Compound", "We measure what matters, learn quickly and keep strengthening the system."],
];

const faqs = [
  ["Do I need every service?", "No. A good plan starts with the highest-impact gap, not a bundle of activity you do not need."],
  ["Is this only for Christchurch businesses?", "Christchurch is our local focus, and we work with selected New Zealand businesses beyond the city when the fit is right."],
  ["When should I expect results?", "Website and conversion fixes can create movement quickly. Visibility and reputation work compound over the months that follow."],
  ["Will I be locked into a long contract?", "No unnecessary lock-ins. We agree on the scope, make the work visible, and earn the next step."],
];

function Marker({ children }: { children: React.ReactNode }) {
  return <p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-black/55">{children}</p>;
}

export default function HomePage() {
  return <LandingMotionScope className="fsg-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }} />

    <section data-motion-managed className="fsg-grid border-b border-black/15">
      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-12 lg:px-9 lg:pb-20 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-8">
          <HeroReveal>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.08em]">
              <div className="flex -space-x-2">
                {["A", "M", "J", "K"].map((initial, index) => <span key={initial} className={`grid h-9 w-9 place-items-center rounded-full border-2 border-[#f7f7f3] text-[11px] text-white ${["bg-[#101010]", "bg-[#ff5a1f]", "bg-[#707070]", "bg-[#d49963]"][index]}`}>{initial}</span>)}
              </div>
              <span><span className="fsg-star">★★★★★</span><br /><span className="text-[10px] text-black/55">Trusted by local owners</span></span>
            </div>
            <h1 className="fsg-display mt-12 text-[15vw] font-extrabold sm:text-[17vw] lg:text-[12.2vw]">LOCAL<br /><span className="fsg-orange">LEVERAGE</span></h1>
          </HeroReveal>
          <HeroReveal delay={0.12} className="flex items-end justify-end pt-2 lg:pb-8">
            <p className="max-w-xs text-xl font-medium leading-7 tracking-tight">The growth partner for Christchurch businesses ready to become the first choice.</p>
          </HeroReveal>
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl pb-4 sm:mt-2 lg:mt-6">
          <div className="absolute -left-2 bottom-3 h-[82%] w-[24%] border border-[#101010] bg-[#ff5a1f] sm:-left-5" />
          <div className="absolute -right-3 top-3 h-[70%] w-[28%] border border-[#101010] bg-white sm:-right-6" />
          <HeroCardMotion className="fsg-hero-card relative bg-[#101010] p-5 text-white sm:p-7">
            <div className="flex items-start justify-between border-b border-white/20 pb-12"><span className="fsg-mono text-[10px] uppercase tracking-[.16em] text-white/60">Five Star Growth / 01</span><span className="text-[#ff5a1f]">✦</span></div>
            <div className="grid gap-6 py-8 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">Your growth operating system</p><h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-[.95] tracking-[-.07em] sm:text-5xl">Make your next customer feel like they found the best option.</h2></div><div className="border-l border-white/20 pl-5 text-sm text-white/70"><p>SMART WEBSITE</p><p className="mt-2">REVIEW AUTOMATION</p><p className="mt-2">FIRST CHOICE</p></div></div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5"><span className="text-xs text-white/55">Built to compound, not just look busy.</span><Button variant="glow">Start a conversation</Button></div>
          </HeroCardMotion>
        </div>
      </div>
    </section>

    <section data-motion-managed className="bg-[#101010] px-5 py-16 text-white lg:px-9 lg:py-24"><Reveal className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">What we solve / 02</p><div className="mt-10 max-w-sm border border-white/20 bg-white/[.06] p-5 shadow-[12px_12px_0_rgba(255,90,31,.9)] backdrop-blur-sm"><div className="flex items-center justify-between border-b border-white/15 pb-4"><p className="text-sm font-bold">Google Business Profile</p><span className="rounded-full bg-[#ff5a1f] px-2 py-1 text-[9px] font-bold uppercase tracking-wider">Needs attention</span></div><p className="mt-5 text-2xl font-extrabold">Your Local Practice</p><p className="mt-2 text-sm text-white/55">Medical Practice · Christchurch</p><div className="mt-6 flex items-center gap-2"><span className="text-lg font-bold">4.2</span><span className="tracking-[.12em] text-[#ffb894]">★★★★☆</span><span className="text-sm text-white/55">(10 reviews)</span></div><p className="mt-6 border-t border-white/15 pt-4 text-sm leading-6 text-white/65">Stuck on page 2 of Google Maps with low trust signals.</p></div></div><div><h2 className="max-w-4xl text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">Good businesses shouldn’t have to be the city’s best-kept secret.</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/65">We join the dots between visibility, trust and conversion—so your marketing feels less like a gamble and more like a dependable growth asset.</p><Button href="#services" className="mt-9" variant="glow">Explore the system</Button></div></Reveal></section>

    <section data-motion-managed id="services" className="px-5 py-16 lg:px-9 lg:py-24"><div className="mx-auto max-w-[1440px]"><Reveal className="grid gap-8 border-b border-black/20 pb-10 lg:grid-cols-2"><Marker>Designed to deliver / 03</Marker><h2 className="text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">Three levers.<br />One clear direction.</h2></Reveal><Stagger className="grid md:grid-cols-3">{services.map(([number, title, text]) => <StaggerItem key={number}><HoverPanel><article className="border-b border-black/20 py-9 md:border-b-0 md:px-8 md:first:pl-0 md:not-last:border-r md:last:pr-0"><p className="fsg-mono text-xs text-[#ff5a1f]">{number}</p><h3 className="mt-14 text-2xl font-extrabold tracking-[-.06em]">{title}</h3><p className="mt-4 max-w-xs leading-7 text-black/60">{text}</p><a href="/contact" className="mt-8 inline-block border-b border-black pb-1 text-xs font-bold uppercase tracking-wider">Find out more ↗</a></article></HoverPanel></StaggerItem>)}</Stagger></div></section>

    <section className="border-y border-black/15 bg-[#e7e4dd] px-5 py-16 lg:px-9 lg:py-24"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-6 sm:flex-row"><div><Marker>The payoff / 04</Marker><h2 className="mt-4 text-4xl font-extrabold tracking-[-.07em] sm:text-6xl">Growth you can feel.</h2></div><p className="max-w-sm text-lg leading-7 text-black/60">Not vanity metrics. A clearer route from local attention to meaningful customer action.</p></div><div className="mt-12 grid gap-px bg-black/15 md:grid-cols-3">{outcomes.map(([title, text], index) => <div key={title} className={`min-h-56 p-6 ${index === 1 ? "bg-[#ff5a1f] text-white" : "bg-[#f7f7f3]"}`}><p className="fsg-mono text-[10px] opacity-60">0{index + 1}</p><h3 className="mt-20 text-2xl font-extrabold tracking-[-.06em]">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 opacity-70">{text}</p></div>)}</div></div></section>

    <section className="px-5 py-16 lg:px-9 lg:py-24"><div className="mx-auto max-w-[1440px]"><div className="grid gap-8 border-b border-black/20 pb-10 lg:grid-cols-2"><Marker>How we work / 05</Marker><div><h2 className="text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">Less noise.<br />More next steps.</h2><p className="mt-5 max-w-lg leading-7 text-black/60">We make sure every decision has a job: attract the right people, earn confidence, or help someone take action.</p></div></div><ol className="grid divide-y divide-black/20 md:grid-cols-2 md:divide-x md:divide-y-0">{process.map(([title, copy], index) => <li key={title} className="grid gap-6 py-8 md:px-8 md:first:pl-0 md:odd:pl-0"><span className="fsg-mono text-xs text-[#ff5a1f]">0{index + 1}</span><div><h3 className="text-2xl font-extrabold tracking-[-.06em]">{title}</h3><p className="mt-3 max-w-md leading-7 text-black/60">{copy}</p></div></li>)}</ol></div></section>

    <section className="bg-[#101010] px-5 py-16 text-white lg:px-9 lg:py-24"><div className="mx-auto max-w-[1440px]"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">Proof in progress / 06</p><h2 className="max-w-4xl text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">Work that makes a local business easier to find, trust and choose.</h2></div><div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_.65fr]"><article className="border border-white/20 bg-[#f7f7f3] p-6 text-[#101010] sm:p-9"><div className="flex justify-between text-xs font-bold uppercase tracking-wider"><span>Christchurch service business</span><span>2026</span></div><div className="mt-10 grid gap-8 lg:grid-cols-[.82fr_1.18fr]"><div className="relative overflow-hidden bg-[#101010] p-5 text-white"><p className="fsg-mono text-[9px] uppercase tracking-[.14em] text-white/55">Google Maps / Clinic search</p><div className="mt-10 border-l-2 border-[#ff5a1f] pl-4"><p className="text-xs text-white/55">Before optimisation</p><p className="mt-1 text-5xl font-extrabold tracking-[-.08em]">#12</p><p className="mt-6 text-xs text-white/55">After local SEO system</p><p className="mt-1 text-5xl font-extrabold tracking-[-.08em] text-[#ff5a1f]">#3</p></div><p className="mt-10 text-xs text-white/60">↑ Google Maps visibility</p></div><div className="flex flex-col justify-end"><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff5a1f]">Visibility system</p><h3 className="mt-4 text-4xl font-extrabold leading-[.95] tracking-[-.07em] sm:text-5xl">From scattered search presence to a clearer route to enquiry.</h3></div></div><div className="mt-10 grid gap-4 border-t border-black/15 pt-5 text-sm sm:grid-cols-3"><p><strong className="block text-base">Local SEO:</strong>Rank on Maps</p><p><strong className="block text-base">Smart UX:</strong>Conversion-driven layout</p><p><strong className="block text-base">Proof:</strong>Review Automation engine</p></div></article><article className="flex min-h-96 flex-col justify-between border border-white/20 bg-[#ff5a1f] p-6 text-white sm:p-8"><span className="fsg-mono text-[10px] uppercase tracking-[.16em]">Your business / next</span><div><p className="text-6xl font-extrabold tracking-[-.1em]">★</p><h3 className="mt-5 text-3xl font-extrabold leading-none tracking-[-.07em]">The next case study can start with one honest conversation.</h3><Button className="mt-8 border-white text-white hover:bg-white hover:text-[#101010]" variant="outline">Let’s talk</Button></div></article></div></div></section>

    <section className="border-b border-black/15 px-5 py-16 lg:px-9 lg:py-24"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.75fr_1.25fr]"><Marker>Client perspective / 07</Marker><blockquote className="border-l-4 border-[#ff5a1f] pl-6 sm:pl-10"><p className="text-3xl font-semibold leading-tight tracking-[-.06em] sm:text-5xl">“The right growth plan is not about doing everything. It is about doing the important things with enough clarity to move.”</p><footer className="mt-8 text-sm"><strong>Five Star Growth</strong><span className="text-black/55"> · Christchurch, New Zealand</span></footer></blockquote></div></section>

    <PricingPacks />

    <section className="border-y border-black/15 bg-[#e7e4dd] px-5 py-16 lg:px-9 lg:py-24"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><Marker>Before we begin / 09</Marker><h2 className="mt-4 text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">A few good questions.</h2></div><div className="divide-y divide-black/20">{faqs.map(([question, answer], index) => <details key={question} className="group py-5" open={index === 0}><summary className="cursor-pointer list-none text-xl font-extrabold tracking-[-.04em]"><span className="mr-4 fsg-mono text-xs text-[#ff5a1f]">0{index + 1}</span>{question}<span className="float-right text-[#ff5a1f] group-open:rotate-45">+</span></summary><p className="ml-9 mt-4 max-w-xl leading-7 text-black/60">{answer}</p></details>)}</div></div></section>

    <section className="px-5 py-16 lg:px-9 lg:py-24"><div className="mx-auto grid max-w-[1440px] items-end gap-8 border-b border-black/20 pb-14 lg:grid-cols-[1fr_.7fr]"><div><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff5a1f]">Ready when you are / 10</p><h2 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.88] tracking-[-.08em] sm:text-7xl">Let’s make the next move count.</h2></div><div><p className="max-w-md text-lg leading-8 text-black/60">Tell us where growth feels stuck. We’ll bring a fresh, practical view of what to fix first.</p><Button className="mt-8" variant="solid">Get your growth plan</Button></div></div></section>
  </LandingMotionScope>;
}
