import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ["name", "email", "phone", "businessName", "location", "website"];
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === "") {
        return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 });
      }
    }

    // Honeypot
    if (body.companyWebsite && String(body.companyWebsite).trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const submissionId = `GL-${Date.now()}`;
    const timestamp = new Date().toLocaleString();

    const toEmail = process.env.AUDIT_TO_EMAIL || "zakkboullion@gmail.com";

    // ===== INTERNAL EMAIL =====
    const { data, error } = await resend.emails.send({
      from: "Gulfline AI <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Automation Audit Request – ${body.businessName}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background:#f6f8fb; padding:24px;">
          <div style="max-width:640px; margin:0 auto;">
            <div style="background:#0b1220; border-radius:14px 14px 0 0; padding:18px 20px;">
              <div style="display:flex; align-items:center; gap:12px;">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2011%2C%202026%2C%2010_19_11%20PM-KlXEnpo5vr6ZnUp9TeHMVMKAOtU2RQ.png" alt="Gulfline AI" style="width:36px; height:36px; border-radius:6px;" />
                <div>
                  <div style="color:#ffffff; font-weight:700; font-size:16px; line-height:1;">Gulfline AI</div>
                  <div style="color:#cbd5e1; font-size:12px; margin-top:4px;">New Automation Audit Submission</div>
                </div>
              </div>
            </div>

            <div style="background:#ffffff; border:1px solid #e5e7eb; border-top:0; border-radius:0 0 14px 14px; padding:20px;">
              <div style="display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                <div style="color:#111827; font-weight:700; font-size:14px;">Submission ID: ${submissionId}</div>
                <div style="color:#6b7280; font-size:12px;">Received: ${timestamp}</div>
              </div>

              <div style="margin-top:16px; border-top:1px solid #eef2f7;"></div>

              <table style="width:100%; border-collapse:collapse; margin-top:16px;">
                <tr>
                  <td style="padding:8px 0; color:#6b7280; width:160px;">Name</td>
                  <td style="padding:8px 0; color:#111827; font-weight:600;">${body.name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6b7280;">Email</td>
                  <td style="padding:8px 0; color:#111827; font-weight:600;">
                    <a href="mailto:${body.email}" style="color:#1d4ed8; text-decoration:none;">${body.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6b7280;">Phone</td>
                  <td style="padding:8px 0; color:#111827; font-weight:600;">${body.phone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6b7280;">Business</td>
                  <td style="padding:8px 0; color:#111827; font-weight:600;">${body.businessName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6b7280;">Location</td>
                  <td style="padding:8px 0; color:#111827; font-weight:600;">${body.location}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6b7280;">Industry</td>
                  <td style="padding:8px 0; color:#111827; font-weight:600;">${body.industry || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6b7280;">Website</td>
                  <td style="padding:8px 0; color:#111827; font-weight:600;">
                    <a href="${body.website}" target="_blank" style="color:#1d4ed8; text-decoration:none;">${body.website}</a>
                  </td>
                </tr>
              </table>

              <div style="margin-top:16px; padding:14px 14px; background:#f8fafc; border:1px solid #eef2f7; border-radius:12px;">
                <div style="color:#111827; font-weight:700; font-size:13px; margin-bottom:8px;">Automation Goals</div>
                <div style="color:#111827; font-size:13px; line-height:1.5; white-space:pre-wrap;">${body.message || "Not provided"}</div>
              </div>

              <div style="margin-top:18px; display:flex; gap:10px; flex-wrap:wrap;">
                <a href="mailto:${body.email}" style="background:#1d4ed8; color:#ffffff; text-decoration:none; padding:10px 12px; border-radius:10px; font-weight:700; font-size:13px;">Reply to Lead</a>
                <a href="tel:${body.phone}" style="background:#111827; color:#ffffff; text-decoration:none; padding:10px 12px; border-radius:10px; font-weight:700; font-size:13px;">Call</a>
              </div>

              <div style="margin-top:16px; color:#94a3b8; font-size:11px;">
                Gulfline AI • Lake Charles, Louisiana
              </div>
            </div>
          </div>
        </div>
      `,

    });

    console.log("RESEND_INTERNAL_RESULT", { data, error });

    if (error) {
      return NextResponse.json({ error: "Failed to send internal email" }, { status: 500 });
    }

    // ===== CLIENT CONFIRMATION EMAIL =====
    await resend.emails.send({
      from: "Gulfline AI <onboarding@resend.dev>",
      to: body.email,
      subject: "We Received Your Automation Audit Request",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background:#f6f8fb; padding:24px;">
          <div style="max-width:640px; margin:0 auto;">
            <div style="background:#0b1220; border-radius:14px 14px 0 0; padding:18px 20px;">
              <div style="display:flex; align-items:center; gap:12px;">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2011%2C%202026%2C%2010_19_11%20PM-KlXEnpo5vr6ZnUp9TeHMVMKAOtU2RQ.png" alt="Gulfline AI" style="width:36px; height:36px; border-radius:6px;" />
                <div>
                  <div style="color:#ffffff; font-weight:700; font-size:16px; line-height:1;">Gulfline AI</div>
                  <div style="color:#cbd5e1; font-size:12px; margin-top:4px;">Automation Audit Request Confirmed</div>
                </div>
              </div>
            </div>

            <div style="background:#ffffff; border:1px solid #e5e7eb; border-top:0; border-radius:0 0 14px 14px; padding:20px;">
              <h2 style="margin:0; color:#111827; font-size:18px;">Thanks, ${body.name} — we’ve got it.</h2>
              <p style="margin:10px 0 0; color:#4b5563; font-size:14px; line-height:1.6;">
                We received your automation audit request for <strong>${body.businessName}</strong>.
                Our team will review it and reach out within <strong>24 hours</strong> to schedule your audit session.
              </p>

              <div style="margin-top:16px; padding:14px 14px; background:#f8fafc; border:1px solid #eef2f7; border-radius:12px;">
                <div style="color:#111827; font-weight:700; font-size:13px; margin-bottom:6px;">What happens next</div>
                <ul style="margin:0; padding-left:18px; color:#111827; font-size:13px; line-height:1.6;">
                  <li>We review your submission</li>
                  <li>We contact you by email or phone to schedule</li>
                  <li>You get a tailored audit + demo</li>
                </ul>
              </div>

              <p style="margin:14px 0 0; color:#6b7280; font-size:12px; line-height:1.6;">
                If you need to update anything, just reply to this email.
              </p>

              <div style="margin-top:16px; border-top:1px solid #eef2f7; padding-top:14px; color:#94a3b8; font-size:11px;">
                Gulfline AI • Lake Charles, Louisiana
              </div>
            </div>
          </div>
        </div>
      `,

    });
    // ===== GOOGLE SHEETS BACKUP LOG =====
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (sheetsUrl) {
      fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp,
          submissionId,
          name: body.name,
          email: body.email,
          phone: body.phone,
          businessName: body.businessName,
          location: body.location,
          industry: body.industry || "",
          website: body.website,
          message: body.message || "",
          source: "website",
        }),
      })
        .then(async (r) => {
          const t = await r.text().catch(() => "");
          console.log("SHEETS_LOG_RESULT", { status: r.status, body: t });
        })
        .catch((err) => console.log("SHEETS_LOG_ERROR", String(err)));
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("AUDIT_ERROR", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
