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
