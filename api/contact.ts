// Vercel Serverless Function: Corporate Inquiry / RFQ Email Dispatch
const DESTINATION_EMAIL = 'samuelassefa075@gmail.com';
const DEFAULT_FROM = 'Asterra Corporate <onboarding@resend.dev>';

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

  // Honeypot anti-spam check: Return success to mislead bots without sending email
  if (body.honeypot && String(body.honeypot).trim().length > 0) {
    return res.status(200).json({
      success: true,
      referenceNumber: `AST-RFQ-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  }

  // Server-side validation
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const organization = typeof body.organization === 'string' ? body.organization.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const department = typeof body.department === 'string' ? body.department.trim() : 'Procurement & Sales';
  const jobTitle = typeof body.jobTitle === 'string' ? body.jobTitle.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const country = typeof body.country === 'string' ? body.country.trim() : 'Ethiopia';
  const preferredDivision = typeof body.preferredDivision === 'string' ? body.preferredDivision.trim() : '';
  const estimatedVolume = typeof body.estimatedVolume === 'string' ? body.estimatedVolume.trim() : '';
  const timeline = typeof body.timeline === 'string' ? body.timeline.trim() : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim() : '';

  const errors: string[] = [];
  if (!fullName) errors.push('Full legal name is required.');
  if (!organization) errors.push('Company / organization is required.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('A valid corporate email address is required.');
  }
  if (!message) errors.push('Scope of inquiry / BOQ summary is required.');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, error: errors.join(' ') });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[API/Contact] Missing RESEND_API_KEY environment variable');
    return res.status(500).json({
      success: false,
      error: 'Email delivery service is currently unconfigured. Please contact system administration.',
    });
  }

  const referenceNumber = `AST-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
  const submissionDate = new Date().toUTCString();
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;
  const emailSubject = `Asterra Corporate Inquiry — ${referenceNumber} — ${fullName} (${organization})`;

  const textContent = `
==================================================
ASTERRA INDUSTRIAL MANUFACTURING — CORPORATE INQUIRY
==================================================

Reference Number: ${referenceNumber}
Submitted: ${submissionDate}
Directorate: ${department}

CONTACT INFORMATION:
- Officer / Name: ${fullName}
- Company / Organization: ${organization}
- Designation / Title: ${jobTitle || 'N/A'}
- Corporate Email: ${email}
- Direct Phone: ${phone || 'N/A'}
- Country / Region: ${country}

${
  preferredDivision || estimatedVolume || timeline
    ? `PROCUREMENT SCOPE SPECIFICATIONS:
- Target Division: ${preferredDivision || 'N/A'}
- Estimated Volume / Tonnage: ${estimatedVolume || 'N/A'}
- Delivery Timeline: ${timeline || 'N/A'}
`
    : ''
}
INQUIRY DETAILS:
- Subject / Tender Ref: ${subject || 'N/A'}
- Scope of Inquiry / BOQ Summary:
${message}

==================================================
This inquiry was submitted via asterragroup.com corporate portal.
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
        <span style="font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #38a384; font-weight: bold; display: block;">ASTERRA CORPORATE RFQ DESK</span>
        <h1 style="font-family: Georgia, serif; color: #ffffff; font-size: 22px; margin: 6px 0 0 0; font-weight: normal;">Corporate Inquiry Transmitted</h1>
        <span style="font-family: monospace; font-size: 12px; color: #a1b0a8; display: block; margin-top: 4px;">Ref: <strong>${referenceNumber}</strong> | ${submissionDate}</span>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 32px;">
        <h2 style="font-family: Georgia, serif; color: #0b1a13; font-size: 16px; margin: 0 0 16px 0; border-bottom: 1px solid #eae8e1; padding-bottom: 8px;">
          Primary Stakeholder Details
        </h2>
        <table width="100%" border="0" cellspacing="0" cellpadding="6" style="font-size: 13px;">
          <tr>
            <td width="35%" style="color: #636b66; font-weight: 600;">Department:</td>
            <td style="color: #0b1a13; font-weight: bold;">${department}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Full Legal Name:</td>
            <td style="color: #0b1a13;">${fullName}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Company / Entity:</td>
            <td style="color: #0b1a13; font-weight: bold;">${organization}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Job Title:</td>
            <td style="color: #0b1a13;">${jobTitle || 'N/A'}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Corporate Email:</td>
            <td style="color: #1a5344;"><a href="mailto:${email}" style="color: #1a5344; font-weight: bold; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Telephone:</td>
            <td style="color: #0b1a13;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Jurisdiction / Country:</td>
            <td style="color: #0b1a13;">${country}</td>
          </tr>
        </table>

        ${
          preferredDivision || estimatedVolume || timeline
            ? `
        <h2 style="font-family: Georgia, serif; color: #0b1a13; font-size: 16px; margin: 24px 0 16px 0; border-bottom: 1px solid #eae8e1; padding-bottom: 8px;">
          Procurement Scope & Specifications
        </h2>
        <table width="100%" border="0" cellspacing="0" cellpadding="6" style="font-size: 13px;">
          <tr>
            <td width="35%" style="color: #636b66; font-weight: 600;">Target Division:</td>
            <td style="color: #0b1a13;">${preferredDivision || 'N/A'}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Volume / Tonnage:</td>
            <td style="color: #0b1a13;">${estimatedVolume || 'N/A'}</td>
          </tr>
          <tr>
            <td style="color: #636b66; font-weight: 600;">Target Timeline:</td>
            <td style="color: #0b1a13;">${timeline || 'N/A'}</td>
          </tr>
        </table>
        `
            : ''
        }

        <h2 style="font-family: Georgia, serif; color: #0b1a13; font-size: 16px; margin: 24px 0 16px 0; border-bottom: 1px solid #eae8e1; padding-bottom: 8px;">
          Inquiry Scope & BOQ Summary
        </h2>
        ${subject ? `<div style="font-size: 13px; margin-bottom: 10px; color: #0b1a13;"><strong>Subject:</strong> ${subject}</div>` : ''}
        <div style="background-color: #f7f6f2; border-left: 3px solid #1a5344; padding: 14px 16px; font-size: 13px; line-height: 1.6; color: #1e2522; white-space: pre-wrap;">${message}</div>

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #eae8e1; font-size: 11px; color: #88928c; font-family: monospace;">
          Routed through Asterra Professional Presence • Enterprise Communications Dispatch
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
      console.error('[API/Contact] Resend error response:', resendResponse.status, resendResult);
      return res.status(502).json({
        success: false,
        error: 'Unable to deliver message through email service. Please try again later.',
      });
    }

    return res.status(200).json({
      success: true,
      referenceNumber,
    });
  } catch (err: any) {
    console.error('[API/Contact] Network or execution error:', err?.message || err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while dispatching your request.',
    });
  }
}
