import { z } from 'zod';

export const enquirySchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  eventType: z.enum([
    'Destination Wedding',
    'Luxury Celebration',
    'Private Gala',
    'Bespoke Travel',
    'Corporate Event',
    'Other'
  ], { required_error: 'Please select an event type' }),
  eventDate: z.string().optional().or(z.literal('')),
  guestCount: z.string().optional().or(z.literal('')),
  destination: z.string().optional().or(z.literal('')),
  budget: z.string().optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export const validateEnquiry = (req, res, next) => {
  const result = enquirySchema.safeParse(req.body);
  
  if (!result.success) {
    const issues = result.error?.issues || result.error?.errors || [];
    const formattedErrors = issues.map(err => ({
      field: err.path.join('.'),
      message: err.message
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed for enquiry submission.',
      errors: formattedErrors
    });
  }

  req.validatedBody = result.data;
  next();
};
