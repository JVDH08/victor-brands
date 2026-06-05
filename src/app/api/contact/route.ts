import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where contact submissions are delivered
const TO_EMAIL = "victor@victorbrands.nl";
// The "from" address. Until a domain is verified on Resend, use the shared
// test sender "onboarding@resend.dev" (set CONTACT_FROM once your domain is verified,
// e.g. "Victor Brands <contact@victorbrands.nl>").
const FROM_EMAIL = process.env.CONTACT_FROM || "Victor Brands <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ── Validation ──────────────────────────────────────────────
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Vul a.u.b. een geldige naam, e-mail en bericht in." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY ontbreekt in de omgeving.");
      return NextResponse.json(
        { error: "De e-mailservice is nog niet geconfigureerd." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nieuw bericht via de website — ${name}`,
      text: [
        "Nieuw bericht via het contactformulier op victorbrands.nl:",
        "",
        `Naam:   ${name}`,
        `E-mail: ${email}`,
        "",
        "Bericht:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;color:#14213a;line-height:1.6">
          <h2 style="color:#14305f;margin:0 0 16px">Nieuw bericht via de website</h2>
          <p style="margin:0 0 4px"><strong>Naam:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 16px"><strong>E-mail:</strong>
            <a href="mailto:${escapeHtml(email)}" style="color:#2563eb">${escapeHtml(email)}</a>
          </p>
          <p style="margin:0 0 6px"><strong>Bericht:</strong></p>
          <p style="white-space:pre-wrap;background:#f6f8fc;border-radius:8px;padding:14px;margin:0">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend-fout:", error);
      return NextResponse.json(
        { error: "Het bericht kon niet verzonden worden. Probeer het later opnieuw." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Onverwachte fout in /api/contact:", err);
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
