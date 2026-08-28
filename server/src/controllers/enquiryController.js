import { sendEnquiryEmails } from '../services/emailService.js';

export const createEnquiry = async (req, res, next) => {
  try {
    const enquiryData = req.validatedBody || req.body;

    // Process email notification / logging
    const emailResult = await sendEnquiryEmails(enquiryData);

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been successfully received. Our lead concierge will contact you within 24 hours.',
      data: {
        id: `SER-${Date.now().toString(36).toUpperCase()}`,
        fullName: enquiryData.fullName,
        email: enquiryData.email,
        travelType: enquiryData.travelType,
        destination: enquiryData.destination,
        submittedAt: new Date().toISOString(),
        emailStatus: emailResult.simulated ? 'simulated' : 'sent',
      },
    });
  } catch (error) {
    next(error);
  }
};
