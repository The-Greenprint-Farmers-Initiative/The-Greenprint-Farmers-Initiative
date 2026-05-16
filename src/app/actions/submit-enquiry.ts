"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = process.env.ENQUIRY_TO_EMAIL || "info@greenprintfarmers.org";
const FROM = process.env.ENQUIRY_FROM_EMAIL || "info@greenprintfarmers.org";
const FROM_DISPLAY = `Greenprint Farmers Initiative <${FROM}>`;

export type EnquiryInput = {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  message: string;
  // Honeypot — must be empty
  website?: string;
};

export type EnquiryResult =
  | { ok: true }
  | { ok: false; error: string };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  try {
    // Spam guard — honeypot
    if (input.website && input.website.length > 0) {
      return { ok: true }; // silently accept, don't tell the bot
    }

    // Validation
    const name = (input.name || "").trim();
    const email = (input.email || "").trim();
    const message = (input.message || "").trim();
    const organization = (input.organization || "").trim();
    const role = (input.role || "").trim();

    if (!name || name.length < 2) return { ok: false, error: "Please enter your name." };
    if (!isValidEmail(email)) return { ok: false, error: "Please enter a valid email address." };
    if (!message || message.length < 10)
      return { ok: false, error: "Please include a short message (at least 10 characters)." };
    if (message.length > 5000)
      return { ok: false, error: "Message is too long — please keep it under 5,000 characters." };

    // Diagnostic: confirm API key is loaded (without logging the key)
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY missing on server");
      return { ok: false, error: "Server not configured (missing API key). Please email us directly at info@greenprintfarmers.org." };
    }

    // ── 1. Send the enquiry to the team
    const teamEmail = await resend.emails.send({
      from: FROM_DISPLAY,
      to: [TO],
      replyTo: email,
      subject: `New enquiry · ${name}${organization ? ` · ${organization}` : ""}`,
      html: enquiryEmailHtml({ name, email, organization, role, message }),
      text: enquiryEmailText({ name, email, organization, role, message }),
    });

    if (teamEmail.error) {
      console.error("Resend (team email) error:", JSON.stringify(teamEmail.error));
      const errMsg = (teamEmail.error as { message?: string })?.message || "Unknown delivery error";
      return {
        ok: false,
        error: `Delivery failed: ${errMsg}. Please email us directly at info@greenprintfarmers.org.`,
      };
    }

    // ── 2. Send a branded auto-reply to the enquirer
    await resend.emails.send({
      from: FROM_DISPLAY,
      to: [email],
      subject: "We've received your enquiry — The Greenprint Farmers Initiative",
      html: autoReplyHtml({ name }),
      text: autoReplyText({ name }),
    });

    return { ok: true };
  } catch (err) {
    console.error("submitEnquiry exception:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { ok: false, error: `Error: ${msg}. Please email us directly at info@greenprintfarmers.org.` };
  }
}

/* ──────────────────────────────────────────────────────────
   Email templates — editorial dark, simple, deliverable
   ────────────────────────────────────────────────────────── */

const SITE_URL = "https://greenprintfarmers.org";
const LOGO_URL = `${SITE_URL}/images/brand/logo-mark.png`;

function enquiryEmailHtml(d: {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:14px 0;border-bottom:1px solid #E8E2D5;width:140px;vertical-align:top;">
            <span style="display:block;font-size:10px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#A88840;">${escapeHtml(
              label,
            )}</span>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #E8E2D5;color:#1F2421;font-size:15px;line-height:1.5;">${escapeHtml(
            value,
          )}</td>
        </tr>`
      : "";

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#FAF6F0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1F2421;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6F0;padding:40px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFEF9;border:1px solid #E8E2D5;">
      <tr><td style="padding:36px 36px 0 36px;">
        <table role="presentation" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align:middle;padding-right:14px;">
              <img src="${LOGO_URL}" alt="Greenprint" width="48" height="48" style="display:block;border:0;outline:none;text-decoration:none;width:48px;height:48px;" />
            </td>
            <td style="vertical-align:middle;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;font-weight:400;color:#0A0E13;letter-spacing:0.02em;line-height:1.2;">Greenprint</div>
              <div style="font-size:9px;font-weight:600;letter-spacing:0.24em;text-transform:uppercase;color:#A88840;line-height:1.2;margin-top:3px;">Farmers Initiative</div>
            </td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:24px 36px 8px 36px;">
        <div style="font-size:10px;font-weight:600;letter-spacing:0.24em;text-transform:uppercase;color:#A88840;">New Enquiry</div>
        <h1 style="margin:14px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:400;color:#0A0E13;letter-spacing:-0.01em;">From ${escapeHtml(
          d.name,
        )}</h1>
      </td></tr>
      <tr><td style="padding:20px 36px 8px 36px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row("Name", d.name)}
          ${row("Email", d.email)}
          ${row("Organisation", d.organization)}
          ${row("Represents", d.role)}
        </table>
      </td></tr>
      <tr><td style="padding:24px 36px 8px 36px;">
        <div style="font-size:10px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#A88840;margin-bottom:12px;">Message</div>
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.6;color:#1F2421;white-space:pre-wrap;">${escapeHtml(
          d.message,
        )}</div>
      </td></tr>
      <tr><td style="padding:32px 36px 36px 36px;">
        <div style="border-top:1px solid #E8E2D5;padding-top:18px;font-size:12px;color:#7A7368;font-style:italic;font-family:Georgia,'Times New Roman',serif;">
          Reply directly to this email to respond to ${escapeHtml(d.name)} at ${escapeHtml(d.email)}.
        </div>
      </td></tr>
    </table>
    <div style="margin-top:18px;font-size:11px;color:#9A9082;letter-spacing:0.12em;">THE GREENPRINT FARMERS INITIATIVE · BORN IN NIGERIA. BUILT FOR THE AFRICAN CONTINENT.</div>
  </td></tr>
</table>
</body></html>`;
}

