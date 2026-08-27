import nodemailer from 'nodemailer';

const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user, pass },
    });
  }

  return null;
};

export const sendEnquiryEmails = async (enquiryData) => {
  const transporter = createTransporter();

  const clientHtml = `
    <div style="font-family: 'Cinzel', 'Georgia', serif; background-color: #0b1320; color: #f8fafc; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #131c2e; border: 1px solid #d4af37; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <h1 style="color: #d4af37; text-align: center; font-size: 28px; letter-spacing: 2px; margin-bottom: 5px;">SERENITY PLANNERS</h1>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; letter-spacing: 3px; margin-top: 0;">BESPOKE LUXURY TRAVEL</p>
        <hr style="border: 0; border-top: 1px solid #334155; margin: 25px 0;" />
        
        <h2 style="color: #f8fafc; font-size: 20px;">Dear ${enquiryData.fullName},</h2>
        <p style="line-height: 1.6; color: #cbd5e1;">Thank you for entrusting <strong>Serenity Planners</strong> with your vision. We have received your travel inquiry for a <strong>${enquiryData.travelType}</strong>.</p>
        
        <div style="background-color: #0f172a; border-left: 3px solid #d4af37; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <h3 style="color: #d4af37; margin-top: 0; font-size: 14px; text-transform: uppercase;">Inquiry Details</h3>
          <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8; color: #cbd5e1; font-size: 14px;">
            <li><strong>Travel Type:</strong> ${enquiryData.travelType}</li>
            <li><strong>Destination:</strong> ${enquiryData.destination || 'Flexible'}</li>
            <li><strong>Preferred Date:</strong> ${enquiryData.travelDate || 'To be decided'}</li>
            <li><strong>Travelers:</strong> ${enquiryData.travelers || 'Not specified'}</li>
            <li><strong>Estimated Budget:</strong> ${enquiryData.budget || 'Custom Quote'}</li>
          </ul>
        </div>
        
        <p style="line-height: 1.6; color: #cbd5e1;">Our dedicated travel advisor is reviewing your request and will reach out within 24 hours to begin planning your journey.</p>
        
        <div style="text-align: center; margin-top: 35px; padding-top: 20px; border-top: 1px solid #1e293b; color: #64748b; font-size: 12px;">
          <p style="margin: 5px 0;">Serenity Planners &bull; Paris &bull; Udaipur &bull; Amalfi &bull; Bali</p>
          <p style="margin: 5px 0;">Direct: concierge@serenityplanners.com</p>
        </div>
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('---------------------------------------------------------');
    console.log('[EmailService]: SMTP not configured. Logging client email preview:');
    console.log(`To: ${enquiryData.email}`);
    console.log(`Subject: Your Travel Inquiry with Serenity Planners - ${enquiryData.travelType}`);
    console.log(`Payload:`, enquiryData);
    console.log('---------------------------------------------------------');
    return { success: true, simulated: true };
  }

  // Send confirmation to client
  await transporter.sendMail({
    from: `"Serenity Planners Concierge" <${process.env.SMTP_USER}>`,
    to: enquiryData.email,
    subject: `Your Bespoke Travel Request - Serenity Planners`,
    html: clientHtml,
  });

  // Send notification to team
  const notifyEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;
  if (notifyEmail) {
    await transporter.sendMail({
      from: `"Serenity System" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      subject: `[New Inquiry] ${enquiryData.travelType} - ${enquiryData.fullName}`,
      text: `New Lead Details:\nName: ${enquiryData.fullName}\nEmail: ${enquiryData.email}\nPhone: ${enquiryData.phone}\nTravel Type: ${enquiryData.travelType}\nDestination: ${enquiryData.destination}\nTravel Date: ${enquiryData.travelDate}\nTravelers: ${enquiryData.travelers}\nBudget: ${enquiryData.budget}\nMessage: ${enquiryData.message}`,
    });
  }

  return { success: true, simulated: false };
};
