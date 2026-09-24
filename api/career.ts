// Vercel Serverless Function: Career Application Dossier Dispatch
const DESTINATION_EMAIL = 'samuelassefa075@gmail.com';
const DEFAULT_FROM = 'Asterra Careers <onboarding@resend.dev>';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    if (res.setHeader) res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ success: false, error: 'Invalid JSON payload' });
    }
  }
  body = body || {};

  // Honeypot anti-spam check
  if (body.honeypot && String(body.honeypot).trim().length > 0) {
    return res.status(200).json({ success: true });
  }

  // Server-side validation
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const linkedIn = typeof body.linkedIn === 'string' ? body.linkedIn.trim() : '';
  const coverNote = typeof body.coverNote === 'string' ? body.coverNote.trim() : '';
  const jobTitle = typeof body.jobTitle === 'string' ? body.jobTitle.trim() : 'General Application';
  const department = typeof body.department === 'string' ? body.department.trim() : '';
  const division = typeof body.division === 'string' ? body.division.trim() : '';
  const slug = typeof body.slug === 'string' ? body.slug.trim() : '';

  const errors: string[] = [];
  if (!fullName) errors.push('Full legal name is required.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('A valid email address is required.');
  }
  if (!phone) errors.push('Direct telephone number is required.');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, error: errors.join(' ') });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[API/Career] Missing RESEND_API_KEY environment variable');
    return res.status(500).json({
      success: false,
      error: 'Application intake service is currently unconfigured. Please contact system administration.',
    });
  }

  const submissionDate = new Date().toUTCString();
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;
  const emailSubject = `Asterra Career Application — ${jobTitle} — ${fullName}`;

  const textContent = `
==================================================
ASTERRA HUMAN CAPITAL & TALENT — CANDIDATE APPLICATION
==================================================

Position Applied For: ${jobTitle}
${department ? `Department: ${department}\n` : ''}${division ? `Division: ${division}\n` : ''}${slug ? `Job Slug: ${slug}\n` : ''}Submitted: ${submissionDate}

CANDIDATE DETAILS:
- Full Legal Name: ${fullName}
- Email: ${email}
- Direct Telephone: ${phone}
- LinkedIn / Portfolio URL: ${linkedIn || 'N/A'}

RELEVANT INDUSTRIAL EXPERIENCE / COVER SUMMARY:
${coverNote || 'No summary provided.'}

==================================================
This application was submitted via asterragroup.com career portal.
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f6f2; margin: 0; padding: 24px; color: #1e2522;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dcdad2;">
    <tr>
      <td style="background-color: #0b1a13; padding: 24px 32px; border-bottom: 3px solid #1a5344;">
        <span style="font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #38a384; font-weight: bold; display: block;">ASTERRA TALENT DIRECTABILITY</span>
        <h1 style="font-family: Georgia, serif; color: #ffffff; font-size: 22px; margin: 6px 0 0 0; font-weight: normal;">Candidate Dossier Submitted</h1>
        <span style="font-family: monospace; font-size: 12px; color: #a1b0a8; display: block; margin-top: 4px;">Role: <strong>${jobTitle}</strong> ${department ? `(${department})` : ''} | ${submissionDate}</span>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 32px;">
        <h2 style="font-family: Georgia, serif; color: #0b1a13; font-size: 16px; margin: 0 0 16px 0; border-bottom: 1px solid #eae8e1; padding-bottom: 8px;">
          Candidate Details
        </h2>
        <table width="100%" border="0" cellspacing="0" cellpadding="6" style="font-size: 13px;">
          <tr>
            <td width="35%" style="color: #636b66; font-weight: 600;">Position:</td>
            <td style="color: #0b1a13; font-weight: bold;">${jobTitle}</td>
          </tr>
          ${
            division
              ? `<tr><td style="color: #636b66; font-weight: 600;">Division:</td><td style="color: #0b1a13;">${division}</td></tr>`
              : ''
          }
          ${
            department
              ? `<tr><td style="color: #636b66; font-weight: 600;">Department:</td><td style="color: #0b1a13;">${department}</td></tr>`
              : ''
          }
          <tr>
            <td style="color: #636b66; font-weight: 600;">Applicant Name:</td>
            <td style="color: #0b1a13; font-weight: bold;">${fullName}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Corporate Email:</td>
            <td style="color: #1a5344;"><a href="mailto:${email}" style="color: #1a5344; font-weight: bold; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Direct Phone:</td>
            <td style="color: #0b1a13;">${phone}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">LinkedIn / Portfolio:</td>
            <td style="color: #0b1a13;">${
              linkedIn
                ? `<a href="${linkedIn}" target="_blank" rel="noopener noreferrer" style="color: #1a5344; text-decoration: underline;">${linkedIn}</a>`
                : 'N/A'
            }</td>
          </tr>
        </table>

        <h2 style="font-family: Georgia, serif; color: #0b1a13; font-size: 16px; margin: 24px 0 16px 0; border-bottom: 1px solid #eae8e1; padding-bottom: 8px;">
          Industrial Experience / Cover Summary
        </h2>
        <div style="background-color: #f7f6f2; border-left: 3px solid #1a5344; padding: 14px 16px; font-size: 13px; line-height: 1.6; color: #1e2522; white-space: pre-wrap;">${
          coverNote || 'No summary provided.'
        }</div>

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #eae8e1; font-size: 11px; color: #88928c; font-family: monospace;">
          Transmitted to Talent Directorship • Asterra Professional Presence
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [DESTINATION_EMAIL],
        reply_to: email,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      }),
    });

    const resendResult = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      console.error('[API/Career] Resend error response:', resendResponse.status, resendResult);
      return res.status(502).json({
        success: false,
        error: 'Unable to deliver application through email service. Please try again later.',
      });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('[API/Career] Network or execution error:', err?.message || err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while dispatching your application.',
    });
  }
}
