import { Resend } from 'resend';

/**
 * Email Service for Serenity Planners
 *
 * Uses Resend (HTTP API) in production — works on Railway, Vercel, etc.
 * because it sends via HTTPS (port 443), not SMTP (port 587/465) which
 * cloud platforms typically block.
 *
 * Fallback: If RESEND_API_KEY is not set, emails are logged to console.
 */

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    return new Resend(apiKey);
  }
  return null;
};

/**
 * Builds the HTML email template for client confirmation.
 */
const buildClientHtml = (enquiryData) => `
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
              <td style="padding: 4px 0; color: #756e63; width: 130px;"><strong>Travel Type:</strong></td>
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
            <div style="margin-top: 14px; border-top: 1px solid #e5ddd0; padding-top: 12px;">
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

/**
 * Builds plain-text team notification email.
 */
const buildTeamText = (enquiryData) => `New Lead Details:
Name: ${enquiryData.fullName}
Email: ${enquiryData.email}
Phone: ${enquiryData.phone}
Travel Type: ${enquiryData.travelType}
Destination: ${enquiryData.destination || 'Flexible'}
Travel Date: ${enquiryData.travelDate || 'N/A'}
Travelers: ${enquiryData.travelers || 'N/A'}
Budget: ${enquiryData.budget || 'N/A'}
Message: ${enquiryData.message}`;

/**
 * Sends confirmation email to client and notification email to team.
 */
export const sendEnquiryEmails = async (enquiryData) => {
  const resend = getResendClient();

  // Fallback mode: if no RESEND_API_KEY, log to console
  if (!resend) {
    console.log('---------------------------------------------------------');
    console.log('[EmailService]: RESEND_API_KEY not configured.');
    console.log('[EmailService]: Simulating email transmission:');
    console.log(`  📧 To Client: ${enquiryData.email}`);
    console.log(`  👤 Client Name: ${enquiryData.fullName}`);
    console.log(`  📞 Phone: ${enquiryData.phone}`);
    console.log(`  🗺️  Travel Type: ${enquiryData.travelType}`);
    console.log(`  📍 Destination: ${enquiryData.destination || 'N/A'}`);
    console.log(`  💬 Message: ${enquiryData.message}`);
    console.log('---------------------------------------------------------');

    return {
      success: true,
      simulated: true,
      message: 'RESEND_API_KEY missing; email logged to console.',
    };
  }

  // Determine sender email
  // If you have a verified domain on Resend, use it.
  // Otherwise, Resend provides a free onboarding sender: onboarding@resend.dev
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Serenity Planners <onboarding@resend.dev>';
  const notifyEmail = process.env.NOTIFICATION_EMAIL || process.env.RESEND_FROM_EMAIL;

  try {
    // 1. Send confirmation email to client
    const clientResult = await resend.emails.send({
      from: fromEmail,
      to: [enquiryData.email],
      subject: 'Your Bespoke Travel Request - Serenity Planners',
      html: buildClientHtml(enquiryData),
    });

    if (clientResult.error) {
      console.error('[EmailService]: Resend error (client email):', clientResult.error);
      return {
        success: false,
        simulated: false,
        error: clientResult.error.message || 'Failed to send client email',
      };
    }

    console.log(`[EmailService]: Client email sent via Resend -> ID: ${clientResult.data?.id}`);

    // 2. Send notification email to team
    if (notifyEmail) {
      const teamResult = await resend.emails.send({
        from: fromEmail,
        to: [notifyEmail],
        subject: `[New Travel Inquiry] ${enquiryData.travelType} - ${enquiryData.fullName}`,
        html: `<pre style="font-family: monospace; font-size: 13px; line-height: 1.6;">${buildTeamText(enquiryData)}</pre>`,
      });

      if (teamResult.error) {
        console.error('[EmailService]: Resend error (team email):', teamResult.error);
      } else {
        console.log(`[EmailService]: Team notification sent via Resend -> ID: ${teamResult.data?.id}`);
      }
    }

    return {
      success: true,
      simulated: false,
      messageId: clientResult.data?.id,
    };
  } catch (error) {
    console.error('[EmailService Error]: Failed to send emails:', error.message);

    return {
      success: false,
      simulated: false,
      error: error.message,
    };
  }
};
