import nodemailer from 'nodemailer';

/**
 * Creates and returns a Nodemailer transporter based on environment variables.
 * Returns null if SMTP credentials are not configured.
 */
const createTransporter = async () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : undefined;
  const port = Number(process.env.SMTP_PORT) || 587;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for port 465, false for 587
      auth: { user, pass },
      // Force IPv4 — Railway resolves smtp.gmail.com to IPv6 (2a00:1450:...)
      // but cannot bind outbound IPv6 sockets, causing EADDRNOTAVAIL.
      family: 4,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  return null;
};

/**
 * Sends confirmation email to client and notification email to the internal concierge team.
 */
export const sendEnquiryEmails = async (enquiryData) => {
  const transporter = await createTransporter();

  // HTML Template for Client Confirmation
  const clientHtml = `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f7f4ee; color: #1d1b18; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5ddd0; border-radius: 16px; padding: 36px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="text-align: center; padding-bottom: 24px; border-bottom: 1px solid #e5ddd0;">
          <h1 style="color: #b08a4a; font-size: 24px; letter-spacing: 2px; margin: 0; font-weight: 700;">SERENITY PLANNERS</h1>
          <p style="color: #756e63; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-top: 6px;">Bespoke Luxury Travel</p>
        </div>

        <!-- Greeting -->
        <div style="padding-top: 24px;">
          <h2 style="color: #1d1b18; font-size: 20px; font-weight: 600; margin: 0 0 12px 0;">Dear ${enquiryData.fullName},</h2>
          <p style="line-height: 1.6; color: #756e63; font-size: 14px; margin: 0 0 20px 0;">
            Thank you for reaching out to <strong>Serenity Planners</strong>. We have received your travel enquiry for a <strong>${enquiryData.travelType}</strong> and look forward to shaping your journey.
          </p>

          <!-- Enquiry Summary Box -->
          <div style="background-color: #fcfaf6; border: 1px solid #e5ddd0; border-left: 4px solid #b08a4a; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="color: #8f6d38; margin: 0 0 14px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Enquiry Summary</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #1d1b18;">
              <tr>
                <td style="padding: 4px 0; color: #756e63; width: 120px;"><strong>Travel Type:</strong></td>
                <td style="padding: 4px 0;">${enquiryData.travelType}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #756e63;"><strong>Destination:</strong></td>
                <td style="padding: 4px 0;">${enquiryData.destination || 'Flexible'}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #756e63;"><strong>Preferred Date:</strong></td>
                <td style="padding: 4px 0;">${enquiryData.travelDate || 'To be decided'}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #756e63;"><strong>Travelers:</strong></td>
                <td style="padding: 4px 0;">${enquiryData.travelers || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #756e63;"><strong>Budget:</strong></td>
                <td style="padding: 4px 0;">${enquiryData.budget || 'Custom Quote'}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #756e63;"><strong>Contact Phone:</strong></td>
                <td style="padding: 4px 0;">${enquiryData.phone}</td>
              </tr>
            </table>

            ${
              enquiryData.message
                ? `
              <div style="margin-top: 14px; pt-12; border-top: 1px solid #e5ddd0; padding-top: 12px;">
                <p style="margin: 0; color: #756e63; font-size: 12px; font-weight: 600;">Your Message / Request:</p>
                <p style="margin: 4px 0 0 0; color: #302d28; font-size: 13px; font-style: italic; line-height: 1.5;">"${enquiryData.message}"</p>
              </div>
            `
                : ''
            }
          </div>

          <p style="line-height: 1.6; color: #756e63; font-size: 14px; margin: 0;">
            Our lead concierge is reviewing your details and will reach out within 24 hours to schedule an initial consultation.
          </p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5ddd0; color: #9a9286; font-size: 11px;">
          <p style="margin: 0 0 4px 0;">Serenity Planners &bull; Paris &bull; Udaipur &bull; Amalfi &bull; Bali</p>
          <p style="margin: 0;">Email: concierge@serenityplanners.com</p>
        </div>
      </div>
    </div>
  `;

  // Fallback mode if SMTP credentials are missing
  if (!transporter) {
    console.log('---------------------------------------------------------');
    console.log('[Nodemailer Flow]: SMTP credentials not present in .env.');
    console.log('[Nodemailer Flow]: Simulating email transmission:');
    console.log(`  📧 To Client: ${enquiryData.email}`);
    console.log(`  📧 Subject: Your Bespoke Travel Request - Serenity Planners`);
    console.log(`  👤 Client Name: ${enquiryData.fullName}`);
    console.log(`  📞 Phone: ${enquiryData.phone}`);
    console.log(`  🗺️ Travel Type: ${enquiryData.travelType}`);
    console.log(`  📍 Destination: ${enquiryData.destination || 'N/A'}`);
    console.log(`  💬 Message: ${enquiryData.message}`);
    console.log('---------------------------------------------------------');

    return {
      success: true,
      simulated: true,
      message: 'SMTP credentials missing; email logged to console.',
    };
  }

  try {
    // 1. Verify transporter connection
    await transporter.verify();

    // 2. Send confirmation email to client
    const clientResult = await transporter.sendMail({
      from: `"Serenity Planners Concierge" <${process.env.SMTP_USER}>`,
      to: enquiryData.email,
      subject: `Your Bespoke Travel Request - Serenity Planners`,
      html: clientHtml,
    });

    console.log(`[Nodemailer Flow]: Client email sent cleanly -> ID: ${clientResult.messageId}`);

    // 3. Send notification email to team
    const notifyEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;
    if (notifyEmail) {
      const teamResult = await transporter.sendMail({
        from: `"Serenity System" <${process.env.SMTP_USER}>`,
        to: notifyEmail,
        subject: `[New Travel Inquiry] ${enquiryData.travelType} - ${enquiryData.fullName}`,
        text: `New Lead Details:
Name: ${enquiryData.fullName}
Email: ${enquiryData.email}
Phone: ${enquiryData.phone}
Travel Type: ${enquiryData.travelType}
Destination: ${enquiryData.destination || 'Flexible'}
Travel Date: ${enquiryData.travelDate || 'N/A'}
Travelers: ${enquiryData.travelers || 'N/A'}
Budget: ${enquiryData.budget || 'N/A'}
Message: ${enquiryData.message}`,
      });

      console.log(`[Nodemailer Flow]: Concierge team email sent cleanly -> ID: ${teamResult.messageId}`);
    }

    return {
      success: true,
      simulated: false,
      messageId: clientResult.messageId,
    };
  } catch (error) {
    console.error('[Nodemailer Flow Error]: Failed to send emails via SMTP:', error.message);

    // Gracefully handle SMTP failure without crashing enquiry submission
    return {
      success: false,
      simulated: false,
      error: error.message,
    };
  }
};
