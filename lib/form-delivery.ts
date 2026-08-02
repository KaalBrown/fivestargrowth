type FormValue = string | number | boolean | null | undefined;

const recipient = "hello@fivestargrowth.nz";

export async function deliverFormSubmission(subject: string, fields: Record<string, FormValue>) {
  const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      submitted_from: typeof window === "undefined" ? "Five Star Growth website" : window.location.href,
      ...fields,
    }),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok || payload?.success === false) {
    throw new Error("Form delivery failed");
  }
}

type InstantAuditReport = {
  email: string;
  website: string;
  score: number;
  performance: number;
  seo: number;
  source: "live" | "estimated" | "verified";
};

export function deliverInstantAuditReport(report: InstantAuditReport) {
  const frameName = "five-star-growth-audit-delivery";
  let frame = document.querySelector<HTMLIFrameElement>(`iframe[name="${frameName}"]`);
  if (!frame) {
    frame = document.createElement("iframe");
    frame.name = frameName;
    frame.title = "Audit report delivery";
    frame.className = "hidden";
    document.body.appendChild(frame);
  }

  const scoreLabel = report.score >= 90 ? "strong" : report.score >= 70 ? "a solid starting point" : "leaving clear opportunities on the table";
  const reportMessage = `Thanks for requesting your free Website & Local Search Health Score.\n\nYour score for ${report.website}: ${report.score}% (${scoreLabel}).\n\nYour scan checked the signals behind mobile performance, SEO readiness, and the path from a local Google search to an enquiry. When customers cannot find a business quickly—or cannot see a clear way to call, book, or request a quote—they often choose the competitor that makes the next step easier.\n\nWant a practical, human review of the biggest opportunities on your site? Request your free Local Growth Video here: https://fivestargrowth.nz/contact?reason=video-audit&utm_source=instant-audit&utm_medium=email\n\nThis is the one-off report you requested. We will not add you to an ongoing marketing list from this scan.`;
  const fields: Record<string, string> = {
    _subject: "New Five Star Growth instant website health score",
    _template: "table",
    _autoresponse: reportMessage,
    form_type: "Instant Website & Search Health Score",
    website: report.website,
    email: report.email,
    health_score: `${report.score}%`,
    performance_score: `${report.performance}%`,
    seo_score: `${report.seo}%`,
    score_source: report.source,
    submitted_from: window.location.href,
  };

  const form = document.createElement("form");
  form.action = `https://formsubmit.co/${recipient}`;
  form.method = "POST";
  form.target = frameName;
  form.className = "hidden";

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  window.setTimeout(() => form.remove(), 1000);
}