function enquiryEmailText(d: {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
}) {
  return `New Enquiry — The Greenprint Farmers Initiative

Name:         ${d.name}
Email:        ${d.email}
${d.organization ? `Organisation: ${d.organization}\n` : ""}${d.role ? `Represents:   ${d.role}\n` : ""}
Message:
${d.message}

—
Reply directly to this email to respond to ${d.name} at ${d.email}.
`;
}

function autoReplyHtml(d: { name: string }) {
  const firstName = d.name.split(/\s+/)[0] || d.name;
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#FAF6F0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1F2421;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6F0;padding:48px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFEF9;border:1px solid #E8E2D5;">
      <tr><td style="padding:44px 40px 0 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align:middle;padding-right:16px;">
              <img src="${LOGO_URL}" alt="Greenprint" width="56" height="56" style="display:block;border:0;outline:none;text-decoration:none;width:56px;height:56px;" />
            </td>
            <td style="vertical-align:middle;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:400;color:#0A0E13;letter-spacing:0.02em;line-height:1.2;">Greenprint</div>
              <div style="font-size:10px;font-weight:600;letter-spacing:0.24em;text-transform:uppercase;color:#A88840;line-height:1.2;margin-top:3px;">Farmers Initiative</div>
            </td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:32px 40px 16px 40px;">
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:34px;font-weight:400;line-height:1.1;color:#0A0E13;letter-spacing:-0.01em;">Thank you, ${escapeHtml(
          firstName,
        )}.</h1>
        <p style="margin:8px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-style:italic;color:#A88840;font-size:18px;">Your enquiry has been received.</p>
      </td></tr>
      <tr><td style="padding:20px 40px 8px 40px;">
        <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:1.65;color:#1F2421;">
          We have received your message and a member of the Greenprint team will respond personally within five working days.
        </p>
        <p style="margin:18px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:1.65;color:#1F2421;">
          The Greenprint Farmers Initiative is a continental programme to transform food security across Africa — beginning with seventy-two integrated agro-industrial hubs across Nigeria.
        </p>
        <p style="margin:18px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-style:italic;color:#7A7368;font-size:16px;">
          Born in Nigeria. Built for the African continent.
        </p>
      </td></tr>
      <tr><td style="padding:32px 40px 40px 40px;">
        <div style="border-top:1px solid #E8E2D5;padding-top:24px;">
          <div style="font-size:10px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#A88840;margin-bottom:14px;">Contact</div>
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:14px;color:#1F2421;line-height:1.7;">
            <tr><td>Email</td><td style="padding-left:30px;">info@greenprintfarmers.org</td></tr>
            <tr><td>Telephone</td><td style="padding-left:30px;">+234 707 918 8800 · +234 806 673 1036</td></tr>
            <tr><td style="vertical-align:top;">Headquarters</td><td style="padding-left:30px;">153 Green City Estate<br/>Gwarinpa, Abuja<br/>Nigeria</td></tr>
          </table>
        </div>
      </td></tr>
    </table>
    <div style="margin-top:20px;font-size:11px;color:#9A9082;letter-spacing:0.12em;">© ${new Date().getFullYear()} THE GREENPRINT FARMERS INITIATIVE</div>
  </td></tr>
</table>
</body></html>`;
}

function autoReplyText(d: { name: string }) {
  const firstName = d.name.split(/\s+/)[0] || d.name;
  return `Thank you, ${firstName}.

Your enquiry has been received by The Greenprint Farmers Initiative.
A member of our team will respond personally within five working days.

The Greenprint Farmers Initiative is a continental programme to transform food security across Africa — beginning with seventy-two integrated agro-industrial hubs across Nigeria.

Born in Nigeria. Built for the African continent.

—
Contact
Email:        info@greenprintfarmers.org
Telephone:    +234 707 918 8800 · +234 806 673 1036
Headquarters: 153 Green City Estate, Gwarinpa, Abuja, Nigeria
`;
}
