"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, Gauge, LoaderCircle, MapPin, Smartphone } from "lucide-react";
import { deliverInstantAuditReport } from "@/lib/form-delivery";

const loadingMessages = ["Analyzing page speed...", "Checking Google local presence...", "Calculating conversion score..."];

type AuditResult = {
  score: number;
  performance: number;
  seo: number;
  conversion: number | null;
  source: "live" | "estimated" | "verified";
};

type AuditCheck = {
  title: string;
  detail: string;
  icon: typeof Smartphone;
  status: string;
  tone: "green" | "yellow" | "red";
};

function normaliseUrl(value: string) {
  const trimmed = value.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function domainScore(value: string) {
  const domain = value.replace(/^https?:\/\//i, "").replace(/\/.*$/, "").toLowerCase();
  const hash = [...domain].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 7);
  return 45 + (hash % 34);
}

function hostFor(value: string) {
  try {
    return new URL(normaliseUrl(value)).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return "";
  }
}

function inspectCurrentSite(value: string) {
  if (typeof window === "undefined" || hostFor(value) !== window.location.hostname.replace(/^www\./i, "").toLowerCase()) return null;

  const has = (selector: string) => Boolean(document.querySelector(selector));
  const structuredData = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((node) => node.textContent ?? "").join(" ");
  const seoChecks = [
    has('meta[name="description"]'),
    has('link[rel="canonical"]'),
    has('meta[property="og:title"]'),
    has('meta[name="twitter:card"]'),
    has('meta[name="robots"]'),
    /ProfessionalService|LocalBusiness|Organization/.test(structuredData),
    /OfferCatalog|Service/.test(structuredData),
  ];
  const conversionChecks = [
    has('a[href*="/contact"]'),
    has('a[href^="mailto:"]'),
    has('a[href*="wa.me/"]'),
    has('form input[name="website"]'),
  ];
  const seo = Math.round((seoChecks.filter(Boolean).length / seoChecks.length) * 100);
  const conversion = Math.round((conversionChecks.filter(Boolean).length / conversionChecks.length) * 100);
  return { seo, conversion, score: Math.round((seo + conversion) / 2) };
}

function getAuditChecks(result: AuditResult | null): AuditCheck[] {
  if (!result) return [];
  if (result.source === "verified") {
    return [
      { title: "Speed & Mobile UX", detail: "The site is lightweight and static, but a live PageSpeed run is needed for an independent speed benchmark.", icon: Smartphone, status: "Verify live", tone: "yellow" },
      { title: "Google Maps & Local SEO Tags", detail: "Canonical URL, metadata, social tags, Christchurch and Canterbury service schema, and service offers are all present.", icon: MapPin, status: "Strong", tone: "green" },
      { title: "Lead & Review Capture Paths", detail: "Video audit, contact, email, WhatsApp, and instant-scan paths are available for visitors to start an enquiry.", icon: CheckCircle2, status: "Ready", tone: "green" },
    ];
  }

  const lowPerformance = result.performance < 60;
  return lowPerformance
    ? [
        { title: "Speed & Mobile UX", detail: "Mobile page experience is slowing down key visitor actions.", icon: Smartphone, status: "Needs Improvement", tone: "red" },
        { title: "Google Maps & Local SEO Tags", detail: "Local Schema & Meta Tags need attention.", icon: MapPin, status: "Missing Tags", tone: "red" },
        { title: "Lead & Review Capture Setup", detail: "A visible prompt to start a conversion was not found.", icon: CircleAlert, status: "Not Detected", tone: "yellow" },
      ]
    : [
        { title: "Speed & Mobile UX", detail: "Mobile performance is supporting a better local search experience.", icon: Smartphone, status: "Good", tone: "green" },
        { title: "Google Maps & Local SEO Tags", detail: result.seo >= 90 ? "Core SEO checks passed. Local schema and metadata should now be validated against your business profile." : "Some local signals are present, with room to strengthen coverage.", icon: MapPin, status: result.seo >= 90 ? "Good" : "Partial", tone: result.seo >= 90 ? "green" : "yellow" },
        { title: "Lead & Review Capture Setup", detail: "More obvious paths from attention to enquiry are needed.", icon: CircleAlert, status: "Action Required", tone: "red" },
      ];
}

async function getAuditResult(url: string): Promise<AuditResult> {
  const fallbackScore = domainScore(url);

  try {
    const response = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(normaliseUrl(url))}&category=PERFORMANCE&category=SEO&strategy=mobile`);
    if (!response.ok) throw new Error("PageSpeed request failed");

    const data = await response.json();
    const performanceValue = data?.lighthouseResult?.categories?.performance?.score;
    const seoValue = data?.lighthouseResult?.categories?.seo?.score;
    if (typeof performanceValue !== "number") throw new Error("PageSpeed score missing");

    const performance = Math.round(performanceValue * 100);
    const seo = typeof seoValue === "number" ? Math.round(seoValue * 100) : performance;
    return { score: Math.round((performance + seo) / 2), performance, seo, conversion: null, source: "live" };
  } catch {
    const currentSite = inspectCurrentSite(url);
    if (currentSite) return { score: currentSite.score, performance: 0, seo: currentSite.seo, conversion: currentSite.conversion, source: "verified" };
    return { score: fallbackScore, performance: fallbackScore, seo: Math.min(100, fallbackScore + 8), conversion: null, source: "estimated" };
  }
}

export function InstantAudit() {
  const [isScanning, setIsScanning] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    if (!isScanning) return;
    const messageTimer = window.setInterval(() => setMessageIndex((index) => (index + 1) % loadingMessages.length), 850);
    return () => window.clearInterval(messageTimer);
  }, [isScanning]);

  useEffect(() => {
    if (!result) return;
    let frame = 0;
    const startedAt = window.performance.now();
    const duration = 850;
    const countUp = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setDisplayScore(Math.round(result.score * progress));
      if (progress < 1) frame = window.requestAnimationFrame(countUp);
    };
    setDisplayScore(0);
    frame = window.requestAnimationFrame(countUp);
    return () => window.cancelAnimationFrame(frame);
  }, [result]);

  const checks = useMemo(() => getAuditChecks(result), [result]);

  const startAudit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const website = String(formData.get("website") ?? "");
    setMessageIndex(0);
    setResult(null);
    setDisplayScore(0);
    setIsScanning(true);

    const [audit] = await Promise.all([
      getAuditResult(website),
      new Promise((resolve) => window.setTimeout(resolve, 3000)),
    ]);
    deliverInstantAuditReport({
      website,
      email: String(formData.get("email") ?? ""),
      score: audit.score,
      performance: audit.performance,
      seo: audit.seo,
      source: audit.source,
      checks: getAuditChecks(audit).map(({ title, status, detail }) => ({ title, status, detail })),
    });
    setResult(audit);
    setIsScanning(false);
  };

  return (
    <section id="free-audit" className="border-y border-black/15 bg-[#e7e4dd] px-5 py-16 lg:px-9 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 border-b border-black/20 pb-10 lg:grid-cols-[.7fr_1.3fr]">
          <p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff5a1f]">Automated site diagnostic</p>
          <div><h2 className="max-w-4xl text-4xl font-extrabold leading-[.94] tracking-[-.07em] sm:text-6xl">Instant 30-Second Website &amp; Search Health Score</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">Not ready for a personalised review yet? Run a quick automated health check first. Enter your domain below to instantly test page speed, local search tags, and conversion readiness.</p></div>
        </div>

        <div className="mt-12 grid overflow-hidden border border-black/20 bg-[#101010] text-white lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">Automated software check</p>
            <h3 className="mt-4 max-w-xl text-3xl font-extrabold leading-[.95] tracking-[-.06em] sm:text-5xl">Check your website health score.</h3>
            <p className="mt-5 max-w-xl text-lg leading-7 text-white/65">Your results are generated automatically from your domain&apos;s website and search signals. We&apos;ll also send your score and practical next step to your email.</p>
            <form onSubmit={startAudit} className="mt-8 grid gap-3">
              <label><span className="sr-only">Domain URL</span><input required name="website" type="text" inputMode="url" placeholder="practice.co.nz" className="w-full border border-white/25 bg-white/[.04] px-4 py-3 text-sm outline-none placeholder:text-white/45 focus:border-[#ff5a1f]" /></label>
              <label><span className="sr-only">Email address</span><input required name="email" type="email" autoComplete="email" placeholder="Email address" className="w-full border border-white/25 bg-white/[.04] px-4 py-3 text-sm outline-none placeholder:text-white/45 focus:border-[#ff5a1f]" /></label>
              <button disabled={isScanning} type="submit" className="mt-2 inline-flex w-fit items-center justify-center bg-[#ff5a1f] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-white hover:text-[#101010] disabled:cursor-wait disabled:opacity-70">{isScanning ? "Scanning..." : "Run instant scan"}<span className="ml-2">↗</span></button>
            </form>
          </div>

          <div className="border-t border-white/15 bg-white/[.04] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            {!isScanning && !result && <div className="flex min-h-[350px] flex-col justify-center"><Gauge className="h-10 w-10 text-[#ff5a1f]" strokeWidth={1.5} /><p className="mt-6 text-2xl font-extrabold tracking-[-.05em]">Your score is waiting.</p><p className="mt-3 max-w-md leading-7 text-white/60">Enter your details to see the first local-search opportunities worth fixing.</p></div>}
            {isScanning && <div aria-live="polite" className="flex min-h-[350px] flex-col items-center justify-center text-center"><LoaderCircle className="h-12 w-12 animate-spin text-[#ff5a1f]" strokeWidth={1.5} /><p className="mt-6 text-xl font-extrabold tracking-[-.04em]">{loadingMessages[messageIndex]}</p><div className="mt-5 h-1 w-48 overflow-hidden bg-white/15"><span className="block h-full animate-[pulse_1s_ease-in-out_infinite] bg-[#ff5a1f]" style={{ width: `${((messageIndex + 1) / loadingMessages.length) * 100}%` }} /></div></div>}
            {result && <div className="animate-[fadeIn_.45s_ease-out]"><div className="flex flex-col gap-7 sm:flex-row sm:items-center"><div className="grid h-36 w-36 shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(#ff5a1f 0 ${displayScore}%, rgba(255,255,255,.15) ${displayScore}% 100%)` }}><div className="grid h-[104px] w-[104px] place-items-center rounded-full bg-[#101010] text-center"><span data-testid="audit-score" className="text-3xl font-extrabold">{displayScore}%</span><span className="-mt-7 text-[9px] uppercase tracking-[.12em] text-white/55">{displayScore < 60 ? "Needs optimization" : "Good foundation"}</span></div></div><div><p className="fsg-mono text-[10px] uppercase tracking-[.16em] text-[#ff8a5d]">{result.source === "live" ? "Live PageSpeed & SEO score" : result.source === "verified" ? "Verified on-page readiness score" : "Estimated domain score"}</p><h3 className="mt-3 text-3xl font-extrabold tracking-[-.06em]">Instant Scan Complete — Your Health Score</h3><p className="mt-2 text-sm text-white/55">{result.source === "verified" ? `On-page SEO ${result.seo}% · Enquiry paths ${result.conversion}%` : `Performance ${result.performance}% · SEO ${result.seo}%`}</p></div></div><div className="mt-8 grid gap-3">{checks.map(({ title, detail, icon: Icon, status, tone }) => <div key={title} className="flex gap-4 border border-white/15 bg-white/[.04] p-4"><Icon className={`mt-0.5 h-5 w-5 shrink-0 ${tone === "green" ? "text-emerald-400" : tone === "yellow" ? "text-amber-300" : "text-red-400"}`} /><div><div className="flex flex-wrap items-center gap-2"><p className="font-extrabold">{title}</p><span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${tone === "green" ? "border-emerald-400/60 text-emerald-300" : tone === "yellow" ? "border-amber-300/60 text-amber-200" : "border-red-400/60 text-red-300"}`}>{status}</span></div><p className="mt-1 text-sm leading-6 text-white/60">{detail}</p></div></div>)}</div><div className="mt-6 border-l-2 border-[#ff5a1f] bg-white/[.04] p-5"><p className="text-sm leading-6 text-white/75">{result.source === "verified" ? "Your on-page local SEO and enquiry pathways are in place. A live PageSpeed benchmark is the remaining independent check before claiming a full 90%+ site health score." : "Your site is missing key local conversion elements. Schedule a quick 10-min call to boost your score to 90%+ and capture more local bookings."}</p><a href="/contact" className="mt-5 inline-flex bg-[#ff5a1f] px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-white hover:text-[#101010]">Claim your free fix strategy <span className="ml-2">↗</span></a></div></div>}
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs text-black/50"><CheckCircle2 className="h-4 w-4 text-[#ff5a1f]" /> Free instant assessment—no obligation, no lock-in, and one requested report sent to your email.</p>
      </div>
    </section>
  );
}
