import Link from "next/link";
import { ArrowRight, BellRing, Database, Play, ScanLine, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";

type AssetSlotProps = {
  asset: string;
  title: string;
  description: string;
  video?: boolean;
  className?: string;
};

function AssetSlot({ asset, title, description, video = false, className = "" }: AssetSlotProps) {
  return (
    <div data-asset={asset} className={`relative isolate grid min-h-72 overflow-hidden rounded-3xl border border-orange-500/40 bg-[#111] p-6 shadow-[0_0_44px_rgba(255,107,0,.12)] sm:p-8 ${className}`}>
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="relative flex items-center justify-between gap-4"><span className="rounded-full border border-orange-400/50 bg-orange-500/10 px-3 py-1.5 font-mono text-[10px] font-bold tracking-[.12em] text-orange-300">[ASSET: {asset}]</span>{video && <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange-500 text-black shadow-[0_0_24px_rgba(255,107,0,.45)]"><Play size={18} fill="currentColor" /></span>}</div>
      <div className="relative my-auto max-w-md"><p className="text-2xl font-black tracking-[-.04em] text-white">{title}</p><p className="mt-3 leading-relaxed text-zinc-400">{description}</p></div>
      <div className="relative flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-zinc-500"><span className="h-2 w-2 rounded-full bg-orange-400" /> Replace with {video ? "live demonstration video" : "real platform screenshot"}</div>
    </div>
  );
}

const questions = [
  "What if you could drive foot traffic on quieter days with a single phone notification?",
  "What if you could automatically win back customers who stopped coming back?",
  "What if you could generate 5-star Google reviews on complete autopilot without awkwardly asking?",
  "What if you could do all of this with zero 40MB app downloads or queue delays?",
];

const pillars = [
  { icon: ScanLine, title: "1-Tap Counter Stand", copy: "Zero app downloads. A quick counter tap makes joining effortless." },
  { icon: BellRing, title: "Direct Lock-Screen Push Notifications", copy: "Send a one-click broadcast directly to the people who already know you." },
  { icon: Star, title: "Automated Google Review Engine", copy: "Ask at the right time, automatically—without giving your team another job." },
  { icon: Database, title: "100% Merchant-Owned Customer Database", copy: "Build a valuable customer relationship your shop controls—not a social platform." },
];

const demoHref = "/contact?reason=loyalty-demo&cta=loyalty-program";

export function LoyaltyProgramLanding() {
  return (
    <main className="overflow-hidden bg-[#000] text-white selection:bg-orange-500 selection:text-black">
      <section className="relative isolate border-b border-white/10 bg-[radial-gradient(circle_at_82%_18%,rgba(255,107,0,.22),transparent_25rem),radial-gradient(circle_at_15%_60%,rgba(255,107,0,.11),transparent_30rem)] px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-500/60 bg-orange-500/10 px-3 py-2 text-[10px] font-black uppercase tracking-[.14em] text-orange-300 sm:text-xs"><Zap size={14} /> Direct customer retention engine</p>
              <h1 className="mt-7 text-4xl font-black leading-[.98] tracking-[-.065em] text-white sm:text-6xl lg:text-7xl">Posting on Facebook and Instagram to reach your existing customers is like <span className="text-orange-500">talking to a tree.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">Bypass social media algorithms. Connect directly to your regulars&apos; lock screens and inboxes with a single tap at the counter.</p>
              <Link href={demoHref} className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-black tracking-wide text-black shadow-[0_0_32px_rgba(255,107,0,.34)] transition hover:scale-[1.02] hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-black">ASK FOR A FREE DEMO TODAY <ArrowRight size={18} /></Link>
              <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400"><ShieldCheck size={16} className="text-orange-400" /> See the live system before you decide.</p>
            </div>
            <AssetSlot asset="HERO_3D_STAND_TAP_VIDEO" title="The counter tap that starts the relationship." description="Video container: a hand makes one quick tap on the NFC counter stand, followed by an orange confirmation glow." video className="min-h-[25rem] lg:min-h-[34rem]" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">The opportunity</p><h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-.05em] sm:text-5xl">What if your next regular visit was already one tap away?</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{questions.map((question, index) => <article key={question} className="group flex gap-4 rounded-2xl border border-white/10 bg-[#111] p-5 transition hover:border-orange-500/55 hover:bg-[#15100d] sm:p-6"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-500 text-sm font-black text-black">0{index + 1}</span><p className="text-lg font-bold leading-snug text-white">{question}</p></article>)}</div><div className="mt-10"><AssetSlot asset="BEFORE_VS_AFTER_INFOGRAPHIC" title="Stop renting your customers’ attention." description="Comparison diagram: Social Media / Paper Cards versus FiveStar 1-Tap Direct Lock-Screen Access." className="min-h-[22rem]" /></div></div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">Live platform proof</p><h2 className="mt-4 text-3xl font-black tracking-[-.05em] sm:text-5xl">Real platform results &amp; live interface.</h2><p className="mt-5 text-lg leading-relaxed text-zinc-400">No vague promises. See exactly what your customer sees, and what your team can measure.</p></div><div className="mt-10 grid gap-6 lg:grid-cols-2"><figure><AssetSlot asset="REAL_CUSTOMER_WALLET_SCREENSHOT" title="305 points. One clear next step." description="Screenshot showing the point confirmation screen and the Write a Google Review button." /><figcaption className="mt-4 text-sm leading-relaxed text-zinc-400">What your customer sees: 1-Tap Wallet Pass &amp; Automated Google Review Prompt</figcaption></figure><figure><AssetSlot asset="REAL_MERCHANT_DASHBOARD_ANALYTICS" title="Your shop data, live." description="Screenshot showing Confirmed Sales, Active Vouchers, and Review Requests in the merchant dashboard." /><figcaption className="mt-4 text-sm leading-relaxed text-zinc-400">What you see: Live Real-Time Merchant Dashboard &amp; Campaign Tracking</figcaption></figure></div><figure className="mt-8"><AssetSlot asset="WALLET_PUSH_NOTIFICATION_DEMO_VIDEO" title="A live lock-screen update in one second." description="Video showing an Apple or Google Wallet push notification appearing on a customer phone." video className="min-h-[25rem]" /><figcaption className="mt-4 text-center text-sm text-zinc-400">Watch: Pushing a live lock-screen update directly to customer phones in 1 second</figcaption></figure></div></section>

      <section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">Built for repeat business</p><h2 className="mt-4 max-w-4xl text-3xl font-black tracking-[-.05em] sm:text-5xl">Four tools. One direct line back to your customers.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{pillars.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-2xl border border-white/10 bg-[#111] p-6 transition hover:-translate-y-1 hover:border-orange-500/55 hover:shadow-[0_0_32px_rgba(255,107,0,.12)]"><Icon size={28} className="text-orange-400" /><h3 className="mt-7 text-xl font-black leading-tight">{title}</h3><p className="mt-3 leading-relaxed text-zinc-400">{copy}</p></article>)}</div></div></section>

      <section className="relative border-t border-orange-500/30 bg-[radial-gradient(circle_at_50%_100%,rgba(255,107,0,.26),transparent_31rem)] px-5 py-20 text-center sm:px-8 sm:py-28"><div className="mx-auto max-w-3xl"><Sparkles className="mx-auto text-orange-400" /><h2 className="mt-5 text-4xl font-black leading-tight tracking-[-.06em] sm:text-6xl">We are not just talk. Let us show you exactly how it works for your shop.</h2><p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">Request a free demo today and see how easy it is to turn walk-ins into repeat regulars.</p><Link href={demoHref} className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-black tracking-wide text-black shadow-[0_0_34px_rgba(255,107,0,.38)] transition hover:scale-[1.02] hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-black">REQUEST YOUR FREE 5-MINUTE DEMO <ArrowRight size={18} /></Link><p className="mt-5 text-sm text-zinc-500">A quick walkthrough. No app download. No pressure.</p></div></section>
    </main>
  );
}
